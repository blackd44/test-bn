import { NextFunction, Request, Response } from "express";

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  // const isTest = process.env.NODE_ENV === "test";
  const statusCode = res.statusCode != 200 ? res.statusCode : 500;
  res.status(statusCode);

  const resBody = {
    ...err,
    status: statusCode,
    error: err.message,
    // stack: err.stack,
  };

  console.log({
    ...err,
    status: statusCode,
    error: err.message,
    stack: err.stack,
  });

  res.json(resBody);
}
