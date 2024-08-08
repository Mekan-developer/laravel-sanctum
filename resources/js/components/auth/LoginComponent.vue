<template>
    <div class="d-flex flex-column gap-3 w-25">
        <input type="email" v-model="email" placeholder="login" class="form-control">
        <input type="password" v-model="password" placeholder="password" class="form-control">
        <input type="submit" @click.prevent="login" value="login" class="btn btn-primary"> 
    </div>
</template>

<script>

export default {
    name:'Login',
    data(){
        return{
            email:null,
            password:null
        }
    },
    emit:['changeVal'],
    methods:{
        login(){
            axios.get('/sanctum/csrf-cookie').then(res => {
                axios.post('/api/login',{email:this.email, password:this.password}, {
                }).then(res =>{
                    localStorage.setItem('access_token', res.data.access_token);
                    this.$emit('changeVal')
                    this.$router.push({ name: 'get.index' })
                }).catch(err => {
                    console.log(err.response);
                });
            });
        },
        
    }
}
</script>

<style scoped>

</style>