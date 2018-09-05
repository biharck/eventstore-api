
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 3000;
const eventstore = require('./app/routes/eventstore');
const config = require('config'); //we load the db location from the JSON files

//don't show the log when it is test
if(config.util.getEnv('NODE_ENV') !== 'test') {
	app.use(morgan('combined')); //'combined' outputs the Apache style LOGs
}
                               
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  

app.get("/", (req, res) => res.json({message: "Welcome to the Eventstore API!"}));

app.route("/events")
	.get(eventstore.getEventsByStream);

app.route("/aggregations")
	.get(eventstore.getAggregations);
	
app.route("/streams")
	.get(eventstore.getStreams);

app.route('/setup')
	.post(eventstore.setup);	

app.listen(port);
console.log("Listening on port " + port);

module.exports = app;