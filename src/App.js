

import Card from "./components/cards";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./components/main";
import Map from "./components/map";


function App() {
  return (
    <div className="app" >
      <Header/>
      <Main/>
      <Card/>
      <Map/>
      <Footer/>
    </div>
  );
}

export default App;
