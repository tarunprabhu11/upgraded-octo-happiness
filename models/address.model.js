const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Address', addressSchema);