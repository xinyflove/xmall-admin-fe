/*
 * @Author: Peak Xin 
 * @Date: 2020-06-20 22:50:54 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-06-28 23:59:54
 */

import React from 'react';
import ReactDOM from 'react-dom';

class Child1 extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick() {
        this.props.changeChild2Color('red');
    }
    render() {
        return (
            <div>
                <button onClick={()=>{this.handleClick()}}>改变Child2组件背景色</button>
            </div>
        );
    }
}

class Child2 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{background: this.props.bgColor}}>
                <h1>Child2的背景色： {this.props.bgColor}</h1>
            </div>
        );
    }
}

class Father extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            child2BgColor: '#999'
        };
    }
    onChild2BgColorChange(color) {
        this.setState({
            child2BgColor: color
        });
    }
    render() {
        return (
            <div>
                <Child1 bgColor={this.state.bgColor} changeChild2Color={(color)=>{this.onChild2BgColorChange(color)}}/>
                <Child2 bgColor={this.state.child2BgColor}/>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Father/>
    </div>,
    document.getElementById('app')
);