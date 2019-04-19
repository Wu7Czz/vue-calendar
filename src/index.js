import Calendar from './calendar.vue'
const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default Calendar
export default {
  install,
  Calendar
}