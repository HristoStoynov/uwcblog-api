const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId, Date } = Schema.Types;

const commentSchema = new Schema({

    text: {
        type: String,
        required: true,
        minlength: 5
    },

    createdAt: {
        type: Date,
        required: true
    },

    creator: {
        type: ObjectId,
        required: true
    }

});

module.exports = new Model('Comment', commentSchema);