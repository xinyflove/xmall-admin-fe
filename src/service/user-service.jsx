/*
 * @Author: Peak Xin 
 * @Date: 2020-08-09 23:53:35 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-08-09 23:59:00
 */

import XUtil from 'util/xm.jsx'

const _xm = new XUtil();

class User {
    login(loginInfo) {
        return _xm.request({
            type: 'POST',
            url: '/manage/user/login.do',
            data: loginInfo
        })
    }
 }

 export default User;