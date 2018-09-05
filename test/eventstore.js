//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('Events', () => {
	
	describe('/POST setup events', () => {
		it('should create 10 dummy events', (done) => {
			let payload = {
				order: "1234",
				type: "Dummy"
			}
			chai.request(server)
				.post('/setup')
				.query({ aggregation: 'orders', streamId : '1234', numberOfEvents : 10 })
				.send(payload)
				.end((err, res) => {
					res.should.have.status(201);
					done();
			});
		});
	});

	describe('/GET events', () => {
		it('it should GET all events', (done) => {
			chai.request(server)
				.get('/events')
				.query({ aggregation: 'orders', streamId : '1234' })
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('array');
					res.body.length.should.be.eql(10);
					done();
			});
		});
	});

	describe('/GET all aggregations', () => {
		it('it should GET all aggregations', (done) => {
			chai.request(server)
				.get('/aggregations')
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('array');
					res.body.length.should.be.eql(1);
					done();
			});
		});
	});

	describe('/GET all streams based on a aggregation', () => {
		it('it should GET all streams whithin an aggregations', (done) => {
			chai.request(server)
				.get('/streams')
				.query({aggregation : 'orders'})
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a('array');
					res.body.length.should.be.eql(1);
					done();
			});
		});
	});

});
  