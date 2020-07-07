import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {overmind} from './Others/OvermindHelper'
import {Provider} from "overmind-react";
import WholeThing from "./Components/WholeThing";

ReactDOM.render(
    <React.StrictMode>
        <Provider value={overmind}>
            <WholeThing/>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
