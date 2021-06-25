import '../styles/globals.css'

import { hotjar } from 'react-hotjar';

if (process.browser) {
  hotjar.initialize(2473131, 6);
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
