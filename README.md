### 仿追书神器 web app [持续更新] :rocket::rocket::rocket:

#### 技术栈

react全家桶 + antd + axios + styled-components

## 如何使用
```
git clone https://github.com/hyyqcweb/book-reader.git

cd book-reader

yarn || npm install

yarn start || npm run start

访问 http://localhost:3000

```

## 目录结构
```
|
|—— config create-react-app webpack 配置
|—— public 静态资源文件
|—— scripts create-react-app webpack 配置
|——src 项目主入口
| |—— components 组件库(木偶组件)
| |—— config  项目高频使用资源
| | |—— index 图片地址,api地址,color数组...
| | |—— utils 字数转换
| |—— pages 项目页面
| | |—— store 项目页面中使用到的redux
| | | |—— actionCreators 派发的action
| | | |—— constants action中的常量配置
| | | |—— index 统一导出其他三项配置,方便其他文件导入
| | | |—— reducer 根据action,操作指令,存放数据
| | |—— detail 项目详情页
| | |—— header 项目header头
| | |—— index 项目主页
| | |—— search 项目搜索页
| | |—— style 样式文件
| |—— store redux 主入口
| | |—— index 引入reducer,以及使用 redux-thunk 中间件处理axios
| | |—— reducer 数据拆分
| |—— index  项目入口
| |—— registerServiceWorker  手机离线缓存文件
| |—— reset  全局重置样式
| |—— router  项目路由
|_________________________________________________

```