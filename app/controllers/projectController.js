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
      const project = await Project.findOne({
        include: [Document],
        where: {
          UserId: req.session.user.id,
        },
      });

      const activeProject = req.params.projectId;

      return res.render('project/index', { project, activeProject });
    } catch (err) {
      return next(err);
    }
  },

};
