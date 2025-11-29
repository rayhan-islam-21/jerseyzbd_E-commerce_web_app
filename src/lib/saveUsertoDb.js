import api from "./axios";

const saveUserToDB = async (user) => {
  try {
    await api.post("/users", {
      name: user.displayName || "No Name",
      email: user.email,
      uid: user.uid,
    });
  } catch (err) {
    console.error("Axios error:", err);
    throw err;
  }
};

export default saveUserToDB;
