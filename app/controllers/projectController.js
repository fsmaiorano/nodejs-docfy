const { Project } = require('../models');

module.exports = {

  async add(req, res, next) {
    try {
      const project = await Project.create({
        ...req.body,
        UserId: req.session.user.id,
      });
      req.flash('success', 'Projeto criado com sucesso');
      // res.redirect(`/app/dashboard`);
      return res.render('dashboard/index');
    }
    catch (error) {
      return next(error);
    }
  }

}
