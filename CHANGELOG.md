# Change Log
All notable changes to this project will be documented in this file.

## v_0.0.3 (2017.01.xx)

- 增加 `release` 命令：`npm run build`
- 增加全局 `config` 配置
- 增加环境变量 `env`，可以通过 `process.env === 'production'` 来判断是否是产线环境
- 修复 “代码变更之后无法自动刷新”
- 优化构建，提高性能和修复bug

## v0.0.2 (2017.01.05)

- 增加对三大预处理器的支持
- 提取每个模块的CSS到单一文件
- 实现对模块样式的动态载入以及切换
- 通过自定义加载方式，实现模块间的相互依赖

## v0.0.1 (2016.12.13)

- 实现动态加载模块基本功能
