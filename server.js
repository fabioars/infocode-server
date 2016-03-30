// Biblioteca Express para transferencia de dados via protocolo HTTP
var express = require("express");
// Biblioteca MonogoSkin para conexão com o banco de dados
var mongo = require('mongoskin');
// Body parser para receber as denúncias futuramente
var bodyParser = require("body-parser");
// Morgan para exibir os logs de acesso e erro no console
var logger = require('morgan');

// Criando aplicação
var app = express();
// Conectando ao DB
var db = mongo.db("mongodb://localhost:27017/infocode", {safe:true});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));

// Headers de acesso para qualquer dispositivo
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Adicionando parametros para coleção com os dados desejados
app.param('collectionName', function(req, res, next, collectionName){
    req.collection = db.collection(collectionName);
    return next();
});

// Definindo rota para consulta
app.get('/infocode/:collectionName/:id', function(req, res, next) {
  req.collection.findById(req.params.id, function(e, result){
    if (e) return next(e)
    res.send(result);
  });
});

// Abrindo espaço pra denúncias
app.post('/infocode/denuncia/', function(req, res, next){
   db.collection("denuncia").insert(req.body, {}, function(e, results){
       if(e) return next(e)
       res.send(results);
   }) 
});

// Iniciando servidor
app.listen(80, function(){
    console.log("Rodando na porta 80! :)");
});