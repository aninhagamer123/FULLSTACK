let canvas = document.getElementById('meuCanvas');
let ctx = canvas.getContext('2d');

ctx.fillStyle = "white";
ctx.fillRect(0, 0, 300, 300);

// Texto
ctx.fillStyle = "black";
ctx.font = "18px Arial";
ctx.fillText("Canvas", 119, 45);

// Quadrado azul sup esquerdo
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 50, 50);

// Quadrado vermelho sup direito
ctx.fillStyle = "red";
ctx.fillRect(250, 0, 50, 50);

// Retangulos cyan laterais
ctx.fillStyle = "cyan";
ctx.fillRect(0, 125, 22, 60);
ctx.fillStyle = "cyan";
ctx.fillRect(278, 135, 28, 40);

// Linha horizontal verde
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 1.5;
ctx.moveTo(0, 155);
ctx.lineTo(300, 155);
ctx.stroke();

// Semicírculos verdes abrindo para CIMA
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 1.5;
ctx.arc(150, 155, 75, Math.PI, 0, false);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 1.5;
ctx.arc(150, 155, 50, Math.PI, 0, false);
ctx.stroke();

// Linha diagonal azul
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 1.5;
ctx.moveTo(50, 50);
ctx.lineTo(150, 155);
ctx.stroke();

// Linha diagonal vermelha
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1.5;
ctx.moveTo(250, 50);
ctx.lineTo(150, 155);
ctx.stroke();

// Círculo ciano grande centro superior
ctx.beginPath();
ctx.fillStyle = "cyan";
ctx.arc(150, 128, 14, 0, Math.PI * 2);
ctx.fill();
ctx.strokeStyle = "darkblue";
ctx.lineWidth = 2;
ctx.stroke();

// Linha vertical verde
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 1.5;
ctx.moveTo(150, 155);
ctx.lineTo(150, 300);
ctx.stroke();

// Quadrado vermelho abaixo da linha
ctx.fillStyle = "red";
ctx.fillRect(112, 155, 38, 38);


// Círculo ciano grande centro inferior
ctx.beginPath();
ctx.fillStyle = "cyan";
ctx.arc(150, 300, 45, Math.PI, 0, false);
ctx.fill();
ctx.strokeStyle = "green";
ctx.lineWidth = 1.5;
ctx.stroke();

// Círculos amarelos
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.arc(80, 215, 20, 0, Math.PI * 2);
ctx.fill();
ctx.strokeStyle = "green";
ctx.lineWidth = 1;
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.arc(220, 215, 20, 0, Math.PI * 2);
ctx.fill();
ctx.strokeStyle = "green";
ctx.lineWidth = 1;
ctx.stroke();

// Semicírculos verdes abrindo para BAIXO (abraçando o ciano)
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 1.5;
ctx.arc(150, 300, 80, Math.PI, 0, false);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 1.5;
ctx.arc(150, 300, 60, Math.PI, 0, false);
ctx.stroke();

ctx.arc(150, 300, 80, 0, Math.PI, false);
ctx.arc(150, 300, 60, 0, Math.PI, false);

// Quadrado amarelo inf esquerdo (formato escada)
ctx.fillStyle = "yellow";
ctx.fillRect(0, 230, 35, 35);  // parte de cima
ctx.fillRect(0, 265, 60, 60);  // parte de baixo menor

// Escada preta inf direito
ctx.fillStyle = "black";
ctx.fillRect(246, 270, 35, 35);
ctx.fillRect(266, 240, 70, 70);