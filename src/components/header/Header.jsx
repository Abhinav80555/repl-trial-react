import React from "react"
import './Header.css';
import {useState} from "react";
import {BsCameraReels } from "react-icons/bs";
import {DateRange} from "react-date-range";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
// <BsCameraReels/>
const Header=({type})=>{
  const [openDate,setOpenDate]= useState(false)
const [date,setDate]= useState([{
  startDate:new Date(),
  endDate: new Date(),
  key:'selection'
}]);
const [openOptions,setOpenOptions]= useState(false)
const [options,setOptions]= useState({
  camera:1,
  lens:0,
  combos:1
})

 const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  
  return(
    <div className="header">
        <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
    <div className="headerList">
      {/* headerListItem *3 */}
    <div className="headerListItem active">
    <span>About</span></div>
       <div className="headerListItem">
    <span>Terms</span></div>
       <div className="headerListItem">
    <span>Contact</span> 
    </div>
      <div className="headerListItem">
    <span>Contact</span> 
    </div>
      <div className="headerListItem">
    <span>Contact</span> 
    </div></div>
        { type !=="list" && <><h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or more with a free TH Rentals account </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <BsCameraReels className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"/>
              </div>
               <div className="headerSearchItem">
                <BsCameraReels className="headerIcon" />
              <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
                 {openDate && <DateRange editableDateInputs={true}
                   onChange={item=>setDate([item.selection])}
                   moveRangeOnFirstSelection={false}
                   ranges={date}
                   className="date"/>}
              </div>
               <div className="headerSearchItem">
                <BsCameraReels className="headerIcon" />
             <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.camera} camera . ${options.lens} lens . ${options.combos} combos`}</span>
                 {openOptions && <div className="options">
                  {/* option items *3*/}
                 <div className="optionItem">
                <span className="optionText">Camera</span>
                   <div className="optionCounter">
                     
                   <button disabled={options.camera<=0} className="optionCounterButton" onClick={()=>handleOption("camera","d")}>-</button>
                   <span className="optionCounterNumber">{options.camera}</span>
                   <button className="optionCounterButton" onClick={()=>handleOption("camera","i")}>+</button>
                     </div>
                 </div>
                   <div className="optionItem">
                <span className="optionText">Lens</span>
                     <div className="optionCounter">
                   <button disabled={options.lens<=0} className="optionCounterButton" onClick={()=>handleOption("lens","d")}>-</button>
                   <span className="optionCounterNumber">{options.lens}</span>
                   <button className="optionCounterButton" onClick={()=>handleOption("lens","i")}>+</button>
                       </div>
                 </div>
                   <div className="optionItem">
                <span className="optionText">Combos</span>
                     <div className="optionCounter">
                       
                   <button disabled={options.combos<=0} className="optionCounterButton" onClick={()=>handleOption("combos","d")}>-</button>
                   <span className="optionCounterNumber">{options.combos}</span>
                   <button className="optionCounterButton" onClick={()=>handleOption("combos","i")}>+</button>
                       </div>
                 </div>
                 </div>}
              </div>
              <div className="headerSearchItem">
             <button className="headerBtn">Search</button>
              </div>
              </div></>}
        </div>
      
    </div>
  )
    }
export default Header











