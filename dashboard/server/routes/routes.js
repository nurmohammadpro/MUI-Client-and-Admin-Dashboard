import express from "express";

const router = express.Router();

const users = [
  {
    id: "1",
    name: "Jackson Hinkle",
    email: "jackson@demo.com",
    password: "123456",
  },
  {
    id: "2",
    name: "Ahmed Halabi",
    email: "ahmed@demo.com",
    password: "123456",
  },
];

router.post("/signin", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (usr) => usr.email === email && usr.password === password
  );

  if (user) {
    res.json({ message: "Signed In", user });
  } else {
    res.status(401).json({ message: "Wrong credential" });
  }
});

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  const userExisted = users.find((user) => user.email === email);
  if (userExisted) {
    return res.status(400).json({ message: "You have already signed up!" });
  }

  const newUser = {
    id: (users.length + 1).toString(),
    name,
    email,
    password,
  };

  users.push(newUser);
  res.status(201).json({ message: "You have successfully signed up" });
});

export default router;
