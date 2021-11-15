const PetController = require('../controllers/pet.controller');

module.exports = (app) => {
    app.post('/api/pet', PetController.createPet);
    app.get('/api/pets', PetController.getAllPets);
    app.get('/api/pet/:_id', PetController.getOnePet);
    app.put('/api/pet/:_id', PetController.editPet);
    app.delete('/api/pet/:_id', PetController.deletePet);
    app.put('/api/like/:_id', PetController.likePet);
};
