const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            minlength: [3, 'Name must be 3 characters minimum.'],
            unique: [true, 'Name already exists.'],
        },
        type: {
            type: String,
            required: [true, 'Type of pet required.'],
            minlength: [3, 'Type must be 3 characters minimum.'],
        },
        description: {
            type: String,
            required: [true, 'Pet description required.'],
            minlength: [3, 'Description must be 3 characters minimum.'],
        },
        skill1: {
            type: String,
        },
        skill2: {
            type: String,
        },
        skill3: {
            type: String,
        },
        likes: {
            type: Number,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Pet', PetSchema);
