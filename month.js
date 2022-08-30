const monthData = [
  6,15,9,7,13,15,1,3,11,7,14,14,13,12,5,0,12,14,0,8,15,6,3,9,9,13,12,3
]

const average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
const averageDistance = average(monthData)

const radiusScale = d3.scaleSqrt().domain([0, 20]).range([5, 40])

const monthSvg = d3.select('svg.month')

const monthGroups = monthSvg
  .selectAll('g')
  .data(monthData)
  .enter()
  .append('g')
  .attr('transform', (d, i) => {
    const x = (i % 7) * 90 + 50
    const y = Math.floor(i / 7) * 100 + 40
    return `translate(${x},${y})`
  })

  monthGroups
  .append('circle')
  .attr('cx', 0)
  .attr('cy', 0)
  .attr('r', 5)
  .attr('class', 'distance' )
  .transition()
  .duration(800)
  .delay((d, i) => { return i * 100 })
  .ease(d3.easeBackInOut)
  .attr('r', (d, i) => { return radiusScale(d) })
  
  
  monthGroups
    .append('circle')
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', radiusScale(averageDistance))
    .attr('class', 'ring' )

  monthGroups
    .append('text')
    .attr('class', 'day')
    .attr('x', 0)
    .attr('y', 55)
    .text((d, i) => {return i + 1})

  monthGroups
    .append('text')
    .attr('class', 'month-km')
    .attr('x', 0)
    .attr('y', 55)
    .text((d, i) => {return d + ' km'})