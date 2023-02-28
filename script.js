const produtos = ['Computador', 'Telefone', 'Mouse', 'Teclado'];


//console.log('Listando todos os produtos: ' + produtos);

console.log('Quantidade de Produtos: ' + produtos.length);

//console.log('Tirando produto Mouse: ' + produtos.filter(p => p !== 'Mouse'));

const findProduto = produtos.find(p => p === 'Computador');

if(findProduto){
  console.log(`Correto!! existe ${findProduto} na sua lista!`)
}else{
  console.log('Parece que esse produto não existe');
}

produtos.splice(1,1)
console.log('Meus produtos: ' + produtos)



const numeros = [1, 2, 3, 4, 5, 6,];

console.log('Numeros Ordenados: ' + numeros.sort());

console.log('Item removido: ' + numeros.shift());

console.log('Nova Ordem: ' + numeros.reverse())

numeros.push(7);
console.log(numeros);

let hoje = '28/02/2023';
const [dia, mes, ano] = hoje.split('/');


console.log('Dia: ' + dia);
console.log('Mes: ' + mes);
console.log('Ano: ' + ano);