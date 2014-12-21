/**
 * Created by wubincen on 14/12/19.
 */


var showPieChart = function(container, data) {
    var myChart = echarts.init(document.getElementById(container));

    //alert(data.data);
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
                //dataView : {show: true, readOnly: false},
                //magicType : {
                //    show: true,
                //    type: ['pie', 'funnel'],
                //    option: {
                //        funnel: {
                //            x: '25%',
                //            width: '50%',
                //            funnelAlign: 'left',
                //            max: 1548
                //        }
                //    }
                //},
                //restore : {show: true},
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