let numero1= parseInt(prompt("ingrese  su primer numero " ));
let numero2= parseInt(prompt("ingrese  su segundo numero " ));
let numero3= parseInt(prompt("ingrese  su tercer numero " ));
 function menor(numero1,numero2,numero3){

 if(numero1 < numero2 && numero1 < numero3)
    {
        return numero1;
    }
   else if(numero2 < numero1 && numero2 < numero3)
    {
        return numero2;
    }
    else
    {
        return numero3;
    }
}
console.log=(menor(numero1,numero2,numero3));
