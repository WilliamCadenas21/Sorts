function quickSort(array){
    if(array.length <1){
        return [];
    }
    var left = [];
    var right = [];
    var pivot = array[0];

    for (let i = 1; i < array.length; i++) {
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
    
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j+1]) {
                array = swap(array,j,j+1);
            }
        }  
    }
    return array;
}

function selectSort(array) {
    var minId;
    for (let i = 0; i < array.length - 1; i++) {
        minId = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minId]) {
                minId=j;
            }
            
        }
        array = swap(array,i,minId);
    }
    return array;
}

function insertSort(array) {
    var key;
    for (let i = 0; i < array.length; i++) {
        key = array[i];
        j = i-1;
        while (j>=0 && array[j]>key) {
            array[j+1] = array[j];
            j=j-1;
        }
        array[j+1]=key;
    }
    return array;
}

function shellSort(array) {
    var n = array.length;
    var temp;
    for (let gap = n/2; gap > 0; gap = gap/2) {
       for (let i = gap; i < n; i++) {
           temp = array[i];
           var j = i;
            while(j >= gap && array[j-gap]>temp){
               array[j] = array[j-gap];               
               j -= gap;
            }
           array[j] = temp;
       }
    }
    return array;
}

function swap(array,i,j) {
    var aux = array[i];
    array[i] = array[j];
    array[j] = aux;
    return array;   
}

var arrayZero = [4,9,2,5,7,1,6,3,8,10,0];

//console.log(bubbleSort(arrayZero));

//console.log("QuickSort:")
//console.log(quickSort(arrayZero));

//console.log(selectSort(arrayZero)); 

//Shell is not working 
console.log(insertSort(arrayZero));
