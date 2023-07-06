let w = 1200
let h = 600

let countyData
let eduData

let eduDataURL = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json"
let countyDataURL = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json"
foo();

async function foo() {
const eduResponse = await fetch(eduDataURL)
  eduData = await eduResponse.json();
  //console.log(eduData)
const countyResponse = await fetch(countyDataURL)
  countyData = await countyResponse.json();
  //console.log(countyData)

createPolys();
createArcs();
}

createPolys = ()=>{
  console.log("countydata geometries ", countyData.objects.counties.geometries)
  console.log("edudata ",  eduData)
}

createArcs = () =>{

d3.selectAll("arcs")
 .data(countyData.objects.counties.geometries)
 .join("arc")
 .attr("stroke", "black")
 .attr("points", ((d)=> (d.arcs)))

}

d3.select("svg")
.attr("width", w)
.attr("height", h)
.style('background', '#DCF3FF')
.attr("margin", 0)


