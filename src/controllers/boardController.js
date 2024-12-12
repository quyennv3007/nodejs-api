import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError.js";

const createNew = async (req, res, next) => {
  try {
    console.log("req.body", req.body);
    console.log("req.query", req.query);
    console.log("req.params", req.params);
    res.status(StatusCodes.CREATED).json({
      message: " POST: from validation :API create new board",
    });
    // throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "something went wrong")
  } catch (error) {
    next(error)
    // res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    //   errors: error.message,
    // });
  }
};
export const boardController = {createNew}