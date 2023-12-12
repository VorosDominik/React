import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tictactoe">tictactoe</Link>
            </li>
            <li>
              <Link to="/lightson">lightson</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    );
  };
  
  export default Layout;