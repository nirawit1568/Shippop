import React from 'react'
import book from '../img/book.jpeg'

function Cart() {

    return(
        <div className="cart">
            <br></br>
            <h3>ตะกร้าสินค้า</h3>
            <br></br>
            <div className="basket">
                <table>
                    <tr>
                        <th>สินค้า</th>
                        <th>ราคา</th>
                        <th>จำนวน</th>
                        <th>ยอดรวม</th>
                    </tr>
                    <tr>
                        <th><hr></hr></th>
                        <th><hr></hr></th>
                        <th><hr></hr></th>
                        <th><hr></hr></th>
                    </tr>
                    <tr>
                        <th><div className="product"><div className="pic"><img src={book}/></div><div className="text_physic">ฟิสิกส์พื้นฐาน</div></div></th>
                        <th>THB399</th>
                        <th><input type="number" className="input" value="1"/></th>
                        <th>THB399</th>
                    </tr>
                    <tr>
                        <th><hr></hr></th>
                        <th><hr></hr></th>
                        <th><hr></hr></th>
                        <th><hr></hr></th>
                    </tr>
                </table>
                <div className="btn-under">
                    <a href="/">
                        <div className="buyother">
                            ซื้อสินค้าต่อไป
                        </div>
                    </a>
                    <div className="clear">
                        ล้างตระกร้าสินค้า
                    </div>
                </div>
            </div>
            <div className="total1">
                <div className="content">
                    <h4>สรุปคำสั่งซื้อ</h4>
                    <div className="price-total">
                        <div className="allprice">ยอดรวม</div>
                        <div className="pricebath">THB 399</div>
                    </div>
                    <div className="shipping">
                        <div className="priceshipping">ค่าส่ง</div>
                        <div className="shippingbath">THB 1</div>
                    </div>
                    <hr></hr>
                    <div className="balance">
                        <div className="totalbalance">ยอดสุทธิ</div>
                        <div className="pricebalance">THB 400</div>
                    </div>
                    <a href="/purchase">
                        <div className="gotopurchase">
                            ไปชำระเงิน
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Cart;