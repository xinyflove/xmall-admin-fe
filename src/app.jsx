/*
 * @Author: Peak Xin 
 * @Date: 2020-06-20 22:50:54 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-07-06 22:22:29
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';

import Layout from 'component/layout/index.jsx';
// 页面
import Home from 'page/home/index.jsx';// page为webpack.config.js里的resolve.alias中的page

class App extends React.Component {
    render(){
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Redirect from='*' to='/' />
                    </Switch>
                </Layout>
            </Router>
        );
    }
}

ReactDOM.render(
    <App>
    </App>,
    document.getElementById('app')
);