import express from "express";
import 'reflect-metadata';
import Container from "typedi";
import { DownloadVideoController } from "./Controllers/DownloadVideoController";
import path from "path";
import cors from 'cors';
import bodyParser from 'body-parser';
const port = 3333
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use('/file',express.static(path.join(__dirname,'..', 'downloads'))); 

app.post('/download', async (req, res) => {
    const {url} = req.body
    const downloadVideoController = Container.get<DownloadVideoController>(DownloadVideoController);
    const result = await downloadVideoController.Get(url)
    console.log('AQUI ENTROU')
    console.log(result)
    res.send(result)
  })
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

