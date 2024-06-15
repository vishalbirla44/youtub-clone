import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../Data'
import moment from 'moment'
const PlayVIdeo = ({ videoId }) => {

  const [apideta, setApideta] = useState(null)
  const [channelData,setchannelData]= useState(null)
  const [commentData,setcommentData] = useState(null)
  const fatchVideoDeta = async () => {
    const videoDteails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`

    await fetch(videoDteails_url).then(response => response.json()).then(data => setApideta(data.items[0]))


  }

  const fatchOtherData = async () => {
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apideta.snippet.channelId}&key=${API_KEY}`
    await fetch(channelData_url).then(response => response.json()).then(data => setchannelData(data.items[0]))


    //  fatching commnet deta
    const commnet_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`

    await fetch(commnet_url).then(response=>response.json()).then(data =>setcommentData(data.items))
  }
  


  useEffect(() => {
    fatchVideoDeta()
  }, [])

  useEffect(()=>{
    fatchOtherData()
  },[apideta])

  return (
    <div className='play-video'>
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <h3>{apideta ? apideta.snippet.title : 'Title here'}</h3>
      <div className='play_video_info'>
        <p>{apideta ? value_converter(apideta.statistics.viewCount) : "16K"} &bull; {moment(apideta ? apideta.snippet.publishedAt:"2 days").fromNow()} </p>
        <div>
          <span><img src={like} alt="" />{ apideta? value_converter(apideta.statistics.likeCount):"200"}</span>
          <span><img src={dislike} alt="" /></span>
          <span><img src={share} alt="" />Share</span>
          <span><img src={save} alt="" />Save</span>
        </div>
      </div>
      <hr />
      <div className='publisher'>
        <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt="" />
        <div>
          <p>{apideta?apideta.snippet.channelTitle:""}</p>
          <span> {channelData? value_converter( channelData.statistics.subscriberCount):"1M"} Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>

      <div className='vid-description'>
        <p>{apideta?apideta.snippet.description.slice(0,250):"no"}</p>
       
        <hr />
        <h4>{apideta?value_converter(apideta.statistics.commentCount):'120'} Comments</h4>
        <div className='comment'>
          <img src={user_profile} alt="" />
          <div>
            <h3>Vishal Birla <span> 1 Day ago</span></h3>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error laboriosam cumque libero reiciendis impedit adipisci quasi hic quia veniam. Voluptatibus beatae rerum quidem maxime error omnis deleniti ipsa assumenda quaerat.</p>
            <div className='comment-action'>
              <img src={like} alt="" />
              <span>234</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>

        <div className='comment'>
          <img src={user_profile} alt="" />
          <div>
            <h3>Vishal Birla <span> 1 Day ago</span></h3>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error laboriosam cumque libero reiciendis impedit adipisci quasi hic quia veniam. Voluptatibus beatae rerum quidem maxime error omnis deleniti ipsa assumenda quaerat.</p>
            <div className='comment-action'>
              <img src={like} alt="" />
              <span>234</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>

        <div className='comment'>
          <img src={user_profile} alt="" />
          <div>
            <h3>Vishal Birla <span> 1 Day ago</span></h3>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error laboriosam cumque libero reiciendis impedit adipisci quasi hic quia veniam. Voluptatibus beatae rerum quidem maxime error omnis deleniti ipsa assumenda quaerat.</p>
            <div className='comment-action'>
              <img src={like} alt="" />
              <span>234</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>

        <div className='comment'>
          <img src={user_profile} alt="" />
          <div>
            <h3>Vishal Birla <span> 1 Day ago</span></h3>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error laboriosam cumque libero reiciendis impedit adipisci quasi hic quia veniam. Voluptatibus beatae rerum quidem maxime error omnis deleniti ipsa assumenda quaerat.</p>
            <div className='comment-action'>
              <img src={like} alt="" />
              <span>234</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>

        <div className='comment'>
          <img src={user_profile} alt="" />
          <div>
            <h3>Vishal Birla <span> 1 Day ago</span></h3>
            <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error laboriosam cumque libero reiciendis impedit adipisci quasi hic quia veniam. Voluptatibus beatae rerum quidem maxime error omnis deleniti ipsa assumenda quaerat.</p>
            <div className='comment-action'>
              <img src={like} alt="" />
              <span>234</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default PlayVIdeo