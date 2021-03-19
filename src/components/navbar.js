import React,{useState} from 'react'
import Profile from '../img/Profile.JPG'
import book from '../img/book.jpeg'

function Navbar (props){
    const [clickSearch,setClickSearch] = useState(false);
    const handleClickSearch = () => setClickSearch(!clickSearch);
    const [clickCart,setClickCart] = useState(false);
    const handleClickCart = () => setClickCart(!clickCart);
    return(
        <div className="Navbar">
            <nav>
                <ul>
                    <div className="left-nav">
                        <li><a href="/">Book</a></li>
                        {clickSearch ? (
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
                        <li onClick={handleClickSearch}>{clickSearch ? (<i class="bi bi-x-circle"></i>):(<i class="bi bi-search"></i>)}</li>
                        <li onClick={handleClickCart}><i class="bi bi-cart"></i></li>
                        <li><img src={Profile}/></li>
                        <div className="number">
                            {props.number}
                        </div>
                    </div>
                </ul>
            </nav>
            {clickCart ? (
                <div className="mycart">
                    <h4>ตะกร้าของฉัน</h4>
                    <h5>2 สินค้าในตระกร้า</h5>
                    <a href="/cart">
                        <div className="viewcart">
                            ดูหรือแก้ไขตระกร้าของฉัน
                        </div>
                    </a>
                    <hr></hr>
                    <div className="totalbook">
                        <h3>1 x</h3>
                        <img src={book}></img>
                        <p>ฟิสิกส์พื้นฐาน</p>
                    </div>
                    <hr></hr>
                    <p>ยอดรวม: <strong>THB399.00</strong></p>
                    <a href="/purchase">
                        <div className="gopurchase">
                            ไปชำระเงิน
                        </div>
                    </a>
                </div>
            ):(
                <div></div>
            )}
            
        </div>
    );
}

export default Navbar;