import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/main.scss';
import configureStore from './store/configureStore';
import {PersistGate} from 'redux-persist/es/integration/react';
import {Provider} from 'react-redux';
import Navigation from './app';

class App extends React.Component {
    render() {
        const {store,persistor} = configureStore();
        return (
            <Provider store={store}>
                <PersistGate loading = {null} persistor = {persistor}>
                    <Navigation />
                </PersistGate>
            </Provider>
        );
    }
}



ReactDOM.render( <App />, document.querySelector("#root"));
