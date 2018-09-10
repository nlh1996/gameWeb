<template>
    <div class="view">
        <div class="left">
            <leftMenu></leftMenu>
        </div>
        <div class="right">
            <rightTable></rightTable>
        </div>
        
        <div class="clear"></div>
    </div>
</template>

<script>
    import rightTable from '@/components/voucher_center/RightTable' 
    import leftMenu from '@/components/voucher_center/LeftMenu'
    export default {
        name: 'voucherView',
        data() {
            return {
                key: value
            }
        },
        components:{
            rightTable,
            leftMenu
        }
    }
</script>

<style scoped>
.view{
    background-color: white;
}
.left{
    float: left;
}
.right{
    float: right;
}
.clear{
    clear: both;
}
</style>