function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}

function binomialNegativa (x,k,p) {
    var resultado;
    resultado = ( factorial(x-1) / (factorial(x-k)*factorial(k-1)) )*Math.pow(p,k)*Math.pow(1-p,x-k);
    return resultado;
}



function calcular(){
    console.log("Calculando");
    var p = document.getElementById("p").value;
    var k = document.getElementById("k").value;
    var x = document.getElementById("x").value;
    var numeroVeces = document.getElementById("sim").value;
    console.log("Calculando probabilidad con p=" + p + " , x=" + x+ " , k="+ k);
    var probabilidad = binomialNegativa(x,k,p);
    var show = document.getElementById("teorico").classList.add("show");
    var spanTeorico = document.getElementById("resultado").innerText = probabilidad;
    console.log("Probabilidad =  " + probabilidad);
    for (var i = 0; i < numeroVeces; i++) {
        var resultados = simulacion(x,k,p);
        var title = document.createElement('h4');
        document.getElementById("simulaciones").classList.add("show");
        title.innerText = "Simulacion #" + (i+1) + " con " + resultados.length + " ensayos para obtener el " + k +  " exito";
        title.classList.add("titulo");
        var filaPersonas = document.createElement('div');
        filaPersonas.classList.add("filaPersonas");
        var add = document.getElementById("simulaciones").appendChild(title);
        var add2 = document.getElementById("simulaciones").appendChild(filaPersonas);
        for(var resultado of resultados){
            console.log("En la iteración " + (i+1) + " se obtuvo " + resultado);
            var imagen = document.createElement("img");
            if(resultado) imagen.src = "personaSi.png";
            else imagen.src = "personaNo.png";
            var add3 = filaPersonas.appendChild(imagen);
        }		
    }
    return;
}

function simulacion(x,k,p){
    var exitos = 0;
    var resultados = [];
    while(exitos!=k){
        var aleatorio = Math.random();
        console.log(aleatorio);
        if(aleatorio<=p){
            exitos++;
            resultados.push(1);
        }else{
            resultados.push(0);
        }
    }

    return resultados;
    
}