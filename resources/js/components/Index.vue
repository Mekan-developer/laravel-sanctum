<template>
    <div class="d-flex flex-column">

        <div class="d-flex flex-row gap-4">
            <router-link v-if="access_token" :to="{ name:'get.index'}">Get</router-link>
            <router-link v-if="!access_token" :to="{ name:'user.login'}">Login</router-link>
            <router-link v-if="!access_token" :to="{ name:'user.register'}">Register</router-link>
            <router-link v-if="access_token" :to="{ name:'user.personal'}">Personal</router-link>
            <a v-if="access_token" @click="logout" href="#">logout</a>
        </div>

        <router-view @changeVal="tokenVal"></router-view>
    </div>
</template>

<script>
export default {
    name:'index page',
    data(){
        return{
            access_token:null
        }
    },
    methods:{
        logout(){
            axios.post('/logout').then(res => {
                localStorage.removeItem('access_token');
                this.access_token = null
                this.$router.push({ name: 'user.login' })
            });
        },
        tokenVal(){
            this.access_token = localStorage.getItem('access_token')
        }
    },
    created(){
        this.tokenVal()
    }
}
</script>

<style>

</style>