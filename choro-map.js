let w = 1200
let h = 600

let countyData
let eduData

let eduDataURL = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json"
let countyDataURL = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json"

async function foo() {
const eduResponse = await fetch(eduDataURL)
  eduData = await eduResponse.json();
  console.log(eduData)
const countyResponse = await fetch(countyDataURL)
  countyData = await countyResponse.json();
  console.log(countyData)
}
foo();

d3.select("svg")
.attr("width", w)
.attr("height", h)
.style('background', 'rgb(100, 150, 210)')
.attr("margin", 0)