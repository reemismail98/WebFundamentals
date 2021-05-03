function getnumbers(){
    var arr=[];
    for(var i=1;i<=255;i++){
    arr.push(i);
    }
    return arr
}
console.log(getnumbers());

function sumeven(){
    var sum=0;
    for(var i=1;i<=1000;i++){
    if(i%2==0){
    sum+=i;
    }
    else{
    var odd=0;
    odd+=i;
    }
    }
    return sum;}
    console.log(sumeven());

    function sumodd(){
        var sum=0;
        for(var i=1;i<=5000;i++){
        if(i%2!==0){
        sum+=i;
        }
        
        }
        return sum;}
        console.log(sumodd());

        function Iterate_array(){
            var arr=[2,4,6];
            sum=0;
            for(var i=0;i<arr.length;i++){
            sum+=arr[i];
            }
            return sum;}
            console.log(Iterate_array());

            function max_number(){
                var arr=[2,4,6,5];
                var max=0;
                for(var i=0;i<arr.length;i++){
                if(max<arr[i]){
                max=arr[i];}
                }
                return max;}
                console.log(max_number());

                function avg(){
                    var arr=[2,4,6];
                    var sum=0;
                    for(var i=0;i<arr.length;i++){
                    sum+=arr[i];}
                    var avg=sum/i;
                    return avg;}
                    console.log(avg());

                    function arrayodd(){
                        var arr=[];
                        for(var i=1;i<50;i++){
                        if(i%2!==0){
                        arr.push(i);
                        }
                        }
                        return arr;}
                        console.log(arrayodd());

                        function greatherthanY(arr,y){
                            var count=0;
                            for(var i=0;i<arr.length;i++){
                            if(arr[i]>y){
                            count++
                            }
                            }
                            return count;}
                            var arr= [1, 3, 5, 7];
                            var y=3;
                            console.log(greatherthanY(arr,y));

                            function greatherthanY(arr){
                                for(var i=0;i<arr.length;i++){
                                arr[i]*=arr[i]
                                }
                                return arr;}
                                var arr= [1,5,10,-2];
                                console.log(greatherthanY(arr));

                                function Negatives (arr){
                                    for(var i=0;i<arr.length;i++){
                                    if(arr[i]<0){
                                    arr[i]=0}
                                    }
                                    return arr;}
                                    var arr= [1,5,10,-2,7,-9,-7];
                                    console.log(Negatives (arr));

                                    function MaxMiaAvg(arr){
var max=0;
var min=0;
var sum=0;
var newarr=[];
for(var i=0;i<arr.length;i++){
if(arr[i]>max){
max=arr[i];
}
if(arr[i]<min){
min=arr[i];
}
sum+=arr[i];
var avg=sum/arr.length;
}
newarr.push(max);
newarr.push(min);
newarr.push(avg);
return newarr;
}
var arr=[6,9,-2];
console.log(MaxMiaAvg(arr));

function swap(arr){
    var temp=arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=temp;
    return arr;
    }
    var arr=[1,5,10,-2];
    console.log(swap(arr));


    function Number_to_String(arr){
        for(var i=0;i<arr.length;i++){
        if(arr[i]<0){
        arr[i]='Dojo';
        }
        }
        return arr;
        }
        var arr=[-1,-3,2];
        console.log(Number_to_String(arr));



