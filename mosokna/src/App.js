import logo from "./logo.svg";
import "./App.css";
import { NavComponent } from "./components/nav/NavComponent";
import { Home } from "./components/page1/Home";
import { Services } from "./components/page2/Services";
import { Contacts } from "./components/page3/Contacts";
import { Routes, Route } from "react-router-dom";


function App() {
	return (
		<div className="App">
			<Routes>
        <Route path="/" />
        <Route path="services" element={ <Services/> } />
        <Route path="contacts" element={ <Contacts/> } />
      </Routes>
      <NavComponent/>
      <div style={{fontSize:'50px'}}>
         Главная
      </div>
		</div>
	);
}

export default App;
