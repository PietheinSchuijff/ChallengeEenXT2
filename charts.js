google.charts.load('current', { packages: ['corechart'] })
google.charts.setOnLoadCallback(drawChart)
google.charts.load('current', { packages: ['corechart', 'bar'] })
google.charts.setOnLoadCallback(drawBasic)
google.charts.load('current', { packages: ['corechart', 'bar'] })
google.charts.setOnLoadCallback(drawMultSeries)

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Day', 'Distance travelled', 'Fuel used'],
    ['4', 11, 2],
    ['5', 19, 6],
    ['6', 27, 13],
    ['7', 38, 21],
  ])

  var options = {
    title: 'Traveled distance and used fuel (%)',
    curveType: 'function',
    legend: { position: 'bottom' },
  }

  var chart = new google.visualization.LineChart(
    document.getElementById('curve_chart')
  )

  chart.draw(data, options)
}

function drawBasic() {
  var data = google.visualization.arrayToDataTable([
    ['Voorraad', 'Remaining', { role: 'style' }],
    ['WC-papier', 44, 'red'],
    ['Brood', 140, 'blue'],
    ['Water', 133, 'green'],
    ['Batterijen', 28, 'orange'],
    ['Zuurstoftanks', 13, 'purple'],
  ])

  var options = {
    title: 'Stock SpaceX Shuttle',
    chartArea: { width: '50%' },
    hAxis: {
      title: 'Stock',
      minValue: 0,
      maxValue: 100,
    },
    vAxis: {
      title: 'Remaining',
    },
  }

  var chart = new google.visualization.BarChart(
    document.getElementById('chart_div')
  )

  chart.draw(data, options)
}

function drawMultSeries() {
  var data = new google.visualization.DataTable()
  data.addColumn('timeofday', 'Tijd')
  data.addColumn('number', 'Consumed calories')
  data.addColumn('number', 'Recommended calories')

  data.addRows([
    [{ v: [8, 0, 0], f: '9 sep' }, 30, 40],
    [{ v: [9, 0, 0], f: '9 am' }, 20, 30],
    [{ v: [10, 0, 0], f: '10 am' }, 10, 30],
    [{ v: [11, 0, 0], f: '11 am' }, 60, 62],
    [{ v: [12, 0, 0], f: '12 pm' }, 50, 55],
    [{ v: [13, 0, 0], f: '1 pm' }, 60, 30],
    [{ v: [14, 0, 0], f: '2 pm' }, 70, 40],
    [{ v: [15, 0, 0], f: '3 pm' }, 20, 52.5],
    [{ v: [16, 0, 0], f: '4 pm' }, 90, 85],
    [{ v: [17, 0, 0], f: '5 pm' }, 100, 100],
  ])

  var options = {
    title: 'Calorie intake vs. Recommended intake',
    hAxis: {
      title: 'Time of Day',
      format: 'h:mm a',
      viewWindow: {
        min: [7, 30, 0],
        max: [17, 30, 0],
      },
    },
    vAxis: {
      title: 'Calorie intake (1-100%)',
    },
  }

  var chart = new google.visualization.ColumnChart(
    document.getElementById('chart_divs')
  )

  chart.draw(data, options)
}
