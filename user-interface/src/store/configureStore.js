import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from '../store/reducers';
import storageSession from 'redux-persist/es/storage/session'



const persistConfig = {
    key : 'root',
    storage:storageSession
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

export default () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk));
    let persistor = persistStore(store);
    return {
        store,
        persistor
    }
}
