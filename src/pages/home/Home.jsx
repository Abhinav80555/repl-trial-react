import React from "react"
import './Home.css';
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Featured from "../../components/featured/Featured"
import EquipmentType from "../../components/equipmentType/EquipmentType"
import CinemaSeries from "../../components/cinemaSeries/CinemaSeries"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
const Home=()=>{
  return(
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
      <Featured/>
        <h1 className="homeTitle">Browse by Equipment Type</h1>
      <EquipmentType/>
        <h1 className="homeTitle">for Cinema Series</h1>
        <CinemaSeries/>
        <MailList/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default Home