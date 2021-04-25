import mongoose, { Connection } from 'mongoose';

const DB_USER: string = process.env.DB_USER || 'root';
const DB_PASSWORD: string = process.env.DB_PASSWORD || 'rootpassword';
const DB_HOST: string = process.env.DB_HOST || 'localhost';
const DB_PORT: string = process.env.DB_PORT || '27017';

// local mongodb database
export namespace Database {
  let db: Connection | null = null;

  export async function connect() {
    if (db) {
      return;
    }
    mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await new Promise<Connection | null>((resolve, reject): void => {
      mongoose.connection.once('open', () => {
        console.log('MongoDB Connection opened!');
        resolve(mongoose.connection);
      });
    })
    mongoose.connection.on('error', () => {
      console.error.bind(console, 'connection error:')
      db = null;
    });
  }
}
