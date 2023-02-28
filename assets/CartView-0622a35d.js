import{_ as f,o as n,c as l,a as _,d as t,F as p,f as b,g,t as r,h as x,v as C}from"./index-494069eb.js";const{VITE_APP_PATH:i,VITE_APP_URL:u}={VITE_APP_URL:"https://vue3-course-api.hexschool.io",VITE_APP_PATH:"hexpotato",BASE_URL:"/hex-vue2022-week6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},m={data(){return{products:[],productId:"",cart:{},loadingItem:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCart(){this.$http.get(`${u}/v2/api/${i}/cart`).then(s=>{this.cart=s.data.data})},updateCart(s){const o={product_id:s.product.id,qty:s.qty};this.loadingItem=s.id,this.$http.put(`${u}/v2/api/${i}/cart/${s.id}`,{data:o}).then(c=>{this.getCart(),this.loadingItem=""})},deleteCart(s){this.loadingItem=s.id,this.$http.delete(`${u}/v2/api/${i}/cart/${s.id}`).then(o=>{this.getCart(),this.loadingItem=""})},deleteCarts(){this.$http.delete(`${u}/v2/api/${i}/carts`).then(s=>{this.getCart()})},onSubmit(){const s=`${u}/v2/api/${i}/order`,o=this.form;this.$http.post(s,{data:o}).then(c=>{alert(c.data.message),this.$refs.form.resetForm(),this.getCart()}).catch(c=>{alert(c.response.data.message)})}},mounted(){this.getCart()}},v={class:"text-end"},y=["disabled"],I={class:"table align-middle"},$=t("thead",null,[t("tr",null,[t("th"),t("th",null,"品名"),t("th",{style:{width:"150px"}},"數量/單位"),t("th",null,"單價")])],-1),k=["onClick"],P=["hidden","disabled"],V={key:0,class:"text-success"},E={class:"input-group input-group-sm"},A={class:"input-group mb-3"},T=["onUpdate:modelValue","onChange","disabled"],S=["value"],D={class:"input-group-text",id:"basic-addon2"},R={class:"text-end"},U={key:0,class:"text-success"},q=t("td",{colspan:"3",class:"text-end"},"總計",-1),w={class:"text-end"},B=t("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),L={class:"text-end text-success"};function F(s,o,c,N,a,h){return n(),l(p,null,[_(" 這是購物車頁面 "),t("div",v,[t("button",{class:"btn btn-outline-danger",type:"button",onClick:o[0]||(o[0]=(...e)=>h.deleteCarts&&h.deleteCarts(...e)),disabled:a.cart.carts.length===0},"清空購物車",8,y)]),t("table",I,[$,t("tbody",null,[a.cart.carts?(n(!0),l(p,{key:0},b(a.cart.carts,e=>(n(),l("tr",{key:e.id},[t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:d=>h.deleteCart(e)},[t("i",{class:"fas fa-spinner fa-pulse",hidden:a.loadingItem!==e.id,disabled:a.loadingItem===e.id},null,8,P),_(" x ")],8,k)]),t("td",null,[_(r(e.product.title)+" ",1),e.coupon?(n(),l("div",V,"已套用優惠券")):g("",!0)]),t("td",null,[t("div",E,[t("div",A,[x(t("select",{"onUpdate:modelValue":d=>e.qty=d,class:"form-select",onChange:d=>h.updateCart(e),disabled:a.loadingItem===e.id},[(n(),l(p,null,b(20,d=>t("option",{key:`add${d}`,value:d},r(d),9,S)),64))],40,T),[[C,e.qty]]),t("span",D,r(e.product.unit),1)])])]),t("td",R,[e.coupon?(n(),l("small",U,"折扣價：")):g("",!0),_(" "+r(e.final_total),1)])]))),128)):g("",!0)]),t("tfoot",null,[t("tr",null,[q,t("td",w,r(a.cart.total),1)]),t("tr",null,[B,t("td",L,r(a.cart.final_total),1)])])])],64)}const M=f(m,[["render",F]]);export{M as default};