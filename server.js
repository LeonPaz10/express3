const express = require('express');
const app = express();
const port = 8080;
const rutas = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// aclaro que aca van a estar los archivos estaticos
app.use('/public', express.static(`${__dirname}/public`));

// aca van a estar los html

app.use('/html', express.static(`${__dirname}/html`));





app.use('/', rutas);


app.listen(port, (err) => {
    if (err) {
        return console.log('se produjo un error', err);
    }
    
    console.log(`servdidor escuchando desde el puerto ${port}`);
})