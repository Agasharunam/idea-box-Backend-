const express = require("express");
const router = express.Router();
const Idea = require("../models/Idea");

// Create a new idea
router.post("/", async (req, res) => {
  const { title, description, status } = req.body;

  try {
    const newIdea = new Idea({ title, description, status });
    await newIdea.save();
    res.status(201).json(newIdea);
  } catch (error) {
    res.status(500).json({ message: "Failed to add idea", error });
  }
});


router.get("/", async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.status(200).json(ideas);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch ideas", error });
  }
});


router.put("/:id", async (req, res) => {
  const { title, description, status } = req.body;

  try {
    const updatedIdea = await Idea.findByIdAndUpdate(
      req.params.id,
      { title, description, status },
      { new: true }
    );

    if (!updatedIdea) {
      return res.status(404).json({ message: "Idea not found" });
    }

    res.status(200).json(updatedIdea);
  } catch (error) {
    res.status(500).json({ message: "Failed to update idea", error });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    const deletedIdea = await Idea.findByIdAndDelete(req.params.id);

    if (!deletedIdea) {
      return res.status(404).json({ message: "Idea not found" });
    }

    res.status(200).json({ message: "Idea deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete idea", error });
  }
});

module.exports = router;
