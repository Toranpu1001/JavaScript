let amigo = {
    nome: `José`,
    sexo: `M`,
    peso: 90.5,
    engordar(p=0) {
        console.log(`engordou!`)
        this.peso += p
    }
}
amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)