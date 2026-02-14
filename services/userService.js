import user from "../models/users.js";

export const getUserService = async (query = {}) => {
  try {
    const result = await user.findOne(query);
    if (!result) {
      return {
        massage: "Service: User not found",
        success: false,
      };
    } else {
      return { data: result, success: true };
    }
  } catch (err) {
    console.error(err);
    return {
      message: "Service: Error retrieving user",
      success: false,
    };
  }
};

export const createUserService = async (data) => {
  try {
    const userData = new user(data);
    await userData.save();
    return { message: "Service: User created successfully", success: true };
  } catch (err) {
    console.error(err);
    return {
      message: "Service: Error Creating user",
      success: false,
    };
  }
};
export const updateUserService = async (query = {}, data) => {
  try {
    const result = await user.findOneAndUpdate(query, data);
    if (!result) {
      return {
        message: "Service: User not found and not updated",
        success: false,
      };
    } else {
      return { message: "Service: User updated successfully", success: true };
    }
  } catch (err) {
    console.error(err);
    return {
      message: "Service: Error updating user",
      success: false,
    };
  }
};
export const deleteUserService = async (query = {}) => {
  try {
    const result = await user.findOneAndDelete(query);
    if (!result) {
      return {
        message: "Service: User not found and not deleted",
        success: false,
      };
    } else {
      return { message: "Service: User deleted successfully", success: true };
    }
  } catch (err) {
    console.error(err);
    return {
      message: "Service: Error deleting user",
      success: false,
    };
  }
};
