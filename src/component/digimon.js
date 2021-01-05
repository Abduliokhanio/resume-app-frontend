import React, { useEffect, useState } from "react"
import {Link} from 'react-router-dom';


function Digimon() {

    useEffect(() => {
        fetchDigiName()
    },[])

    const [mappedInfo, setInfo] = useState([])

    const fetchDigiName = () =>{
        fetch("https://digimon-api.vercel.app/api/digimon")
        .then(res => res.json())
        .then(info => {
            const mappedInfo = info.map(element => element.name)
            console.log(mappedInfo)
            setInfo(mappedInfo)
        })
    }

    return (
        <div>
           {mappedInfo.map(item => (
           
           <h1 key = {mappedInfo.indexOf(item)}> 
                <Link to={`/digimon/${item}`}>{mappedInfo.indexOf(item)})  {item}</Link>
           </h1>))}
           
        </div>
    )
}

export default Digimon

