const games = [
  {nome:"Half-life 2", ano: 2004},
  {nome:"Crisys 1", ano: 2008} ,
  {nome:"Halo", ano: 2001 } ,
  {nome:"GTA - San Andreas", ano: 2004}
];

function App() {

  return (
    <ul>
      {games.map(({nome,ano})=>(
        <li key={nome}>{nome}, {ano}</li>
      ))}
    </ul>
  );
}

export default App;
