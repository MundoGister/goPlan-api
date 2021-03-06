
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    eventType: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: false
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    photoLocation: {
        type: String,
        required: false
    },
    extras: {
        _3_ds_required: Boolean,
        staff_notes: String,
    },
    rating: {
        num_ratings: Number,
        average: Number,
        hide: Boolean
    },
    price: {
        type: String,
        required: false
    },
    price_info: {
        currency: {
            type: String
        },
        amount: {
            type: Number
        },
        type: {
            type: String
        }
    },
    multiple_days: {
        type: Boolean,
        required: false,
        default: false
    },
    multiple_sessions: {
        type: Boolean,
        required: false,
        default: true
    },
    first_active_session_date: {
        type: Date,
        required: false
    },
    last_active_session_date: {
        type: Date,
        required: false
    },
    cover_image: {
        type: String,
        required: false
    },
    share_message: {
        type: String,
        required: false
    }


});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;