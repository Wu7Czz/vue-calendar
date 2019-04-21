import calendar from './calendar.vue';
const component = {
    install:function(Vue){
        Vue.component(calendar.name,calendar)
    }
}
export default component
