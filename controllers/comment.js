const models = require('../models');

module.exports = {
    getAll: (req, res, next) => {
        models.Comment.find()
            .then((comments) => res.send(comments))
            .catch(next)
    },

    post: (req, res, next) => {
        const { text, creator } = req.body;

        models.Post.create({ text, creator }).then((createdItem) => {
            res.send(createdItem);
        })
    }
}