function display(arr){
		var temp='';
		arr.map(function(elem,index){
			temp +=elem+' ';
			if( (index+1)%3 === 0){
				console.log(temp);
				temp='';
			}
		})
}
function gameState(arr,sign){
	var count = 0;
  for(var i=0; i <=2 ;i ++){
  	if((arr[i]===arr[i+3] &&  arr[i+3]===arr[i+6]) || //checking vertically
    		(i==0 && arr[i]==arr[i+4] && arr[i+4]===arr[i+8] || (i==2 && arr[i]==arr[i+2] && arr[i+2]===arr[i+4]))	) //check diagonally
    {
    	if(arr[i]==sign){      	
    			count ++;
      }
    }
   
    
  }
  for(var i=0; i <=8 ;i+=3){
    if(arr[i]===arr[i+1] &&  arr[i+1]===arr[i+2]) //checking horizontally
    {
      if(arr[i]==sign){      	
    			count ++;
      }
    }
  }
  //console.log(" \n");
  return count;
}

function checkValidMove(arr, index){
	if(typeof arr[index]!= "number"){
		alert("invalid index");
		return false;
	}
	else if(typeof index != "number"){
		alert("invalid input"+ (typeof index));
		return false;
		
	}
	return true;
	
}








function next_move(arr,sign){

   var move= -100;
    var max=-100;
    var min=-100;

   	
    for(var i=0; i<arr.length; i++){
		
		if( arr[i] != "X" && arr[i] !="O"){      
			
		
			var temp= arr.slice(0);
			
			temp[i]=sign;
			
			//console.log("now sign "+sign);
			//display(temp);
			
			var state=gameState(temp, sign);
			if(state > max){
				max = state;
				
			}
			if(state>0 && min<0){
				min=0;
				//console.log(sign+" win1");
				move=i;
				continue;
				
			}else if (state>0){
				//console.log(sign+" win2");
				move=i;
				continue;
			}
			
			sign==="X"? sign="O":sign="X";
			//console.log("change sign:"+sign);
			var state2 =  next_move(temp,sign);
			
			if(state2[0] > min){
				min= state2[0];
				move= state2[1];
			}
			if(max < Math.abs(min)){
				move= state2[1];
			}
					
		}
	}
	if(max===-100){
		//var state=gameState(temp, sign);
		//console.log("dead end sign:"+sign);
		//display(arr);
		//console.log("###############");
		return [gameState(arr, sign), -10];
	}
	return [max-min, move];
}

function tic_tac_toe(){
	var board=[0,1,2,3,4,5,6,7,8];
	var flag=true;
	var move= true;
	display(board);
	var count=0;
	while(count<4){
		console.log(count);
		
		
		var input= parseInt (prompt("input please"));
		move = checkValidMove(board, input);
		if(move == false){
			move= true;
			continue;
		}
		board[input]="X";
		display(board);
		console.log("\n");
		var state= gameState(board);
		if(state>0){
			alert("X win");
			break;
		}
		
			
		var AI_move = next_move(board,"O");		
		board[AI_move[1]]="O";
		display(board);
		state= gameState(board);
		if(state>0){
			alert("O win");
			break;
		}
		
		count++;
		
	}
		
		
}
//tic_tac_toe();