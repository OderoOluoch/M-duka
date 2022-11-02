import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import store from '../redux/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <div className='wrapper'>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default MyApp;
