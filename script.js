const arr = ['Aram', 'Davit', 'Hovhannes', 'Vardan', ];
result = [];
let index = 0;
let max = arr[0].length
for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > max) {
        max = arr[i].length
        index = i;
    }
}
console.log(max);
result.push(arr[index]);
console.log(result);