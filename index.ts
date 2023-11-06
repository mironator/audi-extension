import express from 'express';
import path from 'path';

const PORT = 80;

const app = express();

// app.use(express.static('extensions'))
app.use("/extensions", express.static(path.join(__dirname, 'extensions')));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})