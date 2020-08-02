const models = require('../models');
const config = require('../config/config');
const { validationResult } = require('express-validator');

module.exports = {
    get: {
        all: (req, res, next) => {
            models.Post.find()
                .then((posts) => res.send(posts))
                .catch(next)
        },

        one: (req, res, next) => {
            models.Post.findById(req.query.id)
                .then((post) => res.send(post))
                .catch(next)
        },
    },

    post: {
        create: (req, res, next) => {

            const { title, description, imageUrl, createdAt, creator } = req.body;

            models.Post.create({ title, description, imageUrl, createdAt, creator }).then((createdItem) => {
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