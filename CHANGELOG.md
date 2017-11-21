# Change Log
All notable changes to this project will be documented in this file.

## v_0.1.0 (2017-11-21)

- 升级 `Angular` 到 `5.x beta` 版本
- 引入Google分析
- 基于NProgress实现页面加载进度条
- 增加面包屑区域
- 优化菜单路由关联
- 优化构建，忽略不必要的目录监控
- AOT优化，更高效的执行模式
- `ts-lint` 检测完全通过

## v_0.0.3 (2017.01.06)

- 增加 `build` 命令：`npm run build`，用于生成线上包到 `dist` 目录中
- 增加全局 `config` 配置
- 增加环境变量 `env`，可以通过 `process.env.NODE_ENV === 'production'` 来判断是否是产线环境
- 修复 “代码变更之后无法自动刷新”
- 优化构建，提高性能和修复bug

## v0.0.2 (2017.01.05)

- 增加对三大预处理器的支持
- 提取每个模块的CSS到单一文件
- 实现对模块样式的动态载入以及切换
- 通过自定义加载方式，实现模块间的相互依赖

## v0.0.1 (2016.12.13)

- 实现动态加载模块基本功能
