const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const app = express();
app.use(bodyParser.json());

// const posts = require('./routes/api/posts.js');
const webSettings = require ('./routes/api/web.js');

// app.use('api/posts',posts);
app.use('/api/config',webSettings)


const port = process.env.PORT || 8080;

module.exports = app.listen(port, ()=>{
    console.log("server is running on port 8080")
})