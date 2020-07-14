const models = require('../models');
const config = require('../config/config');
const { validationResult } = require('express-validator');

module.exports = {
    get: {

    },

    post: {
        create: (req, res, next) => {

            const { title, description } = req.body;
            console.log(title + description)

            const createdAt = new Date();

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                res.send({
                    message: errors.array()[0].msg,
                    oldInput: req.body
                });
            }
            models.Post.create({ title, description, createdAt, creator: req.user.id }).then((createdItem) => {
                res.send(createdItem);
            })
        }


        /*
        edit: (req, res, next) => {

            const { wikiId } = req.params;
            const { title, description } = req.body;

            models.Wiki.findByIdAndUpdate(wikiId, { title, description }).then((updatedWiki) => {
                res.redirect(`/wiki/view/${wikiId}`);
            });
        }*/
    }
};