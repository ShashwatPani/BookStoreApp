import Apply from "../model/apply.model.js";

export const submitApplication = async (req, res) => {
  try {
    const {
      name,
      primaryEducation,
      secondaryEducation,
      college,
      gender,
      ethnicity,
      workedWithUs,
      referral,
      resume,
    } = req.body;

    const newApplication = new Apply({
      name,
      primaryEducation,
      secondaryEducation,
      college,
      gender,
      ethnicity,
      workedWithUs,
      referral,
      resume,
    });

    await newApplication.save();
    res.status(201).json({ message: "Application submitted successfully" });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
