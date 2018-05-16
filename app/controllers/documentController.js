const { Project, Document } = require('../models');

module.exports = {

  async show(req, res, next) {
    try {
      const { projectId, documentId } = req.params;

      const project = await Project.findOne({
        include: [Document],
        where: {
          id: projectId,
        },
      });

      const documents = project.Documents.filter(d => d.ProjectId === parseInt(req.params.projectId));
      const selectedDocument = documents.filter(d => d.id === parseInt(documentId));

      return res.render('project/show', {
        documents,
        project,
        activeProject: parseInt(projectId),
        activeDocument: parseInt(documentId),
        currentDocument: selectedDocument[0],
      });
    } catch (error) {
      return next(error);
    }
  },

};

