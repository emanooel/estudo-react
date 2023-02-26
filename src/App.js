const games = ["Half-life2","Crisys 1", "Halo", "GTA - San Andreas"];
function App() {

  return (
    <>
      {games.map((item,index)=>(
        <li key={item}>{item}</li>
      ))}
    </>
  );
}

export default App;
