const EditUser = async (id) => {
  try {
    await axios.edit(`http://localhost:5000/users/${id}`);
    getUsers();
  } catch (error) {
    console.log(error);
  }
};
