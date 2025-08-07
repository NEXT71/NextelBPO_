import { config } from 'dotenv';
import app from './app.js';

config(); // initialize dotenv

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
