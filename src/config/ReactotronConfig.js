import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .connect();

  // console é global, sendo assim, se colocarmos o tron dentro do console,
  // ele também será global.
  console.tron = tron;

  tron.clear();
}
