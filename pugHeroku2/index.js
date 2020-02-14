//Robin Flink
const express = require('express');
const app = express();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('66c73ed7c9dd4c849a966afc685f5baa');

app.set('view engine', 'pug');

let index = 0;

//Get
app.get('/', function(req,res){

  newsapi.v2.sources({
    category: 'technology',
    language: 'en',
    country: 'us'
  }).then(response => {
    //console.log(response);
    //Det som skrivs ut i konsollen
    console.log("Title: " + JSON.stringify(response.sources[index].name))
    console.log("Description: " + JSON.stringify(response.sources[index].description))

    //Skriver ut artikeln på sidan
    res.render('index', {title: "POOOOOG News!" ,namn: response.sources[index].name , paragraf: response.sources[index].description});
  });
});

app.listen(3000);
