const mongoose = require ('mongoose');
const ContactSchema = new mongoose.Schema ({
    phone_numbers: {
        type: [String]
    },
    last_name: {
        type: String,
        required:true
    },
    first_name: {
        type: String,
        required:true
    }
});

module.exports = mongoose.model ('Contacts', ContactSchema);