import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./Components/Navbar";
import SideBar from "./Components/SideBar.js";
import SinIn from './Components/Form';
const App = () => {
  return (
    <div>
      <CustomNavbar/>
      <SideBar/>
      <SinIn/>
    </div>
  );
};
export default App;
