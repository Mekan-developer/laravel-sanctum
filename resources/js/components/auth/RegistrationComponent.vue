<template>
    <div class="d-flex flex-column gap-3 w-25">
        <input type="name" v-model="name" placeholder="name" class="form-control">
        <input type="email" v-model="email" placeholder="login" class="form-control">
        <input type="password" v-model="password" placeholder="password" class="form-control">
        <input type="password" v-model="password_confirmation" placeholder="password_confirmation" class="form-control">
        <input type="submit" @click.prevent="register" value="register" class="btn btn-primary"> 
    </div>
</template>

<script>
    export default {
        name:'Register',
        data(){
            return{
                name:null,
                email:null,
                password:null
            }
        },

        methods:{
            register(){
                axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.post('/api/register',{name:this.name, email:this.email,password:this.password, password_confirmation:this.password_confirmation}).then( res => {
                        localStorage.setItem('access_token', res.data.access_token);
                        this.$router.push({ name: 'get.index' })
                    }).catch(err => {
                        console.log(err.response)
                    })
                })
            }
        }
    }
</script>

<style scoped>

</style>