const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Post = new Schema({
    login: {
        type: String
    },
    title: {
        type: String
    },
    content: {
        type: String
    }
});

module.exports = mongoose.model('Post', Post);