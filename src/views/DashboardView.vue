<template>
   這是後台頁面
  <RouterLink to="/admin/products">後台產品列表</RouterLink> |
  <router-link to="/admin/orders">後台訂單列表</router-link>|
  <router-link to="/">回前台</router-link>|
  <a href="#" @click.prevent="logout">登出</a>
  <hr>
<RouterView></RouterView>
</template>

<script>
import { RouterView } from 'vue-router';
const {  VITE_APP_URL } = import.meta.env;
export default {
    components: {
        RouterView
    },
    methods:{
        logout(){
            document.cookie = `hexToken=; expires=${new Date()};`;
            this.$router.push('/login');
        },
        checkLogin() {
            const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
        this.$http.defaults.headers.common['Authorization'] = token;
            const url = `${VITE_APP_URL}/api/user/check`;
            this.$http.post(url)
                .then((res) => {
                    if (!res.data.success) {
                        this.$router.push("/login")
                    } 
                })
                .catch((err) => {
                    alert('請先登入');
                    window.location = 'login.html';
                })
        },
    },
    mounted() {
        this.checkLogin();
    }
}
</script>