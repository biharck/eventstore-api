[![Build Status](https://travis-ci.org/biharck/eventstore-api.svg?branch=master)](https://travis-ci.org/biharck/eventstore-api) 
[![Mutation testing badge](https://badge.stryker-mutator.io/github.com/biharck/eventstore-api/master)](https://stryker-mutator.github.io)


#eventstore-api

This is an API which allows you to connect to the eventstore projet available on http://www.eventstore.net.br.

In order to use it, for now, a Redis container needs to be running.

`docker run -p 6379:6379 -d --name redis redis:3.0.7-alpine`

Currently, the eventstore-api supports Redis and InMemory providers and publisher strategies.

Are you ready to use it? clone it and then run `npm install` and `npm start`.

####How to use it

The api will be available at the 3000 port with the following endpoints:

* /setup [POST]
	* `http://localhost:3000/setup?streamId=777&aggregation=orders&numberOfEvents=10`

		it exposes an endpoint to mockup data. 
		The query parameters are:
        * *streamId*: The name of the stream
        * *aggregation*: The name of the aggregation
        * *numberOfEvents*: The quantity of events it's desired

		The body could be any JSON data, like:
       `{"key": "value"}`
* /events [GET]
	*	http://localhost:3000/events?streamId=777&aggregation=orders 
	
    	it exposes an endpoint to retrieve the event data based on a streamId and aggregation. 
		The query parameter is:
        * *streamId*: The name of the stream
        * *aggregation*: The name of the aggregation

* /streams  [GET]
	*	http://localhost:3000/streams?aggregation=orders
	
    	it exposes an endpoint to retrieve the streams based on an aggregation. 
		The query parameter is:
        * *aggregation*: The name of the aggregation

* /streams  [GET]
	*	http://localhost:3000/aggregations
	
    	it exposes an endpoint to retrieve the aggregations. 

