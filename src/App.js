import Body from "./components/Body";
import Header from "./components/Header";
import newImage from "./images/newImage.jpg"

function App() {
  return (
    <div>
      <img className="w-full " src={newImage}/>
      <div className="absolute w-[100%] h-[100%] top-0 backdrop-blur-sm">
      <Header/>
      <Body/>
      </div>
    </div>
  );
}

export default App;
