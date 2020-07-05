/*
 * @Author: Peak Xin 
 * @Date: 2020-06-28 22:47:23 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-06-29 00:02:54
 */

import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 基础组件写法
 */
function Component() {
    return <h1>I am Peak</h1>;
}

class ES6Component extends React.Component {
    render() {
        return <h1>I am Peak in es6</h1>;
    }
}

ReactDOM.render(
    <div>
        <Component/>
        <ES6Component/>
    </div>,
    document.getElementById('app')
);

/**
 * state 用法
 */
class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Peak'
        }
    }
    render() {
        setTimeout(()=>{
            this.setState({
                name: 'Peak Xin'
            });
        }, 2000);
        return <h1>I am {this.state.name} in es6</h1>;
    }
}

ReactDOM.render(
    <div>
        <Component/>
    </div>,
    document.getElementById('app')
);

/**
 * props用法
 */
class Component extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h1>I am {this.props.name} in es6</h1>;
    }
}

ReactDOM.render(
    <div>
        <Component name="Peak"/>
    </div>,
    document.getElementById('app')
);

/**
 * 事件处理方式1
 */
class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Peak',
            age: 18
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            age: this.state.age + 1
        });
    }
    render() {
        return (
            <div>
                <h1>I am {this.state.name}</h1>
                <p>I am {this.state.age} years old!</p>
                <button onClick={this.handleClick}>加一岁</button>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Component/>
    </div>,
    document.getElementById('app')
);

/**
 * 事件处理方式2
 */
class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Peak',
            age: 18
        };
    }
    handleClick() {
        this.setState({
            age: this.state.age + 1
        });
    }
    onValueChange(e) {
        this.setState({
            age: e.target.value
        });
    }
    render() {
        return (
            <div>
                <h1>I am {this.state.name}</h1>
                <p>I am {this.state.age} years old!</p>
                <button onClick={()=>{this.handleClick()}}>加一岁</button>
                <input type="text" onChange={(e)=>{this.onValueChange(e)}}/>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Component/>
    </div>,
    document.getElementById('app')
);

/**
 * 组件的组合方式
 */
class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Peak',
            age: 18
        };
    }
    handleClick() {
        this.setState({
            age: this.state.age + 1
        });
    }
    onValueChange(e) {
        this.setState({
            age: e.target.value
        });
    }
    render() {
        return (
            <div>
                <h1>I am {this.state.name}</h1>
                <p>I am {this.state.age} years old!</p>
                <button onClick={()=>{this.handleClick()}}>加一岁</button>
                <input type="text" onChange={(e)=>{this.onValueChange(e)}}/>
            </div>
        );
    }
}

class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h1>{this.props.children}</h1>;
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="">
                {/* 容器式组件 */}
                <Title>
                    <span>App span</span>
                    <a href="">link</a>
                </Title>
                <hr/>
                {/* 单纯组件 */}
                <Component/>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('app')
);

/**
 * 子组件改变父组件
 */
class Child extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick() {
        this.props.changeColor('red');
    }
    render() {
        return (
            <div>
                <h1>父组件的背景色： {this.props.bgColor}</h1>
                <button onClick={()=>{this.handleClick()}}>改变父组件背景色</button>
            </div>
        );
    }
}

class Father extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: '#999'
        };
    }
    onBgColorChange(color) {
        this.setState({
            bgColor: color
        });
    }
    render() {
        return (
            <div style={{background: this.state.bgColor}}>
                <Child bgColor={this.state.bgColor} changeColor={(color)=>{this.onBgColorChange(color)}}/>
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

/**
 * 兄弟组件数据传递（状态提升，把子组件公用的属性放在父组件）
 */
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