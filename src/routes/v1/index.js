import express from 'express'
import {StatusCodes} from 'http-status-codes'
import {boardRoute} from './boardRoute.js'

const Router = express.Router()


//check api vi status
Router.get('/status', (req, res) => {
    res.status(StatusCodes.OK).json({
        message: 'APIs v1 are ready to use'
    })
})

// Board api
Router.use('/board', boardRoute)

export const APIs_v1 = Router