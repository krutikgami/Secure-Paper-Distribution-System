import { api_error } from "../utils/api_error.js";
import { api_response } from "../utils/api_response.js";
import { async_handler } from "../utils/async_handler.js";
import { User } from "../models/User.models.js";

const UserSignup = async_handler(async (req, res) => {
    const { username, email, password, confirmpassword , role } = req.body;

    console.log("email is", email);

    if ([username, email, password, confirmpassword , role].some((field) => !field || field.trim() === "")) {
        throw new api_error(400, "All fields are required");
    }else if(password != confirmpassword){
        throw new api_error(400, "Passwords do not match");
    }

    const existUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existUser) {
        throw new api_error(400, "User already exists");
    }

    const user = await User.create({ username, email, password,confirmpassword,role });

    const createdUser = await User.findById(user._id).select("-password");
    if (!createdUser) {
        throw new api_error(400, "User not created");
    }

    res.status(200).json(new api_response(200, "User created successfully", createdUser));
});




const UserLogin = async_handler(async (req, res) => {
    const { username, email, password} = req.body;
    console.log("email", email);

    if (!username && !email) {
        throw new api_error(400, "Username or Email not found");
    }

    const user = await User.findOne({
        $or: [{ username }, { email }]
    });

    if (!user) {
        throw new api_error(400, "User not Found");
    }

    const ispasswordValid = await user.ispasswordCorrect(password);
    if (!ispasswordValid) {
        throw new api_error(400, "Password is not valid");
    }

    const loggedInUser = await User.findById(user._id).select("-password");

    return res.status(200).json(new api_response(200, "User LoggedIn successfully", { user: loggedInUser }));
});

const userFetchData = async_handler(async (req, res) => {
    const user = await User.find(); // Exclude password field

  return res.status(200).json(new api_response(200, "User fetched successfully", user));
});

export { UserLogin, UserSignup, userFetchData};
