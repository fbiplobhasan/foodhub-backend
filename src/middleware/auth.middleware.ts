import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload | { userId: string; role: string };
    }
  }
}

const auth = (...roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new Error("You are not authorized!");
      }

      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || "secret_key",
      ) as JwtPayload;

      if (roles.length && !roles.includes(decoded.role)) {
        throw new Error("You do not have permission to access this!");
      }

      req.user = decoded;
      next();
    } catch (error: any) {
      res.status(401).json({
        success: false,
        message: error.message || "Unauthorized access",
      });
    }
  };
};

export default auth;
