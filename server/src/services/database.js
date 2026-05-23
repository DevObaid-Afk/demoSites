import mongoose from "mongoose";
import { randomUUID } from "crypto";
import { Reservation } from "../models/Reservation.js";
import { env } from "../config/env.js";
import { logger } from "../utils/logger.js";

const memoryReservations = [];

export async function connectDatabase() {
  if (!env.mongoUri) {
    logger.warn("MongoDB not configured; using in-memory reservation store.");
    return;
  }

  await mongoose.connect(env.mongoUri, {
    autoIndex: env.nodeEnv !== "production",
  });
  logger.info("MongoDB connected.");
}

export async function persistReservation(reservation) {
  if (mongoose.connection.readyState === 1) {
    return Reservation.create(reservation);
  }

  const record = {
    id: randomUUID(),
    status: "pending",
    ...reservation,
    createdAt: new Date().toISOString(),
  };
  memoryReservations.push(record);
  return record;
}
