---
title: TS从零开始
hide: true
---

# TS从零开始


## 安装和运行
安装 
```js
npm install -g typescript
```

运行 
```js 
 tsc index.ts
```

[线上练习(TypeScript Playground)](https://www.typescriptlang.org/zh/play)

## 基础类型
### Boolean 类型
```ts
let isDone: boolean = false;
```
### Number 类型
```ts
let count: Number = 99
```
### String 类型
```ts
let myname: String = 'jack'
```
###  Array 类型
```ts
let list: number[] = [1, 2, 3]; (推荐)
let list: Array<number> = [1, 2, 3];
```
### Tuple 类型
一个数组里面包含不同类型值和已知数量，可以使用元组(Tuple).
```ts
let tupleArr = [number, string]
tupleArr = [10, 'demo']
console.log(tupleArr[0], tupleArr[1]) //10, 'demo'
tupleArr[1] = true  // Type 'boolean' is not assignable to type 'string'. 类型不匹配
tupleArr[2] = '123'  //Type '"123"' is not assignable to type 'undefined', Tuple type '[number, string]' of length '2' has no element at index '2'
console.log(tupleArr) // [10, true, "123"]  上面报错，但是还是能log出来
```
### Enum 类型
正常是定义一些带名字的常量（星期，颜色等）， 支持数字和字符串
```ts
enum Status{
    Begin, Underway, End
}
let b: Status = Status.Begin;
console.log(b) //0,  默认从0开始编号，Underway = 1, End = 2
console.log(Status[2]) //'End' string类型
```
手动设置编号
```ts
//设置Begin= 2 排号
enum Status{
    Begin = 2, Underway, End
}
console.log(Status.End) // 3 
//覆盖
enum Status{
    Begin = 1, Underway = 0, End
}
console.log(Status[1]) // 'End' 建议不要这么写  
//当排号是字符串
enum Status{
    Begin = '2', Underway, End
}
console.log(Status.End) //undefined
//手动设置值
enum Status{
    Begin = 3, Underway = 5, End = '7'
}
```
常量枚举: 它会在编译阶段被删除，并且不能包含计算成员
```ts
const enum Status{
    Begin, Underway, End
}
let e:Status= Status.End
```
### Any类型
any可以代表任何类型. 可以任意赋值和调用方法， 避开所有类型检查
```ts
let list: any[] = [1, true, "free"];
list[1] = 100;
```
### Unknown类型
所有类型也都可以赋值给 unknown， 也是顶级类型(同any)， 但是更
```ts
//当类型为 unknown 的值赋值给其他类型的变量
let value: unknown;

let value1: unknown = value;   // OK
let value2: any = value;       // OK
let value3: boolean = value;   // Error
let value4: number = value;    // Error
let value5: string = value;    // Error
let value6: object = value;    // Error
let value7: any[] = value;     // Error
let value8: Function = value;  // Error

//所以TypeScript不允许我们对类型为 unknown 的值执行任意操作
```
### Void类型
表示没有任何类型， 通常用在函数没有返回值
```ts
function fn(): void {
    console.log("hello world");
}
```
声明void类型的变量， 只能赋值undefined和null
```ts
let unusable: void = undefined;
```
通过 typeof 运算符，instanceof 运算符和自定义类型保护函数可以将 unknown 类型缩小为更具体的类型范围

### Null 和 Undefined
```ts
let u: undefined = undefined;
let n: null = null;
```
### Never类型
never表示那些永不存在的值的类型， 
