const cell = document.querySelectorAll(".cell");
const playerOne = document.querySelector(".player1");
const playerTow = document.querySelector(".player2");


//factory function for player
const player = (name,mark) => {
    this.mark = mark;
    return { name,mark};
  };



//module pattern for game board  
const gameBoard = (() => {

    let gameB = createNewGB();

    function createNewGB(){
        let GB =[];
        //loop create an empty game board 
        for (let i=0;i<9;i++){
            GB[i] = cell();
        } 
        return GB;  
    }


    function cell(){
        let mark = "";

        return{mark}
    };

    return {
        gameB,
        createNewGB
    };
  })(); 

//AI LEAGAL MOVES
const AI = () => {
    const move = (() => {
        let id;
        while(true){
            id = getRandomInt();
            if (gameBoard.gameB[id].mark==""){
                break;
            }

        } 
        return {id}  
    }

    )(); 
    function getRandomInt() {
        return Math.floor(Math.random() * 8);
    }
    
    console.log ("AI played  :"+move.id);
    return{
        move
    }

};

//AI SMART MOVES///////////////////////////////
//let board = gameBoard.gameB;
const AISmart = (board) => {
    move = (() => {
        let id;
        return {id};
    })();

    let bestScore = -Infinity;
    for(let i=0 ; i < board.length ;i++){
        if (board[i].mark==""){
            board[i].mark="O" 
            let score = minimax(board,false);
            board[i].mark="";
            if(score > bestScore){
                bestScore = score;
                move.id = i;

            }
        }
        //console.log( "the best score is  "+bestScore);
        //console.log("the best move is  "+move.id);
    }
    return {move};
  };
///////////////////////////////////////////////
function minimax (board1,isMaximizing){
    if(verifyWinner("O")){
        return 1;
    }
    if(verifyWinner("X")){
        return -1
    }
    
    
    if(gameOver()){
        return 0;
    }
    if (isMaximizing){
        let bestScore = -Infinity;
        for(let i=0 ; i<board1.length ;i++){
            if (board1[i].mark==""){
                board1[i].mark="O" 
                let score = minimax(board1,false);
                board1[i].mark=""; 
                //bestScore = Max(score,bestScore);
                if(score > bestScore){
                    bestScore = score;
                }
            }
        }
        return bestScore;
    }
    if (!isMaximizing){
        let bestScore = Infinity;
        for(let i=0 ; i<board1.length ;i++){
            if (board1[i].mark==""){
                board1[i].mark="X" 
                let score = minimax(board1,true);
                board1[i].mark=""; 
                //bestScore = Min(score,bestScore);
                if(score < bestScore){
                    bestScore = score;
                }
            }
        }
        return bestScore;
    }
}

function available(board){
    let newB = [];
    for(let i=0 ;i<board.length ;i++){
        if (board[i].mark ==""){
            newB.push(i);
        }
    }
    return newB;
}

// function minimax (board,debt){
//     if(!gameOver()){
//         let valid = available(board);
//         for (let i = 0; i < valid.length; i++) {
             
//         }  
//     }
    
//     return{move}
// }
  
const theGame = (() => {
    let player1 = player("ismail","x");
    let player2 = player("akil","o");
    let turn = 0;

    function play(cell){
        if(!turn){
            
        } 
    }

    return {
        player1,
        player2,
        turn
    }
    }
    )();


    function toggleTurn(){
        if(theGame.turn == 0){
            theGame.turn = 1
            playerOne.style.color = "black";
            playerOne.style.border = "none";
            playerTow.style.color = "yellowGreen";
            playerTow.style.border = "1px dashed red";
        }else{
            theGame.turn = 0
            playerTow.style.color = "black";
            playerTow.style.border = "none";
            playerOne.style.color = "yellowGreen";
            playerOne.style.border = "1px dashed red";
        }
        
    }

    function play(box1,z){
        //console.log( "#########"+box1.id+"###########")
        if(gameBoard.gameB[box1.id].mark === ""){
            gameBoard.gameB[box1.id].mark = z;
            clean();
            toggleTurn();
        }else{
            console.log("token");
            theGame.turn = 0
            playerTow.style.color = "black";
            playerTow.style.border = "none";
            playerOne.style.color = "yellowGreen";
            playerOne.style.border = "1px dashed red";
        }
    }

    function verifyWinner(cell) {
        //console.log(cell);
        while(true){
            if (cell == gameBoard.gameB[0].mark){
                //console.log("-------"+0);
                if(cell==gameBoard.gameB[1].mark && cell==gameBoard.gameB[2].mark){
                    //console.log(1);
                    return gameBoard.gameB[0];
                    break;
                }else if(cell==gameBoard.gameB[3].mark && cell==gameBoard.gameB[6].mark){
                    //console.log(3);
                    return gameBoard.gameB[0];
                    break;
                }else if(cell==gameBoard.gameB[4].mark && cell==gameBoard.gameB[8].mark){
                    //console.log(4);
                    return gameBoard.gameB[0];
                    break;
                }
            }
                
            if (cell == gameBoard.gameB[1].mark){
                //console.log("--------"+1);
                if(cell==gameBoard.gameB[4].mark && cell==gameBoard.gameB[7].mark){
                    //console.log(4);
                    return gameBoard.gameB[1];
                    break;
                }
            }
                
            if (cell == gameBoard.gameB[2].mark){
                //console.log("--------"+2);
                if(cell==gameBoard.gameB[5].mark && cell==gameBoard.gameB[8].mark){
                    //console.log(5);
                    return gameBoard.gameB[2];
                    break;
                }else if(cell==gameBoard.gameB[4].mark && cell==gameBoard.gameB[6].mark){
                    //console.log(4);
                    return gameBoard.gameB[6];
                    break;
                }
            }
                
            if (cell == gameBoard.gameB[3].mark){
                //console.log("--------"+3);
                if(cell==gameBoard.gameB[4].mark && cell==gameBoard.gameB[5].mark){
                    //console.log(4);
                    return gameBoard.gameB[3];
                    break;
                }
            }
                
            if (cell == gameBoard.gameB[6].mark){
                //console.log("--------"+6);
                if(cell==gameBoard.gameB[7].mark && cell==gameBoard.gameB[8].mark){
                    //console.log(7);
                    return gameBoard.gameB[6];
                    break;
                }
            }
            break;
        }
    }

    function clean() {
        for (let i=0 ;i<9 ;i++){
            cell[i].innerHTML = "<div>"+gameBoard.gameB[i].mark+"</div>";
        }   
    }

    function gameOver(){
        for(let i=0 ;i<9 ;i++){
            if(!gameBoard.gameB[i].mark){
                return false;
            }
        }
        return true;
    }

    //clicking on game board 


    cell.forEach(box => {
        box.addEventListener('click', () => {
            if(theGame.turn==0){
                play(box,"X"); 
                if (verifyWinner("X")){
                    console.log("the winner is  "+theGame.player1.name);
                    gameBoard.gameB = gameBoard.createNewGB();
                    clean();
                    toggleTurn();
                    return;
                } 
                if (gameOver()){
                    console.log("it's a tie");
                    gameBoard.gameB = gameBoard.createNewGB();
                    clean();
                    toggleTurn(); 
                    return;
                } 
            }else{
                play(box,"O"); 
                if (verifyWinner("O")){
                    console.log("the winner is  "+theGame.player2.name);
                    gameBoard.gameB = gameBoard.createNewGB();
                    clean();
                    return;
                }  
                if (gameOver()){
                    console.log("it's a tie");
                    gameBoard.gameB = gameBoard.createNewGB();
                    clean();  
                    return;
                } 
            }
            
            if(theGame.turn==1){    
                play(AISmart(gameBoard.gameB).move,"O")
                if (verifyWinner("O")){
                    console.log("the winner is AI ");
                    gameBoard.gameB = gameBoard.createNewGB();
                    clean();
                    return;
                } 
            }
        });
    });

//theGame END

  //experimental script