const weekStats = [
  [5.2, '4:45'],
  [7.1, '5:25'],
  [0, '0:00'],
  [6.3, '5:01'],
  [0, '0:00'],
  [7.2, '4:55'],
  [10.1, '5:05'],
]

const dow = ['mon','tue','wed','thu','fri','sat','sun']

const weekSvg = d3.select('svg.week')

const barScale = d3.scaleLinear().domain([0, 12]).range([30, 500])

const weekGroups = weekSvg
  .selectAll('g')
  .data(weekStats)
  .enter()
  .append('g')
  .attr('transform', (d, i) => { return `translate(0, ${i * 40})` })
  

  weekGroups
  .append('rect')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', 500)
  .attr('height', 30)
  .attr('class', 'transparent')

weekGroups
  .append('rect')
  .attr('x', 50)
  .attr('y', 0)
  .attr('height', 30)
  .attr('width', 30)
  .attr('rx', 15)
  .transition()
  .duration(1500)
  .delay((d, i) => { return 200 + (i * 100) })
  .ease(d3.easeCubicOut)
  .attr('width', (d, i) => { return barScale(d[0])})

weekGroups
  .append('text')
  .attr('class', 'days')
  .attr('x', 0)
  .attr('y', 20)
  .text((d, i) => { return dow[i]})

  weekGroups
  .append('text')
  .attr('class', 'km')
  .attr('y', 20)
  .attr('x', 100)
  .transition()
  .duration(800)
  .delay((d, i) => { return 200 + (i * 100) })
  .attr('x', (d, i) => { return 60 + barScale(d[0])})
  .text((d, i) => { return d[0] + ' km'})

weekGroups
  .append('text')
  .attr('class', 'pace')
  .attr('x', (d, i) => { return 60 + barScale(d[0])})
  .attr('y', 20)
  .text((d, i) => { return d[1] + ' /km'})

