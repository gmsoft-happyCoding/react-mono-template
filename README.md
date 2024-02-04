# react-mono-template

这项目使用 [stormrage](https://github.com/gmsoft-happyCoding/stormrage) 初始化

## 项目包含 3 个 package

1. app - 项目主应用
2. common - app 和 components 的公共代码
3. components - 项目组件 (建议使用 doc 开发调试)

---

## DEMO 启动

1. 启动 components 项目, `yarn start:c` (请保持命令行窗口开启不要关闭)
2. 启动 app 项目, `yarn start:app`

---

## 可用的脚本

在此目录中你可以使用以下脚本:

### `yarn start:app`

启动 app 项目开发调试, 默认端口 3000

### `yarn test:app`

启动 app 项目单元测试

### `yarn doc:app`

启动 app 项目 doc 开发调试, 默认端口 6060

> 发布信息可以不配置或者部分配置, 执行命令后未配置的信息可通过命令行交互填写

### `yarn start:c`

启动 components 项目开发调试, 默认端口 3030
(需调试的组件请在 src/App.tsx 中 import)

### `yarn dev-build:c [--pick]`

- `--pick` - (可选参数) (从`packages\components\config\exportComponents.js`中)手动选择需要发布的组件

启动 components 项目的开发构建, 构建出独立的组件 bundle, 用于在 app 或其他项目中集成调试

### `yarn test:c`

启动 components 项目单元测试

### `yarn doc:c`

启动 components 项目 doc 开发调试, 默认端口 6060

### `yarn genapi`

生成 `api` 代码

---

## components 组件发布配置

要发布哪些组件请在 `packages\components\config\exportComponents.js`
中配置.

> 如果配置为目录, 会自动查找目录下的 index.tsx 作为发布组件

---

## 路径别名

@ -> src

> 如果相对路径较长例如 ../../components/\* 可以改写为 @/components/\*

如果你想要定义自己的路径别名, 请修改一下文件

```plainText
1. packages/*/config/webpack.config.dev.js
2. packages/*/config/webpack.config.prod.js
3. packages/*/tsconfig.json
4. packages/*/styleguide.config.js
5. packages/*/jest.config.js
```

## 其他

`npx jest --clearCache`

清除 jest 缓存
