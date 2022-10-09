  //  (1)

// var last =  function(array, n) {
//     if (array == null) 
//       return void 0;
//     if (n == null) 
//        return array[array.length - 1];
//     return array.slice(Math.max(array.length - n, 0));  
//     };
  
//   document.write(last([7, 9, 0,1]));
//   document.write("<br>" +last([7, 9, 0,1],3));
//   document.write("<br>" +last([7, 9, 0, -2],4));
  


//    (2)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let str = fruits.join("+");
// document.write(str);


//   ( 3 )

// var num = window.prompt();
// var str = num.toString();
// var result = [str[0]];
// for (var x = 1; x < str.length; x++) {
//   if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
//     result.push('-', str[x]);
//   } else {
//     result.push(str[x]);
//   }
// }
// document.write(result.join(''));



//           ( 4 )

// const array=[1,2,3,1,3,4,1,2,5,6,1,3];
// let maxfreq = 1;
// let count = 0;
// let item;
// for (let i=0; i<array.length; i++)
// {
//         for (let j=i; j<array.length; j++)
//         {
//                 if (array[i] == array[j])
//                  count++;
//                 if (maxfreq<count)
//                 {
//                   maxfreq=count; 
//                   item = array[i];
//                 }
//         }
//         count=0;
// }
// document.write(`${item} - ${maxfreq} times`) ;


//    ( 5 )

// let arr = [1, 2, 3, 4, 5, 6,8,9,10];
// let sum = 0;
// let prod = 1;

// for (let i = 0; i < arr.length; i++) 
//    {
//     sum += arr[i];
//     prod *= arr[i];
//     }
// document.write(`Sum : ${sum} <br> Product :  ${prod}`); 


// ( 6 )

// let arr1 = [0,1, 2, 3, 4, 5,6];
// let arr2 = [2,4,5,6];
// let b = new Set(arr2);
// let difference = [...arr1].filter(x => !b.has(x));
// document.write(difference);


// ( 7 )

// const arrayset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
// document.write(arrayset([0, 1]));
// document.write("<br>" +arrayset([0, 1, 2]));
// document.write("<br>" +arrayset([0, 1, 2, 3]));


// ( 8 )

// function random_item(items)

// {return items[Math.floor(Math.random()*items.length)];}
// const items = [254, 45, 212, 365, 2543];
// document.write(random_item(items));


// ( 9 )

// function is_monotonous(num) {
//     if (num.length === 1) {
//         return true;
//     }
//     const num_direction = num[1] - num[0];
//     for (let i = 0; i < num.length - 1; i++) {
//         if (num_direction * (num[i + 1] - num[i]) <= 0) {
//             return false;
//         }
//     }
//     return true;
// }
// document.write(is_monotonous([1, 2, 3]));
// document.write("<br>" +is_monotonous([1, 2, 2]))
// document.write("<br>" +is_monotonous([-3, -2, -1]))


// ( 10 )

// function replace_first_digit(input_str) {

//     return input_str.replace(/[0-9]/, '$');
//   }
//   document.write(replace_first_digit("pro2gram"));
//   document.write("<br>" +replace_first_digit("p3ython"));
//   document.write("<br>" +replace_first_digit("1lack"));
  


// ( 11 )

// function findSingle(array, ar_size)
//     {
      
//         let res = array[0];
//         for (let i = 1; i < ar_size; i++)
//             res = res ^ array[i];
 
//         return res;
//     }
//         let array = [1, 2, 2, 4, 3, 1, 3];
//         let n = array.length;
//         document.write("Element occurring once is "
//             + findSingle(array, n));



//  ( 12 )

// const vowelsAndConsonants = (str) => {
//   const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

//   var letters = str.split('');
//   var vowelsFound = [], consonantsFound = [];

//   for (var i in letters) {
//       if (vowels.includes(letters[i])) {
//           vowelsFound.push(letters[i]);
//       } else {
//           consonantsFound.push(letters[i]);
//       }
//   }
  
//   document.write("Vowels : ", vowelsFound.join(""));
//   document.write("<br> Consonants : ", consonantsFound.join(""));    
// }

// var str = "iamRebel";
// vowelsAndConsonants(str); 



// (13)


// function findSLE(arr){
//   let first = -1 , second = -1;

//   for(let i = 0; i <= arr.length-1; i++)
//   {
//       if(arr[i] > first){
//           second = first;
//           first = arr[i];
//       }
//       else if( arr[i] > second && arr[i] != first)
//       {
//           second = arr[i];
//       }
//   }
//       document.write(second);
// }
// let array = [15, 30, 1, 20, 44, 10]
// findSLE(array);



// (14)

// const Name = prompt("Enter a Name: ");
// const Score = prompt("Enter a Score: ");

//     if (Score>35 && Score<=40)  
//       document.write("Name : " +Name+ " <br> Total Marks : " +Score+" <br>  Grade : A");  
//     else if (Score>30 && Score<=35)  
//     document.write("Name : " +Name+  " <br>  Total Marks : " +Score+" <br>  Grade : B");          
//     else if (Score>25 && Score<=30) 
//     document.write("Name : " +Name+  " <br>  Total Marks : " +Score+" <br>  Grade  : C");     
//     else if (Score>20 && Score<=25)     
//     document.write("Name : " +Name+  " <br>  Total Marks : " +Score+" <br>  Grade  : E");   
//     else if (Score>0 && Score<=20) 
//     document.write("Name : " +Name+  " <br>  Total Marks : " +Score+" <br> Grade   : F");   


// (15)

// function getLetter(str){
//   switch(str[0])
//   {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//  return 1;

//       case 'b':
//       case 'c':
//       case 'd':
//       case 'f':
//       case 'g':
// return 2;

//       case 'h':
//       case 'j':
//       case 'k':
//       case 'l':
//       case 'm':
// return 3;

//       case 'v':
//       case 'w':
//       case 'x':
//       case 'y':
//       case 'z':
// return 4;    
//   }
// }

// document.write("return :",getLetter("asad"));



// (16)

// function EvenOddProduct(arr)
// {
// 	let even = 0;
// 	let odd = 1;
// 	for (let i = 0; i < arr.length; i++)
// 	{
	
// 		if (i % 2 == 0)
// 			even =2 * arr[i];
// 		else
// 			odd =3 * arr[i];
// 	}

// 	document.write("Even product is " + even);
// 	document.write("<br>" + "Odd product is " + odd);
// }

// 	let arr = [ 1, 2, 3, 4, 5, 6 ];

// 	EvenOddProduct(arr);
	





// (17)

// const operator = prompt('Enter operator ( either +, -, * or / ): ');


// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// switch(operator) {
//     case '+':
//          result = number1 + number2;
//         document.write(`${number1} + ${number2} = ${result}`);
//         break;

//     case '-':
//          result = number1 - number2;
//          document.write(`${number1} - ${number2} = ${result}`);
//         break;

//     case '*':
//          result = number1 * number2;
//          document.write(`${number1} * ${number2} = ${result}`);
//         break;

//     case '/':
//          result = number1 / number2;
//          document.write(`${number1} / ${number2} = ${result}`);
//         break;

//     default:
//       document.write('Invalid operator');
//         break;
// }


// (18)

// var numbers = [1, 29, 12, -17, 43, 40];
    
// var maxValue = Math.max(...numbers);
// document.write("<br>  Maximum value  is : "+maxValue); // Prints: 13
   
// var minValue = Math.min(...numbers);
// document.write("<br>  Minimum value is : " +minValue); 


// (19)


// var arr = ["Ahmed","Rizwan","Faisal", "Saad"];
// document.write( arr.join());
// arr.splice(2, 0, "Bilal");
// document.write(" <br> <br> After adding an Element " );
// document.write("<br>  <br>" +arr.join()); 



// (20)


// function positiveNegativeZero(arr)
// {
	
// 	let len = arr.length;


// 	let positiveCount = 0;
// 	let negativeCount = 0;
// 	let zeroCount = 0;


// 	for(let i = 0; i < len; i++)
// 	{
// 		if (arr[i] > 0)
// 		{
// 			positiveCount++;
// 		}
// 		else if (arr[i] < 0)
// 		{
// 			negativeCount++;
// 		}
// 		else if (arr[i] == 0)
// 		{
// 			zeroCount++;
// 		}
// 	}


// 	document.write((positiveCount / len).toFixed(4) + " ");
// 	document.write((negativeCount / len).toFixed(4) + " ");
// 	document.write((zeroCount / len).toFixed(4));
// 	document.write("<br>");
// }


// let a1 = [ 2, -1, 5, 6, 0, -3 ];
// positiveNegativeZero(a1);


// let a2 = [ 4, 0, -2, -9, -7, 1 ];
// positiveNegativeZero(a2);








