const { User } = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {

    signin(req, res) {
        return res.render('auth/signin');
    },

}