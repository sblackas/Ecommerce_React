import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import mainReducer from './Store/reducers';
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Components/Home';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import ProductPage from './Components/ProductPage';
import AddProduct from './Components/AddProduct';
import ProductListPage from './Components/ProductListPage';
import Dashboard from './Components/Dashboard'

import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk]

const store = createStore(mainReducer, composeWithDevTools(
  applyMiddleware(...middleware)));

  // const persistConfig = {
  //   key: 'root',
  //   storage,
  // }
  // const persistedReducer = persistReducer(persistConfig)
 
  // export default () => {
  //   let store = createStore(persistedReducer)
  //   let persistor = persistStore(store)
  //   return { store, persistor }
  // }


const myRouter = (
  <Provider store={store}>
      <Router>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/signup" component={SignUp} />
              <Route path="/signin" component={SignIn} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/addproduct" component={AddProduct} />
              <Route path="/productlist" component={ProductListPage} />
              <Route path="/product/:id" component={ProductPage} />
          </Switch>
      </Router>
  </Provider>
);

ReactDOM.render(
  myRouter,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
