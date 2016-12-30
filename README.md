# ng2-modular-platform
A development platform based Angular2, easy for multiple teams development.

基于Ng2的模块化开发平台核心代码。

# How to start

```bash
# 初始化依赖 
npm i

# 生成type define文件
npm run types

# 运行（执行编译并监控）
npm run dev
```

# 目录结构

```
build/ -- 构建代码目录
src/ -- 源代码目录
  app/ -- 页面目录
  common_module/ -- 公共模块目录
    filters/ -- 公共过滤器
    services/ -- 公共服务
    common.module.ts -- 公共模块定义
    index.ts -- 导出公共模块
  modules/ -- 模块放置目录
    demo1/ -- 模块1
    demo2/ -- 模块2
  app.module.ts -- 根模块
  app.routing.ts -- 顶级路由配置
  bootstrap.ts -- 程序入口
```

# 核心思想

### 需求

1. 首先，需要维护一个独立的平台，支持多个团队通过可视化操作提交开发的模块到平台中，通过配置菜单即可访问到。
2. 基于 `Angular2` 搭建
3. 支持模块的动态加载
4. 需要提供公共服务/组件等
5. 其他更细致的业务相关需求，不再罗列

### 如何实现？

1. 提供一个部署好的站点
2. 提供一个可供开发团队使用的开发包（包含构建，公共功能）
3. 提供模块打包等一系列辅助功能（通过cli）

### 遇到的问题

1. 如何高效的打包模块？

    使用 `webpack` 的外部依赖功能，将所有依赖的平台插件，先行构建好，然后模块只打包它本身独立的功能。

2. 如何实现AOT？

    暂未实现

3. 其他问题~

    待挖掘

### 注意事项

1. 进行模块开发， 如果有框架依赖，一定要引用完整依赖，如 `import { xxx } from 'rxjs'`
2. 要使用公共模块，请务必使用 `import { xxx } from 'app/common'`