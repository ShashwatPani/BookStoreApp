// apply.model.js
import mongoose from "mongoose";

const applySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    primaryEducation: {
        type: String,
        required: true
    },
    secondaryEducation: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    ethnicity: {
        type: String,
        required: true
    },
    workedWithUs: {
        type: String,
        required: true
    },
    referral: String,
    resume: {
        data: Buffer, // Store resume as buffer data
        contentType: String // Specify content type (e.g., application/pdf)
    }
});

const Apply = mongoose.model("Apply", applySchema);

export default Apply;
