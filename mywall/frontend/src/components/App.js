import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import Header from './layout/Header';
import Dashboard from './wall/Dashboard';

import { Provider } from 'react-redux'
import store from '../store'

import Alerts from './layout/Alerts'
import { Provider as AlertProvider, positions } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


// Creating Alerts
const alertOptions = {
    timeout: 3000,
    position: positions.TOP_CENTER
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Fragment>
                        <Header />
                        <Alerts />
                        <div className="container">
                            <Dashboard />
                        </div>
                    </Fragment>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
