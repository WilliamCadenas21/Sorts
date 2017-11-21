function quickSort(array){
    if(array.length <1){
        return [];
    }
    var left = [];
    var right = [];
    var pivot = array[0];

    for (var i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        }else{
            right.push(array[i]);
        }
    }

    return [].concat(quickSort(left),pivot,quickSort(right));
}

function bubbleSort(array){
    console.log("BubbleSort:")
    var aux;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j+1]) {
                aux = array[j];
                array[j] = array[j+1];
                array[j+1] = aux;   
            }
        }  
    }
    return array;
}

function selectSort(array) {
    
}


var arrayZero = [4,9,2,5,1,6,3,8,10,0];
console.log(bubbleSort(arrayZero));
console.log("QuickSort:")
console.log(quickSort(arrayZero)); 
