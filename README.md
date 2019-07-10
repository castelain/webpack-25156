# 考题

1. 克隆工程到本地
2. 创建自己的github项目，并提交该项目
3. 切换分支，分支名为工号，进行开发
4. 初始化npm，命名webpack-工号 
5. 安装webpack、webpack-dev-server为开发依赖
6. 创建目录src，在目录下创建index.js、index.css、index.tplt.html
7. 建立名为start的npm脚本，能够使用webpack-dev-server打包并启动服务，服务端口号9090
8. 发布到npm库，地址`https://nexus.choerodon.com.cn/repository/train-npm/`
9. 提交代码到自己的github

## 要求

1. 打包的目录名为dist， 与src目录同级
2. js和css要分离打包，文件命名规则index.\[hash:8\].js和 index.\[hash:8\].css
3. 启动服务后，页面中图片水平垂直居中，图片使用assents/c7n.jpg，图片路径不能为base64码。
4. 页面标签要有favicon.ico图标，页面标题为test-工号，图标和标题不能直接修改index.tplt.html来实现。
5. npm库中只包含dist目录，gitlab提交的代码忽略dist、node_modules目录

## 附加题

1. 建立名为webpack的gulp任务， 运用js进行webpack打包编译， 并建立名为build的npm脚本，用于执行gulp任务
2. start脚本和gulp任务使用同一个config文件，但有以下区别：
   a. start的配置属性mode为development, gulp的配置属性mode为production
   b. start中脚本不压缩，gulp中脚本要压缩
   c. start编译后要有source map， 便于调试
