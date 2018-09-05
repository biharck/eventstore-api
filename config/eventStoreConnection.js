const {EventStore, InMemoryPublisher, RedisProvider} = require('@eventstore.net/event.store');
const config = require('config'); 

const redisConfig = {
    options: {
        db: 6
    },
    standalone: {
        host: 'localhost',
        port: 6379
    }
};

const eventStore = new EventStore(
    new RedisProvider(redisConfig), 
    new InMemoryPublisher());

module.exports = eventStore;