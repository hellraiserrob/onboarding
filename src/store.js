import { createStore } from 'redux';
import reducer from './reducers/index'

function configureStore() {
  return createStore(
    reducer
  )
}

const store = configureStore()
export default store