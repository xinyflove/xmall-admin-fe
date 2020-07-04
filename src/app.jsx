/*
 * @Author: Peak Xin 
 * @Date: 2020-06-20 22:50:54 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-07-05 00:24:28
 */

import React from 'react';
import ReactDOM from 'react-dom';
//import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class A extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                Compenent A
                <Switch>
                    <Route exact path={`${this.props.match.path}`} render={(route)=>{
                            return <div>当前组件是不带参数的A</div>;
                    }}/>
                    <Route path={`${this.props.match.path}/sub`} render={(route)=>{
                            return <div>当前组件A的sub路径</div>;
                    }}/>
                    <Route path={`${this.props.match.path}/:id`} render={(route)=>{
                            return <div>当前组件是带参数的A，参数是：{route.match.params.id}</div>;
                    }}/>
                </Switch>
            </div>
        );
    }
}

class B extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return <div>Compenent B</div>
    }
}

class Wrapper extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <div>
                <Link to='/a'>组件A</Link>
                <br/>
                <Link to='/a/123'>带参数的组件A</Link>
                <br/>
                <Link to='/a/sub'>组件A的子路径</Link>
                <br/>
                <Link to='/b'>组件B</Link>
                {this.props.children}
            </div>
        );
    }
}

ReactDOM.render(
    <Router>
        <Wrapper>
            <Route path='/a' component={A}></Route>
            <Route path='/b' component={B}></Route>
        </Wrapper>
    </Router>,
    document.getElementById('app')
);