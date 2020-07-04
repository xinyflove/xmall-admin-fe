/*
 * @Author: Peak Xin 
 * @Date: 2020-07-04 23:04:01 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-07-04 23:04:22
 */

import React from 'react';
import ReactDOM from 'react-dom';

class Component extends React.Component {
    // 构造函数
    constructor(props){
        super(props);
        this.state = {
            data: 'Old State'
        };
        console.log('constructor');
    }

    // 组件将要加载
    componentWillMount(){
        console.log('componentWillMount');
    }

    // 组件加载完成
    componentDidMount(){
        console.log('componentDidMount');
    }

    // 将要接收父组件传来的props
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }

    // 子组件时不时应该更新
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;// 如果返回false，则终止后续操作
    }

    // 组件将要更新
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }

    // 组件更新完成
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    // 组件将要销毁
    componentWillUnmount(){
        console.log('componentWillUnmount'); 
    }

    // 处理点击事件
    handleClick(){
        this.setState({
            data: 'New State'
        });
        console.log('handleClick');
    }

    // 渲染
    render(){
        console.log('render');
        return (
            <div>
                <div>Props: {this.props.data}</div>
                <button onClick={()=>{this.handleClick()}}>更新组件</button>
            </div>
        );
    }
}

class App extends React.Component {
    // 构造函数
    constructor(props){
        super(props);
        this.state = {
            data: 'Old Props',
            hasChild: true
        };
        console.log('app constructor');
    }

    onPropsChange(){
        console.log('更新 Props');
        this.setState({
            data: 'New Props'
        });
    }

    onDestoryChild(){
        console.log('干掉子组件：');
        this.setState({
            hasChild: false
        });
    }

    // 渲染
    render(){
        console.log('app render');
        return (
            <div>
                {
                    this.state.hasChild ? <Component data={this.state.data}/> : null
                }
                <button onClick={()=>{this.onPropsChange()}}>改变Props</button>
                <button onClick={()=>{this.onDestoryChild()}}>干掉子组件</button>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);