import instance from ".";

const getAllNotes = async () => {
  try {
    const { data } = await instance.get("/notes");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getNote = async (noteId) => {
  try {
    const { data } = await instance.get(`/notes/${noteId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const createNote = async (noteInfo) => {
  try {
    console.log(`note Info is before `, noteInfo);
    const { data } = await instance.post("/notes", noteInfo);
    console.log(`note Info is `, noteInfo);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const updateNote = async (noteInfo) => {
  try {
    const { data } = await instance.put(`/notes/${noteInfo._id}`, noteInfo);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const deleteNote = async (noteId) => {
  try {
    const { data } = await instance.delete(`/notes/${noteId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllNotes, createNote, updateNote, deleteNote, getNote };
