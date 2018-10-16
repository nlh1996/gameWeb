export default {
    state:{
        show: false
    },
    mutations:{
        SWITCH_REGISTER(state){//这里的state对应着上面这个state
            state.show = state.show?false:true;
            //你还可以在这里执行其他的操作改变state
        }
    },
    actions: {
        
    }
}