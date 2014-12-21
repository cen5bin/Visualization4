/**
 * Created by wubincen on 14/12/21.
 */
var ids = ["voteResult", "voteInfo"];
var chartContainers = ["chart-container", "chart-container1"];
var clearActive = function () {
    for (var i = 0; i < ids.length; i++) {
        var id = "#" + ids[i];
        if ($(id).attr("class") == "active") {
            $(id).attr("class", "none");
            return;
        }
    }
};

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

var voteResult = function () {
    if ($("#voteResult").attr("class") == "active") return;
    clearActive();
    $("#voteResult").attr("class", "active");
    hideAll();
    $("#chart-container").css("display", "block");
};

var voteInfo = function () {
    if ($("#voteInfo").attr("class") == "active") return;
    clearActive();
    $("#voteInfo").attr("class", "active");
    hideAll();
    $("#chart-container1").css("display", "block");

    if (!globaldata.province) return;
    var tmp = voteInfoData[globaldata.province];
    document.getElementById("validvote").innerText = "有效投票:" + tmp["valid"];
    document.getElementById("invalidvote").innerText = "无效投票:" + tmp["invalid"];

    var hh = $("#validimg").css("width");
    hh = parseInt(hh.substr(0, hh.length-2));

    var h1 = 200, h2 = 200;
    var w1 = 96, w2 = 96;
    var tmp1 = parseInt(tmp["valid"]);
    var tmp2 = parseInt(tmp["invalid"]);
    if (tmp1 > tmp2) {
        var tmp0 = Math.sqrt(tmp2/tmp1);
        //h2 = h1 * tmp2 / tmp1;
        //w2 = w1 * tmp2 / tmp1;
        h2 = h1 * tmp0;
        w2 = w1 * tmp0;
    }
    else {
        var tmp0 = Math.sqrt(tmp1/tmp2);
        //h1 = h2 * tmp1 / tmp2;
        //w1 = w2 * tmp1 / tmp2;
        h1 = h2 * tmp0;
        w1 = w2 * tmp0;
    }
    $("#invalidimg").css("width", w2+"px")
        .css("height", h2+"px");
    $("#validimg").css("width", w1+"px")
        .css("height", h1+"px");
    //alert(hh);

};
