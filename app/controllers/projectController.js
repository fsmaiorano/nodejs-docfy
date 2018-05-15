const { Project, Document } = require('../models');

module.exports = {

  async add(req, res, next) {
    try {
      await Project.create({
        ...req.body,
        UserId: req.session.user.id,
      });
      req.flash('success', 'Projeto criado com sucesso');
      return res.redirect('/');
    } catch (error) {
      return next(error);
    }
  },

  async show(req, res, next) {
    try {
      const selectedProject = parseInt(req.params.projectId);
      const project = await Project.findOne({
        include: [Document],
        where: {
          id: selectedProject,
        },
      });

      const documents = project.Documents.filter(d => d.ProjectId === selectedProject);

      const activeProject = req.params.projectId;

      return res.render('project/index', { project, documents, activeProject });
    } catch (err) {
      return next(err);
    }
  },

};
