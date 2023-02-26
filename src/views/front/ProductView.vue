<template>
    這是單一產品頁面
    <h2>{{ product.title }}</h2>
    <img :src="product.imageUrl" class="img-fluid" alt="" >
</template>

<script>
const {VITE_APP_PATH,VITE_APP_URL} = import.meta.env;

export default{
    data(){
        return{
            product:{}
        }
    },
    methods:{
        getProduct(){            
            this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${this.$route.params.id}`)
            .then((res)=>{
                this.product = res.data.product
            })
        }
    },
    mounted(){
        this.getProduct()
    }
}

</script>