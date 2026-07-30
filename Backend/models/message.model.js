import moongoose from "mongoose";
import User from "./user.model.js";
const messageSchema = new moongoose.Schema(
  {
    senderId: {
      type: moongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    receiverId: {
      type: moongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
    message: {
      type: String,
      required: true,
      maxlength: 500,
      trim: true,
      validate: [
        {
          validator: (value) => value.length > 0,
          message: "Message cannot be empty",
        },
      ],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Message = moongoose.model("Message", messageSchema);

export default Message; 
