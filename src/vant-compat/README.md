# vant-compat

该目录从 vant 源码中 copy 了部分 less 文件

## 为什么

vant2 引入一些 less 变量使用了 `~@vant/...` 路径，而 `~` 前缀的引入方式在 less-loader 中已经被废弃，同样的在 Vite 中也已经无法使用

[vant github 中的相关问题 issue](https://github.com/youzan/vant/issues/8155)

## 解决方案

1. 手动引入 common.less, encode-woff2.less 等文件
2. 在 vite.config.ts 的 resolve.alias 中将原引用路径修正到了该目录
