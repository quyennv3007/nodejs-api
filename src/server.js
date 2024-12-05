import express from 'express';

const app = express();
const port = 8017;
const hotname = 'localhost';

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, hotname, () => {
    console.log(`Listening on port and http://${hotname}:${port}/`);
})