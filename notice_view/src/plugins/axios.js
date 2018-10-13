import axios from 'axios';
import qs from "qs"; // 参数处理模块
import { Loading } from 'element-ui';

// 基础域名，方便上线时更换
axios.defaults.baseURL = 'http://localhost:3000';
// post 内容类型为 表单，方便后台取用，也可根据需求改为 json
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 数据传输前钩子，可以修改数据类型，比如我们这里修改 post 时的 参数格式为表单。
// axios.defaults.transformRequest = [function (data) {
//   return qs.stringify(data);
// }]
// 拦截器，上传前修改请求头，
axios.interceptors.request.use(
  config => {
    // 使用 elementUI 在上传前播放 loading 动画
    Loading.service({
      fullscreen: true,
      text: '拼命加载中...',
    });
    // 修改post 参数格式为表单 同时判断了文件格式，不影响json格式参数的传输。
    if (config.data != null) config.data = qs.stringify(config.data);
    return config;
  },
  err => {
    let loading = Loading.service({});
    loading.close();
    return Promise.reject(err);
  });
// http response 拦截器 
axios.interceptors.response.use(
  response => {
    let loading = Loading.service({});
    loading.close();
    return response;
  },
  error => {
    let loading = Loading.service({});
    loading.close();
    return error;
  });
// 可以将 axios 挂到 vue 上。
// Vue.prototype.$ajax = axios
// 也可以像我这样当作工具函数 export 出去
export default axios;