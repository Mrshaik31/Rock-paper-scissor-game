/*const products = {
    name : "pen",
    rating : 5,
    price : 100,
    offer : 20,
    isdeal: true,
};
console.log(products);*/
/*let num = prompt("enter a number");
if(num % 5===0){
    console.log(num,"num is multiple of 5");
}else{
    console.log(num,"num is not multiple of 5");
}*/
//for-of loop its specifiy only for characters/string.
//syntax is for(let var of str)
/*let str="javascript";
let size=0;
for(let i of str){
    console.log("i=",i);
    size++;
}
console.log("size =",size);*/
// for-in loop 
// syntax is for(let key of objects) only for objects
/*let student = {
    name :"farhan",
    age:20,
    isfollow:false,
    contact:9741881031
};
for(let key in student){
    console.log("key =",key ,"value= " , student[key]);
}*/
/*let n=100;
for(let i=0; i<=n; i++){
    if(i % 2!==0){
    console.log(i);
}
}*/
/*let str1 = prompt("Enter username");
Username = "@" + str1;
console.log("username",Username);*/
/*let companies = ["Bloomberg","Microsoft","Uber","google","IBM","Netflix"];
//companies.shift();
companies.splice(2,1,"Ola");
console.log("companies",companies);*/
/*let str="farhan";
let count=0;
for(const char of str){
if(char ==="a"|| char ==="e" || char ==="i"|| char ==="o"|| char ==="u"){
    count ++;

}
}
console.log("count",count);
let arr=["shaik","farhan","baliram"]

arr.forEach((val) => {
    console.log(val.toUpperCase());
});
let n=prompt("enter the numberw");

let arr=[];

for(let i=1; i<=n; i++){
    arr[i-1]=i;
}
console.log("arr",arr);

let sum=arr.reduce((res,curr)=>{
    return res + curr;
});
console.log("sum",sum);
let fac=arr.reduce((res,curr)=>{
    return res*curr;
});
console.log(fac);
let head=document.querySelector("h2");
console.dir(head.innerText);
head.innerText=head.innerText+"java";
let newbtn= document.createElement("button");
newbtn.innerText= "click me! ";
newbtn.style.color="white";
newbtn.style.backgroundColor="black";
document.querySelector("body").prepend(newbtn);*/
let modetyp=document.querySelector(".mode");
let clrmode="light";
modetyp.addEventListener("click", () => {
    if( clrmode === "light"){
         clrmode="dark";
         document.querySelector("body").style.backgroundColor="black";
    }else{
        clrmode = "light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(clrmode);
});