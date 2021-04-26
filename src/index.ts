import dotenv from 'dotenv';
import path from 'path';
dotenv.config({
  path: path.resolve(__dirname, '../.env')
});

import server from './server';
const port = parseInt(process.env.PORT || "8000", 10);

server.listen(port, async () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});