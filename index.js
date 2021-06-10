const express = require('express')
const app = express()
const exphbs = require('express-handlebars');
 
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars'); 

app.get('/', function (req, res) {
  res.render('home')
})

// app.get('/new', function(req, res){
//     res.render('home')
// });

const PORT = process.env.PORT || 3001;
 
app.listen(PORT, function(){
    console.log('This App is starting on port number', PORT);
});