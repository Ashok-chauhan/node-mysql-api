import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import hbs from 'hbs';
const port = 3000;
const app = express();


import {getContets, createContent} from './database.js';

//path settings
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
const publicDirectoryPath = path.dirname(__dirname,'../public');

const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

//Setup handlebars engin and views location.
app.set('view engin', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
//Setup public directory to server
app.use(express.json());
app.use(express.static(publicDirectoryPath));


app.get('/', (req,res)=>{
    res.send('It works!');
});
app.get('/contents', async(req,res)=>{
    const contents = await getContets();
    res.send(contents);
})

app.post('/content', async(req,res )=>{
    const {data, date} = req.body;
    const content = await createContent(data, date);
    //res.sendStatus(201).send(content);
    res.sendStatus(201);

})
app.listen(port, ()=>{
    console.log(`app listning on port ${port}`);
});

