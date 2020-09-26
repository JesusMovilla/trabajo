function suma(){
	var num1= document.getElementById('txtnum1').value;
	var num2= document.getElementById('txtnum2').value;
	var suma= parseInt(num1)+parseInt(num2);
	document.getElementById('resultado').innerHTML= 'La suma es: '+ suma;
}
function resta(){
	var num1= document.getElementById('txtnum1').value;
	var num2= document.getElementById('txtnum2').value;
	var resta= parseInt(num1)-parseInt(num2);
	document.getElementById('resultado').innerHTML= 'La resta es: '+ resta;
}
function multipli(){
	var num1= document.getElementById('txtnum1').value;
	var num2= document.getElementById('txtnum2').value;
	var multi= parseInt(num1)*parseInt(num2);
	document.getElementById('resultado').innerHTML= 'La multiplicación es: '+ multi;
}
function divide(){
	var num1= document.getElementById('txtnum1').value;
	var num2= document.getElementById('txtnum2').value;
	var divi= parseInt(num1)/parseInt(num2);
	document.getElementById('resultado').innerHTML= 'La división es: '+ divi;
}
function fibonacci() {
	var n = parseInt(document.getElementById('txtnum1').value);
	var fibonacci = [0,1];
    for (let i = 2; i < n; i++) {
		fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    document.getElementById('resultado').innerHTML= 'Los primeros '+n+' numeros de la serie de Fibonacci son: '+ fibonacci;
}
function sumatoria() {
	var n = parseInt(document.getElementById('txtnum1').value);
	var x = 0, exp = 0;
	for (let i = 0; i <= n; i++) {
		exp=Math.pow(i,n);
		x += exp;
	}
	document.getElementById('resultado').innerHTML= 'La sumatoria de n^n donde n es '+n+', es: '+ x;
}
function primos() {
	var n = parseInt(document.getElementById('txtnum1').value);
	var primos = [], x = 0;
	for(let i = 0; i <=n; i++){
		if (n%2 != 0) {
			primos[x] = i;
			x++;
		}
	}
	document.getElementById('resultado').innerHTML= primos;
}