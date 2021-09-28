import Card from "./components/Card/Card"
import Buttons from "./components/Buttons/Buttons";
import GlobalStyle from "./styles/global"

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Card/>
      <Buttons/>
    </div>
  );
}

export default App;
