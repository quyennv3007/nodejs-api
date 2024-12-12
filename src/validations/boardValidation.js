import joi from "joi";
import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError.js";

const createNew = async (req, res, next) => {
  const correctCondition = joi.object({
    title: joi.string().required().min(5).max(10).trim().strict(),
    description: joi.string().required().min(5).max(256).trim().strict(),
  });

  try {
    // chỉ định  abortEarly: false  để trường hợp có nhiều lỗi validation
    await correctCondition.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message))
  }
};
export const boardValidation = {
  createNew,
};
