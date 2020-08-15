/*
 * @Author: Peak Xin 
 * @Date: 2020-07-06 22:28:27 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-08-15 23:20:53
 */

import React from 'react';
import { Link } from 'react-router-dom';
import XUtil from 'util/xm.jsx';
import User from 'service/user-service.jsx';

const _xm = new XUtil();
const _user = new User();

class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: _xm.getStorage('userInfo').username || ''
        }
    }

    /**
     * 退出登录
     */
    onLogout() {
        _user.logout().then(res => {
            _xm.removeStorage('userInfo');
            window.location.href = '/login';
        }, errMsg => {
            _xm.errorTips(errMsg);
        });
    }

    render() {
        return (
            <div className="navbar navbar-default top-navbar" role="navigation">
                <div className="navbar-header">
                    {/*
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    */}
                    <Link className="navbar-brand" to="/"><b>X</b>Mall</Link>
                </div>

                <ul className="nav navbar-top-links navbar-right">
                    <li className="dropdown">
                        <a className="dropdown-toggle" href="javascript:;">
                            <i className="fa fa-user fa-fw"></i> 
                            {
                                this.state.username
                                ? <span>欢迎，{this.state.username}</span>
                                : <span>欢迎您</span>
                            }
                            <i className="fa fa-caret-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li>
                                <a onClick={()=>{this.onLogout()}} href="javascript:;">
                                    <i className="fa fa-sign-out fa-fw"></i>
                                    <span>退出登录</span>
                                </a>
                            </li>
                        </ul>
                        {/*<!-- /.dropdown-user -->*/}
                    </li>
                    {/*<!-- /.dropdown -->*/}
                </ul>
            </div>
        );
    }
}

export default TopNav;