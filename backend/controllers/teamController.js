import TeamMember from "../models/TeamMember.js";

// Get all team members
export const getTeamMembers = async (req, res) => {
  try {
    const team = await TeamMember.find();
    res.status(200).json(team);
  } catch (error) {
    res.status(500).json({ message: "Error fetching team members", error });
  }
};

// Add a new team member
export const createTeamMember = async (req, res) => {
  try {
    const newMember = new TeamMember(req.body);
    await newMember.save();
    res.status(201).json(newMember);
  } catch (error) {
    res.status(500).json({ message: "Error adding team member", error });
  }
};
