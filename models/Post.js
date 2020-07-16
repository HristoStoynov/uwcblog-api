const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId, Date } = Schema.Types;

const postSchema = new Schema({

    title: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },

    description: {
        type: String,
        required: true,
        minlength: 20
    },

    imageUrl: {
        type: String,
        required: true
    },

    createdAt: {
        type: String,
        required: true
    },

    comments: [{
        type: ObjectId,
        ref: 'Comment'
    }],

    creator: {
        type: ObjectId,
        required: true
    }

});

module.exports = new Model('Post', postSchema);