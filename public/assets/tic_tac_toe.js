var board=[0,1,2,3,4,5,6,7,8];

var player_no = -1;
var player_choice = -1;
var AI_choice=-1;
var counter=1; // for multiplayer
var options={
"player_no": ["Single Player", " Multi Player"],
"choose_sign": ["Choose X", "Choose O"]
}
function show_result(result){
$('.result').html(result);
  $('.result').css('display','block');
$(".back_button").find('span').html('');
$(".back_button").find('.fa-arrow-left').toggleClass('fa-arrow-left fa-sync');
$('.back_button').css('display','block'); 
$('.game_board').css('opacity', '0.15');
$('.monitor').css('display','block');
}
function getOptions(key){
$('#opt1').html(options[key][0]);
$('#opt2').html(options[key][1]);
}
$(document).ready(function(){

$('.game_board').css('opacity', '0.15');
getOptions("player_no");

$('#opt1, #opt2').click(function(){


  var id = $(this).attr('id');
  if(player_no=== -1 &&  player_choice=== -1){
    player_no = id; //single player, player_no = opt1
    $('.back_button').css('display','block');
    getOptions("choose_sign");
  }else if(player_no != -1 &&  player_choice=== -1){
    player_choice = id; //X, player_choice = opt1
  }
  if(player_no != -1 &&  player_choice != -1){
    $('.monitor').css('display','none');
    $('.game_board').css('display','block');
    $('#opt1').css('display','none');
    $('#opt2').css('display','none');
    $('.back_button').css('display','none');
    $('.game_board').css('opacity', '1');

    if ( player_choice=== "opt1"){
      player_choice="X";
      AI_choice="O";
    }else{
      player_choice = "O";
      AI_choice="X";
    }

    // game_start();
  }
  $('.back_button').click(function(){  
    $(".back_button").find('.fa fa-sync').toggleClass('fa fa-sync fas fa-arrow-left ');
     $('.result').css('display','none');
    $(".back_button").css('display','none');
    $('#opt1').css('display','block');  
   $('#opt2').css('display','block');      
    $('.move').html('');
    getOptions("player_no");
    player_no=-1;
    player_choice=-1;      
    board=[0,1,2,3,4,5,6,7,8];


  });//end of back button


});  //end of options



$('.col-md-4 ').click(function(){
  const coop = $(this).children();    // box where player clicked = coop
  const isValid =checkValidMove(coop.data('move'));
  if ( isValid && player_no === 'opt1'){
    board[coop.data('move')]= player_choice;
    coop .html(player_choice);
    const AI_move= min_max(board, 0, AI_choice);

    if(checkValidMove(AI_move)){
      board[AI_move]=AI_choice; 
      $("span[data-move="+AI_move+"]").html(AI_choice);
    }
    if(AI_move===0 && gameState(board)=== true){ //means board is full
      show_result("DRAW");

    }else if(gameState(board)=== AI_choice){

      show_result("COMPUTER WINS");
    }

  } //end of single player
  else if ( isValid && player_no === 'opt2'){
    if(counter %2 === 1){ //player 1 is playing
      board[coop.data('move')]= player_choice;
      coop .html(player_choice);        
    }else{
      board[coop.data('move')]= AI_choice;    //AI is player 2 now
      coop .html(AI_choice);        
    }
    if(gameState(board)=== true){ //means board is full
      show_result("DRAW");

    }else if(gameState(board)=== AI_choice){
      show_result( AI_choice +" WINS");
    }else if(gameState(board)=== player_choice){
      show_result( player_choice +" WINS");
    }

    counter ++;

  }


  // console.log(board);
}); //end of player move


});  //end of ready




// end of the drama 

function gameState(arr){
var board_full= true;
for(var i=0; i <=2 ;i ++){
  if((arr[i]===arr[i+3] &&  arr[i+3]===arr[i+6]) || //checking vertically
     (i==0 && arr[i]==arr[i+4] && arr[i+4]===arr[i+8] || (i==2 && arr[i]==arr[i+2] && arr[i+2]===arr[i+4]))	) //check diagonally
  { 	
    return arr[i];        

  }

}
for(var i=0; i <arr.length ;i+=3){
  if(arr[i]===arr[i+1] &&  arr[i+1]===arr[i+2]) //checking horizontally
  {
    return arr[i];
  }
}

for(var i=0; i<arr.length ;i+=1){
  if(arr[i] !=AI_choice && arr[i] !=player_choice ) //checking if board is full
  {      
    board_full= false;     
  }
}

return board_full;


};
function checkValidMove(index){
if(board[index] === AI_choice || board[index] === player_choice){
  return false;
}

return true;

};

function min_max(game_board, depth, player){


var state = gameState(game_board);
if(state === player_choice){ // human is winning        
  return depth-10;
}else if(state === AI_choice){ //AI is winning        
  return depth + 10;
} else if(state === false){ //board is not full, can continue
  var score=[];

  for( var i=0 ;i < game_board.length; i++){    
    if(game_board[i] !=AI_choice && game_board[i] !=player_choice ){
      let new_board = game_board. slice();
      new_board[i] = player;

      const v =min_max(new_board, depth+1 , player===player_choice? AI_choice: player_choice);
      score.push({
        'index': i,
        'value':v
      }); 

    }
  } //end of finding empty box

  if( player===player_choice){

    const v=  score.reduce(function(prev, curr) {
      return prev.value < curr.value ? prev : curr;
    });

    if(depth===0){
      return v.index;
    }else{
      return v.value;
    } 

  }else{
    const v=  score.reduce(function(prev, curr) {
      return prev.value> curr.value ? prev : curr;
    });
    if(depth===0){
      return v.index;
    }else{
      return v.value;
    }
  }
}else{  //board is full, none is winning
  //console.log("state is full so sttate= true"+state);
  return 0;
}




} //end of min_max








