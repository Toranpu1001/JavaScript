var hora = 12
console.log(`Agora são exatamente ${hora} horas.`)
if(hora >= 6 && hora < 12){
    console.log('Bom-dia, senhor(a)')
}else if(hora <= 12 && hora > 18){
    console.log('Boa-tarde, senhor(a)')
}else if(hora <= 18 || hora >= 24){
    console.log('Boa-noite, senhor(a)')
}else{
    console.log('Boa-Madrugada, senhor(a)')
}