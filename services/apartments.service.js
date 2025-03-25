const mockData = require('../helpers/apartments-mockdata');

function _generateId() {
    const crypto = require("crypto");
    return crypto.randomBytes(16).toString("hex");
}

async function create(apartment) {
    const newApartment = { id: _generateId(), ...apartment };
    mockData.apartments.push(newApartment);

    return newApartment;
}

async function find({ searchString = '', page = 1, perPage = Number.MAX_SAFE_INTEGER }) {
    searchString = searchString?.toLowerCase();
    const searchResult = mockData.apartments.filter(ap =>
        ap.description?.toLowerCase().includes(searchString)
    );

    return {
        items: searchResult.slice((page - 1) * perPage, page * perPage),
        count: searchResult.length,
    };
}

async function findById(id) {
    return mockData.apartments.find(ap => ap.id === id);
}

async function update(apartmentId, apartmentData) {
    const index = mockData.apartments.findIndex(ap => ap.id === apartmentId);

    if (index === -1) return;

    const updatedApartment = { ...mockData.apartments[index], ...apartmentData, id: apartmentId };

    mockData.apartments[index] = updatedApartment;

    return updatedApartment;
}

async function remove(id) {
    mockData.apartments = mockData.apartments.filter(ap => ap.id !== id);
}

module.exports = {
    create,
    find,
    findById,
    update,
    remove,
};
