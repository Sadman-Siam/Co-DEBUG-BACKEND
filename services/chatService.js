import chat from "../models/chats.js";

export const getChatService = async (query = {}) => {
  try {
    const result = await chat.findOne(query);
    if (!result) {
      return {
        massage: "Service: Chat not found",
        success: false,
      };
    } else {
      return { data: result, success: true };
    }
  } catch (err) {
    console.error(err);
    return {
      message: "Service: Error retrieving Chat",
      success: false,
    };
  }
};

export const createChatService = async (data) => {
  try {
    const chatdata = new chat(data);
    await chatdata.save();
    return { message: "Service: Chat created successfully", success: true };
  } catch (err) {
    console.error(err);
    return {
      message: "Service: Error Creating Chat",
      success: false,
    };
  }
};
export const updateChatService = async (query = {}, data) => {
  try {
    const result = await chat.findOneAndUpdate(query, data);
    if (!result) {
      return {
        message: "Service: Chat not found and not updated",
        success: false,
      };
    } else {
      return { message: "Service: Chat updated successfully", success: true };
    }
  } catch (err) {
    console.error(err);
    return {
      message: "Service: Error updating Chat",
      success: false,
    };
  }
};
export const deleteChatService = async (query = {}) => {
  try {
    const result = await chat.findOneAndDelete(query);
    if (!result) {
      return {
        message: "Service: Chat not found and not deleted",
        success: false,
      };
    } else {
      return { message: "Service: Chat deleted successfully", success: true };
    }
  } catch (err) {
    console.error(err);
    return {
      message: "Service: Error deleting Chat",
      success: false,
    };
  }
};
