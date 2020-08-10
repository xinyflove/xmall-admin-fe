/*
 * @Author: Peak Xin 
 * @Date: 2020-08-09 23:53:35 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-08-09 23:59:00
 */

import XUtil from 'util/xm.jsx'

const _xm = new XUtil();

class User {
    /**
     * 用户登录
     * @param {*} loginInfo 
     */
    login(loginInfo) {
        return _xm.request({
            type: 'POST',
            url: '/manage/user/login.do',
            data: loginInfo
        })
    }

    /**
     * 检查登录接口的数据是否合法
     * @param {*} loginInfo 
     */
    checkLoginInfo(loginInfo) {
        let username = $.trim(loginInfo.username),
            password = $.trim(loginInfo.password);

        // 判断用户名为空
        if (typeof username !== 'string' || username.length === 0) {
            return {
                status: false,
                msg: '用户名不能为空'
            }
        }
        // 判断密码为空
        if (typeof password !== 'string' || password.length === 0) {
            return {
                status: false,
                msg: '密码不能为空'
            }
        }

        return {
            status: true,
            msg: '验证通过'
        }
    }
 }

 export default User;