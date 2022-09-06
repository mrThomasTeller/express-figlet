import express from 'express';
import figlet from 'figlet';

const app = express();

app.get('/', (req, res) => {
  figlet(req.query.text, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.type('text/plain').send(data);
    }
  });
});

app.listen(process.env.PORT ?? 3000, () => console.log('Server started'));
