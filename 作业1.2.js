var arr =  new Array('9','8','8','2','3','4','9');
function a(){
    var container;
    for(var i= arr.length;i>=0;i--)
    for(var j = arr.length-1;j>=0;j--){
       
        while(arr[i]>arr[j]){
            container = arr[j];
            arr[j] = arr[i];
            arr[i] = container;
        }
        
    }
      console.log(arr)
}
console.log(a())