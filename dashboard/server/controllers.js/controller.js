let users = [];

const signupUser = (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const existingUser = users.find(user => user.email === email);
    if(existingUser) {
        return res.status(400).
    }
}