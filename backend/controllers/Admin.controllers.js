import { api_error } from "../utils/api_error.js";
import { api_response } from "../utils/api_response.js";
import { async_handler } from "../utils/async_handler.js";
import { User } from "../models/User.models.js";

const AdminSignin = async_handler(async (req, res) => {
    const { username,email, password,role } = req.body;
    console.log("email is", email);

    if (!username &&!email && !password && !role) {
        throw new api_error(400, "Username or Email not found");
    }
    else if( role != "admin"){
       throw new api_error(400, "Only admin can login");
    }

    const admin = await User.findOne({
        $or: [{ username }, { email }]
    });

    if (!admin) {
        throw new api_error(400, "User not Found");
    }
   
    const ispasswordValid = await admin.ispasswordCorrect(password);
    if (!ispasswordValid) {
        throw new api_error(400, "Password is not valid");
    }

    const loggedInUser = await User.findById(admin._id).select("-password");
    return res.status(200).json(
        new api_response(200, "User LoggedIn successfully", { admin: loggedInUser })
    );
}
)

export {AdminSignin}