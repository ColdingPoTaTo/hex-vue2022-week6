<template>
    這是產品列表頁面
    <table class="table">
        <thead>
            <tr>
                <th>產品名稱</th>
                <th>產品圖片</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in products" :key="product.id">
            <td>{{product.title}}</td>
            <td><img :src="product.imageUrl" alt="" width="100"></td>
            <td>
                <RouterLink :to="`/product/${product.id}`" class="btn btn-outline-primary">查看細節</RouterLink>
                <button type="button" class="btn btn-primary" @click="addToCart(product.id)">加入購物車</button>
            </td>            
        </tr>
        </tbody>
        
    </table>
</template>

<script>
import { RouterLink } from 'vue-router';
const {VITE_APP_PATH,VITE_APP_URL} = import.meta.env;

export default {
    data (){
        return {
            products: [],
        }    
    },
    components:{
        RouterLink
    },
    methods:{
        getProducts(){
            this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products`)
            .then((res)=>{
                this.products = res.data.products
            })
        },
        addToCart(id){
            const data = {
                product_id: id,
                qty: 1
            }
            this.$http.post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`,{data})
            .then((res)=>{
                console.log("check point addToCart: ",res)
            })
        }
    },
    mounted(){
        this.getProducts()
    }
}
</script>