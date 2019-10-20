const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: String,
    levels: [{
        title: String,
        frequency: Number,
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
}, {
    toJSON: {
        virtuals: true,
    },
});

module.exports = mongoose.model('Task', TaskSchema);