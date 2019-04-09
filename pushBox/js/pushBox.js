var playerX,playerY,playermap;//玩家的位置以及当前的地图
var firstplayermap;//储存初始化的地图信息
$('p').hide();//隐藏输赢信息
//移动
function move(){
    $('p').hide();//隐藏输赢信息
    $(document).off();//解绑之前document的绑定函数
$(document).keydown(function(e){
    //绑定键盘输入，上下左右与‘wsad’控制方向
    
    //向左
    if(e.keyCode=='37'||e.keyCode=='65'){
        if($('#map'+playerX+(playerY-1)).css('backgroundColor')=='rgb(0, 0, 255)'){
            //向左是路
            $('#map'+playerX+(playerY-1)).addClass('map5');
            $('#map'+playerX+playerY).removeClass('map5');
            playermap[playerX][playerY]=firstplayermap[playerX][playerY]==4?4:2;
            playermap[playerX][playerY-1]=5;
            playerY-=1;
        }else{
            if($('#map'+playerX+(playerY-1)).css('backgroundColor')=='rgb(255, 0, 0)'){
                //向左是箱子
                if($('#map'+playerX+(playerY-2)).css('backgroundColor')!='rgb(0, 0, 0)'&&$('#map'+playerX+(playerY-2)).css('backgroundColor')!='rgb(255, 0, 0)'){
                    //向左的箱子再向左不是箱子或墙，可以移动时
                    $('#map'+playerX+(playerY-1)).removeClass('map3').addClass('map5');
                    $('#map'+playerX+playerY).removeClass('map5');
                    $('#map'+playerX+(playerY-2)).addClass('map3');
                    
                    if(firstplayermap[playerX][playerY-2]==2||firstplayermap[playerX/1][playerY-2]==3||firstplayermap[playerX/1][playerY-2]==5){
                        //向左的箱子再向左是路
                        playermap[playerX][playerY]=firstplayermap[playerX][playerY]==4?4:2;
                        playermap[playerX][playerY-1]=5;
                        playermap[playerX][playerY-2]=3;
                    }else{
                        //向左的箱子再向左是箱子应该到达的位置
                        playermap[playerX][playerY]=firstplayermap[playerX][playerY]==4?4:2;
                        playermap[playerX][playerY-1]=5;
                        playermap[playerX][playerY-2]=6; 
                    }
                    playerY-=1;
                }
            }
        }
    }
    //向上
    if(e.keyCode=='38'||e.keyCode=='87'){
        if($('#map'+(playerX-1)+(playerY)).css('backgroundColor')=='rgb(0, 0, 255)'){
             //向上是路
            $('#map'+(playerX-1)+(playerY)).addClass('map5');
            $('#map'+playerX+playerY).removeClass('map5');
            playermap[playerX][playerY]=firstplayermap[playerX][playerY]==4?4:2;
            playermap[playerX-1][playerY]=5;
            playerX-=1;
        }else{
            if($('#map'+(playerX-1)+(playerY)).css('backgroundColor')=='rgb(255, 0, 0)'){
                 //向上是箱子
                if($('#map'+(playerX-2)+(playerY)).css('backgroundColor')!='rgb(0, 0, 0)'&&$('#map'+(playerX-2)+(playerY)).css('backgroundColor')!='rgb(255, 0, 0)'){
                    //向上的箱子再向上不是箱子或墙，可以移动时
                    $('#map'+(playerX-1)+(playerY)).addClass('map5').removeClass('map3');
                    $('#map'+playerX+playerY).removeClass('map5');
                    $('#map'+(playerX-2)+(playerY)).addClass('map3');
                    if(firstplayermap[playerX-2][playerY]==2||firstplayermap[playerX/1-2][playerY]==3||firstplayermap[playerX/1-2][playerY]==5){
                        //向上的箱子再向上是路
                        playermap[playerX][playerY]=firstplayermap[playerX][playerY]==4?4:2;
                        playermap[playerX-1][playerY]=5;
                        playermap[playerX-2][playerY]=3;
                    }else{
                        //向上的箱子再向上是箱子应该到达的位置
                        playermap[playerX][playerY]=firstplayermap[playerX][playerY]==4?4:2;
                        playermap[playerX-1][playerY]=5;
                        playermap[playerX-2][playerY]=6; 
                    }
                    playerX-=1;
                }
            }
        }
    }
    //向右
    if(e.keyCode=='39'||e.keyCode=='68'){
        if($('#map'+playerX+(playerY/1+1)).css('backgroundColor')=='rgb(0, 0, 255)'){
             //向右是路
            $('#map'+playerX+(playerY/1+1)).addClass('map5');
            $('#map'+playerX+playerY).removeClass('map5');
            playermap[playerX][playerY]=firstplayermap[playerX][playerY]==4?4:2;
            playermap[playerX][playerY/1+1]=5;
            playerY=playerY/1+1;
        }else{
            if($('#map'+playerX+(playerY/1+1)).css('backgroundColor')=='rgb(255, 0, 0)'){
                //向右是箱子
                if($('#map'+playerX+(playerY/1+2)).css('backgroundColor')!='rgb(0, 0, 0)'&&$('#map'+playerX+(playerY/1+2)).css('backgroundColor')!='rgb(255, 0, 0)'){
                   //向右的箱子再向右不是箱子或墙，可以移动时
                    $('#map'+playerX+(playerY/1+1)).addClass('map5').removeClass('map3');
                    $('#map'+playerX+playerY).removeClass('map5');
                    $('#map'+playerX+(playerY/1+2)).addClass('map3');
                    if(firstplayermap[playerX][playerY/1+2]==2||firstplayermap[playerX][playerY/1+2]==3||firstplayermap[playerX][playerY/1+2]==5){
                        //向右的箱子再向右是路
                        playermap[playerX][playerY]=firstplayermap[playerX][playerY]==4?4:2;
                        playermap[playerX][playerY/1+1]=5;
                        playermap[playerX][playerY/1+2]=3;
                    }else{
                        //向右的箱子再向右是箱子应该到达的位置
                        playermap[playerX][playerY]=firstplayermap[playerX][playerY]==4?4:2;
                        playermap[playerX][playerY/1+1]=5;
                        playermap[playerX][playerY/1+2]=6; 
                    }
                    playerY=playerY/1+1;
                }
            }
        }
    }
    //向下
    if(e.keyCode=='40'||e.keyCode=='83'){
        if($('#map'+(playerX/1+1)+(playerY)).css('backgroundColor')=='rgb(0, 0, 255)'){
             //向下是路
            $('#map'+(playerX/1+1)+(playerY)).addClass('map5');
            $('#map'+playerX+playerY).removeClass('map5');
            playermap[playerX][playerY]=firstplayermap[playerX][playerY]==4?4:2;
            playermap[playerX/1+1][playerY]=5;
            playerX=playerX/1+1;
        }else{
            if($('#map'+(playerX/1+1)+(playerY)).css('backgroundColor')=='rgb(255, 0, 0)'){
                //向下是箱子
                if($('#map'+(playerX/1+2)+(playerY)).css('backgroundColor')!='rgb(0, 0, 0)'&&$('#map'+(playerX/1+2)+(playerY)).css('backgroundColor')!='rgb(255, 0, 0)'){
                     //向下的箱子再向下不是箱子或墙，可以移动时
                    $('#map'+(playerX/1+1)+(playerY)).addClass('map5').removeClass('map3');
                    $('#map'+playerX+playerY).removeClass('map5');
                    $('#map'+(playerX/1+2)+(playerY)).addClass('map3');
                    if(firstplayermap[playerX/1+2][playerY]==2||firstplayermap[playerX/1+2][playerY]==3||firstplayermap[playerX/1+2][playerY]==5){
                         //向下的箱子再向下是路
                        playermap[playerX][playerY]=firstplayermap[playerX][playerY]==4?4:2;
                        playermap[playerX/1+1][playerY]=5;
                        playermap[playerX/1+2][playerY]=3;
                    }else{
                        //向下的箱子再向下是箱子应该到达的位置
                        playermap[playerX][playerY]=firstplayermap[playerX][playerY]==4?4:2;
                        playermap[playerX/1+1][playerY]=5;
                        playermap[playerX/1+2][playerY]=6; 
                    }
                    playerX=playerX/1+1;
                }
            }
        }
    }
    if(win()==0){
        //赢
        $('#win').show();
        $(document).off();
    }
    if(transport()!=0){
        //输
        $('#transport').show();
        $(document).off();
    }
})
}

function win(){
    //数组中没有3就赢了，即没有在路上的箱子
    var result=0;
    for(var x=0;x<9;x++){
        for(var y=0;y<12;y++){
            if(playermap[x][y]==3)
            result+=1;
        }
    }
    return result;
}
function transport(){
    //当箱子在路上并且无法移动时，输
    var result=0;
    for(var x=0;x<9;x++){
        for(var y=0;y<12;y++){
            if(playermap[x][y]==3){
            if(playermap[x-1][y]==1){
                if(playermap[x][y-1]==1||playermap[x][y+1]==1){
                    result+=1;
                }
            }
            
            if(playermap[x+1][y]==1){
                if(playermap[x][y-1]==1||playermap[x][y+1]==1){
                    result+=1;
                }
            }
        }
        }
    }
    return result;
}

//选择关卡
function selectchecked(){
    if($('select').val()==='Checkpoint1'){
        mapDOM(0);
    }
    if($('select').val()==='Checkpoint2'){
        mapDOM(1);
    }
    if($('select').val()==='Checkpoint3'){
        mapDOM(2);
    }
    if($('select').val()==='Checkpoint4'){
        mapDOM(3);
    }
    if($('select').val()==='Checkpoint5'){
        mapDOM(4);
    }
    if($('select').val()==='Checkpoint6'){
        mapDOM(5);
    }
    if($('select').val()==='Checkpoint7'){
        mapDOM(6);
    }
    if($('select').val()==='Checkpoint8'){
        mapDOM(7);
    }
    if($('select').val()==='Checkpoint9'){
        mapDOM(8);
    }
    if($('select').val()==='Checkpoint10'){
        mapDOM(9);
    }
}

//初始化地图
function mapDOM(a){
    $('.map').removeClass();//移除地图的class
    $('div').addClass('map');//为div添加height与width
    $('.clear').removeClass('map');//清除浮动的结点移除.map
    $('.box').removeClass('map');//整体的地图移除.map
    $('.selectparent').removeClass('map');//选择框移除.map
    var maparr=map[a];//选择地图
    playermap=[0,1,2,3,4,5,6,7,8].map(function(al,key){
        return [...maparr[al]];
    });//初始化playermap
    firstplayermap=[0,1,2,3,4,5,6,7,8].map(function(al,key){
        return [...maparr[al]];
    });//初始化firstplayermap

    for(var x=0;x<9;x++){
        for(var y=0;y<12;y++){
            if(maparr[x][y]===1){
                //墙
                $('#map'+x+y).addClass('map1');
            }
            if(maparr[x][y]===2){
                //路
                $('#map'+x+y).addClass('map2');
            }
            if(maparr[x][y]===3){
                //在路上的箱子
                $('#map'+x+y).addClass('map2');
                $('#map'+x+y).addClass('map3');
            }
            if(maparr[x][y]===4){
                //箱子应该得到的位置
                $('#map'+x+y).addClass('map2');
                $('#map'+x+y).addClass('map4');
            }
            if(maparr[x][y]===5){
                //玩家当前位置
                $('#map'+x+y).addClass('map2');
                $('#map'+x+y).addClass('map5');
                playerX=x;
                playerY=y;
            }
        }
    }
    move();
}
//map储存地图，0表示不可达到的位置（透明），1表示墙，2表示路，
//3表示箱子，4表示箱子应该得到的位置，5表示我当前所在位置
var map=[[
        [0,0,0,0,1,1,1,0,0,0,0,0],
        [0,0,0,0,1,4,1,0,0,0,0,0],
        [0,0,0,0,1,2,1,1,1,1,0,0],
        [0,0,1,1,1,3,2,3,4,1,0,0],
        [0,0,1,4,2,3,5,1,1,1,0,0],
        [0,0,1,1,1,1,3,1,0,0,0,0],
        [0,0,0,0,0,1,4,1,0,0,0,0],
        [0,0,0,0,0,1,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [
        [0,0,1,1,1,1,1,0,0,0,0,0], 
        [0,0,1,5,2,2,1,0,0,0,0,0],
        [0,0,1,2,3,3,1,0,1,1,1,0],
        [0,0,1,2,3,2,1,0,1,4,1,0],
        [0,0,1,1,1,2,1,1,1,4,1,0],
        [0,0,0,1,1,2,2,2,2,4,1,0],
        [0,0,0,1,2,2,2,1,2,2,1,0],
        [0,0,0,1,2,2,2,1,1,1,1,0],
        [0,0,0,1,1,1,1,1,0,0,0,0]
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,1,1,1,0,0,0],
        [0,0,1,2,2,2,2,2,1,1,1,0],
        [0,1,1,3,1,1,1,2,2,2,1,0],
        [0,1,2,5,2,3,2,2,3,2,1,0],
        [0,1,2,4,4,1,2,3,2,1,1,0],
        [0,1,1,4,4,1,2,2,2,1,0,0],
        [0,0,1,1,1,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0],
    ],
    [
        [0,0,0,0,1,1,1,1,0,0,0,0],
        [0,0,0,1,1,2,2,1,0,0,0,0],
        [0,0,0,1,2,5,3,1,0,0,0,0],
        [0,0,0,1,1,2,2,1,1,0,0,0],
        [0,0,0,1,1,3,3,2,1,0,0,0],
        [0,0,0,1,4,3,2,2,1,0,0,0],
        [0,0,0,1,4,4,2,4,1,0,0,0],
        [0,0,0,1,1,1,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [
        [0,0,0,1,1,1,1,1,0,0,0,0],
        [0,0,0,1,2,5,1,1,1,0,0,0],
        [0,0,0,1,2,3,2,2,1,0,0,0],
        [0,0,1,1,1,2,1,2,1,1,0,0],
        [0,0,1,4,1,2,1,2,2,1,0,0],
        [0,0,1,4,3,2,2,1,2,1,0,0],
        [0,0,1,4,2,2,2,3,2,1,0,0],
        [0,0,1,1,1,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [
        [0,0,0,0,1,1,1,1,1,1,1,0],
        [0,0,0,1,1,2,2,1,2,5,1,0],
        [0,0,0,1,2,2,2,1,2,2,1,0],
        [0,0,0,1,3,2,3,2,3,2,1,0],
        [0,0,0,1,2,3,1,1,2,2,1,0],
        [0,1,1,1,2,3,2,1,2,1,1,0],
        [0,1,4,4,4,4,4,2,2,1,0,0],
        [0,1,1,1,1,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,0,0],
        [0,0,1,1,1,2,2,2,2,1,0,0],
        [0,1,1,4,2,3,1,1,2,1,1,0],
        [0,1,4,4,3,2,3,2,2,5,1,0],
        [0,1,4,4,2,3,2,3,2,1,1,0],
        [0,1,1,1,1,1,1,2,2,1,0,0],
        [0,0,0,0,0,0,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [
        [0,0,1,1,1,1,1,1,1,1,1,0],
        [0,0,1,2,2,1,1,2,2,2,1,0],
        [0,0,1,2,2,2,3,2,2,2,1,0],
        [0,0,1,3,2,1,1,1,2,3,1,0],
        [0,0,1,2,1,4,4,4,1,2,1,0],
        [0,0,1,2,1,4,4,4,1,2,1,1],
        [0,1,1,3,2,2,3,2,2,3,2,1],
        [0,1,2,2,2,2,2,1,2,2,5,1],
        [0,1,1,1,1,1,1,1,1,1,1,1]
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,0,0],
        [0,0,0,0,1,2,2,2,2,1,0,0],
        [0,0,1,1,1,3,3,3,2,1,0,0],
        [0,0,1,5,2,3,4,4,2,1,0,0],
        [0,0,1,2,3,4,4,4,1,1,0,0],
        [0,0,1,1,1,1,2,2,1,0,0,0],
        [0,0,0,0,0,1,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0]
    ],    
    [
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,0,0,1,1,1,1],
        [0,1,1,2,2,1,0,0,1,2,2,1],
        [0,1,2,3,2,1,1,1,1,3,2,1],
        [0,1,2,2,3,4,4,4,4,2,3,1],
        [0,1,1,2,2,2,2,1,5,2,2,1],
        [0,0,1,1,1,1,1,1,1,1,1,1],
        [0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0]
    ]];
