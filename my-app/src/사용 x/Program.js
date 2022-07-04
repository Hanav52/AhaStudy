import "./css/stylemain.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function Program() {

  return (
    <BrowserRouter>
    <div>
        <Route path="/program">
        <section className="program">
            <div className="program-box" align="center" >
                hello
            </div>
        </section>
        </Route>
        <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default Program;