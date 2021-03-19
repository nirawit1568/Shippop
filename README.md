# Shippop Exam

## 1.1

```
function fullName(firstName,lastName){
    if(firstName === "Shippop"){
        console.log("Best Online Shipping Platform");
    }
    else{
       console.log(`Hello Shippop, My name is ${firstName} ${lastName}`)
    }
}
```

## 1.2

```
const array = [1,2,3,4,5]
const copyArray = [...array]
>> console.log(copyArray) --> [1,2,3,4,5]
```

## 2

Normalization

## 3

เลือกใช้เป็น React framework
วิธี run ตัว app

- clone หรือ download code จาก github นี้
- run คำสั่ง npm install เพื่อติดตั้ง node_modules
- run คำสั่ง npm start เพื่อ start server
- เข้าไปที่ localhost:3000

หน้าของตัวเว็ปไซต์

- localhost:3000/ - หน้า home ของเว็ปไซต์
- localhost:3000/book - หน้ารายละเอียดหนังสือ สามารถกดเพิ่มสินค้าใส่ตระกร้าได้ (สังเกตุบนขวาตรง icon cart ตัวเลขในตระกร้าจะเพิ้มขึ้น)
- localhost:3000/cart - หน้าตระกร้าสินค้าของฉัน
- localhost:3000/purchase - หน้าจ่ายเงิน
- กดที่รูป icon search จะมีแถบค้นหาขึ้นมา
- กดที่รูป icon cart จะมีหน้าต่างแสดงสินค้าในตระกร้าขึ้นมา
