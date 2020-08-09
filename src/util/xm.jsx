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

    doLogin() {
        window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
    }
}

export default XUtil;