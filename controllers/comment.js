const models = require('../models');

module.exports = {
    getAll: (req, res, next) => {
        models.Comment.find()
            .then((comments) => res.send(comments))
            .catch(next)
    },

    post: (req, res, next) => {
        const { text } = req.body;

        models.Comment.create({ text }).then((createdItem) => {
            res.send(createdItem);
        })
    },

    answer: (req, res, next) => {
        const { answer } = req.body;

        models.Comment.findByIdAndUpdate(req.query.id, { answer: answer })
            .then((answer) => res.send(answer))
            .catch(next)
    }
}