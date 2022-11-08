const mongoose = require('mongoose');

const contractSchema = mongoose.Schema({
    apply_name: {
        type: mongoose.Schema.Types.ObjectId,
    },
    offer_name: {
        type: mongoose.Schema.Types.ObjectId,
    },
    image_apply: {
        type: String
    },
    image_offer: {
        type: String
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'posts',
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

exports.Contract = mongoose.model('contracts', contractSchema);