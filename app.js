var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.listen(3000, function(){
   console.log('start!^^ express server on port 3000');
});

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')


//url routing
app.get('/', function(req, res){
   res.sendFile(__dirname + "/public/main.html")
});

app.get('/main', function(req, res){
   res.sendFile(__dirname + "/public/main.html")
});

app.post('/email_post', function (req, res) {
   console.log(req.body.email)
   //res.send(`<h1>Your Email : ${req.body.email} </h1>`)
   res.render('email.ejs', {'email' : req.body.email})
})

app.post('/ajax_send_email', function (req, res) {
   console.log(req.body.email)
   //check validation about input value => select db
   var resoponseData = {'result' : 'ok', 'email' : req.body.email}
   res.json(resoponseData)
})


app.post('/ajax_search_result', function (req, res) {
   console.log(req.body.search)
   //check validation about input value => select db
   var resoponseData = {'result' : 'ok', 'search' : req.body.search}
   res.json(resoponseData)
})
