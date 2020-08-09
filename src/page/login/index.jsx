/*
 * @Author: Peak Xin 
 * @Date: 2020-08-09 21:54:23 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-08-09 23:57:36
 */

import React from 'react';
import XUtil from 'util/xm.jsx'
import User from 'service/user-service.jsx'
import './index.scss';

const _xm = new XUtil();
const _user = new User();

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }
    
    /**
     * 当Input发生改变
     * @param {*} e 
     */
    onInputChange(e) {
        let inputName = e.target.name,
            inputValue = e.target.value;
        this.setState({
            [inputName]: inputValue
        });
    }

    onSubmit(e) {
        _user.login({
            username: this.state.username,
            password: this.state.password
        }).then((res => {

        }, (err) => {
            
        }));
    }

    render(){
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="panel panel-default login-pannel">
                    <div className="panel-heading">欢迎登录 - XMall管理系统</div>
                    <div className="panel-body">
                        <div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="请输入用户名" name="username" onChange={e => this.onInputChange(e)} />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="请输入密码" name="password" onChange={e => this.onInputChange(e)} />
                            </div>
                            <button className="btn btn-lg btn-primary btn-block" onClick={e => {this.onSubmit(e)}}>登录</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;