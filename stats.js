const sum = (r, a) => r.map((b,i) => a[i] + b)
totalWeekKm = weekStats.reduce(sum)

d3.select('p.total-week-km').text(totalWeekKm[0] + ' km')
d3.select('p.total-week-time').text('2h:47m')
d3.select('p.average-week-pace').text('4:48 /km')
d3.select('p.total-month-km').text(d3.sum(monthData) + ' km')
d3.select('p.total-month-time').text('9h:16m')