import React,{useState} from 'react'
import Profile from '../img/Profile.JPG'

function Navbar (props){
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return(
        <div className="Navbar">
            <nav>
                <ul>
                    <div className="left-nav">
                        <li><a href="/">Book</a></li>
                        {click ? (
                            <div className="search">
                                ค้นหาสินค้า
                            </div>
                        ):(
                            <div className="list">
                                <li>สินค้าใหม่</li>
                                <li>สินค้าขายดี</li>
                                <li>สินค้าลดราคา</li>
                                <li>สินค้าแนะนำ</li>
                            </div>
                        )}

                    </div>
                    <div className="right-nav">
                        <li onClick={handleClick}>{click ? (<i class="bi bi-x-circle"></i>):(<i class="bi bi-search"></i>)}</li>
                        <li><i class="bi bi-cart"></i></li>
                        <li><img src={Profile}/></li>
                        <div className="number">
                            {props.number}
                        </div>
                    </div>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;