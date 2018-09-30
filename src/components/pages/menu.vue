<template>
  <div class="hello">
 
    <ul class="nav">
        <li class="nav-item">
            <router-link class="nav-link" to="/page/">卡片 1</router-link>
        </li>
        <li class="nav-item">
            <router-link  class="nav-link" to="/page/child2">卡片 2</router-link>
        </li>
        <li class="nav-item">
            <router-link  class="nav-link" to="/page/child3">卡片 3</router-link>
        </li>
         <li class="nav-item">
            <a href="#" class="mav-link" @click.prevent="updatePath">切換到指定頁面</a>
        </li>
        <!-- <li class="nav-item">
            <a href="#" class="mav-link" @click.prevent="beforePath">回到前一頁</a>
        </li>-->
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    updatePath(){
        this.$router.push('/page/child2');
    },
    beforePath(){
        //this.$router.back();
        this.$router.go(-1);
    }
  }
}
</script>
