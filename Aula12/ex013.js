var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if(hora >= 6 && hora < 12){
    console.log('Bom-dia, senhor(a)')
}else if(hora >= 12 && hora < 18){
    console.log('Boa-tarde, senhor(a)')
}else if(hora >= 18 && hora <= 24){
    console.log('Boa-noite, senhor(a)')
}else{
    console.log('Boa-Madrugada, senhor(a)')
}
/*
const hora = 6;
let saudacao = '';

if (hora >= 6 && hora < 12) {
  saudacao = 'Bom-dia';
} else if (hora >= 12 && hora < 18) {
  saudacao = 'Boa-tarde';
} else if (hora >= 18 && hora <= 23) {
  saudacao = 'Boa-noite';
} else {
  saudacao = 'Boa-madrugada';
}

console.log(`Agora são exatamente ${hora} horas. ${saudacao}, senhor(a)`);
*/