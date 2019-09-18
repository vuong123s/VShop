var express = require('express')
var app = express()
var port = 3000

app.set('view engine', 'pug')
app.set('views', './views')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
	res.render('index')
})

app.listen(port, function(){
	console.log('Sever listening on port ' + port)
})