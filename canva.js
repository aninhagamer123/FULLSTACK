let canvas = document.getElementById('meuCanvas');
let ctx = canvas.getContext('2d');

// Céu
ctx.fillStyle = "#80DECC";
ctx.fillRect(0, 0, 300, 300);

// Sol
ctx.beginPath();
ctx.fillStyle = '#FFEE00';
ctx.arc(230, 70, 38, 0, Math.PI * 2);
ctx.fill();
ctx.closePath();

// Chão
ctx.beginPath();
ctx.fillStyle = "#808080";
ctx.fillRect(0, 210, 300, 90);



// Árvore esquerda - tronco
ctx.beginPath();
ctx.fillStyle = '#7B4A1E';
ctx.fillRect(63, 160, 12, 50);
ctx.closePath();
// Árvore esquerda - copa
ctx.beginPath();
ctx.fillStyle = '#2E6B1F';
ctx.arc(69, 150, 24, 0, Math.PI * 2);
ctx.fill();
ctx.closePath();
// Árvore direita - tronco
ctx.beginPath();
ctx.fillStyle = '#7B4A1E';
ctx.fillRect(258, 215, 10, 28);
ctx.closePath();
// Árvore direita - copa
ctx.beginPath();
ctx.fillStyle = '#2E6B1F';
ctx.arc(263, 200, 20, 0, Math.PI * 2);
ctx.fill();
ctx.closePath();
// Casa - corpo
ctx.beginPath();
ctx.fillStyle = '#7B3B1A';
ctx.fillRect(115, 160, 90, 70);
ctx.closePath();
// Casa - porta
ctx.beginPath();
ctx.fillStyle = '#4A2000';
ctx.fillRect(148, 195, 24, 35);
ctx.closePath();
// Casa - janela esquerda
ctx.beginPath();
ctx.fillStyle = '#87CEEB';
ctx.fillRect(122, 170, 22, 18);
ctx.closePath();
// Casa - janela direita
ctx.beginPath();
ctx.fillStyle = '#87CEEB';
ctx.fillRect(176, 170, 22, 18);
ctx.closePath();
// Telhado

ctx.fillStyle = '#D2553A';
ctx.beginPath();
ctx.moveTo(108, 162);
ctx.lineTo(160, 120);
ctx.lineTo(212, 162);
ctx.closePath();
ctx.fill();
ctx.closePath();


// Lago

ctx.beginPath();
ctx.fillStyle = '#6495ED';
ctx.arc(0, 200, 50, 0, Math.PI * 2);
ctx.fillRect(0, 200, 50, 150);
ctx.fillRect(0, 250, 150, 50);
ctx.arc(150, 300, 50, 0, Math.PI * 2);
ctx.fill();
ctx.closePath();