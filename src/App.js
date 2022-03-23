import React from "react";
import Header from "./components/Header";
import Main from "./components/Meme"
import Footer from "./components/Footer"
import "bootstrap/dist/css/bootstrap.min.css"

export default () => {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}