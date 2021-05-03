//1
function sigma(num){
    var sum=0;
    for(var i=num;i>0;i--){
      sum+=i;
    }
    console.log(sum)
    return sum;
  }
  var num=3; 
  sigma(num); 


  //2
  function factorial(num){
    var multi=1;
    for(var i=num;i>0;i--){
      multi*=i;
    }
    console.log(multi)
    return multi;
  }
  var num=5; 
  factorial(num); 
 
  //3
  function Fibonacci(x){
    if(x==0){
    return x;

    }
    else if(x==1){
    return x;
    }
      else{
     return Fibonacci(x-1)+Fibonacci(x-2);
    }
  
  
  }
   var x=4;

  console.log(Fibonacci(x));

  //4
  function ArraySecondtoLast(){
  var arr=[42, true, 4, "Liam", 7];
  var secondtolast=arr[arr.length-2];
  console.log(secondtolast)
  return secondtolast;
}
ArraySecondtoLast();

//5
function ArrayNthtoLast(arr,y){
    var x=arr[arr.length-y];
    console.log(x)
    return x;
  }
  var arr=[5,2,3,6,4,9,7];
  var y=3;
  ArrayNthtoLast(arr,y);

  //6
  function ArraySecondLargest(arr){
    var big = arr[0];
    var nextbig = arr[0];
        for(var i=0;i<arr.length;i++){
            if(arr[i]>big){
                nextbig = big;
                big = arr[i];
            }
            else if(arr[i]>nextbig && arr[i]!=big)
                nextbig = arr[i];
        }
        
    console.log(nextbig);
return nextbig
    }
    var arr=[3,5,9,1]
    ArraySecondLargest(arr); 

  //7
  function DoubleTrouble(arr){
    var temp=0;
    for(var i=0;i<arr.length;i+=2){
        arr.push(arr[i]);
        temp=arr[arr.length-1]
    
    for(var j=arr.length-1;j>i;j--){
    arr[j]=arr[j-1]   }
    arr[i+1]=temp;}
    console.log(arr);
    return arr;
    }
    var arr=[4, "Ulysses", 42, false];
    DoubleTrouble(arr);

