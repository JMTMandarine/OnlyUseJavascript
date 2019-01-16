const leeInfo = ["TaehyeongLee","28",true,"Seoul"];

console.log(leeInfo);

// 위처럼 모든정보를 Array로 만들어 사용 할 경우 너무 불편하여 아래와 같이 Object를 만들어 사용

const leeInfoObject = {
		name:"TaehyeongLee",
		age:28,
		gender:"Male",
	    isHandsome:true,
	    favMovies:["신과 함꼐","500일의 썸머","보헤미안랩소디"],
	    favFood:[
	    	{ 
	    		name:"Kimchi", 
	    		fatty:false
	    	},
	    	{ 
	    		name:"Cheese burger",
	    		fatty:true
	    	}
	    ]
		
}

console.log(leeInfoObject.name);
console.log(leeInfoObject.age);
console.log(leeInfoObject.gender);
console.log(leeInfoObject.isHandsome);
console.log(leeInfoObject.favMovies);
console.log(leeInfoObject.favFood);

leeInfoObject.isHandsome=false;

console.log(leeInfoObject.isHandsome);