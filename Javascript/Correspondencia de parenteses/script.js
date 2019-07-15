
var bot=document.getElementById("bot");
bot.addEventListener("click",function(){
	let text=document.getElementById("text").value;
	let test="";
	let exCorrespPar=false;
	let textAux;
	while(!exCorrespPar)
	{
		if(text.search(/\(\)/g)!=-1){
			text = text.replace(/\(\)/g,"");
			alert(text);
		}
		else{
			if(text==""){
				alert("Parenteses Correspondem");
			}
			else{
				alert("Parenteses Nao Correspondem");
			}
			exCorrespPar=true;
		}
	}
});




//let primTes = text.search(/[(]\w*[)]/);