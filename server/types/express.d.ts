// import type { Admin } from "../schema";

declare global {
  namespace Express {
    interface Request {
      admin?: any;
    }
  }
}

export {};
