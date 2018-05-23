# Rails-webpacker-vue demo

rails + webpacker + vue + iview + vuex

## 环境
Ruby version: 2.5.1

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
