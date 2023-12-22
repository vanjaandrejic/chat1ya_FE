import "./App.css";
import { Route } from "react-router-dom";
import homePage from "./Pages/homePage";
import chatPage from "./Pages/chatPage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={homePage} exact />
      <Route path="/chats" component={chatPage} />
    </div>
  );
}

export default App;
