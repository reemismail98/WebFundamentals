function BiggieSize(arr){
    for(var i=0;i<arr.length;i++){
    if(arr[i]>0){
    arr[i]="big";
    }
    }
    return arr;
    }
    var arr=[-1,3,5,-5];
    console.log(BiggieSize(arr));

    function PrintLowReturnHigh(arr){
        var low=0;
        var high=0;
        for(var i=0;i<arr.length;i++){
        if(arr[i]<low){
        low=arr[i];
        }
        if(arr[i]>high){
        high=arr[i];
        }
        }
        console.log(low)
        return high;
        }
        var arr=[-1,3,5,-5];
        PrintLowReturnHigh(arr);

        function PrintOneReturnAnother(arr){
            var odd=0;
            for(var i=0;i<arr.length;i++){
            if(arr[i]%2!==0){
            odd=arr[i];
            break;
            }
            }
            for(var j=1;j<arr.length;j++){
            console.log(arr[j])}
            return odd;
            }
            var arr=[9,3,5,8];
            PrintOneReturnAnother(arr);

            function DoubleVision(arr){
                var newarr=[];
                var double=0;
                for(var i=0;i<arr.length;i++){
                double=arr[i]*2;
                newarr.push(double);
                }
                
                console.log(newarr)
                return newarr;
                }
                var arr=[1,2,3];
                DoubleVision(arr);


                function CountPositives(arr){
                    var count=0;
                    for(var i=0;i<arr.length;i++){
                    if(arr[i]>0){
                    count++
                    }}
                    arr[arr.length-1]=count;
                    
                    
                    console.log(arr)
                    return arr;
                    }
                    var arr=[-1,1,1,1];
                    CountPositives(arr);



                    function EvensandOdds(arr){
                        var count=0;
                        var count2=0;
                            for (var i = 0;i<arr.length; i++) {                
                        if(arr[i]%2!=0){
                        count++;
                        } 
                        else{
                        count=0;
                        }
                        if(arr[i]%2==0){
                        count2++;
                        } 
                        else{
                        count2=0;
                        }
                        if(count==3){
                            console.log("That's odd!");
                        }
                        if(count2==3){
                            console.log("Even more so!");
                        }
                            }  
                        }
                        arr=[2,4,4,3,5,7,6];
                        EvensandOdds(arr)



                        function IncrementtheSeconds(arr){
                            for(var i=0;i<arr.length;i++){
                            if(arr[i]%2!==0){
                            arr[i]+=1 
                            }
                             console.log(arr[i]);
                           
                            }
                            return arr;
                            }
                            var arr=[2,5,7,4,10,9,1];
                            IncrementtheSeconds(arr)


                            function PreviousLengths(arr){
                                for(var i=arr.length-1;i>0;i--){
                                arr[i]=arr[i-1].length;
                                }
                                console.log(arr);
                               
                                
                                return arr;
                                }
                                var arr=["hello", "dojo", "awesome"];
                                PreviousLengths(arr)


                                function AddSeven(arr){
                                    var newarr=[];
                                    for(var i=0;i<arr.length;i++){
                                     newarr.push(arr[i]+7)
                                     }
                                     console.log(newarr);
                                     return newarr;
                                     }
                                     var arr=[1,2,3];
                                     AddSeven(arr)


                                     function reverseArray(arr){
                                        arr.reverse()
                                        console.log(arr);
                                        }
                                        var arr=[2,4,6,1,3];
                                        reverseArray(arr);


                                     function negative(){
                                        var newarr=[];
                                        for(var i=0;i<arr.length;i++){
                                        if(arr[i]>0){
                                        arr[i]*=-1;
                                        newarr.push(arr[i])
                                        }
                                        else{
                                        newarr.push(arr[i])
                                        }
                                        }
                                        console.log(newarr);
                                        return newarr;
                                        }
                                        var arr=[3,5,-6,10,-3,1]
                                        negative(arr)


                                        function AlwaysHungry(){
                                            var arr=["drink","food","drink","food"]
                                            for(var i=0;i<arr.length;i++){
                                            if(arr[i]=="food"){
                                            console.log("yummy");
                                            }
                                            else{
                                            console.log("I'm hungry");
                                            }
                                            }
                                              } 
                                              AlwaysHungry();


                                              function SwapTowardtheCentery(){
                                                var arr=[1,2,3,4,5,6];
                                                var swap=arr[0];
                                                var swapthird=arr[2];
                                                arr[0]=arr[arr.length-1];
                                                arr[arr.length-1]=swap;
                                                arr[2]=arr[arr.length-3];
                                                arr[arr.length-3]=swapthird;
                                                console.log(arr);
                                                return arr;
                                                  } 
                                                  SwapTowardtheCentery();


                                                  function scaleArray(arr, y) {
                                                    for(var i=0;i<arr.length;i++){
                                                      arr[i]*=y;
                                                    }
                                                    console.log(arr);
                                                    return arr;
                                                    }
                                                    var arr=[1,2,3];
                                                    var y=3; 
                                                    scaleArray(arr, y); 












                                     



                            




