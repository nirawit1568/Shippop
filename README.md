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

Normalization - การปรับปรุง Schema ของ database ว่ามีการออกแบบการเก็บ Attribute ที่ดีแล้วหรือไม่
แบ่งตามลำดับดังนี้

- 1NF - ปรับ attribute ที่ซ้ำกันให้แยกออกจากกัน
- 2NF - กำจัด Partial Dependency (แยกออกจากกันด้วย Primary Key ถ้ามีข้อมูลท่ีเก่ียวข้องกับ Primary Key น้ันๆ ในตาราง)
- 3NF - กำจัด Transitive Dependency (ตารางที่มี Attribute ที่ไม่ใช่ Primary Key มีความสัมพันธ์กับ Attribute ที่ไม่ใช่ Primary Key)
- BCNF - กำจัด Candidate Key (ตารางท่ีมี Candidate Key เพียงแค่ตัวเดียว หากทำขั้นตอนท่ี 3NF แล้วเหลือ Candidate Key ตัวเดียว ถือว่าเข้าสู่ขั้น BCNF เรียบร้อยแล้ว)
- 4NF - กำจัด Mutivalued Dependency (ตารางที่ไม่มี Attribute ที่เป็น primary key ชี้ข้อมูลที่มีหลายค่าหลายครั้งใน 1 ตาราง)
- 5NF - การ Join Dependency แล้วได้ตารางที่เหมือนเดิม

##### ปัญหาที่เคยเกิดขึ้น

- ในตารางมีบาง attribute ที่มีค่ามากกว่า 1 ค่า ทำให้ยากในการนำข้อมูลไปใช้ต่อ

##### วิธีแก้ปัญหา

- ปรับ schema ให้ผ่านขั้น 1NF เพื่อที่จะสามารถนำข้อมูลไปใช้ได้อย่

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
