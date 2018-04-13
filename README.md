# Rails-webpacker-vue demo

rails + webpacker + vue + iview + vuex

## vuex problem

- 问题：vuex值变化时，computed自其state的属性没有跟着变化
- 原因：引入 vue 的时候用了 ```import Vue from 'vue/dist/vue.esm' ```
- 解决：改成 ```import Vue from 'vue' ```, 问题就解决了。[惊讶](原理暂时不是很清楚)
- [http://localhost:3000](http://localhost:3000)


## iview problem

- 问题：When use this.$Modal.confirm get [Vue warn]
- 原因：引入 vue 的时候用了 ```import Vue from 'vue/dist/vue.esm' ```
- 解决：改成 ```import Vue from 'vue' ```, 问题就解决了。[惊讶](原理暂时不是很清楚)
- [http://localhost:3000/iview](http://localhost:3000/iview)


## 环境
Ruby version: 2.4.1

```
# rvm管理：
rvm install 2.5.1
rvm use 2.5.1

# or rbenv管理：
rbenv install 2.5.1

# gem安装bundler
gem install bundler
```

## 数据库

暂无

## 运行
```
# 安装前后端依赖
bundle install
yarn install

# 启动项目
rails s

# 启动webpack编译前端资源：选一即可
# webpack dev server
./bin/webpack-dev-server

# watcher
./bin/webpack --colors --progress

# standalone build
./bin/webpack
```

* webpacker编译配置说明，见[https://github.com/rails/webpacker](https://github.com/rails/webpacker)
