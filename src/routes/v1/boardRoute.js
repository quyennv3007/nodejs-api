import express from "express";
import { StatusCodes } from "http-status-codes";
import {boardValidation} from './../../validations/boardValidation.js'
import {boardController} from './../../controllers/boardController.js'

const Router = express.Router();
Router.route("/:id")
  .get((req, res) => {
    res.status(StatusCodes.OK).json({
      message: "Node: API get list board",
    });
  })
  .post(boardValidation.createNew, boardController.createNew);

export const boardRoute = Router;
