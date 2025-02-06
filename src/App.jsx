import Navbar from "./MyComponents/Navbar";
import Foot from "./MyComponents/foot";
import Todos from "./MyComponents/todos";
import Sidepanel from "./MyComponents/Sidepanel";


const App = () => {
  return (
    <div>
      <Sidepanel/>
      <Navbar/>
      <Todos/>
      <Foot/>

    </div>
  );
};

export default App;