// MUSIC
document.addEventListener("click",()=>{
  const music=document.getElementById("bgMusic");
  if(music && music.paused) music.play();
},{once:true});

// SPARKLES
document.addEventListener("click",(e)=>{
  const s=document.createElement("div");
  s.className="sparkle";
  s.style.left=e.clientX+"px";
  s.style.top=e.clientY+"px";
  document.body.appendChild(s);
  setTimeout(()=>s.remove(),300);
});

// LOGIN
function login(){
  window.location.href="game.html";
}

// TIC TAC TOE
let cells=[];
function loadGame(){
  const board=document.getElementById("board");
  if(!board) return;
  for(let i=0;i<9;i++){
    let c=document.createElement("div");
    c.className="cell";
    c.onclick=()=>playerMove(c);
    board.appendChild(c);
    cells.push(c);
  }
}

function playerMove(c){
  if(c.innerText!="") return;
  c.innerText="X";
  aiMove();
}

function aiMove(){
  let free=cells.filter(c=>c.innerText=="");
  if(!free.length) return;
  let pick=free[Math.floor(Math.random()*free.length)];
  pick.innerText="O";
}

// SCRATCH
function loadScratch(){
  const canvas=document.getElementById("scratch");
  if(!canvas) return;
  const ctx=canvas.getContext("2d");
  canvas.width=300;
  canvas.height=200;

  ctx.fillStyle="gray";
  ctx.fillRect(0,0,300,200);

  let draw=false;
  let count=0;

  canvas.onmousedown=()=>draw=true;
  canvas.onmouseup=()=>draw=false;
  canvas.onmousemove=(e)=>{
    if(!draw) return;
    const r=canvas.getBoundingClientRect();
    const x=e.clientX-r.left;
    const y=e.clientY-r.top;
    ctx.globalCompositeOperation="destination-out";
    ctx.beginPath();
    ctx.arc(x,y,20,0,Math.PI*2);
    ctx.fill();

    count++;
    if(count>60){
      document.getElementById("bracelet").style.display="block";
    }
  };
}
