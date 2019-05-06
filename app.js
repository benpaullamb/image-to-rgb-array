const express = require('express');
// const fs = require('fs');
const postProcess = require('./img-post');
const app = express();
const PORT = process.env.port || 8080;

app.use(express.static(__dirname + '/public'));
app.use(express.json())

const packets = [];

app.post('/api/packet', (req, res) => {
    packets.push(req.body);
    console.log(`Packets: ${packets.length}`);
    res.json({});
});

app.get('/api/done', (req, res) => {
    // fs.writeFileSync('./image.json', JSON.stringify(packets));
    console.log('Packets collected. Starting post processing');
    postProcess(packets);
    res.json({});
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));