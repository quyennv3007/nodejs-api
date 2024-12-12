import joi from "joi";
import { StatusCodes } from "http-status-codes";

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
    console.log(error);
    res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
      errors: new Error(error).message,
    });
  }
};
export const boardValidation = {
  createNew,
};
