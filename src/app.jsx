/*
 * @Author: Peak Xin 
 * @Date: 2020-06-20 22:50:54 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-06-26 23:08:07
 */

import React from 'react';
import ReactDOM from 'react-dom';

let name = 'Peak';
let names = ['Peak', 'Tony', 'Jack'];
let flag = false;
let jsx = (
    <div>
        {/* 变量的使用 */}
        <p>I am {name}</p>
        {/* 条件判断 */}
        {
            flag ? <p>I am {name}</p> : <p>I am not {name}</p>
        }
        {/* 数组循环 */}
        {
            names.map((name, index) => <p key={index}>Hello, I am {name}</p>)
        }
    </div>
);

ReactDOM.render( 
    jsx,
    document.getElementById('app')
);