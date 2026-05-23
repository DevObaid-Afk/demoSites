import { logger } from "../utils/logger.js";

export function errorHandler(error, _request, response, _next) {
  logger.error(error);

  if (error.name === "ValidationError") {
    return response.status(422).json({
      message: "Validation failed",
      errors: Object.fromEntries(
        Object.entries(error.errors).map(([key, value]) => [
          key,
          value.message,
        ]),
      ),
    });
  }

  response.status(error.status || 500).json({
    message: error.status ? error.message : "Unexpected server error",
  });
}
