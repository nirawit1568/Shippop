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
```

## 1.3

First Class Function - คือการที่เราสามารถที่จะเอา function ใส่ในตัวแปรได้เลย แล้วสามารถเรียกใช้งาน function นั้นผ่านชื่อตัวแปรได้เลย เช่น

```
var plus = function(a+b){
    return a+b;
}
plus(1,2) จะมีค่าเท่ากับ 3
```
