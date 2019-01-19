// '', "", ``

function sayHello(name, age){
	//console.log("Hello "+name+ "you are " + age + "years old");
	//console.log(`Hello ${name} you are ${age} years old`);
	return `Hello ${name} you are ${age} years old`;
}

const greetMandarine = sayHello("Mandarine",16);

console.log(greetMandarine);

const calculator = {
	plus: function(a, b){
		return a + b;
	},
	minus: function(a, b){
		return a - b;
	},
	multiplication : function(a, b){
		return a * b;
	},
	division : function(a, b){
		if(b==0){
			return "0으로 나눌 수 없습니다.";
		}
		return a / b;
	},
	square : function(a,b){
		let result = a;
		if(a==0){
			result = 0;
		}else if(b==0){
			result = 1;
		}
		for(let i=1; i<b; i++){
			result = result * a
		}
		return result;
	}
		
}

const plus = calculator.plus(5,5);

console.log(plus);

console.log(calculator.minus(5,2));
console.log(calculator.multiplication(5,2));
console.log(calculator.division(0,3));
console.log(calculator.square(2,1));