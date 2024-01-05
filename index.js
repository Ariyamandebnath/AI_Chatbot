import express from 'express'
import dotenv from 'dotenv'
dotenv.config( {
    path:'/.env'
})

const app = express()

const port = process.env.PORT || 5000

app.use(express.static(__dirname+'/views'))
app.use(express.static(__dirname _+"/public"))


const server = app.listen(port,()=>{
    console.log(`listening on port ${port}`)
}
)
app.get('/',(req,res)=>{
    res.sendFile('index.html')
})