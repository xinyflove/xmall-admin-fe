/*
 * @Author: Peak Xin 
 * @Date: 2020-07-07 23:52:29 
 * @Last Modified by: Peak Xin
 * @Last Modified time: 2020-08-09 23:46:01
 */

class XUtil {
    request(param) {
        return new Promise((reslove, reject) => {
            $.ajax({
                type: param.type || 'GET',
                url: param.url || '',
                dataType: param.dataType || 'json',
                data: param.data || null,
                success(res) {
                    if (0 === res.status) {
                        typeof reslove === 'function' && reslove(res.data, res.msg);
                    }
                    // 没有登录状态，强制登录
                    else if (10 === res.status) {
                        this.doLogin();
                    }
                    else {
                        typeof reject === 'function' && reject(res.msg || res.data);
                    }
                },
                error(err) {
                    typeof reject === 'function' && reject(err.statusText);
                }
            });
        });
    }

    /**
     * 跳转登录
     */
    doLogin() {
        window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
    }

    /**
     * 获取URL参数
     */
    getUrlParam(name) {
        // url问号和问号后的字符串，通过问号分割取第二个数组的数据
        let queryString = window.location.search.split('?')[1] || '',
            reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            result = queryString.match(reg);
        return result ? decodeURIComponent(result[2]): null;
    }

    /**
     * 错误提示
     */
    errorTips(errMsg) {
        alert(errMsg || '操作失败');
    }
}

export default XUtil;