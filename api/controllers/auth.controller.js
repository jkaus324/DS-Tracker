import User from "../models/user.model.js";

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    try {

        const userFind = await User.findOne({ email: email });
        if (userFind == null) {
            const user = await User.create({ username, email, password });
            res.json({ success: true, message: "User successfully created" });
        } else {
            console.log("User already exist");
            res.json({ success: false, message: "User already exist" });
        }
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: "Something went Wrong!!", error: err.message });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userFind = await User.findOne({ email: email });

        if (userFind) {
            if (userFind.password === password) {
                const userId = userFind._id;
                res.json({ success: true, message: "Successfully logged in", id: userId });
            } else {
                res.json({ success: false, message: "Wrong password" });
            }
        } else {
            res.json({ success: false, message: "User not found" });
        }
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: "Something went Wrong", error: err.message });
    }
}