const {EventStore, InMemoryPublisher, RedisProvider} = require('@eventstore.net/event.store');

const redisConfig = {
    standalone: {
        host: 'localhost',
        port: 6379
    }
};

const eventStore = new EventStore(
    new RedisProvider(redisConfig), 
    new InMemoryPublisher());

module.exports = eventStore;