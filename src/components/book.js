import React,{useState} from 'react'
import book from '../img/book.jpeg'


function Book(props) {
    const [over,setOver] = useState(true);
    const handleOver = () => setOver(true);
    const handleClick = () => {
        props.set(props.num+1);
    }
    return(
        <div className="book-description">
            <div className="description">
                <div className="left">
                    <div className="show">
                        <img src={book}></img>
                    </div>
                    <div className="small">
                        <div className="twopic">
                            <img src={book}></img>
                            <img src={book}></img> 
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="text">
                        <h1>ฟิสิกส์พื้นฐาน</h1>
                        <br></br>
                        <br></br>
                        <p>ผู้เขียน: ดร.สมเกียรติ พาหะเจริญ</p>
                        <p>สำนักพิมพ์: สุชาติ สุภาพ</p>
                        <p>บาร์โค้ด: 90056</p>
                        <p>จำนวนหน้า: 256</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p>ราคา  <strong>THB399.00 </strong> <b>THB450.00</b></p>
                    </div>
                    <div className="button">
                        <input type="number" value="1" className="input"/>
                        <div className="add" onClick={handleClick}>
                            Add
                        </div>
                        <div className="whitelist">
                            Whitelist
                        </div>
                    </div>
                    <div className="share">
                        แชร์:  <i class="bi bi-envelope" ></i>  <i class="bi bi-facebook" ></i>  <i class="bi bi-google" ></i>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <div className="about">
                <p>เกี่ยวกับสินค้า</p>
                <p>รายละเอียด</p>
            </div>
            <hr></hr>
            <div className="desc">
                <p><b>รายละเอียด :</b>ฟิสิกส์พื้นฐานชั้นต้น</p>
                <p>ฟิสิกส์ Physics เป็นวิทยาศาสตร์แขนงหนึ่งที่ศึกษาธรรมชาติของสิ่งไม่มีชีวิต ซึ่งได้แก่ การเปลี่ยนแปลงทางกายภาพ และปรากฏการณ์ต่าง ๆ ที่เกิดขึ้นรอบตัวเรา การค้นคว้าหาความรู้ทางฟิสิกส์ทำได้โดยการสังเกต การทดลองและเก็บรวบรวมข้อมูลมาวิเคราะห์เพื่อสรุปเป็นทฤษฎี หลักการหรือกฎ ความรู้เหล่านี้สามารถนำไปใช้อธิบายปรากฏการณ์ธรรมชาติหรือทำนายสิ่งที่อาจจะเกิดขึ้นในอนาคต และความรู้นี้สามารถนำไปใช้เป็นพื้นฐานในการแสวงหาความรู้ใหม่เพิ่มเติมและพัฒนาคุณภาพชีวิตของมนุษย์ 1 ฟิสิกส์ คือ การศึกษากฎธรรมชาติ  2 ฟิสิกส์ คือ วิทยาศาสตร์ที่อธิบายวัตถุและพลังงาน 3 ฟิสิกส์ คือ พื้นฐานของวิทยาศาสตร์ทั้งมวล 4 ฟิสิกส์ คือ ความรู้ที่ได้จากการศึกษาและรวบรวมจากปรากฎการณ์ธรรมชาติ ที่มา</p>
            </div>
            <div className="bestSell">
            <div className="tittle">
                <h4>สินค้าที่เกี่ยวข้อง</h4>
                <p>ดูสินค้าทั้งหมด</p>
            </div>
            <div className="shelf">
                <a href="/book">
                <div className="book">
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
                <div className="book">
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
                <div className="book">
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
                <div className="book">
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
                <div className="book">
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
        </div>
        
    );
}
export default Book;