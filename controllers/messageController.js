import {
  getMessageService,
  createMessageService,
  updateMessageService,
  deleteMessageService,
} from "../services/messageService.js";

export const getMessageController = async (req, res) => {
  const query = req.query;
  const result = await getMessageService(query);
  if (result) {
    return res.status(200).json(result);
  } else {
    return res.status(404).json({ message: "Controller: Message not found" });
  }
};
export const createMessageController = async (req, res) => {
  const data = req.body;
  const result = await createMessageService(data);
  if (result) {
    return res
      .status(200)
      .json({ message: "Controller: Message created successfully" });
  } else {
    return res.status(404).json({ message: "Controller: Message not created" });
  }
};
export const updateMessageController = async (req, res) => {
  const query = req.query;
  const data = req.body;
  const result = await updateMessageService(query, data);
  if (result) {
    return res
      .status(200)
      .json({ message: "Controller: Message updated successfully" });
  } else {
    return res
      .status(404)
      .json({ message: "Controller: Message was not updated" });
  }
};
export const deleteMessageController = async (req, res) => {
  const query = req.query;
  const result = await deleteMessageService(query);
  if (result) {
    return res
      .status(200)
      .json({ message: "Controller: Message deleted successfully" });
  } else {
    return res
      .status(404)
      .json({ message: "Controller: Message was not deleted" });
  }
};
