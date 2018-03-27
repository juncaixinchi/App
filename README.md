# 搭建React开发环境

搭建基于React+webpack+Babel+Eslint的react开发环境

<!-- more -->

## Package

利用npm下载所有所需软件包

    npm install

## Babel

Babel 是一个 JavaScript 转换器，它将 JavaScript 变成 JavaScript（现在是将高版本的 ES6/ES7 转换为 ES5）。

Babel的配置文件，`.babelrc`

## Webpack

webpack是一个模块打包器，能够把 React 库、JSX 文件和任何其它 JavaScript 的相关部分打包为一个文件。它还能扩展到 CSS（LESS/SASS）文件和应用程序所用的其它类型的素材。其中webpack-dev提供能够热替换的调试工具

Webpack的配置文件,`webpack.config.js`

## Eslint

ESLint 是一个插件化的javascript 代码检测工具，它可以用于检查常见的JavaScript 代码错误，也可以进行代码风格检查。这里主要以[airbnb](https://github.com/airbnb/javascript)的指南为准，基本规则见[Eslint Rules](http://eslint.cn/docs/rules/)，React相关规则见[React Rules](https://github.com/JasonBoy/javascript/tree/master/react)

检查并自动修复代码格式

	  npm run eslint

Eslint的配置文件，`.eslintrc`

## 启动命令

Run webpack in production mode

    npm run webpack2

Start 

    npm start

## devel mode

Run webpack in dev mode and keep watching files

    npm run webpack

Start App in auto-restart mode

    npm run devel
