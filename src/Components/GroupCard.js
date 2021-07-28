import React from 'react';
import FDTalk from '../Assets/fdtalk.png';
import Person from '../Assets/person-fill.svg';
import list from '../Assets/list-ul.svg';
import Chat from '../Assets/chat-right-text.svg';

function GroupCard() {
    return(
        <div className="group-card col-3">
            <div className="fdimg-container">
                <img src={FDTalk} alt='fdtalk' className="fdtalk-image"/>
            </div>
            <p className="talk-title">Embrace the Curl</p>
            <div className="icons-container">
                <img src={Person} alt='fdtalk' className="talk-icons"/>
                <img src={list} alt='fdtalk' className="talk-icons"/>
                <img src={Chat} alt='fdtalk' className="talk-icons"/>
            </div>
            <p className="talk-desc">May our curls pop and never stop!</p>
        </div>
    )
}
export default GroupCard;