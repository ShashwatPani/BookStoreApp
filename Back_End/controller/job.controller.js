// controllers/jobController.js
import Job from "../model/job.model.js";

export const getJob = async (req, res) => {
    try {
        const job = await Job.find();
        res.status(200).json(job);
    } catch (error) {
        console.error("Error fetching jobs:", error);
        res.status(500).json(error);
    }
};
