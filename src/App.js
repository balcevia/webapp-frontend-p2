import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import store from "./js/store";
import Routes from "./js/app/Routes";
import AlertContainer from "./js/app/common/alert/Alert";
import Navigation from './js/app/navigation/Navigation';
import Footer from './js/app/navigation/Footer';

function App() {
    return (
        <Provider store={store}>
            <Navigation/>
            <div className="body">
                <Routes/>
            </div>
            <AlertContainer/>
            <Footer/>
        </Provider>
    );
}

export default App;
