

import Card from "./components/cards";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import Map from "./components/map";
import Sobre from "./components/sobre";


function App() {
  return (
    <div className="app" >
      <Header/>
      <Main/>
      <Sobre/>
      <Card/>
      <Map/>
      <Footer/>
    </div>
  );
}

export default App;
