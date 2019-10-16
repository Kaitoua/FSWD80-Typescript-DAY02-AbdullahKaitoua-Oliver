class cars {
   name:string;
   price:string;
   img:string;

   constructor(name, price,img) {
       this.name = name;
       this.price = price;
       this.img = img;
   }

}

class extra extends cars{
	ps:number;
	fuel:string;

	constructor(name, price,img,ps, fuel) {
       super (name, price,img);
       this.ps = ps;
       this.fuel = fuel;
   }

   mydata() {

     document.getElementById('math').innerHTML += ` <div class="card">
                <img class="card-img-top" src="${this.img}" alt="">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <p>Details:</p>
                    <ul class="card-text text-success">
                        <li>${this.ps}</li>
                        <li class="price"></li>
                        <li>${this.fuel}</li>

                    </ul>
                </div>
                <div class="card-footer">
                    <button class="btn-block btn-info btnPrice" data-toggle="modal" data-target="#exampleModal">Show Price</button>
                </div>
            </div>`;

     
    }
}

 
var x1 = new extra("BMW I8 Coupé","155.000" + "€", "img/img1.jpg" ,374 +" PS","Hybrid");
x1.mydata();
var x2 = new extra("BMW X5", "75.750" + "€", "img/img2.jpg" ,340  +" PS","Benzin");
x2.mydata();
var x3 = new extra("BMW 8er Cabrio M", "133.000" + "€", "img/img3.jpg" ,625  +" PS","Benzin");
x3.mydata();
var x4 = new extra("BMW Z4 Roadstar", "45.079" + "€", "img/img4.jpg" ,340  +" PS","Benzin");
x4.mydata();

var array = [x1,x2,x3,x4];
var btn=document.getElementsByClassName("btnPrice");

function showPrice(i){
  document.getElementsByClassName("price")[i].innerHTML = array[i].price;
}
for(let i in array){
  btn[i].addEventListener("click",()=>{showPrice(i)});
}


// for(let i = 0; i < btn.length;i++){
// btn[i].addEventListener("click", function(){
//   btn[i].classList.add("mybtn"+[i]);
// })
// document.getElementsByClassName("mybtn")[i].addEventListener("click", function(){
//   document.getElementsByClassName("price")[i].classList.add("ShowPrice"+[i]);
// })
// document.getElementsByClassName("mybtn")[i].addEventListener("click", function(){
//   document.getElementsByClassName("ShowPrice")[i].style.display = "block";
// })
// }

// function print(i){

// }


// for (var i; i <= btn.length; i++) {
//  btn[i].addEventListener("click",()=>{print(i);})
// }


// let howard = new Employee("Howard", "Sales");

// console.log(howard.getElevatorPitch());

// console.log(howard.name);









/*  
class Person {

   protected name: string;

   constructor(name: string) { this.name = name; }

}

 

class Employee extends Person {

   private department: string;

 

   constructor(name: string, department: string) {

       super(name);

       this.department = department;

   }

 

   public getElevatorPitch() {

       return `Hello, my name is ${this.name} and I work in ${this.department}.`;

   }

}

 

let howard = new Employee("Howard", "Sales");

console.log(howard.getElevatorPitch());

console.log(howard.name);

 

what will be the result for this code?

Hint : check the property type






  
/*

for (let i=1; i <= 10; ++i){


	var divRight = document.createElement('div');
	divRight.setAttribute('class', 'mydiv');

	for (let j=1; j <= 10; ++j){

	var result2 : any = i * j;



var output = document.createElement('p');

let text =` ${i} × ${j} = ${result2} `;


	
	divRight.appendChild(output);
	output.innerHTML += text;

	div.appendChild(divRight);

	}


}


/*var div =document.getElementById('math');
div.innerHTML = '';

  var divLeft = document.createElement('div');
  var divRight = document.createElement('div');

for (let i=1; i <= 10; ++i){

	var result1 : any = i * 1;



var output1 = document.createElement('p');

let text =`${result1} × 1 =${result1}`;


	
	divLeft.appendChild(output1);
	output1.innerHTML += text;

	div.appendChild(divLeft);


}


for (let i=1; i <= 10; ++i){

	var result1 : any = i * 1;
	var result2 : any = i * 2;



var output2 = document.createElement('p');

let text =`${result1} × 2 =${result2}`;


	
	divRight.appendChild(output2);
	output2.innerHTML += text;

	div.appendChild(divRight);


}



      /*   var div = document.getElementById('myteam');     // The parent <div>.
	    //        div.innerHTML = '';



			//  for (var i =0;i< teamMembers.length ; i++) {

			    var divLeft = document.createElement('div');
			                divLeft.innerHTML = teamMembers[i].name + '<br>' + teamMembers[i].email;

      			var img = document.createElement('img');    // Create an <img> element.
                img.src = teamMembers[i].image;                // The image source from JSON array.


                var divRight = document.createElement('div');
                divRight.setAttribute('style', 'border-left: solid 1px #ddd;');
                divRight.appendChild(img);

               
               
                // Add the child DIVs to parent DIV.
                div.appendChild(divLeft);
                div.appendChild(divRight);



                
             

   
  }*/
