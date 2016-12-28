//associa alle variabili i moduli richiesti dall' applicazione
//sarà una applicazione basata su express, quindi integriamo express;
var express = require('express');
var path = require('path');

//creo una variabile app che rapre la nuova applicazione express. In questo
//modo app otterrà i metodi di express
var app = express();

app.use(express.static(path.join(__dirname, 'public')));
var routes = require('./routes');


//si è precendentemente installato ejs come template engine
//(npm install ejs --save) e ora è necessario impostarlo anche come view
//engine per evitare errori
app.set('view engine', 'ejs');

//Seguono, le rotte - la logica viene definita in ./routes/index.js - vedi

//home
app.get('/', routes.home);
//pagina episodi
app.get('/star_wars_episode/:epis_num?', routes.movie_single);
//pagine inesistenti
app.get('*', routes.notFound);





//crea il server web
app.listen(process.env.PORT || 3000);
