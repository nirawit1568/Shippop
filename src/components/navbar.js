import React from 'react'
import Profile from '../img/Profile.JPG'

function Navbar (){
    return(
        <div className="Navbar">
            <nav>
                <ul>
                    <div className="left-nav">
                        <li><a href="/">Book</a></li>
                        <li>สินค้าใหม่</li>
                        <li>สินค้าขายดี</li>
                        <li>สินค้าลดราคา</li>
                        <li>สินค้าแนะนำ</li>
                    </div>
                    <div className="right-nav">
                        <li><i class="bi bi-search"></i></li>
                        <li><i class="bi bi-cart"></i></li>
                        <li><img src={Profile}/></li>
                    </div>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;