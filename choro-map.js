let w = 950
let h = 650

let countyData
let eduData

let eduDataURL = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json"
let countyDataURL = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json"

async function foo() {
const eduResponse = await fetch(eduDataURL)
  eduData = await eduResponse.json();
const countyResponse = await fetch(countyDataURL)
  countyData = await countyResponse.json();
createPaths();
}


foo();

d3.select("#mapBoard")
.attr("width", w)
.attr("height", h)
.attr("margin", 0)

let mapBoard = d3.select('#mapBoard')
let tooltip = d3.select('#tooltip')

let createPaths = ()=>{
 mapBoard.selectAll('path')
  .data(topojson.feature(countyData, countyData.objects.counties).features)
  .join('path')
  .attr ('d', d3.geoPath())
  .attr('class', 'county')
  .attr('fill', (d) => {
    let id = d['id']
    let county = eduData.find((item) => {
    return item.fips === id
    })
  let percent = county['bachelorsOrHigher'];
        if(percent <= 10) {
          return '#f7fbff'
        }else if(percent <= 20) {
          return '#deebf7'          
        }else if(percent <= 30) {
          return '#c6dbef'
        }else if(percent <= 40) {
          return '#9ecae1'
        }else if(percent <= 50) {
          return '#6baed6'
        }else if(percent <= 60) {
          return '#4292c6'
        }else if(percent <= 70) {
          return '#2171b5'
        }else if(percent <= 80) {
          return '#08519c'
        }else if(percent <= 90) {
          return '#08306b'
        }else if(percent <= 100) {
          return  '#041f47'
        }
})
.attr('data-fips', (d)=>{
  return d.id
})
.attr('data-education', (d)=>{
  let id = d['id']
          let county = eduData.find((d) => {
            return d.fips === id
               })
               let percent = county['bachelorsOrHigher'];
               return percent
})
        .on('mouseover', (event,item) => {
          tooltip.style('visibility', 'visible')
                .style('left', event.pageX + 20 + 'px')
                .style('top', event.pageY - 28 + 'px')
          
                let id = item['id']
                let county = eduData.find((item) => {
                  return item.fips === id
                     })
          
          tooltip.attr('data-education', county['bachelorsOrHigher'])
          
          tooltip.html(county.area_name + ', ' + county.state +' : ' + county.bachelorsOrHigher + '%')  
                     
              })

        .on('mouseout', (event, item) => {
          tooltip.style('visibility', 'hidden')
        })


        console.log("edudata ",  eduData)
        console.log("county ",  countyData.objects)


        }








