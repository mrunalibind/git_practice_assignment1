let str="madam";
let new_str="";
for(let i=str.length;i>=0;i--){
    new_str+=str[i];
}
if(str==new_str){
    console.log("Yes");
}
else{
    console.log("No");
}