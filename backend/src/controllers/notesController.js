import Note from "../models/notesModel.js";

export async function getAllNotes(_, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    if (!notes || notes.length === 0) {
      return res.status(404).json({ message: "No notes found" });
    }
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getNoteById(req, res) {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({ message: "note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    console.error("Error fetching note by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = await new Note({
      title,
      content,
    }).save();
    if (!newNote) {
      return res.status(404).json({ message: "Failed to create note" });
    }
    res
      .status(201)
      .json({ message: "note created successfully!", note: newNote });
  } catch (error) {
    console.error("Error creating note:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateNote(req, res) {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updateNote = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true },
    );
    if (!updateNote) {
      return res.status(404).json({ message: "note not found" });
    }
    res.status(200).json({
      message: `note with id ${id} updated successfully!`,
      note: updateNote,
    });
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteNote(req, res) {
  try {
    const { id } = req.params;
    await Note.findByIdAndDelete(id);
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) {
      return res.status(404).json({ message: "note not found" });
    }
    res.status(200).json({
      message: `note with id ${id} deleted successfully!`,
    });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
