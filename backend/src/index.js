import express from 'express'
import routes from './routes'
import cors from 'cors'
import './database/Database'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(routes)

app.listen(3333, () => console.log('Server running on port 3333.'))

