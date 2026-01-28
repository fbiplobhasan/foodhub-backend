import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

const globalErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = "Something went wrong!";
  let errorMessages: any[] = [];

  if (error instanceof ZodError) {
    statusCode = 400;
    message = "Validation Error";
    errorMessages = error.errors.map((err) => ({
      path: err.path[err.path.length - 1],
      message: err.message,
    }));
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: process.env.NODE_ENV === "development" ? error?.stack : undefined,
  });
};

export default globalErrorHandler;