// // const names = ["mohan", "sangram", "bizen", "abhishek"];
// // console.log(names);
// // console.log(names[1]);
// // let i;
// // // for(i=0;i<names.length;i++){
// // //     console.log(names[i]);
// // // }
// // const array = document.getElementById("array");
// // names.forEach((element) => {
// //   const textnode = document.createTextNode(element);
// //   array.appendChild(textnode);
// //   console.log(element);
// // });
// function myFunction(){
//     const names =["mohan","rajan","krishna","sangram","bizen"];

//     names.forEach(element => {
//         const node=document.createElement("li");

//         const textnode = document.createTextNode(element);
//         node.appendChild(textnode);
//         document.getElementById("ul").appendChild(node);
//     });
// }
 
const add = ["rajan","sajan","sangram"];
function myFunction(){
    add.forEach(element => {
        const a=document.createElement("li");

    const t= document.createTextNode(element);
    a.appendChild(t);
    document.getElementById("ul").appendChild(a);
 
    });}