const mongoose = require('mongoose');

//add filtros de expressão regular 
    //depois de feito o frontend
const TaskSchema = new mongoose.Schema({
    title: String,
    //limite de tasks
        // e pra levels na mesma task
    toleranceDefault: Number,
    toleranceNow: Number,
    levels: [{
        title: String,
        frequency: Number,
        locked: Boolean,
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