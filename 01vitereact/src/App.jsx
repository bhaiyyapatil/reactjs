import Chai from "./chai";

function App() {
  const username = "This is BH";
  return (
    <>
      <Chai />
      <h1>This is h1 used for {username}</h1>
      <p>These elements are wrapped in one element</p>
    </>
  );
}

export default App;
