// loops >> never ending cycle >> system >>breakdown 
//  until the condition >> loop going run >> stop 

// 1 2 3 4 5  
// 1  >> start
// 2
// 3
// 4
// 5   >> end

// for(var i=start;condition(stop);increment/decrement){
    // block of code 
// }

for(var i=1;i<6;i++){
    console.log(i)
}
console.log("----------------")
// i=1 1<6 >>True >>1 >> i=2
// i=2 2<6 >>True >>2 >> i=3
// i=3 3<6 >>True >>3 >> i=4
// i=4 4<6 >>True >>4 >> i=5
// i=5 5<6 >>True >>5 >> i=6
// i=6 6<6 >>False  >> terminate 

//  1 to 10 
for(var i=1;i<=10;i++){
    console.log(i)
}
console.log("----------------")
// 10 to 1 

for(var i=10;i>=1;i--){
    console.log(i)
}
console.log("----------------")
// Print a table 2 >> Any table
// 2 4 6 8 10
// 2*1=2
// 2*2=4
// var num=8
// for(var i=1;i<=10;i++){
//     // console.log(num,"*",i,"=",i*num)
//     console.log(num+" * "+i+" = "+i*num)
// }

// arrays >> loops >> Important

var arr=[12,34,56,78,90]
console.log(arr)
console.log(arr[4])
// start 0
// end arr.length

for(let i=0;i<arr.length;i++){
    console.log(i,arr[i],arr[i]+2)
}
    

