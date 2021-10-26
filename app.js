const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello Node World from BD, here we are!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));