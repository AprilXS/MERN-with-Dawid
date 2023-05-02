const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors(
    {
        origin: 'https://aprilxs-musical-goggles-rwp7gvjr75xcx7x6-4000.preview.app.github.dev',
        optionsSuccessStatus: 200
    }
));



app.get('/test', (req, res) => {
    res.send('test ok');
    console.log('test ok');
});

app.listen(4000);
