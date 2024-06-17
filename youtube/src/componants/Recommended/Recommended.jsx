import React, { useEffect, useState } from 'react'
import './Recommonded.css'
import thumbnail1 from "../../assets/thumbnail1.png"
import { API_KEY } from "../../Data"

const Recommended = ({categouryId}) => {
    const [apiData, setApiData] = useState([])


    const fetchData = async () => {
        const relatedvideo_url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categouryId}&key=${API_KEY}`;

        await fetch(relatedvideo_url).then(reaponse => reaponse.json()).then(data => data?setApiData(data.items): "")

    }


    useEffect(() => {
        fetchData();
    },[])

    return (

        <div className='reommonded'>
         {apiData && Array.isArray(apiData) && apiData.map((item, index)=> {
                return(
                    <div key={index} className="side-video-list">
                        <img src={thumbnail1} alt="" />
                        <div className='vid-info'>
                            <h4>best chanel that help you best html css</h4>
                            <p>code with chay </p>
                            <p>199k Views</p>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Recommended