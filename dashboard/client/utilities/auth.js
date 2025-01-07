import axios from "axios";

const signinUser = async (email, password) => {
  try {
    const res = await axios.post("api/auth/signin", {
      email,
      password,
    });

    localStorage.setItem("user", JSON.stringify(res.data.user));
  } catch (error) {
    console.log(error);
  }
};

const signupUser = async (firstName, lastName, email, password) => {
  try {
    const res = await axios.post("/api/auth/signup", {
      firstName,
      lastName,
      email,
      password,
    });

    localStorage.setItem("user", JSON.stringify(res.data.user));
  } catch (error) {
    console.log(error);
  }
};

const signoutUser = () => {
  localStorage.removeItem("user");
};

const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export { getUser, signinUser, signoutUser, signupUser };
