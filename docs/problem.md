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
