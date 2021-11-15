const Pet = require('../models/pet.model');

module.exports = {
    createPet: (req, res) => {
        Pet.create(req.body)
            .then((newPet) => {
                res.json(newPet);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    getOnePet: (req, res) => {
        Pet.findById({ _id: req.params._id })
            .then((onePet) => {
                res.json(onePet);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    getAllPets: (req, res) => {
        Pet.find({})
            .collation({ locale: 'en', strength: 2 })
            .sort({ petName: 1 })
            .then((allPets) => {
                res.json(allPets);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    deletePet: (req, res) => {
        Pet.deleteOne({ _id: req.params._id })
            .then((deletedPet) => {
                res.json(deletedPet);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    editPet: (req, res) => {
        Pet.findByIdAndUpdate({ _id: req.params._id }, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updatedPet) => {
                res.json(updatedPet);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    likePet: (req, res) => {
        Pet.findOneAndUpdate({ _id: req.params._id }, { $inc: { likes: 1 } })
            .then((likedPet) => {
                res.json(likedPet)
            })
            .catch((err) => {
                res.json(err)
            });
    },
};
