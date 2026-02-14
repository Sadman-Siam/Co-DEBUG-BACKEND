import message from "../models/messages.js";

export const getMessageService = async (query = {}) => {
  try {
    const result = await message.findOne(query);
    if (!result) {
      return {
        massage: "Service: Message not found",
        success: false,
      };
    } else {
      return { data: result, success: true };
    }
  } catch (err) {
    console.error(err);
    return {
      message: "Service: Error retrieving Message",
      success: false,
    };
  }
};

export const createMessageService = async (data) => {
  try {
    const messagedata = new message(data);
    await messagedata.save();
    return { message: "Service: Message created successfully", success: true };
  } catch (err) {
    console.error(err);
    return {
      message: "Service: Error Creating Message",
      success: false,
    };
  }
};
export const updateMessageService = async (query = {}, data) => {
  try {
    const result = await message.findOneAndUpdate(query, data);
    if (!result) {
      return {
        message: "Service: Message not found and not updated",
        success: false,
      };
    } else {
      return {
        message: "Service: Message updated successfully",
        success: true,
      };
    }
  } catch (err) {
    console.error(err);
    return {
      message: "Service: Error updating Message",
      success: false,
    };
  }
};
export const deleteMessageService = async (query = {}) => {
  try {
    const result = await message.findOneAndDelete(query);
    if (!result) {
      return {
        message: "Service: Message not found and not deleted",
        success: false,
      };
    } else {
      return {
        message: "Service: Message deleted successfully",
        success: true,
      };
    }
  } catch (err) {
    console.error(err);
    return {
      message: "Service: Error deleting Message",
      success: false,
    };
  }
};
