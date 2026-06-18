import mongoose from 'mongoose';

const FlightSchema = new mongoose.Schema({
    flightNumber: {
        type: String,
        required: true,
        unique: true
    },
    airline: {
        type: String,
        default: 'Pacific Star Airlines'
    },
    origin: {
        city: String,
        airport: String,
        code: String
    },
    destination: {
        city: String,
        airport: String,
        code: String
    },
    departureTime: {
        type: Date,
        required: true
    },
    arrivalTime: {
        type: Date,
        required: true
    }
})