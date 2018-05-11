const { Project } = require('../models');

module.exports = {

  async add(req, res, next) {
    try {
      const project = await Project.create({
        ...req.body,
        UserId: req.session.user.id,
      });
      req.flash('success', 'Projeto criado com sucesso');
      return res.redirect(`/`);
    }
    catch (error) {
      return next(error);
    }
  }

}
