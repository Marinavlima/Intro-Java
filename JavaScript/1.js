//alert ("Seja bem-vindo");
//document.write("bem-vindo ao javascript");
//prompt("Digite seu nome");
//resp=confirm("sera que vai chover?");
//alert("um retorno de carro\ bem no meio desta lina");
//alert("\" Isto nao saiu como deveria!\"disse ela");
//alert("esta linha tem tabulação\"taqui");

/*var a,b;
a="45.78 KG de acucar";
inteiro=parseInt(a);
flutuante=parseFloat(a);
document.write("O valor da variavel A é:" +a);
document.write("<p>"+"o valor da variavel é:" +inteiro+"</p> ");
document.write("<p>"+"o valor da variavel A dividido por 2 é:"+inteiro/2+" </p>");
document.write("<p>"+"o valor da variavel decimal é : "+flutuante+" </p> ");
*/

/*var a, b, c;
a="ola pessoal";
b="sejam bem-vindos ao Javascript"
c= a+b;
alert(c);
*/


/*var a, b, c, d;
a="50";
b="25";
c="100";
d=parseInt(a-50);
document.write("<p>" + "50/2 é: "+ a/2 +" </p>)";
document.write("<p>" + "50-50 é: "+ d + "</p>");
document.write("<p>" + "50%2 é: "+a%2+ "</p>");
document.write("<p>" + "25*2 é: "+b*2+ "</p>");
document.write("<p>" + "100*5 é: "+c*5+ "</p>");
*/

/*hoje=new Date ();
xDia=hoje.getDay ();
diaSemana = new Array(7);
pratoDia=new Array(7);
precoprato=new Array(7);
for(i=1;i<5;i++){
document.write("esta é a linha",i, "<br>");
}
*/

valor= new Array(3,2,4,1,5);
i=0;
total=0;
while(total<10){
total+=valor[i];i++;
}
document.write("total=" +total);


//diasdasemana
diaSemana[0] = "domingo";
diaSemana[1] = "segunda";
diaSemana[2] = "terca";
diaSemana[3] = "quarta";
diaSemana[4] = "quinta";
diaSemana[5] = "sexta";
diaSemana[6] = "sabado";
//pratododia
pratoDia[0] = "lasanha";
pratoDia[1] = "frango ao molho";
pratoDia[2] = "virado paulista";
pratoDia[3] = "feijoada";
pratoDia[4] = "File de merluza";
pratoDia[5] = "Strogonoff";
pratoDia[6] = "Dobradinha";
//preco prato
precoprato[0] = "R$18,99";
precoprato[1] = "R$18,99";
precoprato[2] = "R$15,99";
precoprato[3] = "R$25,00";
precoprato[4] = "R$20,00";
precoprato[5] = "R$15,99";
precoprato[6] = "R$19,99";
document.write("o numero da semana é:"+""+(xDia+1));
document.write("<p><b>"+"hoje é:" + diaSemana[xDia]+"</p></b>");
document.write("<p><b>"+"hoje é:" + pratoDia[xDia]+"</p></b>");
document.write("<p><b>"+"hoje é:" + precoprato[xDia]+"</p></b>");
