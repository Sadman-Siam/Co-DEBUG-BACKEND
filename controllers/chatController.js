import {
  getChatService,
  createChatService,
  updateChatService,
  deleteChatService,
} from "../services/chatService.js";

export const getChatController = async (req, res) => {
  const query = req.query;
  const result = await getChatService(query);
  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json({ message: "Controller: Chat not found" });
  }
};
export const createChatController = async (req, res) => {
  const data = req.body;
  const result = await createChatService(data);
  if (result) {
    return res
      .status(200)
      .json({ message: "Controller: Chat created successfully" });
  } else {
    return res.status(404).json({ message: "Controller: Chat not created" });
  }
};
export const updateChatController = async (req, res) => {
  const query = req.query;
  const data = req.body;
  const result = await updateChatService(query, data);
  if (result) {
    return res
      .status(200)
      .json({ message: "Controller: Chat updated successfully" });
  } else {
    return res
      .status(404)
      .json({ message: "Controller: Chat was not updated" });
  }
};
export const deleteChatController = async (req, res) => {
  const query = req.query;
  const result = await deleteChatService(query);
  if (result) {
    return res
      .status(200)
      .json({ message: "Controller: Chat deleted successfully" });
  } else {
    return res
      .status(404)
      .json({ message: "Controller: Chat was not deleted" });
  }
};
