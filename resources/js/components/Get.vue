<template>
    <div>
        Get
    </div>
</template>

<script>
export default {
    name:'get',

    data(){
        return{

        }
    },
    created(){
        this.getData()
    },
    methods:{
        getData(){
            axios.get('/api/get').then(res => {
            }).catch(err => {
                console.log(err)
            });
        }
    }
}
</script>

<style scoped>

</style>