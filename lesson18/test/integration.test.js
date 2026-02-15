const request = require('supertest');
const server = require('../server');

describe('Integration Tests: API', () => {
    afterAll(() => {
        server.close();
    });

    it('GET / should return 200', async () => {
        const res = await request(server).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Lesson 18: Testing!');
    });

    it('POST /buy should calculate price correctly', async () => {
        const res = await request(server)
            .post('/buy')
            .send({ price: 200, discount: 50 });
        
        expect(res.statusCode).toEqual(200);
        expect(res.body.finalPrice).toEqual(100);
    });
});
