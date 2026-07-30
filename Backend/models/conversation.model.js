import moongoose from "mongoose";
import Message from "./message.model.js";
import User from "./user.model.js";
const conversationSchema = new moongoose.Schema(
  {
    participants: [{ type: moongoose.Schema.Types.ObjectId, ref: User }],
    messages: [
      {
        type: moongoose.Schema.Types.ObjectId,
        ref: Message,
        default: [],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Conversation = moongoose.model("conversation", conversationSchema);
export default Conversation;
