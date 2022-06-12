const{readFile, readFileSync} = require('fs');

readFile('hello.txt', 'utf8', (err,txt) =>{
    console.log(txt);
});


const express = require('express');

const app = express();

app.use(express.static('wordnet'));


app.get('/', (request, response) => {
    readFile('index.html', 'utf8', (err,html) =>{

        if(err){
            response.status(500).send('sorry, out of order');
        }

        response.send(html);
    });
    
});

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'));



