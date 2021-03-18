import React,{useState} from 'react';
import book from '../img/book.jpeg'

function BestSell() {
    const [over,setOver] = useState(true);
    const handleOver = () => setOver(true);

    return(
        <div className="bestSell">
            <div className="tittle">
                <h4>สินค้าขายดี</h4>
                <p>ดูสินค้าขายดีทั้งหมด</p>
            </div>
            <div className="shelf">
                <a href="/book">
                <div className="book" onMouseOver={handleOver}>
                    <img src={book}/>
                    {over ? (
                        <div className="addcart">
                            <i class="bi bi-cart"></i>
                            Add to card
                        </div>
                    ):(
                        <div></div>
                    )}
                    <div className="star-review">
                        <div className="star">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <div className="review">
                            <p>Reviews (4)</p>
                        </div>
                    </div>
                    <p>ฟิสิกส์พื้นฐาน</p>
                    <p className="none">THB 450.00</p>
                    <p className="price">THB 399.00</p>
                </div>
                </a>
                <a href="/book">
                <div className="book" onMouseOver={handleOver}>
                    <img src={book}/>
                    {over ? (
                        <div className="addcart">
                            <i class="bi bi-cart"></i>
                            Add to card
                        </div>
                    ):(
                        <div></div>
                    )}
                    <div className="star-review">
                        <div className="star">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <div className="review">
                            <p>Reviews (4)</p>
                        </div>
                    </div>
                    <p>ฟิสิกส์พื้นฐาน</p>
                    <p className="none">THB 450.00</p>
                    <p className="price">THB 399.00</p>
                </div>
                </a>
                <a href="/book">
                <div className="book" onMouseOver={handleOver}>
                    <img src={book}/>
                    {over ? (
                        <div className="addcart">
                            <i class="bi bi-cart"></i>
                            Add to card
                        </div>
                    ):(
                        <div></div>
                    )}
                    <div className="star-review">
                        <div className="star">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <div className="review">
                            <p>Reviews (4)</p>
                        </div>
                    </div>
                    <p>ฟิสิกส์พื้นฐาน</p>
                    <p className="none">THB 450.00</p>
                    <p className="price">THB 399.00</p>
                </div>
                </a>
                <a href="/book">
                <div className="book" onMouseOver={handleOver}>
                    <img src={book}/>
                    {over ? (
                        <div className="addcart">
                            <i class="bi bi-cart"></i>
                            Add to card
                        </div>
                    ):(
                        <div></div>
                    )}
                    <div className="star-review">
                        <div className="star">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <div className="review">
                            <p>Reviews (4)</p>
                        </div>
                    </div>
                    <p>ฟิสิกส์พื้นฐาน</p>
                    <p className="none">THB 450.00</p>
                    <p className="price">THB 399.00</p>
                </div>
                </a>
                <a href="/book">
                <div className="book" onMouseOver={handleOver}>
                    <img src={book}/>
                    {over ? (
                        <div className="addcart">
                            <i class="bi bi-cart"></i>
                            Add to card
                        </div>
                    ):(
                        <div></div>
                    )}
                    <div className="star-review">
                        <div className="star">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <div className="review">
                            <p>Reviews (4)</p>
                        </div>
                    </div>
                    <p>ฟิสิกส์พื้นฐาน</p>
                    <p className="none">THB 450.00</p>
                    <p className="price">THB 399.00</p>
                </div>
                </a>
            </div>
        </div>
        
    );
}
export default BestSell;