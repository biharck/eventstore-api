const eventStore = require('../../config/eventStoreConnection');

async function getEventsByStream(req, res){
    const ordersStream = eventStore.getEventStream(req.query.aggregation, req.query.streamId);
    const events = await ordersStream.getEvents();
    res.status(200).json(events);
}

async function getAggregations(req, res){    
    let aggregations = await eventStore.getAggregations();
    res.status(200).json(aggregations);
}

async function getStreams(req, res){    
    let streams = await eventStore.getStreams(req.query.aggregation);
    res.status(200).json(streams);
}

function setup(req, res){   
    let numberOfEvents = req.query.numberOfEvents;
    const ordersStream = eventStore.getEventStream(req.query.aggregation, req.query.streamId);
    
    for(let i = 0; i < numberOfEvents; i++){
        ordersStream.addEvent({ payload: req.body });
    }
    
    res.status(201).json({});
}

//export all the functions
module.exports = { getEventsByStream, getAggregations, getStreams, setup};