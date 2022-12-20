import Nav2 from "../Nav2/Nav2";
import Nav1 from "../Nav1/Nav1";

function Nav() {
  return (
    <header>
      <div className="inner">
        <div className="widthsmall">
          <Nav1 />
          <Nav2 />
        </div>
      </div>
    </header>
  );
}

export default Nav;
