/**
 * Created by wubincen on 14/12/21.
 */
var ids = ["voteResult", "voteInfo", "populationInfo"];
var chartContainers = ["chart-container", "chart-container1", "chart-container2"];
var clearActive = function () {
    for (var i = 0; i < ids.length; i++) {
        var id = "#" + ids[i];
        if ($(id).attr("class") == "active") {
            $(id).attr("class", "none");
            return;
        }
    }
};

//隐藏图标显示区域
var hideAll = function() {
    for (var i = 0; i < chartContainers.length; i++) {
        var id = "#" + chartContainers[i];
        //alert(id);
        if ($(id).css("display") == "block") {
            $(id).css("display", "none");
            return;
        }
    }
};


var work = function(func) {
    func();
    //alert(func);
    globaldata.activefunc = func;
}

//查看投票结果
var voteResult = function (arg) {
    if ($("#voteResult").attr("class") == "active" && !arg) return;
    clearActive();
    $("#voteResult").attr("class", "active");
    hideAll();
    $("#chart-container").css("display", "block");

    var tmpData = {};
    tmpData.title = globaldata.province + "投票情况";
    tmpData.data = [{value: globaldata.support,  name:"支持独立"},
        {value:1 - globaldata.support,name:"反对独立"}];
    globaldata.pieData1 = tmpData;
    //globaldata.province = data[i][0];
    //globaldata.support = data[i][2];


    showPieChart("chart-container", globaldata.pieData1);
};

//查看投票详情
var voteInfo = function (arg) {
    if ($("#voteInfo").attr("class") == "active" && !arg) return;
    clearActive();
    $("#voteInfo").attr("class", "active");
    hideAll();
    $("#chart-container1").css("display", "block");

    if (!globaldata.province) return;
    var tmp = voteInfoData[globaldata.province];

    var speed = 500;
    $("#validvote").animate({ top: '+=20px', opacity: '0' },speed/2, function(){
        $("#validvote").html("有效投票:" + tmp["valid"]+"票");
    }).animate({ top: '-=20px', opacity: '1' }, speed/2) ;

    $("#invalidvote").animate({ top: '+=20px', opacity: '0' },speed/2, function(){
        $("#invalidvote").html("无效投票:" + tmp["invalid"]+"票");
    }).animate({ top: '-=20px', opacity: '1' }, speed/2) ;

    //$("#validvote").html("有效投票:" + tmp["valid"]+"票");
    //document.getElementById("validvote").innerText = "有效投票:" + tmp["valid"]+"票";
    //document.getElementById("invalidvote").innerText = "无效投票:" + tmp["invalid"]+"票";

    var hh = $("#validimg").css("width");
    hh = parseInt(hh.substr(0, hh.length-2));

    var h1 = 200, h2 = 200;
    var w1 = 96, w2 = 96;
    var tmp1 = parseInt(tmp["valid"]);
    var tmp2 = parseInt(tmp["invalid"]);
    if (tmp1 > tmp2) {
        var tmp0 = Math.sqrt(tmp2/tmp1);
        h2 = h1 * tmp0;
        w2 = w1 * tmp0;
    }
    else {
        var tmp0 = Math.sqrt(tmp1/tmp2);
        h1 = h2 * tmp0;
        w1 = w2 * tmp0;
    }

    $("#invalidimg").css("width", "0px")
        .css("height", "0px");
    $("#validimg").css("width", "0px")
        .css("height", "0px");


    $("#invalidimg").animate({
        "width": w2+"px",
        "height": h2+"px"
    }, speed);

    $("#validimg").animate({
        "width": w1+"px",
        "height": h1+"px"
    }, speed);

    //$("#invalidimg").css("width", w2+"px")
    //    .css("height", h2+"px");
    //$("#validimg").css("width", w1+"px")
    //    .css("height", h1+"px");
    //alert(hh);
    var support = Math.round(tmp1 * globaldata.support);
    var unsupport = tmp1 - support;
    var all = 100;
    var width1 = Math.round(globaldata.support * all) + "%";
    var width2 = (all - Math.round(globaldata.support * all)) + "%";
    //$("#vote-bar").removeNode("div");
    $("#vote-bar div").remove();
    //alert($("#vote-bar div").htmlText);
    $("<div>支持独立 "+ support+" 票</div>").appendTo("#vote-bar").css("width", width1).css("background-color", "red");
    $("<div>反对独立 "+ unsupport+" 票</div>").appendTo("#vote-bar").css("width", width2).css("background-color", "blue");

};

//查看人口分布
var populationInfo = function(arg) {
    if ($("#populationInfo").attr("class") == "active" && !arg) return;
    clearActive();
    $("#populationInfo").attr("class", "active");
    hideAll();
    $("#chart-container2").css("display", "block");
    var tmpData = {};
    tmpData.title = globaldata.province + "人口分布情况";
    tmpData.data = [];
    var tmp1 = [ "Scottish", "British",	"Irish", "CypsyCypsy", "polish", "mixed", "Asian", "African", "Arab", "Other"];
    var yes = false;
    for (var i = 0; i < populationInfoData.data.length; i++)
    if (populationInfoData.data[i].Comunity === globaldata.province) {
        for (var j = 0; j < tmp1.length; j++)
        tmpData.data.push({name:tmp1[j], value:populationInfoData.data[i][tmp1[j]]});
        yes = true;
        break;
    }
    if (!yes) {
        alert("populationinfo error");
        return;
    }
    globaldata.pieData2 = tmpData;
    showPieChart1("chart-container2", globaldata.pieData2);
};

