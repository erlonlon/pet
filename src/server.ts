import express, {Request, Response}  from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'
import mainRouter from './routes/index'

dotenv.config()

const server = express()
server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())
server.use(express.json())
server.use(express.static(path.join(__dirname,'../public')))

//Rotas
server.use(mainRouter)
server.use((req:Request, res:Response)=>{
  res.status(404).send('Página não encontrada: 404')
})

server.listen(process.env.PORT)