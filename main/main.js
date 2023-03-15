///odd number

var num=parseInt(prompt("Enter a number"));
function odd(num){
	if(num%2!==0){
	console.log("odd num");
}
else
{
	console.log("even num");
}
return num;
}
console.log(odd(num));

//try the function
function add()
{
	var a=1,b=2;
	c=a+b;
	console.log(c);
}

add();


//diomand
function triangle()
{

for (i = 1; i <= 5; i++) {
	
 
  for ( j = 1; j <= i; j++) {
	  
	  document.write(i);
	  
  }
  document.write("<br>");
}

}
triangle();


document.write("<br>");


//diomand reverse
function angle(){

for (i =5;i>=1; i--) {
  
  for ( j =1; j<=i; j++) {
	  
	  document.write(j);
	  
  }
  document.write("<br>");
}
}
angle();
	document.write("<br>");
   

//vowels
var string=prompt("Enter the string:");
var count=0;
function countVowel(string)
	{
	for (i=0; i<string.length; i++)
		{
        if (string[i]=="a" || string[i]=="e" || string[i]=="i" || string[i]=="o" || string[i]=="u" ) 
			{
            count++;
			}
		}
		return count;
	}
	document.write(countVowel(string));
	document.write("<br>");
	
	