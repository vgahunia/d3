function makeCounter(){
	var count=0;
	function counter() {
		count = count +1;
		return count;
	}
	return counter;
}
var doCount=makeCounter();
var x = doCount;

function makeData() {
    var dataset = [];                      
    for (var i = 0; i < 25; i++) {    
        var newNumber = Math.round(Math.random() * 30); 
        dataset.push(newNumber);            
    }

    d3.select("#second").selectAll("p")
        .data(dataset)
        .enter()
        .append("p")
        .text(function(d) {
            return x() + ". The data value is " + d;
        })
        .style("color", function(d) {
        if (d > 20) {   
            return "red";
        } else {
            return "teal";
        }
            });

    d3.select("#third").selectAll("div")
        .data(dataset)
        .enter()
        .append("div")
        .attr("class", "bar")
        .style("height", function(d) {
            return d*5 + "px";
        })
}

function clearData() {
    d3.select("#second").selectAll("p").remove();
    d3.select("#third").selectAll("div").remove();
}

$('#dataButton').click(function() {
    var doCount = makeCounter();
    x = doCount;
    clearData();
    makeData();
})

//SECOND PART

function makeData2() {
    var dataset2 = [];
    for (var i = 0; i < 25; i++) {    
        var newNumber = Math.round(Math.random() * 40) +4; 
        dataset2.push(newNumber);            
    }
    //Width and height
    var w = 500;
    var h = 180;
    var barPadding = 1;
    //Create SVG element
    var svg = d3.select("#third2 div")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

    svg.selectAll("rect")
       .data(dataset2)
       .enter()
       .append("rect")
       .attr("x", function(d, i) {
            return i * (w / dataset2.length);
        })
       .attr("y", function(d) {
            return h - d*4; 
        })
       .attr("fill", function(d) {
            return "rgb(0, 0, " + (d * 5) + ")";
        })
       .attr("width", w / dataset2  .length - barPadding)
       .attr("height", function(d) {
            return d*4;
        });

    svg.selectAll("text")
       .data(dataset2)
       .enter()
       .append("text")
       .text(function(d) {
            return d;
       })
       .attr("x", function(d, i) {
        return i * (w / dataset2.length) + (w / dataset2.length - barPadding) / 2;
    })
       .attr("y", function(d) {
            return h - (d * 4) +15;
       })
       .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("text-anchor", "middle")
        .attr("fill", "white");

       d3.select("#second2").selectAll("p")
        .data(dataset2)
        .enter()
        .append("p")
        .text(function(d) {
            return x() + ". The data value is " + d;
        })
        .style("color", function(d) {
            if (d > 20) {   
                return "rgb(0,0,210)";
            } else {
                return "black";
            }
        });
}

function clearData2() {
    d3.select("#second2").selectAll("p").remove();
    d3.select("#third2 div").selectAll("svg").remove();
}

$('#dataButton2').click(function() {
    var doCount = makeCounter();
    x = doCount;
    clearData2();
    makeData2();
})

