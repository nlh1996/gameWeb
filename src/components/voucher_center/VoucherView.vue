<template>
    <div class="voucher">
        <diV class="view">
            <div class="left">
                <leftMenu></leftMenu>
            </div>

            <div class="right">
                <rightTable></rightTable>
            </div>
        
            <div class="clear"></div>
        </diV>
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
.voucher{
    margin: 0 auto;
    width: 100%;
    background-color: rgb(223, 226, 228);
}
.view{
    margin: 0 auto;
    width: 1200px;
}
.left{
    float: left;
    margin: 10px;
}
.right{
    float: right;
}
.clear{
    clear: both;
}
</style>