import React, { useEffect, useState } from "react"
import {Link} from 'react-router-dom';


function DigiDetail(match) {

    useEffect(() => {
        fetchDigiName()
    },[])

    const [digiImg, setImg] = useState([])

    const fetchDigiName = () =>{
        const specificName = match.match.params.id

        fetch(`https://digimon-api.vercel.app/api/digimon/name/${specificName}`)
        .then(res => res.json())
        .then(info => {
            const digiImg = info[0].img
            setImg(digiImg)
        })
    }

    return (
        <div>
          <img src={digiImg} width="250" height="260"></img>
        </div>
    )
}

export default DigiDetail

