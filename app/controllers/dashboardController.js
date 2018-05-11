const { Project, Document } = require('../models');

module.exports = {

  async index(req, res, next) {
    try {
      const projects = await Project.findAll({
        include: [Document],
        where: {
          UserId: req.session.user.id,
        },
      });
      return res.render('dashboard/index', { projects, user: req.session.user });
    } catch (error) {
      return next(error);
    }
  },

};
