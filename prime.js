let num=6;
let co=0;
for(let i=0;i<=num;i++){
  if(num%i==0){
    co++;
  }
}
if(co==2){
  console.log(num,"Is a Prime Number");
}else{
  console.log(num,"Is not a Prime Number");
}