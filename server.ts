import dotenv from 'dotenv';
import mongoose from 'mongoose';
import createServer from './util/server'

const main = async () => {
  dotenv.config(); //.env을 사용하기위한 설정
  mongoose.set('strictQuery', false);
  await mongoose
    .connect(
      `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.esunfok.mongodb.net/?retryWrites=true&w=majority`

    )
    .then((result) => console.log('Successfully Connected MongoDB'))
    .catch((err) => console.log(err));
};

main();

const app = createServer();

const PORT = process.env.PORT || 8060

app.listen(PORT, () => {
  console.log(`Connected Port ${PORT}`)
})