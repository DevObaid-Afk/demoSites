import mongoose from "mongoose";
import { randomUUID } from "crypto";
import { ContactMessage } from "../models/ContactMessage.js";

const memoryMessages = [];

export async function persistContactMessage(message) {
  if (mongoose.connection.readyState === 1) {
    return ContactMessage.create(message);
  }

  const record = {
    id: randomUUID(),
    status: "new",
    ...message,
    createdAt: new Date().toISOString(),
  };
  memoryMessages.push(record);
  return record;
}
