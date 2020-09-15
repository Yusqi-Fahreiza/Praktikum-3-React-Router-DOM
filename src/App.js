import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
      <div> <hr />
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="#">
            Navbar
        </a>

        <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="/">Beranda <span className="sr-only"></span></a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="/tentangsaya">Tentang Saya <span className="sr-only"></span></a>
            </li>
            <li className="navbar-nav active">
                <a className="nav-link" href="/karya">Karya <span className="sr-only"></span></a>
            </li>
            <li className="navbar-nav active">
                <a className="nav-link" href="/kontak">Kontak <span className="sr-only"></span></a>
            </li> <hr />
        </ul>

        </nav>
        <p><Utama /></p>
      </div>
    )
  }
}

export default App;
