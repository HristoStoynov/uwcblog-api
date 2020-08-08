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

    creator: {
        type: ObjectId,
        required: true
    },

    answer: {
        type: String
    }

});

module.exports = new Model('Comment', commentSchema);