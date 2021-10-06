import express from 'express';
import 'express-async-errors';
import { router } from './routes';
import { errorMiddleware } from './middlewares/error';
import jwt from 'jsonwebtoken';

const app = express();

app.use(express.json());

app.use((req, res) => {
  console.log(`[${req.method}] ${req.path}`)
})

app.use(router);

app.use(errorMiddleware);

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username !== 'johndoe' || password !== 'MinhaSenhaSegura!') {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  return res
    .status(200)
    .json({ token: jwt.sign({ username }, 'secret', { expiresIn: '1h' }) });
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
