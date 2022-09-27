import { Request, Response } from "express";

export const greeting = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hi",
  });
};
