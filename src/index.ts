import dotenv from 'dotenv';

import server from './server';

dotenv.config();
const port = parseInt(process.env.PORT || "8000");

server.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});