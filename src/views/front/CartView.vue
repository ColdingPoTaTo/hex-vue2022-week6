<template>
  這是購物車頁面
  <!-- 購物車列表 -->
  <div class="text-end">
    <button class="btn btn-outline-danger" type="button" @click="deleteCarts" :disabled="cart.carts.length===0">清空購物車</button>
  </div>
  <table class="table align-middle">
    <thead>
      <tr>
        <th></th>
        <th>品名</th>
        <th style="width: 150px">數量/單位</th>
        <th>單價</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="cart.carts">
        <tr v-for="item in cart.carts" :key="item.id">
          <td>
            <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteCart(item)">
              <i
                class="fas fa-spinner fa-pulse"
                :hidden="loadingItem !== item.id"
                :disabled="loadingItem === item.id"
              ></i>
              x
            </button>
          </td>
          <td>
            {{ item.product.title }}
            <div class="text-success" v-if="item.coupon">已套用優惠券</div>
          </td>
          <td>
            <div class="input-group input-group-sm">
              <div class="input-group mb-3">
                <select
                  v-model="item.qty"
                  class="form-select"
                  @change="updateCart(item)"
                  :disabled="loadingItem === item.id"
                >
                  <option v-for="i in 20" :key="`add${i}`" :value="i">{{ i }}</option>
                </select>
                <span class="input-group-text" id="basic-addon2">{{ item.product.unit }}</span>
              </div>
            </div>
          </td>
          <td class="text-end">
            <small class="text-success" v-if="item.coupon">折扣價：</small>
            {{ item.final_total }}
          </td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="text-end">總計</td>
        <td class="text-end">{{ cart.total }}</td>
      </tr>
      <tr>
        <td colspan="3" class="text-end text-success">折扣價</td>
        <td class="text-end text-success">{{ cart.final_total }}</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
const {VITE_APP_PATH,VITE_APP_URL} = import.meta.env;

export default{
    data(){
        return{
            products:[],
            productId:'',
            cart:{},
            loadingItem:'',
            form: {
                user: {
                    name: '',
                    email: '',
                    tel: '',
                    address: '',
                },
                message: '',
            },
        }
    },
    methods:{
       
        getCart() {
            this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`)
                .then(res => {
                    this.cart = res.data.data;
                })
        },
        updateCart(item) {
            const data = {
                product_id: item.product.id,
                qty: item.qty,
            };
            this.loadingItem = item.id;
            this.$http.put(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${item.id}`, { data })
                .then(res => {
                    this.getCart();
                    this.loadingItem = '';
                })
        },
        deleteCart(item) {
            this.loadingItem = item.id;
            this.$http.delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${item.id}`)
                .then(res => {
                    this.getCart();
                    this.loadingItem = '';
                })
        },
        deleteCarts() {
            this.$http.delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/carts`)
                .then(res => {
                    this.getCart();
                })
        },
        onSubmit() {
            const url = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/order`;
            const order = this.form;
            this.$http.post(url, { data: order })
                .then((response) => {
                    alert(response.data.message);
                    this.$refs.form.resetForm(); // 重置表單
                    this.getCart();
                }).catch((err) => {
                    alert(err.response.data.message);
                });

        },
    },
    mounted() {
        this.getCart();
    },
}
</script>