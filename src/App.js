import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TinderCards from "./components/TinderCards";
import SwipeButtons from './components/SwipeButtons';
import Chats from "./components/Chats";
import ChatScreen from './components/ChatScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
