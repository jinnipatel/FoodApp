import  {createStore ,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import loginReducer from '../reducers/Login/reducer'
import rootSaga from '../saga'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(loginReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga);
console.log("==============")
store.subscribe(()=>{
    console.log(store.getState());
});

console.log("=============")

export default store;