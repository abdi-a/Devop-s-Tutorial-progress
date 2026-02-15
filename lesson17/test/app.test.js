const request = require('supertest');
const server = require('../server');

describe('GET /', () => {
    afterAll(() => {
        server.close();
    });

    it('should return 200 OK', async () => {
        const response = await request(server).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello GitHub Actions!');
    });
});
