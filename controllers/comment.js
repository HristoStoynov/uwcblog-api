const models = require('../models');

module.exports = {
    getAll: (req, res, next) => {
        models.Comment.find()
            .then((comments) => res.send(comments))
            .catch(next)
    },

    post: (req, res, next) => {
        const { text, creator } = req.body;

        models.Comment.create({ text, creator }).then((createdItem) => {
            res.send(createdItem);
        })
    }
}