import React from 'react';
import { Team } from '../components';
import './Table.css';
import {FiArrowRight, FiArrowDown, FiArrowLeft, FiArrowUp} from "react-icons/fi";
import {GiBeveledStar} from 'react-icons/gi';


const Table = () => {
  return (
                <div className="table">
                <Team teamClass='Team-one' circle_color=' green' val="#00750d"/>
                <Team teamClass='Team-two ' circle_color='yellow' val="#f9c91e"/>
                <Team teamClass='Team-three' circle_color=' red' val="#fe0000"/>
                <Team teamClass='Team-four' circle_color=' blue'val="#00a7e8" />
                <div className="center"></div>
                <div className="zone zone_left">
                    <div className="z zl1"></div>
                    <div className="z zl2"></div>
                    <div className="z zl3"></div>
                    <div className="z zl4"></div>
                    <div className="z zl5"></div>
                    <div className="z zl6"></div>
                    <div className="z z_center zl7"> <FiArrowRight fontSize={"1.5rem"}/> </div>
                    <div className="z zl8"></div>
                    <div className="z zl9"></div>
                    <div className="z zl10"></div>
                    <div className="z zl11"></div>
                    <div className="z zl12"></div>
                    <div className="z zl13"></div>
                    <div className="z  zl14"></div>
                    <div className="z z_center zl15"><GiBeveledStar fontSize={"1.5rem"}/></div>
                    <div className="z zl16"></div>
                    <div className="z zl17"></div>
                    <div className="z zl18"></div>
                </div>
                <div className="zone zone_top">
                    <div className="z zt1"></div>
                    <div className="z zt2 z_center"><FiArrowDown fontSize={"1.5rem"}/></div>
                    <div className="z zt3"></div>
                    <div className="z zt4"></div>
                    <div className="z zt5"></div>
                    <div className="z zt6"></div>
                    <div className="z zt7 z_center"><GiBeveledStar fontSize={"1.5rem"}/></div>
                    <div className="z zt8"></div>
                    <div className="z zt9"></div>
                    <div className="z zt10"></div>
                    <div className="z zt11"></div>
                    <div className="z zt12"></div>
                    <div className="z zt13"></div>
                    <div className="z zt14"></div>
                    <div className="z zt15"></div>
                    <div className="z zt16"></div>
                    <div className="z zt17"></div>
                    <div className="z zt18"></div>
                </div>
              
              <div className="zone zone_right">
                <div className="z zr1"></div>
                <div className="z zr2"></div>
                <div className="z zr3"></div>
                <div className="z zr4 z_center"><GiBeveledStar fontSize={"1.5rem"}/></div>
                <div className="z zr5 "></div>
                <div className="z zr6"></div>
                <div className="z zr7"></div>
                <div className="z zr8"></div>
                <div className="z zr9"></div>
                <div className="z zr10"></div>
                <div className="z zr11"></div>
                <div className="z z_center zr12"><FiArrowLeft fontSize={"1.5rem"}/></div>
                <div className="z zr13"></div>
                <div className="z zr14"></div>
                <div className="z zr15"></div>
                <div className="z zr16"></div>
                <div className="z zr17"></div>
                <div className="z zr18"></div>
              </div>

              <div className="zone zone_bottom">
                <div className="z zb1"></div>
                <div className="z zb2"></div>
                <div className="z zb3"></div>
                <div className="z zb4"></div>
                <div className="z zb5"></div>
                <div className="z zb6"></div>
                <div className="z zb7"></div>
                <div className="z zb8"></div>
                <div className="z zb9"></div>
                <div className="z zb10"></div>
                <div className="z zb11"></div>
                <div className="z z_center zb12"><GiBeveledStar fontSize={"1.5rem"}/></div>
                <div className="z zb13"></div>
                <div className="z zb14"></div>
                <div className="z zb15"></div>
                <div className="z zb16"></div>
                <div className="z  z_center zb17"><FiArrowUp fontSize={"1.5rem"}/></div>
                <div className="z zb18"></div>
              </div>
            </div>

  )
}

export default Table;