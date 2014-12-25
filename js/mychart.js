/**
 * Created by wubincen on 14/12/19.
 */


var showPieChart = function(container, data) {
    var myChart = echarts.init(document.getElementById(container));
    var tmp0 = [];
    for (var i = 0; i < data.data.length; i++)
    tmp0.push(data.data[i].name);



    var option = {
        title : {
            text: data.title,
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'horizontal',
            x : 'center',
            y : 'bottom',
            data:    tmp0
        },
        toolbox: {
            show : true,
            feature : {
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'比例',
                type:'pie',
                radius : '65%',
                center: ['50%', '50%'],
                data: data.data
            }
        ]
    };




    myChart.setOption(option);

}


var showPieChart1 = function(container, data) {
    var myChart = echarts.init(document.getElementById(container));
    var tmp0 = [];
    for (var i = 0; i < data.data.length; i++)
        tmp0.push(data.data[i].name);



    var option = {
        title : {
            text: data.title,
            //subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'horizontal',
            x : 'center',
            y : 'bottom',
            data:    tmp0//['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        },
        toolbox: {
            show : true,
            feature : {
                //mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '15%',
                            width: '70%',
                            height:'70%',
                            funnelAlign: 'left',
                            max: 100
                        }
                    }
                },
                //restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'比例',
                type:'pie',
                radius : '60%',
                center: ['50%', '50%'],
                data: data.data
                //    [
                //    {value:335, name:'直接访问'},
                //    {value:310, name:'邮件营销'},
                //    {value:234, name:'联盟广告'},
                //    {value:135, name:'视频广告'},
                //    {value:1548, name:'搜索引擎'}
                //]
            }
        ]
    };
    myChart.setOption(option);

}

var showBarChart = function(container, data) {
    var myChart = echarts.init(document.getElementById(container));
    var tmp0 = [];
    for (var i = 0; i < data.data.length; i++)
    tmp0.push(data.data[i][0]);

    var tmp2 = [];
    var datas = [];
    for (var j = 0; j < parties.length; j++) {
        var tmp1 = {};
        tmp1["name"] = parties[j];
        tmp2.push(parties[j]);
        tmp1["type"] = "bar";
        tmp1.data = [];
        for (var i = 0; i < data.data.length; i++) {
            tmp1.data.push(data.data[i][2+j]);
        }
        datas.push(tmp1);
    }

    var option = {
        title : {
            text: data.title,
            x:'center'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:tmp2,
            x : 'center',
            y : 'bottom'
        },
        toolbox: {
            show : true,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            feature : {
                //mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: [  'stack', 'tiled']},
                //restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : tmp0
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : datas
    };
    myChart.setOption(option);

}


var showLineChart = function (container, data) {
    var myChart = echarts.init(document.getElementById(container));
    var tmp1 = [];
    for (var ii = 1970; ii < 2014; ii++)
    tmp1.push(""+ii);
    console.log("asd1");
    var tmp2 = [];
    for (var i = 0; i < data.data.names.length; i++) {
        var tmp3 = {};
        tmp3.name = data.data.names[i];
        tmp3.type = "line";
        tmp3.data = [];
        for (var j = 0; j < tmp1.length; j++)
        tmp3.data.push(data.data.datas[i][tmp1[j]]);
        tmp2.push(tmp3);
        //if (i == 1) alert(tmp3.data[i]);
    }
    console.log(data.data.names);
    var option = {
        title : {
            text: data.title,
            x:"center"
            //subtext: '纯属虚构'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:data.data.names,
            x : 'center',
            y : 'bottom'
        },
        toolbox: {
            show : true,
            feature : {
                //mark : {show: true},
                //dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                //restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : tmp1
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value} M'
                }
            }
        ],
        series : tmp2
    };
    myChart.setOption(option);
};