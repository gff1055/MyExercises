
var bot=document.getElementById("bot");
bot.addEventListener("click",function(){
	let text=document.getElementById("text").value;
	let arrNum = text.split(" ");
	let contPar=0;
	let contImp=0;
	let outPar, outImp;

	for(pos in arrNum){
		if(Number(arrNum[pos])%2){
			contImp++;
			if(contImp==1)	outImp=Number(arrNum[pos]);
		}
		else{
			contPar++;
			if(contPar==1)	outPar=Number(arrNum[pos]);
		}
	}

	console.log(arrNum);

	if(contPar==1){
		alert("O numero fora da sequencia eh "+ outPar);
	}
	else if(contImp==1){
		alert("O numero fora da sequencia eh "+ outImp);
	}
	else alert("Nao ha sequencia"+ contPar + contImp);
});	