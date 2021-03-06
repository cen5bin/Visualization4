/**
 * Created by wubincen on 14/12/19.
 */
var voteInfoData = {"Orkney Islands":{"valid":14887,"invalid":2899},
    "Shetland Islands":{"valid":15620,"invalid":2887},
    "Eilean Siar":{"valid":19739,"invalid":3160},
    "Clackmannanshire":{"valid":35386,"invalid":4553},
    "East Renfrewshire":{"valid":65977,"invalid":7006},
    "Stirling":{"valid":62163,"invalid":6830},
    "Argyll and Bute":{"valid":63467,"invalid":8491},
    "Midlothian":{"valid":60342,"invalid":9176},
    "Moray":{"valid":64167,"invalid":10970},
    "Inverclyde":{"valid":54572,"invalid":7867},
    "East Lothian":{"valid":71750,"invalid":10156},
    "Scottish Borders":{"valid":83459,"invalid":12032},
    "East Dunbartonshire":{"valid":78938,"invalid":7807},
    "West Dunbartonshire":{"valid":62396,"invalid":8589},
    "South Ayrshire":{"valid":81649,"invalid":13181},
    "Angus":{"valid":80236,"invalid":13388},
    "Dumfries and Galloway":{"valid":106653,"invalid":15236},
    "East Ayrshire":{"valid":84204,"invalid":15446},
    "Perthshire and Kinross":{"valid":104189,"invalid":15706},
    "North Ayshire":{"valid":96088,"invalid":17760},
    "Falkirk":{"valid":108519,"invalid":13825},
    "West Lothian":{"valid":119024,"invalid":19055},
    "Dundee":{"valid":93500,"invalid":25155},
    "Renfrewshire":{"valid":117533,"invalid":17098},
    "Aberdeen":{"valid":143484,"invalid":32139},
    "Aberdeenshire":{"valid":179943,"invalid":26414},
    "Highland":{"valid":165808,"invalid":24776},
    "South Lanarkshire":{"valid":222790,"invalid":38394},
    "Fife":{"valid":253936,"invalid":48009},
    "North Lanarkshire":{"valid":226705,"invalid":41903},
    "Edinburgh":{"valid":318565,"invalid":58882},
    "Glasgow":{"valid":364126,"invalid":121375}};

var populationInfoData = {
    "data":[
    {"Comunity":"Orkney Islands",	"Scottish":"79.0",	"British":"18.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"1.0",	"mixed":"0.1",	"Asian":"0.5",	"African":"0.1",	"Arab":"0.0",	"Other":"0.0"},
    {"Comunity":"Eilean Siar",	"Scottish":"86.0",	"British":"11.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"1.0",	"mixed":"0.1",	"Asian":"0.6",	"African":"0.1",	"Arab":"0.0",	"Other":"0.0"},
    {"Comunity":"North Ayshire",	"Scottish":"92.0",	"British":"6.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"1.0",	"mixed":"0.1",	"Asian":"0.7",	"African":"0.1",	"Arab":"0.0",	"Other":"0.0"},
    {"Comunity":"Moray",	"Scottish":"78.0",	"British":"20.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"2.0",	"mixed":"0.2",	"Asian":"0.8",	"African":"0.1",	"Arab":"0.0",	"Other":"0.0"},
    {"Comunity":"East Ayrshire",	"Scottish":"93.0",	"British":"4.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"1.0",	"mixed":"0.1",	"Asian":"0.9",	"African":"0.1",	"Arab":"0.0",	"Other":"0.0"},
    {"Comunity":"Dumfries and Galloway",	"Scottish":"80.0",	"British":"14.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"1.0",	"mixed":"0.2",	"Asian":"1.0",	"African":"0.1",	"Arab":"0.0",	"Other":"0.0"},
    {"Comunity":"Argyll and Bute",	"Scottish":"79.0",	"British":"14.0",	"Irish":"2.0",	"CypsyCypsy":"2.0",	"polish":"2.0",	"mixed":"0.3",	"Asian":"1.0",	"African":"0.1",	"Arab":"0.0",	"Other":"0.0"},
    {"Comunity":"South Ayrshire",	"Scottish":"89.0",	"British":"5.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"1.0",	"mixed":"0.2",	"Asian":"1.0",	"African":"0.1",	"Arab":"0.0",	"Other":"0.0"},
    {"Comunity":"Scottish Borders",	"Scottish":"79.0",	"British":"13.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"2.0",	"mixed":"0.2",	"Asian":"1.0",	"African":"0.1",	"Arab":"0.0",	"Other":"0.0"},
    {"Comunity":"Angus",	"Scottish":"88.0",	"British":"2.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"1.0",	"mixed":"0.1",	"Asian":"1.0",	"African":"0.1",	"Arab":"0.0",	"Other":"0.0"},
    {"Comunity":"Highland",	"Scottish":"80.0",	"British":"10.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"2.0",	"mixed":"0.2",	"Asian":"1.0",	"African":"0.1",	"Arab":"0.0",	"Other":"0.0"},
    {"Comunity":"Inverclyde",	"Scottish":"93.0",	"British":"11.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"1.0",	"mixed":"0.1",	"Asian":"1.0",	"African":"0.1",	"Arab":"0.0",	"Other":"0.0"},
    {"Comunity":"Aberdeenshire",	"Scottish":"82.0",	"British":"8.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"2.0",	"mixed":"0.3",	"Asian":"1.0",	"African":"0.1",	"Arab":"0.0",	"Other":"0.0"},
    {"Comunity":"Shetland Islands",	"Scottish":"81.0",	"British":"3.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"2.0",	"mixed":"0.3",	"Asian":"1.0",	"African":"0.1",	"Arab":"0.0",	"Other":"0.0"},
    {"Comunity":"Clackmannanshire",	"Scottish":"88.0",	"British":"8.0",	"Irish":"2.0",	"CypsyCypsy":"2.0",	"polish":"1.0",	"mixed":"0.2",	"Asian":"1.0",	"African":"0.1",	"Arab":"0.0",	"Other":"0.0"},
    {"Comunity":"West Dunbartonshire",	"Scottish":"92.0",	"British":"5.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"0.0",	"mixed":"0.1",	"Asian":"1.0",	"African":"0.1",	"Arab":"0.0",	"Other":"0.0"},
    {"Comunity":"East Lothian",	"Scottish":"86.0",	"British":"4.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"1.0",	"mixed":"0.3",	"Asian":"1.0",	"African":"0.1",	"Arab":"0.0",	"Other":"0.0"},
    {"Comunity":"Midlothian",	"Scottish":"90.0",	"British":"4.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"1.0",	"mixed":"0.2",	"Asian":"1.2",	"African":"0.1",	"Arab":"0.0",	"Other":"0.0"},
    {"Comunity":"Falkirk",	"Scottish":"91.0",	"British":"3.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"1.0",	"mixed":"0.2",	"Asian":"1.5",	"African":"0.1",	"Arab":"0.0",	"Other":"0.0"},
    {"Comunity":"Perthshire and Kinross",	"Scottish":"81.0",	"British":"10.0",	"Irish":"2.0",	"CypsyCypsy":"2.0",	"polish":"2.0",	"mixed":"0.3",	"Asian":"1.5",	"African":"0.1",	"Arab":"0.0",	"Other":"0.0"},
    {"Comunity":"North Lanarkshire",	"Scottish":"92.0",	"British":"1.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"1.0",	"mixed":"0.2",	"Asian":"1.6",	"African":"0.1",	"Arab":"0.0",	"Other":"0.0"},
    {"Comunity":"South Lanarkshire",	"Scottish":"91.0",	"British":"2.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"1.0",	"mixed":"0.2",	"Asian":"1.7",	"African":"0.1",	"Arab":"0.0",	"Other":"0.0"},
    {"Comunity":"Fife",	"Scottish":"86.0",	"British":"5.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"1.0",	"mixed":"0.3",	"Asian":"1.8",	"African":"0.1",	"Arab":"0.0",	"Other":"0.0"},
    {"Comunity":"West Lothian",	"Scottish":"88.0",	"British":"4.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"1.0",	"mixed":"0.3",	"Asian":"1.8",	"African":"0.1",	"Arab":"0.0",	"Other":"0.0"},
    {"Comunity":"Renfrewshire",	"Scottish":"91.0",	"British":"2.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"1.0",	"mixed":"0.3",	"Asian":"2.0",	"African":"0.2",	"Arab":"0.0",	"Other":"0.0"},
    {"Comunity":"Stirling",	"Scottish":"82.0",	"British":"8.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"2.0",	"mixed":"0.4",	"Asian":"2.2",	"African":"0.1",	"Arab":"0.0",	"Other":"0.0"},
    {"Comunity":"Scotland",	"Scottish":"84.0",	"British":"6.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"2.0",	"mixed":"0.4",	"Asian":"3.0",	"African":"0.2",	"Arab":"0.0",	"Other":"0.0"},
    {"Comunity":"East Dunbartonshire",	"Scottish":"88.0",	"British":"3.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"1.0",	"mixed":"0.4",	"Asian":"3.0",	"African":"0.1",	"Arab":"0.1",	"Other":"0.0"},
    {"Comunity":"East Renfrewshire",	"Scottish":"86.0",	"British":"3.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"1.0",	"mixed":"0.4",	"Asian":"5.0",	"African":"0.1",	"Arab":"0.1",	"Other":"0.0"},
    {"Comunity":"Dundee",	"Scottish":"84.0",	"British":"3.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"2.0",	"mixed":"0.4",	"Asian":"4.0",	"African":"1.0",	"Arab":"0.1",	"Other":"0.0"},
    {"Comunity":"Aberdeen",	"Scottish":"76.0",	"British":"5.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"3.0",	"mixed":"0.6",	"Asian":"5.0",	"African":"2.0",	"Arab":"0.1",	"Other":"0.0"},
    {"Comunity":"Edinburgh",	"Scottish":"70.0",	"British":"9.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"4.0",	"mixed":"1.0",	"Asian":"5.0",	"African":"1.0",	"Arab":"0.1",	"Other":"0.0"},
    {"Comunity":"Glasgow",	"Scottish":"79.0",	"British":"2.0",	"Irish":"1.0",	"CypsyCypsy":"1.0",	"polish":"2.0",	"mixed":"0.5",	"Asian":"6.0",	"African":"2.0",	"Arab":"0.1",	"Other":"0.0"}
]
}


var provinceData = ["Orkney Islands","Shetland Islands","Eilean Siar","Clackmannanshire","East Renfrewshire",
    "Stirling","Argyll and Bute","Midlothian","Moray","Inverclyde","East Lothian","Scottish Borders","East Dunbartonshire",
    "West Dunbartonshire","South Ayrshire","Angus","Dumfries and Galloway","East Ayrshire","Perthshire and Kinross","North Ayshire",
    "Falkirk","West Lothian","Dundee","Renfrewshire","Aberdeen","Aberdeenshire","Highland","South Lanarkshire","Fife","North Lanarkshire","Edinburgh","Glasgow"];

var partyData = [["Aberdeen Central","Aberdeen","SNP",3100,9441,2349,10058,201],["Aberdeen Donside","Aberdeen","SNP",2166,7615,1606,14790,584],
    ["Aberdeen South and Kincardine North","Aberdeen","SNP",4058,5624,4994,11947,2074],["Aberdeenshire East","Aberdeenshire","SNP",4211,2304,4238,19533,0],
    ["Aberdeenshire West","Aberdeenshire","SNP",6027,2349,8074,12186,0],["Banffshire and Buchan Coast","Aberdeenshire","SNP",4592,2642,958,16812,0],
    ["Angus North and Mearns","Angus","SNP",6374,3160,1726,13660,0],["Angus South","Angus","SNP",5581,3703,874,16164,1321],
    ["Argyll and Bute","Argyll and Bute","SNP",4847,4041,3220,13390,978],["Clackmannanshire and Dunblane","Clackmannanshire","SNP",3501,9644,1018,13253,0],
    ["Dumfriesshire","Dumfries and Galloway","Lab",9468,12624,1419,8384,0],["Galloway and Dumfries West","Dumfries and Galloway","C",11071,7954,763,10209,0],
    ["Dundee City East","Dundee","SNP",2550,5862,800,16541,0],["Dundee City West","Dundee","SNP",1625,7684,1063,14089,0],
    ["Carrick and Cumnock and Doon Valley","East Ayrshire","SNP",4160,10669,624,13250,0],["Kilmarnock and Irvine Valley","East Ayrshire","SNP",3309,10971,614,16964,0],
    ["Clydebank and Milngavie","East Dunbartonshire","SNP",2758,11564,1769,12278,0],["Strathkelvin and Bearsden","East Dunbartonshire","SNP",4438,12456,2600,14258,0],
    ["East Lothian","East Lothian","Lab",5344,12536,1912,12385,0],["Eastwood","East Renfrewshire","Lab",10650,12662,835,7777,0],
    ["Edinburgh Central","Edinburgh","SNP",4354,9243,5937,9480,0],["Edinburgh Eastern","Edinburgh","SNP",2630,12319,1227,14552,0],
    ["Edinburgh Northern and Leith","Edinburgh","Lab",2928,12858,2836,12263,0],["Edinburgh Pentlands","Edinburgh","SNP",9439,7993,1420,11197,0],
    ["Edinburgh Southern","Edinburgh","SNP",6298,9254,8297,9947,0],["Edinburgh Western","Edinburgh","SNP",5047,7164,9276,11965,0],
    ["Na h-Eileanan an Iar","Eilean Siar","SNP",563,3724,228,8496,0],["Falkirk East","Falkrik","SNP",2372,10767,727,14302,0],
    ["Falkirk West","Falkrik","SNP",2086,9862,644,15607,0],["Cowdenbeath","Fife","Lab",1792,11926,997,10679,276],["Dunfermline","Fife","SNP",2093,10420,5776,11050,0],
    ["Fife Mid and Glenrothes","Fife","SNP",1676,9573,630,13761,673],["Fife North East","Fife","SNP",5618,3613,8437,11029,979],
    ["Kirkcaldy","Fife","SNP",2007,12397,820,12579,0],["Glasgow Anniesland","Glasgow","SNP",2011,10322,1000,10329,256],
    ["Glasgow Cathcart","Glasgow","SNP",2410,10326,1118,11918,450],["Glasgow Kelvin","Glasgow","SNP",1845,9758,1900,10640,405],
    ["Glasgow Maryhill and Springburn","Glasgow","Lab",1222,9884,833,8592,0],["Glasgow Pollok","Glasgow","Lab",1298,10875,490,10252,0],
    ["Glasgow Provan","Glasgow","Lab",777,10037,413,7958,0],["Glasgow Shettleston","Glasgow","SNP",1163,9542,371,10128,0],
    ["Glasgow Southside","Glasgow","SNP",1733,7957,612,12306,0],["Rutherglen","Glasgow","Lab",2096,12489,1194,10710,633],
    ["Caithnessand Sutherland and Ross","Highland","SNP",2934,5438,6385,13843,0],["Inverness and Nairn","Highland","SNP",3797,7125,3763,16870,1176],
    ["Skyeand Lochaber and Badenoch","Highland","SNP",2834,4112,9742,14737,490],["Greenock and Inverclyde","Inverclyde","Lab",2011,12387,1934,11876,0],
    ["Midlothian North and Musselburgh","Midlothian","SNP",2541,11083,1254,14079,861],
    ["Midlothian South and Tweeddale and Lauderdale","Midlothian","SNP",3743,5312,8931,13855,0],["Moray","Moray","SNP",5873,3580,1327,16817,999],
    ["Cunninghame North","North Ayshire","SNP",4032,9422,543,15539,0],["Cunninghame South","North Ayshire","SNP",1871,8645,547,10993,0],
    ["Airdrie and Shotts","North Lanarkshire","SNP",1396,9983,531,11984,0],["Coatbridge and Chryston","North Lanarkshire","Lab",1317,12161,381,9420,0],
    ["Cumbernauld and Kilsyth","North Lanarkshire","SNP",1156,10136,367,13595,0],["Motherwell and Wishaw","North Lanarkshire","Lab",1753,10713,367,10126,1492],
    ["Uddingston and Bellshill","North Lanarkshire","Lab",2117,11531,530,10817,0],["Orkney Islands","Orkney Islands","LD",686,458,2912,2044,2052],
    ["Perthshire North","Perthshire and Kinross","SNP",7866,2672,1196,18219,0],["Perthshire South and Kinross-shire","Perthshire and Kinross","SNP",8907,3980,2256,16073,0],
    ["Paisley","Renfrewshire","SNP",2229,10665,1783,10913,0],["Renfrewshire North and West","Renfrewshire","SNP",5489,9946,550,11510,0],
    ["Renfrewshire South","Renfrewshire","Lab",2917,12933,702,10356,0],["Ettrickand Roxburgh and Berwickshire","Scottish Borders","C",12933,2986,4990,7599,308],
    ["Shetland Islands","Shetland Islands","LD",330,620,4462,1134,2845],["Ayr","South Ayrshire","C",12997,7779,713,11884,0],
    ["Clydesdale","South Lanarkshire","SNP",4291,10715,0,14931,0],["East Kilbride","South Lanarkshire","SNP",2260,12410,468,14359,414],
    ["Hamilton and Larkhall and Stonehouse","South Lanarkshire","SNP",2547,9989,616,12202,0],["Stirling","Stirling","SNP",4610,9188,1296,14858,454],
    ["Dumbarton","West Dunbartonshire","Lab",3395,12562,858,10923,770],["Almond Valley","West Lothian","SNP",1886,11162,656,16704,329],
    ["Linlithgow","West Lothian","SNP",2646,12936,1015,17027,558]];

var parties = ["Conservative", "Labour", "Liberal Democrats", "SNP", "Other"];

var partyWinner = {"Aberdeen":"SNP","Aberdeenshire":"SNP","Angus":"SNP","Argyll and Bute":"SNP",
    "Clackmannanshire":"SNP","Dumfries and Galloway":"Labour","Dundee":"SNP","East Ayrshire":"SNP",
    "East Dunbartonshire":"SNP","East Lothian":"Labour","East Renfrewshire":"Labour","Edinburgh":"SNP",
    "Eilean Siar":"SNP","Falkirk":"SNP","Fife":"SNP","Glasgow":"SNP","Highland":"SNP","Inverclyde":"Labour",
    "Midlothian":"SNP","Moray":"SNP","North Ayshire":"SNP","North Lanarkshire":"Labour",
    "Orkney Islands":"Liberal Democrats","Perthshire and Kinross":"SNP","Renfrewshire":"SNP",
    "Scottish Borders":"Conservative","Shetland Islands":"Liberal Democrats","South Ayrshire":"Conservative",
    "South Lanarkshire":"SNP","Stirling":"SNP","West Dunbartonshire":"Labour","West Lothian":"SNP"};

var partyWinnerColors = {
    "Conservative":"rgb(0,136,214)",
    "Labour":"rgb(225,31,39)",
    "Liberal Democrats":"rgb(253,161,56)",
    "SNP":"rgb(254,254,83)"
};

var partyWinner1 = ["Conservative", "Labour", "Liberal Democrats", "SNP"];

var oildata = {"1970":0,"1971":0,"1972":1,"1973":2,"1974":3,"1975":58,"1976":645,"1977":2226,"1978":2806,"1979":5694,
    "1980":8851,"1981":12341,"1982":14441,"1983":17024,"1984":20586,"1985":19896,"1986":9295,"1987":9871,"1988":7333,
    "1989":7486,"1990":8709,"1991":7963,"1992":7810,"1993":8633,"1994":9492,"1995":10495,"1996":12599,"1997":11027,
    "1998":8038,"1999":10984,"2000":17392,"2001":14609,"2002":14523,"2003":14470,"2004":14743,"2005":18242,"2006":19843,
    "2007":20653,"2008":27306,"2009":18075,"2010":22610,"2011":26525,"2012":23685,"2013":21330};

var gasdata = {"1970":0,"1971":80,"1972":114,"1973":133,"1974":166,"1975":190,"1976":258,"1977":317,"1978":432,"1979":538,
    "1980":647,"1981":843,"1982":956,"1983":1117,"1984":1290,"1985":1709,"1986":1927,"1987":1990,"1988":2046,"1989":2187,
    "1990":2377,"1991":2988,"1992":3016,"1993":3568,"1994":3836,"1995":4141,"1996":5295,"1997":5254,"1998":5313,"1999":5031,
    "2000":6606,"2001":8140,"2002":8199,"2003":7554,"2004":7476,"2005":9014,"2006":11189,"2007":8398,"2008":10612,
    "2009":5790,"2010":7755,"2011":7890,"2012":7375,"2013":7150};

var otherdata = {"1970":4,"1971":8,"1972":9,"1973":11,"1974":21,"1975":29,"1976":21,"1977":20,"1978":12,"1979":44,"1980":82,"1981":114,"1982":160,"1983":188,"1984":256,"1985":384,"1986":455,"1987":533,"1988":859,"1989":547,"1990":405,"1991":476,"1992":626,"1993":699,"1994":974,"1995":1166,"1996":1243,"1997":1279,"1998":1453,"1999":1436,"2000":1488,"2001":1435,"2002":1397,"2003":1538,"2004":1178,"2005":1451,"2006":1658,"2007":1814,"2008":1816,"2009":1800,"2010":1800,"2011":1800,"2012":1800,"2013":1800};