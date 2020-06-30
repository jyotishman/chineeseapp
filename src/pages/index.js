import React, { useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./styles.css"

const IndexPage = () => {
  useEffect(() => {
    setTimeout(function () {
      window.ReactNativeWebView.postMessage("Hello!")
    }, 2000)
  }, [])
  return (
    <Layout className="index">
      <SEO title="Home" />
      <h1
        style={{
          fontSize: 26,
          textAlign: "center",
          marginBottom: 25,
          color: "rgb(58, 82, 217)",
        }}
      >
        List of Chineese app ban by Indian Goverment.
      </h1>
      <div className="logo-wrap">
        <ul>
          <li>
            <Image filename="1.png" alt="tiktok" /> Tiktok
            <span>Downloads- 1B+</span>
          </li>
          <li>
            <Image filename="2.png" alt="Shareit" /> Shareit
            <span>Downloads- 1B+</span>
          </li>
          <li>
            <Image filename="3.png" alt="Kwai" /> Kwai
            <span>Downloads- 100M+</span>
          </li>
          <li>
            <Image filename="4.png" alt="UC Browser" /> UC Browser
            <span>Downloads- 500M+</span>
          </li>
          <li>
            <Image filename="5.png" alt="Baidu map" /> Baidu map
            <span>Downloads- 1M+</span>
          </li>
          <li>
            <Image filename="6.png" alt="Shein" /> Shein
            <span>Downloads- 100M+</span>
          </li>
          <li>
            <Image filename="7.png" alt=" Clash of Kings" /> Clash of Kings
            <span>Downloads- 50M+</span>
          </li>
          <li>
            <Image filename="8.png" alt=" DU battery saver" /> DU battery saver
            <span>Downloads- 100K+</span>
          </li>
          <li>
            <Image filename="9.png" alt="Helo" /> Helo
            <span>Downloads- 100M+</span>
          </li>
          <li>
            <Image filename="10.png" alt="Likee" /> Likee
            <span>Downloads- 500M+</span>
          </li>
          <li>
            <Image filename="11.png" alt="YouCam makeup" /> YouCam makeup
            <span>Downloads- 100M+</span>
          </li>
          <li>Mi Community</li>
          <li>CM Browers</li>
          <li>Virus Cleaner</li>
          <li>APUS Browser</li>
          <li>ROMWE</li>
          <li>Club Factory</li>
          <li>Newsdog</li>
          <li>Beutry Plus</li>
          <li>WeChat</li>
          <li>UC News</li>
          <li>QQ Mail</li>
          <li>Weibo</li>
          <li>Xender</li>
          <li>QQ Music</li>
          <li>QQ Newsfeed</li>
          <li>Bigo Live</li>
          <li>SelfieCity</li>
          <li>Mail Master</li>
          <li>Parallel Space</li>
          <li>Mi Video Call Xiaomi</li>
          <li>WeSync</li>
          <li>ES File Explorer</li>
          <li>Viva Video QU Video Inc</li>
          <li>Meitu</li>
          <li>Vigo Video</li>
          <li>New Video Status</li>
          <li>DU Recorder</li>
          <li>Vault- Hide</li>
          <li>Cache Cleaner DU App studio</li>
          <li>DU Cleaner</li>
          <li>DU Browser</li>
          <li>Hago Play With New Friends</li>
          <li>Cam Scanner</li>
          <li>Clean Master Cheetah Mobile</li>
          <li>Wonder Camera</li>
          <li>Photo Wonder</li>
          <li>QQ Player</li>
          <li>We Meet</li>
          <li>Sweet Selfie</li>
          <li>Baidu Translate</li>
          <li>Vmate</li>
          <li>QQ International</li>
          <li>QQ Security Center</li>
          <li>QQ Launcher</li>
          <li>U Video</li>
          <li>V fly Status Video</li>
          <li>Mobile Legends</li>
          <li>DU Privacy</li>
        </ul>
      </div>
    </Layout>
  )
}
export default IndexPage
