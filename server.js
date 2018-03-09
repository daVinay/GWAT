var express = require('express'),
    app = express();
    mongoose = require('mongoose'),
	bodyParser = require('body-parser');
	

// --
// Connect mongoose
mongoose.connect('mongodb://localhost:27017/gwatdb'); 

app.use(express.static('./'));

// --
// Set express configs
process.env.PORT = process.env.PORT || 3000;
app.set('port', process.env.PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'true'}));

require('./routes/webportal')(app);
require('./models/user-submission-model.js');

// Start server
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
