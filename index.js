import express from 'express'
const app = express();

app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')

//Liberar acesso a pasta public
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Converte o caminho do arquivo atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname + '/public'))

import routes from "./routes/route.js"
//import mongoose from 'mongoose';
//const url = "mongodb+srv://marcelosiedler:ifsul@ifsul.fify4.mongodb.net/"

//mongoose.connect(url)
//console.log(mongoose.connect)


app.use(routes)

app.listen(3001)