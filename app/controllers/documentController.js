const { Document } = require('../models');

module.exports = {

  async show(req, res, next) {
    try {
      const { projectId, documentId } = req.params;
      let x = 1;
    } catch (error) {
      return next(error);
    }
  },

};

