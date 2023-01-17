import React, { Component } from 'react';
import './App.css'
import Insert from "./pages/Insert";
import List from "./pages/List";
import View from "./pages/View";
import Nbbar from "./pages/Nbbar";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Delete from "./pages/Delete";
import Main from "./pages/Main";
import Login from "./pages/Login"

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <header>
                        <div align="center">
                            <a href="http://localhost:3000"><img src="img/gs94.png" width="120px" height="60px" /></a>
                            <Link to="/delete"><img src="img/minus.png" align="right" width="50px" height="50px"></img></Link>
                            <Link to="/insert"><img src="img/plus.png" align="right" width="50px" height="50px"></img></Link>
                        </div>
                        <div>
                            <br /><br />
                            <Nbbar />
                        </div>
                    </header>
                    <body>
                        <div id="wrapper">
                            <div id="divlist">
                                <List />
                            </div>
                            <div>
                                <Routes>
                                    <Route exact path="/" element={<Login />} />
                                    <Route exact path="/main" element={<Main />} />
                                    <Route exact path="/insert" element={<Insert />} />
                                    <Route exact path="/view/:boardno" element={<View />} />
                                    <Route exact path="/delete" element={<Delete />} />
                                </Routes>
                            </div>
                        </div>
                    </body>
                    <footer>
                        <a href="https://github.com/rud9192/GS" target="_blank">
                            <img src="img/git.png" width="100px" height="100px" />
                        </a>
                    </footer>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;