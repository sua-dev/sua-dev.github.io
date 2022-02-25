import Topbar from "./components/Topbar/topbar";
import Intro from "./components/Intro/intro";
import Portfolio from "./components/Portfolio/portfolio";
import Projects from "./components/Projects/projects";
import Testimonials from "./components/Testemonials/testimonials";
import Contact from "./components/Contact/contact";
import "./app.scss"


function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Projects/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
