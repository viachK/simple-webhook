const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/webhook', (req, res) => {
    console.log('Received webhook:', req.body);
    res.status(200).send('Webhook received');
});

app.listen(port, () => {
    console.log(`Webhook server listening at http://localhost:${port}`);
});
