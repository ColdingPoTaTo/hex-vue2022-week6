<template>
    這是登入頁面
    <form id="form" class="form-signin">
        <div class="form-floating mb-3">
            <input type="email" class="form-control" v-model="user.username" id="username" placeholder="name@example.com" required autofocus />
            <label for="username">Email address</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" id="password" v-model="user.password" placeholder="Password" required />
            <label for="password">Password</label>
        </div>
        <button class="btn btn-lg btn-primary w-100 mt-3" @click="login()" type="button">登入</button>
    </form>
</template>

<script>
const {  VITE_APP_URL } = import.meta.env;

export default {
    data() {
        return {
            user: {
                username: '',
                password: '',
            },
        }
    },
    methods: {
        login() {
            const url = `${VITE_APP_URL}/admin/signin`;
            this.$http.post(url, this.user)
                .then((res) => {
                    const { token, expired } = res.data;
                    //將token與expired存入cookie
                    document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
                    //將頁面導向產品頁面
                    // window.location = 'products.html';
                })
                .catch((err) => { console.log("check point err: ", err) })
            this.$router.push('/admin/products')
        }
    },
}
</script>