const models = require('../models');

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
        },

        delete: (req, res, next) => {
            const { userId } = req.body;

            models.Post.findById(req.query.id)
                .then(post => {
                    if (post.creator == userId) {
                        try {
                            models.Post.findByIdAndDelete(post._id)
                                .then(() => {
                                    res.sendStatus(201)
                                })
                        } catch (err) {
                            console.log(err)
                        }
                    }
                })
                .catch(next)
        },

        edit: (req, res, next) => {

            const { title, description, imageUrl, createdAt, creator } = req.body;

            models.Post.findById(req.query.id)
                .then((post) => {
                    if (creator == post.creator) {
                        models.Post.findOneAndUpdate({ _id: req.query.id }, {
                            title: title,
                            description: description,
                            imageUrl: imageUrl,
                            createdAt: createdAt
                        })
                            .then(val => {
                                res.sendStatus(201)
                            })
                            .catch(next)
                    }
                })
                .catch(next)
        }
    }
};