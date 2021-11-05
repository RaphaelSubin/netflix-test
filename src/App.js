import react from "react";
import NavBar from "./Components/NavBar/NavBar";
import{romance,comedy,horror,action,originals} from './urls'
import './App.css';
import Banner from "./Components/Banner/Banner";
import RowPoster from "./Components/RowPoster/RowPoster";
function App() {
  return (
    <div className="App">
       <NavBar/>
       <Banner/>
       <RowPoster url={originals} title = 'Netflix Originals'/>
       <RowPoster url={action} title = 'Action' isSmall={true}/>
       <RowPoster url={horror} title = 'Horror' isSmall={true}/>
       <RowPoster url={comedy} title = 'Comedy' isSmall={true}/>
       <RowPoster url={romance} title = 'Romance' isSmall={true}/>
    </div>
  );
}

export default App;
