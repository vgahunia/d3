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
/*---------------------------------------------
----------------- BAR GRAPH --------------------
---------------------------------------------- */
function makeData() {
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
    var svg = d3.select("#third div")
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
            return h - (d * 4) +12;
       })
       .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("text-anchor", "middle")
        .attr("fill", "white");

   d3.select("#p1").selectAll("p")
    .data(dataset2)
    .enter()
    .append("p")
    .text(function(d, i) {
        if (i < 12) {
            return x() + ". The data value is " + d;
        }
    })
    .style("color", function(d) {
        if (d > 20) {   
            return "rgb(0,0,210)";
        } else {
            return "black";
        }
    });
    d3.select("#p2").selectAll("p")
    .data(dataset2)
    .enter()
    .append("p")
    .text(function(d, i) {
        if (i > 12) {
            return x() + ". The data value is " + d;
        }
    })
    .style("color", function(d) {
        if (d > 20) {   
            return "rgb(0,0,210)";
        } else {
            return "black";
        }
    });
}

function clearData() {
    d3.select("#second").selectAll("p").remove();
    d3.select("#third div").selectAll("#third svg").remove();
}

$('#dataButton').click(function() {
    var doCount = makeCounter();
    x = doCount;
    clearData();
    makeData();
})


/*---------------------------------------------
----------------- SCATTERPLOT -----------------
---------------------------------------------- */

function makeScatter() {
    var w = 600;
    var h = 300;
 // Create dataset randomly   
    var dataset = [];
    for (var i = 0; i < 16; i++) {
        var newCoord = [];    
        var c1 = Math.round(Math.random() * 560)+7;
        var c2 = Math.round(Math.random() * 260)+12;
        newCoord.push(c1); newCoord.push(c2);
        dataset.push(newCoord);            
    }

    d3.select("#p1Scatter").selectAll("p")
    .data(dataset)
    .enter()
    .append("p")
    .text(function(d, i) {
        return x() + ". The data value is (" + d[0] + "," + d[1] + ")";
    });

    var svg2 = d3.select("#third2 div")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

    svg2.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", function(d) {
            return d[0];
       })
       .attr("cy", function(d) {
            return d[1];
       })
       .attr("r", function(d) {
            return Math.sqrt(h - d[1]);
        })
       .attr("fill", "rgb(120,120,250)");

    svg2.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text(function(d) {
            return "(" + d[0] + "," + d[1] + ")";
       })
       .attr("x", function(d) {
        return d[0];
       })
       .attr("y", function(d) {
            return d[1];
       })
       .attr("font-family", "sans-serif")
       .attr("font-size", "10px")
       .attr("fill", "rgb(0,0,100)")
       .attr("background-color", "white");

}

function clearScatter() {
    d3.select("#third2 div").selectAll("#third2 svg").remove();
    d3.select("#second2").selectAll("p").remove();
}

$('#dataButton2').click(function() {
    var doCount = makeCounter();
    x = doCount;
    clearScatter();
    makeScatter();
})
