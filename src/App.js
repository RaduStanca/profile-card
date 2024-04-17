import "./App.css";
import Avatar from "./components/avatar/Avatar";
import Intro from "./components/intro/Intro";
import SkillList from "./skilllist/SkillList";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

export default App;
