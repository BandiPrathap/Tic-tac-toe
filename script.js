let circleBtn=document.getElementById("circleBtn");
let crossBtn=document.getElementById("crossBtn");
let statusE1=document.getElementById("status");
let reStart=document.getElementById("restart");
let statusContainer=document.getElementById("statusContainer");

let note=document.getElementById("note");

let twoPlayers=document.getElementById("twoPlayers");
let twoPlayersContainer=document.getElementById("twoPlayersContainer");

let box1=document.getElementById("box1");
let box2=document.getElementById("box2");
let box3=document.getElementById("box3");
let box4=document.getElementById("box4");
let box5=document.getElementById("box5");
let box6=document.getElementById("box6");
let box7=document.getElementById("box7");
let box8=document.getElementById("box8");
let box9=document.getElementById("box9");

let twoPlayersBtn="false";
let circleStatus="false";
let crossStatus="false";

	
let resultArray=[
	[1,2,3],
	[4,5,6],
	[7,8,9],
	[1,4,7],
	[2,5,8],
	[3,6,9],
	[1,5,9],
	[3,5,7]
];
let crossArray=[];
let circleArray=[];

circleBtn.onclick=function(){
	
	circleStatus="true";
	crossStatus="false";
};

crossBtn.onclick=function(){
		
	circleStatus="false";
	crossStatus="true";
};


function checkCircleStatus(circleArray,crossArray){
	for (let i of resultArray){
		let c=0;
		for (let j of i){
			for (let k of circleArray){
				if(j===k){
					c+=1;
				}
			}
		}
		if(c===3){
			statusE1.textContent="O is Winner!!";
			statusE1.classList.add("statusE");
			note.classList.add("d-block");
			statusContainer.classList.add("d-block");
			circleBtn.classList.add("d-none");
			crossBtn.classList.add("d-none");
			break;
		}
		if ((crossArray.length + circleArray.length) === 9) {
			statusE1.textContent = "DRAW!!";
			statusE1.classList.add("draw");
			note.classList.add("d-block");
			statusContainer.classList.add("d-block");
			circleBtn.classList.add("d-none");
			crossBtn.classList.add("d-none");
			break;
		}

	}
}

function checkCrossStatus(crossArray,circleArray){
	for (let i of resultArray){
		let c=0;
		for (let j of i){
			for (let k of crossArray){
				if(j===k){
					c+=1;
				}
			}
		}
		if(c===3){
			statusContainer.classList.add("d-block");
			statusE1.textContent="X is Winner!!";
			statusE1.classList.add("statusE");
			note.classList.add("d-block");			
			circleBtn.classList.add("d-none");
			crossBtn.classList.add("d-none");
			break;
		}
		if ((crossArray.length + circleArray.length) === 9) {
			statusContainer.classList.add("d-block");
			statusE1.textContent = "DRAW!!";
			statusE1.classList.add("draw");			
			note.classList.add("d-block");
			circleBtn.classList.add("d-none");
			crossBtn.classList.add("d-none");
			break;
		}

	}
}
	
				
	box1.onclick=function(){
		if(circleStatus==="false"&&crossStatus==="false"){
			alert("select your choice");
		}
		if(box1.textContent===""){
			if(circleStatus==="true"){
				box1.textContent="O";
				box1.style.fontSize="30px";
				circleArray.push(1);
				circleStatus="false";
				if(circleArray.length>=3){
					checkCircleStatus(circleArray,crossArray);
				}
			}
			if(crossStatus==="true"){
				box1.textContent="X";
				box1.style.fontSize="30px";
				crossArray.push(1);
				crossStatus="false";
				if(crossArray.length>=3){
					checkCrossStatus(crossArray,circleArray);
				}
			}
		}
	};

	box2.onclick=function(){
		if(circleStatus==="false"&&crossStatus==="false"){
			alert("select your choice");
		}
		if(box2.textContent===""){
			if(circleStatus==="true"){
				box2.textContent="O";
				box2.style.fontSize="30px";
				circleArray.push(2);
				circleStatus="false";
				if(circleArray.length>=3){
					checkCircleStatus(circleArray,crossArray);
				}
			}
			if(crossStatus==="true"){
				box2.textContent="X";
				box2.style.fontSize="30px";
				crossArray.push(2);
				crossStatus="false";
				if(crossArray.length>=3){
					checkCrossStatus(crossArray,circleArray);
				}
			}
		}
	};

	box3.onclick=function(){
		if(circleStatus==="false"&&crossStatus==="false"){
			alert("select your choice");
		}
		if(box3.textContent===""){
			if(circleStatus==="true"){
				box3.textContent="O";
				box3.style.fontSize="30px";
				circleArray.push(3);
				circleStatus="false";
				if(circleArray.length>=3){
					checkCircleStatus(circleArray,crossArray);
				}
			}
			if(crossStatus==="true"){
				box3.textContent="X";
				box3.style.fontSize="30px";
				crossArray.push(3);
				crossStatus="false";
				if(crossArray.length>=3){
					checkCrossStatus(crossArray,circleArray);
				}
			}
		}
	};

	box4.onclick=function(){
		if(circleStatus==="false"&&crossStatus==="false"){
			alert("select your choice");
		}
		if(box4.textContent===""){
			if(circleStatus==="true"){
				box4.textContent="O";
				box4.style.fontSize="30px";
				circleArray.push(4);
				circleStatus="false";
				if(circleArray.length>=3){
					checkCircleStatus(circleArray,crossArray);
				}
			}
			if(crossStatus==="true"){
				box4.textContent="X";
				box4.style.fontSize="30px";
				crossArray.push(4);
				crossStatus="false";
				if(crossArray.length>=3){
					checkCrossStatus(crossArray,circleArray);
				}
			}
		}
	};

	box5.onclick=function(){
		if(circleStatus==="false"&&crossStatus==="false"){
			alert("select your choice");
		}
		if(box5.textContent===""){
			if(circleStatus==="true"){
				box5.textContent="O";
				box5.style.fontSize="30px";
				circleArray.push(5);
				circleStatus="false";
				if(circleArray.length>=3){
					checkCircleStatus(circleArray,crossArray);
				}
			}
			if(crossStatus==="true"){
				box5.textContent="X";
				box5.style.fontSize="30px";
				crossArray.push(5);
				crossStatus="false";
				if(crossArray.length>=3){
					checkCrossStatus(crossArray,circleArray);
				}
			}
		}
	};

	box6.onclick=function(){
		if(circleStatus==="false"&&crossStatus==="false"){
			alert("select your choice");
		}
		if(box6.textContent===""){
			if(circleStatus==="true"){
				box6.textContent="O";
				box6.style.fontSize="30px";
				circleArray.push(6);
				circleStatus="false";
				if(circleArray.length>=3){
					checkCircleStatus(circleArray,crossArray);
				}
			}
			if(crossStatus==="true"){
				box6.textContent="X";
				box6.style.fontSize="30px";
				crossArray.push(6);
				crossStatus="false";
				if(crossArray.length>=3){
					checkCrossStatus(crossArray,circleArray);
				}
			}
		}
	};

	box7.onclick=function(){
		if(circleStatus==="false"&&crossStatus==="false"){
			alert("select your choice");
		}
		if(box7.textContent===""){
			if(circleStatus==="true"){
				box7.textContent="O";
				box7.style.fontSize="30px";
				circleArray.push(7);
				circleStatus="false";
				if(circleArray.length>=3){
					checkCircleStatus(circleArray,crossArray);
				}
			}
			if(crossStatus==="true"){
				box7.textContent="X";
				box7.style.fontSize="30px";
				crossArray.push(7);
				crossStatus="false";
				if(crossArray.length>=3){
					checkCrossStatus(crossArray,circleArray);
				}
			}
		}
	};

	box8.onclick=function(){
		if(circleStatus==="false"&&crossStatus==="false"){
			alert("select your choice");
		}
		if(box8.textContent===""){
			if(circleStatus==="true"){
				box8.textContent="O";
				box8.style.fontSize="30px";
				circleArray.push(8);
				circleStatus="false";
				if(circleArray.length>=3){
					checkCircleStatus(circleArray,crossArray);
				}
			}
			if(crossStatus==="true"){
				box8.textContent="X";
				box8.style.fontSize="30px";
				crossArray.push(8);
				crossStatus="false";
				if(crossArray.length>=3){
					checkCrossStatus(crossArray,circleArray);
				}
			}
		}
	};

	box9.onclick=function(){
		if(circleStatus==="false"&&crossStatus==="false"){
			alert("select your choice");
		}
		if(box9.textContent===""){
			if(circleStatus==="true"){
				box9.textContent="O";
				box9.style.fontSize="30px";
				circleArray.push(9);
				circleStatus="false";
				if(circleArray.length>=3){
					checkCircleStatus(circleArray,crossArray);
				}
			}
			if(crossStatus==="true"){
				box9.textContent="X";
				box9.style.fontSize="30px";
				crossArray.push(9);
				crossStatus="false";
				if(crossArray.length>=3){
					checkCrossStatus(crossArray,circleArray);
				}
			}
		}
	};


reStart.onclick=function(){
	circleBtn.classList.add("d-block");
	crossBtn.classList.add("d-block");
	note.classList.add("d-none");
	statusE1.textContent="";
	statusContainer.classList.add("d-none");
	statusE1.classList.remove("statusE");
	statusE1.classList.remove("draw");
	crossArray.splice(0,crossArray.length);
	circleArray.splice(0,circleArray.length)
	box1.textContent="";
	box2.textContent="";
	box3.textContent="";
	box4.textContent="";
	box5.textContent="";
	box6.textContent="";
	box7.textContent="";
	box8.textContent="";
	box9.textContent="";
	
}