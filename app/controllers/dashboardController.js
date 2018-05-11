const { Projects, Document } = require('../models');

module.exports = {

  async index(req, res, next) {
    try {
      const projects = await Projects.findAll({
        include: [Document],
        where: {
          UserId: req.session.user.id,
        },
      });
      return res.render('dashboard/index', { projects });
    } catch (error) {
      return next(error);
    }
  },

};
