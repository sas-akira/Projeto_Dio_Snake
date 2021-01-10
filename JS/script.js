let canvas = document.getElementById("snake"); //id 
let context = canvas.getContext("2d"); 
let box = 32;
let snake = []; //cria array snake 
snake[0] ={
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food ={
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16*box, 16*box); 
}

function criarCobrinha (){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood (){
    context.fillStyle = "#EB6B6B";
    context.fillRect(food.x, food.y, 16, 16);
}

document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up') direction = 'down';
}

function iniciarJogo(){    
//To do 1: Limpar código - mudar lógica ou agrupar as 4 condições seguintes (Fim de jogo ao encostar nas bordas)
//To do 2: Passar a pontuação (tamanho do array snake) para a página para mostrar a pontuação durante o jogo
//To do 3: Incrementar a velocidade por nível de pontuação e colocar efeitos sonoros

    if(snake[0].x > 15 * box && direction == "right") {
        clearInterval(jogo);
        alert("Fim de Jogo ! \n "+"Seu Score: "+snake.length);
    }
    if(snake[0].x < 0 && direction == 'left') {
        clearInterval(jogo);
        alert("Fim de Jogo ! \n"+"Seu Score: "+snake.length);
    }
    if(snake[0].y > 15 * box && direction == "down") {
        clearInterval(jogo);
        alert("Fim de Jogo ! \n"+"Seu Score: "+snake.length);
    }
    if(snake[0].y < 0 && direction == 'up') {
        clearInterval(jogo);
        alert("Fim de Jogo ! \n"+"Seu Score: "+snake.length);
    }
    
    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert("Fim de Jogo ! \n"+"Seu Score: "+snake.length);
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop(); 
    }else{
        food.x = Math.floor(Math.random() * 15 +1) * box;
        food.y = Math.floor(Math.random() * 15 +1) * box;
    }
    
    let newHead ={
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); 
}

let jogo = setInterval(iniciarJogo, 100);