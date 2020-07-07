/*
 * @Author: Peak Xin 
 * @Date: 2020-07-07 23:37:13 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-07-07 23:47:27
 */

import React from 'react';

class PageTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        document.title = this.props.title + ' - XMall';
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1 className="page-header">{this.props.title}</h1>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default PageTitle;