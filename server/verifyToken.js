import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  //if there is no token
  if (!token) return next(createError(401, "You are not authenticated!"));

  jwt.verify(token, process.env.JWT, (err, user) => {
    //if there is invalid token
    if (err) return next(createError(403, "Token is not valid!"));
    //if ok assign to user on the api call then NEXT
    req.user = user;
    next();
  });
};
