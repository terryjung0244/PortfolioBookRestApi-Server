import dotenv from 'dotenv';
import createServer from './util/server'

const main = async () => {
  dotenv.config(); // use for.env
}

main();

const app = createServer();

const PORT = process.env.PORT || 8060

app.listen(PORT, () => {
  console.log(`Connected Port ${PORT}`)
})