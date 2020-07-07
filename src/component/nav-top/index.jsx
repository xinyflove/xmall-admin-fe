/*
 * @Author: Peak Xin 
 * @Date: 2020-07-06 22:28:27 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-07-07 23:04:45
 */

import React from 'react';
import { Link } from 'react-router-dom';

class TopNav extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * 退出登录
     */
    onLogout() {

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
                            <span>欢迎，admin</span>
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