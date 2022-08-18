import { useState } from 'react'
import Cont1 from "./components/Cont1.jsx"
import Cont2 from "./components/Cont2.jsx"
import img from "./400px.jpg"

export default function App() {
    return (
        <div className="box">
            <img src={img} className="img" />
                <Cont1 />
                <Cont2 />
        </div>
    )
}