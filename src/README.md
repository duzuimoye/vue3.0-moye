# vue-housekeeper

## 安装依赖

```
npm install
```

### 本地运行

```
npm run serve
npm run dev
```

### 构建项目

```
npm run test-build // 构建测试环境（打包到test文件夹）
npm run prod-build // 构建正式环境（打包到prod文件夹）

注:master发新版本，版本号第三位加1,满9进一位（配合七牛做版本管理）
例如：当前版本V1.0.9 下一个版本就是V1.1.0
```

### 校验当前页面所有文件是否按照标准来

```
npm run lint
```

### 作者

```
moye
```

### 项目目录结构解析

```
其中有些组件可能不适合或者我不记得具体用处了，大家碰到疑惑
.
├── README.md
├── babel.config.js                   // babel的配置文件
├── testServer.js                      // node服务包，可以本地打包后看下效果(测试)
├── prodServer.js                      // node服务包，可以本地打包后看下效果(正式)
├── jsconfig.json                     // 配置插件读取alias路径
├── package-lock.json
├── package.json
├── postcss.config.js                 // postcss配置
├── public                            // 项目入口
│   ├── favicon.ico                   // 网站ico
│   └── index.html                    // 项目入口
├── src                               // 源码文件
│   ├── App.vue                       //
│   ├── api                           // api文件夹
│   │   └── user.js                   // user的api集合
│   ├── assets                        // 静态文件夹
│   │   ├── data                      // 静态数据
│   │   ├── images                    // 静态图片
│   │   ├── js                        // 静态脚本
│   │   │   ├── dom                   // dom脚本
│   │   │   │   └── index.js
│   │   │   ├── http                  // axios封装
│   │   │   │   └── index.js
│   │   │   ├── mixin                 // ximin公用方法
│   │   │   │   └── common.js
│   │   │   ├── rem                   // 移动端rem
│   │   │   │   └── index.js
│   │   │   └── util                  // 工具类
│   │   │       └── index.js
│   │   └── stylus                    // 样式
│   │       ├── base.styl             // 基础样式
│   │       ├── index.styl            // 入口样式
│   │       ├── mixin.styl            // 公用方法
│   │       ├── reset.styl            // 重置默认样式
│   │       └── standard.styl         // 公用变量
│   ├── components                    // 组件库
│   │   ├── base                      // 基础组件
│   │   │   ├── actionSheet           // actionSheet
│   │   │   │   └── actionSheet.vue
│   │   │   ├── addressPicker         // 地址选择（类似于京东小米）
│   │   │   │   └── addressPicker.vue
│   │   │   ├── addressSlider         // 地址选择（滑动选取）
│   │   │   │   └── addressSlider.vue
│   │   │   ├── alert                 // 提示
│   │   │   │   ├── alert.vue
│   │   │   │   └── index.js
│   │   │   ├── backbar               // 导航
│   │   │   │   └── backbar.vue
│   │   │   ├── bubble                // 下拉加载动画
│   │   │   │   └── bubble.vue
│   │   │   ├── button                // 按钮
│   │   │   │   └── button.vue
│   │   │   ├── checker               // 选择（radio）
│   │   │   │   └── checker.vue
│   │   │   ├── curtDownBox           // 倒计时
│   │   │   │   └── curtDownBox.vue
│   │   │   ├── dialog                // 弹窗
│   │   │   │   └── dialog.vue
│   │   │   ├── divider               // 分割线
│   │   │   │   └── divider.vue
│   │   │   ├── group                 // 分组
│   │   │   │   ├── group.vue
│   │   │   │   └── groupItem.vue
│   │   │   ├── index.js              // 注册组件供js调用
│   │   │   ├── indexList             // 不记得啥作用了
│   │   │   │   └── indexList.vue
│   │   │   ├── info                  // 内容显示组件
│   │   │   │   └── info.vue
│   │   │   ├── input                 // 输入框（建议不要试用）
│   │   │   │   └── input.vue
│   │   │   ├── keyboard              // 虚拟键盘
│   │   │   │   ├── key.vue
│   │   │   │   └── keyboard.vue
│   │   │   ├── loading               // 加载
│   │   │   │   └── loading.vue
│   │   │   ├── model                 // 蒙层
│   │   │   │   └── model.vue
│   │   │   ├── noContent             // 无内容
│   │   │   │   └── noContent.vue
│   │   │   ├── picker                // 选择组件（地址选择器等组件的基本模块）
│   │   │   │   ├── picker.vue
│   │   │   │   └── pickerItem.vue
│   │   │   ├── popCheck              // 上弹选择
│   │   │   │   └── popCheck.vue
│   │   │   ├── popup                 // 上弹
│   │   │   │   └── popup.vue
│   │   │   ├── progress              // 进度组件
│   │   │   │   └── progress.vue
│   │   │   ├── scroll                // 基于better-srcoll滚动组件
│   │   │   │   └── scroll.vue
│   │   │   ├── shareBox              // 分享
│   │   │   │   └── shareBox.vue
│   │   │   ├── slider                // 轮播图
│   │   │   │   └── slider.vue
│   │   │   ├── switch                // switch切换
│   │   │   │   └── switch.vue
│   │   │   ├── tabbar                // tabbar导航，
│   │   │   │   └── tabbar.vue
│   │   │   ├── tabs                  // tab切换
│   │   │   │   └── tabs.vue
│   │   │   ├── tagInfo               // 小标签
│   │   │   │   └── tagInfo.vue
│   │   │   ├── timePicker            // 时间选择器
│   │   │   │   └── timePicker.vue
│   │   │   ├── toast                 // 提示组件
│   │   │   │   ├── index.js
│   │   │   │   └── toast.vue
│   │   │   ├── upload                // h5上传组件
│   │   │   │   └── upload.vue
│   │   │   ├── wating                // 等待加载
│   │   │   │   ├── loading.gif
│   │   │   │   └── wating.vue
│   │   │   └── whiteBox              // 覆盖白屏组件（类似于支付宝点击二维码）
│   │   │       └── whiteBox.vue
│   │   └── business                  // 业务组件
│   │       └── formInput
│   │           └── formInput.vue
│   ├── main.js                       // 入口文件
│   ├── router                        // 路由文件
│   │   ├── error                     // 错误模块路由
│   │   │   └── index.js
│   │   ├── home                      // 首页模块路由
│   │   │   └── index.js
│   │   ├── index.js                  // 路由入口文件
│   │   └── login                     // 登录模块路由
│   │       └── index.js
│   ├── store                         // 状态管理器
│   │   ├── index.js                  // vuex入口文件
│   │   └── user                      // user模块
│   │       └── index.js
│   └── views                         // 页面组件
│       ├── error                     // 错误页面模块
│       │   └── error.vue
│       ├── home                      // 首页模块
│       │   └── home.vue
│       └── login                     // 登录模块（打包后会删除该模块）
│           └── login.vue
└── vue.config.js                     // 项目配置文件
```
