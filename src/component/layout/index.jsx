/*
 * @Author: Peak Xin 
 * @Date: 2020-07-06 22:15:27 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-07-06 22:47:41
 */

import React from 'react';
import NavTop from 'component/nav-top/index.jsx';
import NavSide from 'component/nav-side/index.jsx';
import './theme.css';

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="wrapper">
                <NavTop />
                <NavSide />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;