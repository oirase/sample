import '@babel/polyfill'

import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

render(
<Provider store={store}> 
  <App />
</Provider>,
document.getElementById('root')
  )

