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
};
