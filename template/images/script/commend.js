// JavaScript Document


function Show_spmenu(YKTabid_num,YKTabnum){
for(var i=0;i<3;i++){document.getElementById("spmenuCon_"+YKTabid_num+i).style.display="none";}
for(var i=0;i<3;i++){document.getElementById("spmenuMu_"+YKTabid_num+i).className="";}
document.getElementById("spmenuMu_"+YKTabid_num+YKTabnum).className="spmenuOn";
document.getElementById("spmenuCon_"+YKTabid_num+YKTabnum).style.display="block";
} 




function Show_spmenu1(YKTabid_num,YKTabnum){
for(var i=0;i<3;i++){document.getElementById("spmenuCon1_"+YKTabid_num+i).style.display="none";}
for(var i=0;i<3;i++){document.getElementById("spmenuMu1_"+YKTabid_num+i).className="";}
document.getElementById("spmenuMu1_"+YKTabid_num+YKTabnum).className="spmenuOn1";
document.getElementById("spmenuCon1_"+YKTabid_num+YKTabnum).style.display="block";
} 