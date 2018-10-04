# React 前端工程脚手架

[![Build Status](https://travis-ci.org/SANGET/react-app-seed.svg?branch=master)](https://travis-ci.org/SANGET/react-app-seed)

- 支持 SCSS
- 支持 React hot loader
- 支持 ESLint
- babel 7
- webpack 4

## 使用

先安装 babel cli, 确保 babel 版本为 7

```shell
npm i @babel/core @babel/node @babel/cli -g

babel -v # -> 7
babel-node -v # -> 7
```

```shell
git clone https://github.com/SANGET/react-app-seed.git yourProjectName
cd yourProjectName

# 使用 typescript 版本, 默认为 js 版本
git checkout type

npm run init
```

[typescript 版本说明](https://github.com/SANGET/react-app-seed/tree/type)

## 代码规范约定

> 基于 Airbnb 的编码规范，但非强制性，使用编辑器的提示功能，请遵守约定

Step1. 安装 ESLint 开发环境

```shell
yarn add babel-eslint eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-config-airbnb eslint-plugin-node eslint-plugin-promise eslint-plugin-react --dev -W
```

Step2. 编辑器安装 eslint 插件，例如 vscode atom

Step3. 使用 .eslintrc 文件