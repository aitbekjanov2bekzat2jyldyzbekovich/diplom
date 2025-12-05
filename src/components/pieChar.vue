<template>
  <DoughnutChart :data="chartData" :options="chartOptions" />
</template>

<script>
import { defineComponent } from 'vue'
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

export default defineComponent({
  components: { DoughnutChart: Doughnut },
  props: {
    dataUser: Array,
    labels: Array,
    colors: Array,
  },
  data() {
    return {
      chartData: {
        labels: this.labels,
        datasets: [
          {
            label: 'Мой график',
            backgroundColor: this.colors,
            data: this.dataUser,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom' },
          title: { display: true, text: 'Круговая диаграмма' },
        },
      },
    }
  },
})
</script>
