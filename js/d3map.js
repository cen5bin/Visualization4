// DATA 
// parse data properly

var globaldata = {
    map:{},
    color:{},
    activefunc : voteResult,
    supports:{}
};


var width = 500, height = 630;
var data=[["Aberdeen",12,0.414],["Aberdeenshire",9,0.396],
    ["Angus",16,0.437],["Argyll and Bute",13,0.415],["Clackmannanshire",21,0.462],
    ["Dumfries and Galloway",3,0.343],["Dundee",32,0.573],["East Ayrshire",25,0.472],
    ["East Dunbartonshire",7,0.388],["East Lothian",6,0.383],["East Renfrewshire",5,0.368],
    ["Edinburgh",8,0.389],["Eilean Siar",23,0.466],["Falkirk",22,0.465],["Fife",19,0.45],
    ["Glasgow",30,0.535],["Highland",24,0.471],["Inverclyde",28,0.499],["Midlothian",17,0.437],
    ["Moray",15,0.424],["North Ayshire",27,0.489],["North Lanarkshire",29,0.511],["Orkney Islands",1,0.328],
    ["Perthshire and Kinross",10,0.398],["Renfrewshire",26,0.472],["Scottish Borders",2,0.334],
    ["Shetland Islands",4,0.363],["South Ayrshire",14,0.421],["South Lanarkshire",20,0.453],
    ["Stirling",11,0.402],["West Dunbartonshire",31,0.54],["West Lothian",18,0.448]];
var title='Scottish Independence Referendum, 2014';
var desc='BBC. 18 September 2014. Retrieved 18 September 2014.';
var credits='by Guo tianyou - 2014';
var units='Ballots for Independence(%)';

var colors = ["rgb(112, 255, 114)", "rgb(162, 255, 179)", "rgb(210, 255, 217)", "rgb(255, 213, 213)",
    "rgb(255, 169, 171)","rgb(255, 127, 130)","rgb(255, 83, 88)","rgb(255, 37, 49)","rgb(255, 0, 23)","rgb(255, 0, 17)"];


var getColor = function(x) {
    var tmp = Math.floor((1 - x - 0.425 + 0.00000001)/0.025);
    if (tmp < 0) tmp = 0;
    return colors[tmp];
};


var selectProvince = function(name) {
    $("#dropdownMenu1 span").remove();
    $("#dropdownMenu1").text(name);
    $("<span class='caret'></span>").appendTo("#dropdownMenu1");

    if (globaldata.province)
        d3.select(globaldata.map[globaldata.province]).attr("stroke", "#000000").attr("stroke-width", 0.35);
        //d3.select(globaldata.map[globaldata.province]).attr("fill", globaldata.color[globaldata.province]);
    d3.select(globaldata.map[name]).attr("stroke", "#ffffff").attr("stroke-width", 1);
    //d3.select(globaldata.map[name]).attr("fill", "#000000");
    globaldata.province = name;
    globaldata.support = globaldata.supports[name];

    globaldata.activefunc(true);
};

var insertColorLabel = function(container) {

    var colors1 = [colors.slice(0, 4), colors.slice(5,9)];
    var data0 = ["45%", "50%", "55%", "60%", "65%"];



    d3.select("#"+container)
        .append("div")
        .style("display", "inline")

        //.attr("class","color-label-bar-node1")
        //.text("支持独立：")
        .append("div")
        .style("margin-left", "5px")
        .selectAll("div")
        .data(colors)
        .enter()
        .append("div")
        .attr("class","color-label-bar-node")
        //.append("div")
        .attr("class", "color-label")
        .style("background-color", function(d, i){
            return colors[i];
        });
        //.text(function(d, i){return i;});


    d3.select("#"+container)
        .append("div")
        .style("display", "inline")

        //.attr("class","color-label-bar-node1")
        //.text("支持独立：")
        .append("div")
        .style("margin-left", "27px")
        .selectAll("div")
        .data(colors)
        .enter()
        .append("span")
        .style("margin-left", function (d, i) {
            if (i == 0) return "0px";
            return "10px";
        })
        .style("font-size", "6px")
        .style("font-weight", 100)
        .style("color", function(d, i){
            if (i % 2) return "#ffffff";
            return "#bbbbbb";
        })
        .text(function (d, i) {
            if (i % 2) return "aaa";
            return data0[i/2];

        })
};


var umap = []
data.map(function(d) {umap[d[0]]=Number(d[1])});
console.log(umap);
var smap = []
data.map( function(d){ smap[d[1]] = Number(d[2])*100} );

var v = Object.keys(umap).map(function(k){return umap[k]})
var s = Object.keys(smap).map(function(k) {return smap[k]});
// console.log(v);

var c1 = "#fe237b";
var c2 = "#0fea00";
// LOAD DATA
queue()
    .defer(d3.json, "data/GBR.json")
	.defer(d3.json, "data/uk.json")
    .await(drawMap); // function that uses files

// DRAW 
// create SVG map
var projection = d3.geo.albers()
    .center([3, 58])
    .rotate([6, 0])
    .parallels([45, 60])
    .scale(600 * 9)
    .translate([width /2, height / 2]);

var svg = d3.select("#map").append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("preserveAspectRatio", "xMidYMid")
    .attr("viewBox", "0 0 " + width + " " + height);

var path = d3.geo.path()
    .projection(projection);

// COLORS
// define color scale
var colorScale = d3.scale.linear()
           .domain(d3.extent(s))
           .interpolate(d3.interpolateHcl)
           .range([c1,c2]);

// add grey color if no values
var color = function(i){ 
    if (i==undefined) {return "#cccccc"}
    else return colorScale(i)
}

//// BACKGROUND
//svg.append("g")
//    .attr("class", "background")
//    .append("rect")
//    .attr("class", "background")
//    .attr("width", width)
//    .attr("height", height)
//    .attr("fill", "#eeeeee")
//    .attr("stroke", "black")
//    .attr("stroke-width", "0.35");
//
//// TITLE AND INFOS
//svg.append('g')
//    .attr("class","info")
//    .attr("transform", "translate("+(width-200)+","+(height-180)+")")
//    .append("rect")
//    .attr({fill : "transparent", height: 160,width:160})
//
//svg.select('.info')
//    .append("g")
//    .attr("class", "title")
//    .append("text")
//    // .attr("dx", function(d){return 35})
//    .attr("transform", "translate(-25,-70)")
//    .attr("dy", function(d){return 18})
//    .attr("text-anchor", "middle")
//    .attr("font-family", "sans-serif")
//    .attr("fill", "#4B4B4B")
//    .style("text-decoration", "bold")
//    .text(title)
//    .attr("font-size", 20)
//    .call(wrap, 200);
//
//svg.select('.info')
//    .append("g")
//    .attr("class","subtitle")
//    .append("text")
//	.attr("transform", "translate(-15,0)")
//    .attr("dx", function(d){return 0})
//    .attr("dy", 12 )
//    .attr("text-anchor", "middle")
//    .attr("font-family", "sans-serif")
//    .attr("fill", "#aaaaaa")
//    .attr("font-size", 13)
//    .text(desc)
//    .call(wrap, 200);
//
//svg.select('.info')
//    .append("g")
//    .attr("class","credits")
//    .attr("transform", "translate(-20,140)")
//    .append("text")
//    .attr("dx", function(d){return 0})
//    .attr("dy", 9 )
//    .attr("text-anchor", "middle")
//    .attr("font-family", "sans-serif")
//    .attr("fill", "#4B4B4B")
//    .attr("font-size", 16)
//    .text(credits)
//    .call(wrap, 250);
//
//svg.append("g")
//	.attr("class","legend")
//	.attr("transform", "translate("+(width- 410)+","+(height - 200)+")")
//	.append("rect")
//    .attr({width: 25,
//          height: 18,
//          y: 0,
//          x: 0,
//          fill: c2});
//
//svg.select(".legend")
//	.append("g")
//	.attr("transform", "translate(40,15)")
//    .attr("class","units")
//	.append("text")
//	.attr("text-anchor", "middle")
//    .attr("font-family", "sans-serif")
//    .attr("fill", "#4B4B4B")
//    .attr("font-size", 12)
//    .text("YES")
//    .call(wrap, 150);
//
//svg.select(".legend")
//	.append("rect")
//    .attr({width: 25,
//          height: 18,
//          y: 30,
//          x: 0,
//          fill: c1});
//
//svg.select(".legend")
//	.append("g")
//    .attr("class","units")
//    .attr("transform", "translate(40,45)")
//	.append("text")
//	.attr("text-anchor", "middle")
//    .attr("font-family", "sans-serif")
//    .attr("fill", "#4B4B4B")
//    .attr("font-size", 12)
//    .text("NO")
//    .call(wrap, 150);
//// CAPTIONg
//// Color bar adapted from http://tributary.io/tributary/3650755/
//svg.append("g")
//    .attr("class","caption")
//    .append("g")
//    .attr("class","color-bar")
//    .selectAll("rect")
//    .data(d3.range(d3.min(s), d3.max(s), (d3.max(s)-d3.min(s))/50.0))
//    .enter()
//    .append("rect")
//    .attr({width: 25,
//          height: 5,
//          y: function(d,i) { return height-25-i*5 },
//          x: width-80,
//          fill: function(d,i) { return color(d); } })
//
//
//svg.select(".caption")
//    .append("g")
//    .attr("transform", "translate(" + (width-55) + "," + (height-25-5*49) + ")")
//    .call(d3.svg.axis()
//           .scale(d3.scale.linear().domain(d3.extent(s)).range([5*50,0]))
//            .orient("right"))
//    .attr("font-family", "sans-serif")
//    .attr("fill", "#4B4B4B")
//    .attr("font-size", 13)
//
//svg.select('.caption')
//    .append("g")
//    .attr("class","units")
//    .attr("transform", "translate("+(width-65)+","+(height/2 + 20)+")")
//    .append("text")
//    .attr("dx", function(d){return 0})
//    .attr("dy", 9 )
//    .attr("text-anchor", "middle")
//    .attr("font-family", "sans-serif")
//    .attr("fill", "#4b4b4b")
//    .attr("font-size", 12)
//    .text(units)
//    .call(wrap, 150);


// DRAW
//function drawMap(error,mainland,taiwan,hkmacau) {
//    drawProvinces(error,mainland);
//    drawTaiwan(error,taiwan);
//    drawHkMacau(error,hkmacau);
//}

function drawMap(error,scotland,uk) {
    drawProvinces(error,scotland);
	drawUK(error,uk);
}


// Mainland provinces
function drawProvinces(error, cn) {
    var subunits = topojson.feature(cn, cn.objects.GBR).features;
    var codes=[];
    for (var i = 0; i < subunits.length; i++) {
		if( subunits[i].properties.ID_1 == 3 )
         codes[ codes.length ] = subunits[i];
        
     };
	// alert(codes[0].properties.NAME_2);
    // console.log(codes);

    for (var i = 0; i < data.length; i++)
    globaldata.supports[data[i][0]] = data[i][2];

	subunits = codes;
    svg.append("g")
        .attr("class", "map")
        .append("g")
        .attr("class", "mainland")
        .selectAll("path")
        .data(subunits)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("id", function(d) { return d.properties.ID_2; })
        .attr("class", "province")
        .attr("fill", "#ffffff")
        .attr("fill", function(d, i){
            globaldata.map[data[i][0]] = this;
            globaldata.color[data[i][0]] = getColor(data[i][2]);
            return globaldata.color[data[i][0]];
            //if (i == 0) alert(globaldata.map[data[i][0]]);
            //return getColor(data[i][2]);
        })
        //.attr("fill", function(d) { return color( smap[umap[d.properties.NAME_2]]); })
        .attr("stroke", "black")
        .attr("stroke-width", "0.35")
        .on("mouseover", function(d, i){
            //alert(data[i][0]);

            //插入响应事件
            //鼠标放到某个省上的时候
        })
        .on("mouseout", function (d, i) {
          //  alert(data[i][0]);
            //鼠标移出某个省

        })
        .on("click", function (d, i) {
            //var tmpData = {};
            //tmpData.title = data[i][0] + "投票情况";
            //tmpData.data = [{value: data[i][2],  name:"支持独立"},
            //    {value:1 - data[i][2],name:"反对独立"}];
            //globaldata.support = data[i][2];
            selectProvince(data[i][0]);
            //globaldata.pieData1 = tmpData;
            //globaldata.province = data[i][0];
            //globaldata.support = data[i][2];

            //voteResult();
            //showPieChart("chart-container", tmpData);

            //d3.select(this).attr("fill", colors[0]);
            //svg.transition()
            //    .delay(250)
            //    .duration(250)
            //    .attr("transform", "scale(2)");

            //alert(data[i][2]);
        });

}

// Mainland provinces
function drawUK(error, uk) {
    return;
    var subunits = topojson.feature(uk, uk.objects.subunits).features;
  
	svg.select(".map")
        .append('g')
        .attr("class", "uk")
        .selectAll("path")
        .data(subunits.filter(function(d) { return d.id === 'ENG' || d.id === 'WLS' || d.id === 'NIR'; }))
        .enter()
        .append("path")
        .attr("d", path)
		.attr("fill", "#ddc")
        .attr("stroke", "white")
        .attr("stroke-width", "0.35");
}
// TODO : Haiwai


function wrap(text, width) {
  text.each(function() {
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 0.7, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy );
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy ).text(word);
      }
    }
  });
}


function transition(svg, start, end) {
    var center = [width / 2, height / 2],
        i = d3.interpolateZoom(start, end);

    svg
        .attr("transform", transform(start))
        .transition()
        .delay(250)
        .duration(i.duration * 2)
        .attrTween("transform", function() { return function(t) { return transform(i(t)); }; })
        .each("end", function() { d3.select(this).call(transition, end, start); });

    function transform(p) {
        var k = height / p[2];
        return "translate(" + (center[0] - p[0] * k) + "," + (center[1] - p[1] * k) + ")scale(" + k + ")";
    }
}
