const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

function calculaTotal(compras){
  let total = 0;
  compras.forEach((item)=>{
    total += parseFloat(item.preco.replace("R$ ",""));
  })
  return total;
}

function App() {
  const dados = luana;
  const situacao = dados.ativa ? {color:"green"} : {color:"red"};
  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>Situação:<span style={situacao}>{dados.ativa ? " Ativa": " Inativa"}</span></p>
      <p>Total: R$ {calculaTotal(dados.compras)}</p>
      {calculaTotal(dados.compras) > 10000 && <p>Perdeu a noção do perigo ?</p>}
    </>
  );
}

export default App;
