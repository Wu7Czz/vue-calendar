<template>
  <div id="app">
      <calendar
    ref="calendar1"
    :events="calendar1.events" 
    :value="calendar1.value" 
    :begin="calendar1.begin" 
    :end="calendar1.end" 
    :disabled="calendar1.disabled"
    @select="calendar1.select"
    @selectMonth="calendar1.selectMonth"
    @selectYear="calendar1.selectYear"></calendar>
  </div>
</template>

<script>
import calendar from './calendar.vue'
export default {
  name: 'app',
  data () {
    return {
      calendar1:{
          disabled: [[2017,7,12],[2017,7,16]],
          value:[2017,7,20], //默认日期
          events:{
              '2017-7-9': "<b style='color:red'>v-html</b>",
              '2017-7-20':'$408',
              '2017-7-21':'$460',
              '2017-7-22':'$500',
          },
          begin:[2017,7,16],
          select(value){
              console.log(value.toString());
          },
          selectMonth(month,year){
              console.log(year,month)
          },
          selectYear(year){
              console.log(year)
          },
          timestamp:Date.now()
      }
    }
  },
  components: {
    calendar
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
