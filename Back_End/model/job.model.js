import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    position: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    requirements: { type: String, required: true },
    posted: { type: Date, required: true }
});

const Job = mongoose.model('Job', jobSchema);

export default Job;
