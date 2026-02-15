const express = require('express');
const { calculateDiscount } = require('./logic');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Lesson 18: Testing!');
});

app.post('/buy', (req, res) => {
    const { price, discount } = req.body;
    try {
        const finalPrice = calculateDiscount(price, discount);
        res.json({ success: true, finalPrice });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

const server = app.listen(3000, () => {
    console.log('Server running on port 3000');
});

module.exports = server;
