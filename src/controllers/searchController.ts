import {Request, Response} from 'express'
import { REPLCommand } from 'repl'

export const search = (req:Request, res:Response)=>{

res.send('search')
}