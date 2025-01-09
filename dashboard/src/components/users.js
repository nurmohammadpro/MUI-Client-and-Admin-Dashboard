const users = [];

const saveUser = (newUser) => {
  users.push(newUser);
};

const getUserByEmail = (email) => {
  return users.find((user) => user.email === email);
};

export { getUserByEmail, saveUser, users };
