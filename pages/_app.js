
import React, { useState } from "react";
import '../styles/globals.css'
import { wrapper, store } from "./state/store";
import { Provider, useDispatch } from "react-redux";
import 'antd/dist/antd.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store} >
        <Component {...pageProps}  />
      </Provider>
    </div>
  )

}
export default wrapper.withRedux(MyApp);
// export default MyApp;