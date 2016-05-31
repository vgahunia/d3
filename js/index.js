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
