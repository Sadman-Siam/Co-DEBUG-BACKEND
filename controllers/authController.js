import user from "../models/users.js";
import { getUserService, createUserService } from "../services/userService.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

export const accountRegisterController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //check for existing user
    const existingUser = await getUserService({ email });
    if (!existingUser) {
      return res.status(400).json({
        message: "AuthController: User already exists",
        success: false,
      });
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create user
    const newUser = await createUserService({
      username,
      email,
      password: hashedPassword,
    });

    if (newUser.success) {
      //re-fetch newly created user to get the id
      const createdUser = await getUserService({ email });
      //generate token
      const token = generateToken(createdUser.data._id);
      return res.status(201).json({
        message: "AuthController: User created successfully",
        success: true,
        token,
        user: {
          id: createdUser.data._id,
          name: createdUser.data.username,
          email: createdUser.data.email,
        },
      });
    } else {
      return res.status(500).json({
        message: "AuthController: Error creating user",
        success: false,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "AuthController: Error registering user",
      success: false,
    });
  }
};

export const accountLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    //check for existing user
    const existingUser = await getUserService({ email });
    if (!existingUser) {
      return res.status(400).json({
        message: "AuthController: User not found",
        success: false,
      });
    }

    //check user password
    const isMatch = bcrypt.compare(password, existingUser.data.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "AuthController: Invalid credentials",
        success: false,
      });
    }

    //generate token
    const token = generateToken(existingUser.data._id);

    return res.status(200).json({
      message: "AuthController: User logged in successfully",
      success: true,
      token,
      user: {
        id: existingUser.data._id,
        name: existingUser.data.username,
        email: existingUser.data.email,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "AuthController: Error logging in user",
      success: false,
    });
  }
};
