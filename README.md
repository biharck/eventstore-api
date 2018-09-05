[![Build Status](https://travis-ci.org/biharck/eventstore-api.svg?branch=master)](https://travis-ci.org/biharck/eventstore-api) 
[![Mutation testing badge](https://badge.stryker-mutator.io/github.com/biharck/eventstore-api/master)](https://stryker-mutator.github.io)


#eventstore-api

This is an API which allows you to connect to the eventstore projet available on http://www.eventstore.net.br.

In order to use it for now, a Redis container needs to be running.


`docker run -p 6379:6379 -d --name redis redis:3.0.7-alpine`
