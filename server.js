var express = require('express'),
  cons = require('consolidate'),
  app = express()

app.engine('html', cons.ejs)

// app.set('view engine', 'html')
app.set('views', __dirname + '/views')

var platforms = [
  { name: 'node' },
  { name: 'ruby' },
  { name: 'python' }
]

app.get('/test', function(req, res){
  res.render('index.html', {
    title: 'Consolidate This'
  })
})

app.get('/platforms', function(req, res){
  res.render('shit.ejs', {
    title: 'Platforms',
    platforms: platforms
  })
})

app.listen(3000)
console.log('Express server listening on port 3000')