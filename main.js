    meanu_list_arry=[]
function getmenu(){
    var htmaldata;
    htmaldata="<o1 class='meanulist'>"
    meanu_list_arry.sort();
    for(var i=0;i<meanu_list_arry.leangth;i++){
        htaldata=htnldata+'<if>' + meanu_list_arry[1]
  '<if>' 
 }
htmaldata=htmaldata+"</O1>"
document.getElementById("display_meanu").innerHTML=htmaldata;
}
function add_item{
    var htmaldata;
    var item=document.getElementById("add_item").value
    meanu_list_arry.push(item);
    meanu_list_arry.sort();
    htmaldata="<section class='cards'>"
    for(var i=0; i<meanu_list_arry.leangth; i++){
        htmaldata=htmaldata+'<div class="cards">'+'<img src="imager/pissaimg.png"/>'+meanu_list_arry[i]+'</div>'
    }
    htmaldata=htmaldata+"</section>"
    document.getElementById("display_addmeanu").innerHTML=htmaldata;
}