$(function(){"use strict";$(".counter").each(function(){$(this).prop("Counter",0).animate({Counter:$(this).text()},{duration:3e3,easing:"swing",step:function(e){$(this).text(Math.ceil(e)),$(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"))}})});var e=$("#chart_verticalBar"),t=(new Chart(e,{type:"bar",data:{labels:["Mon","Tue","Wed","Thr","Fri","Sat"],datasets:[{label:"Dataset 1",data:[12,19,3,5,2,3],backgroundColor:"#ff0000"},{label:"Dataset 2",data:[10,11,7,6,6,9],backgroundColor:"#0000ff"},{label:"Dataset 2",data:[14,15,8,9,7,4],backgroundColor:"#DDD"}]},options:{legend:{display:!1},tooltips:{mode:"index",intersect:!1},responsive:!0,scales:{xAxes:[{stacked:!0}],yAxes:[{stacked:!0}]}}}),$("#chart_pie"));new Chart(t,{type:"pie",data:{labels:["DNS","Mail","Router","Blog"],datasets:[{label:"Visitors",data:[19023,104962,11107,76551],backgroundColor:["#ff0000","#ff9900","#0000FF","rgba(75, 192, 192, 1)"]}]},options:{legend:{display:!1},responsive:!1}});$("#mytable").DataTable({order:[[3,"desc"]]}),$.fn.peity.defaults.pie={delimiter:null,fill:["#563d7c","#e0e0e0","#b2dfdb"],height:null,radius:8,width:null},$("span.pie").peity("pie"),$("#refresh1").refreshMe({parentSelector:function(e){e.html(".card")}})});