// GhumteHaii/Backend/models/User.js

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Ensure email is unique
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);
export default User;
