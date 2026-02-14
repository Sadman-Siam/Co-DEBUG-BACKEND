import {
  getUserService,
  createUserService,
  updateUserService,
  deleteUserService,
} from "../services/userService.js";

export const getUserController = async (req, res) => {
  const query = req.query;
  const result = await getUserService(query);
  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json({ message: "Controller: User not found" });
  }
};
export const createUserController = async (req, res) => {
  const data = req.body;
  const result = await createUserService(data);
  if (result) {
    return res
      .status(200)
      .json({ message: "Controller: User created successfully" });
  } else {
    return res.status(404).json({ message: "Controller: User not created" });
  }
};
export const updateUserController = async (req, res) => {
  const query = req.query;
  const data = req.body;
  const result = await updateUserService(query, data);
  if (result) {
    return res
      .status(200)
      .json({ message: "Controller: User updated successfully" });
  } else {
    return res
      .status(404)
      .json({ message: "Controller: User was not updated" });
  }
};
export const deleteUserController = async (req, res) => {
  const query = req.query;
  const result = await deleteUserService(query);
  if (result) {
    return res
      .status(200)
      .json({ message: "Controller: User deleted successfully" });
  } else {
    return res
      .status(404)
      .json({ message: "Controller: User was not deleted" });
  }
};
