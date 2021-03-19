import React from 'react'
import kerry from '../img/Kerrry_Express.png'
function Purchase() {
    return(
        <div className="purchase">
            <div className="pur-left">
                <h2>ชำระเงิน</h2>
                <br></br>
                <p className="p-bold">ที่อยู่ในการจัดส่ง</p>
                <hr></hr>
                <form>
                    <div className="row">
                        <div className="form-group col-md-4 mb-3">
                            <label for="validationCustom01">ชื่อ</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group col-md-4 mb-3">
                            <label for="validationCustom01">นามสกุล</label>
                            <input type="text" className="form-control"/>
                        </div>
                    </div>
                        <div className="col-md-8 mb-3">
                            <label for="validationCustom01">ประเทศ</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label for="validationCustom01" className="red">ที่อยู่(บ้านเลขที่/หมู่บ้าน/หมู่ที่/ซอย/ถนน)</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <label for="validationCustom01">แขวง/ตำบล</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationCustom01">เขต/อำเภอ</label>
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <label for="validationCustom01">จังหวัด</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label for="validationCustom01">รหัสไปรษณีย์</label>
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="col-md-8 mb-3">
                            <label for="validationCustom01">เบอร์ติดต่อ(กรุณาระบุหมายเลขโทรศัพท์ เฉพาะตัวเลขเท่านั้น)</label>
                            <input type="text" className="form-control"/>
                        </div>
                </form>
                <br></br>
                <p className="p-bold">เลือกขนส่ง</p>
                <hr></hr>
                <div className="border-radio">
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                        />
                        <label class="form-check-label" for="flexRadioDefault1"> <p className="shipping-left">Free Shipping</p> <p className="bath-right">THB 0.00</p></label>
                    </div>
                </div>
                <div className="border-radio">
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                        />
                        <label class="form-check-label" for="flexRadioDefault1"> <img src={kerry}></img> <p className="bath-right">THB 40.00</p></label>
                    </div>
                </div>
                <br></br>
                <p className="p-bold">วิธีชำระเงิน</p>
                <hr></hr>
                <div className="border-radio">
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                        />
                        <label class="form-check-label" for="flexRadioDefault1"><i class="bi bi-cash"></i> <p className="cash">Cash</p></label>
                    </div>
                </div>
                <div className="border-radio">
                    <div class="form-check">
                        <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                        />
                        <label class="form-check-label" for="flexRadioDefault1"> <i class="bi bi-credit-card"></i><p className="credit"> Credit/Debit</p></label>
                    </div>
                </div>
                <br></br>
                <br></br>
            </div>
            <div className="total2">
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
                            <div className="gotopurchase">
                            <i class="bi bi-lock"></i>
                                ชำระเงิน
                            </div>
                    </div>
                </div>
        </div>
    );
}
export default Purchase;