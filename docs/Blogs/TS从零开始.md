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
正常是定义一些带名字的常量（星期，颜色等）
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
- 数字枚举
- 字符串枚举
- 异构枚举: 混合字符串和数字成员
- 常量枚举: 它会在编译阶段被删除，并且不能包含计算成员
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

### Object类型
非原始类型
```ts
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```

## 断言

### 类型断言
尖括号语法
```ts
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```
as语法
```ts
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```
### 非空断言

### 确定赋值断言

## 自定义类型
### 接口
```ts
interface User {
    name: string
    age?: number //可选
    readonly gender: 'male' //只读
    [propName: string]: string  //其他的任意属性（key为string，value为string）
}
```
### 类型别名
```ts
type User = {
  name: string
  age: number
};
```
### interface和type的区别
#### 相同点
1. 都可以用来描述一个对象或函数
2. 都允许拓展（extends）, 2者可以相互extend
```ts
interface Name { 
  name: string; 
}
interface User extends Name { 
  age: number; 
}
---
type Name = { 
  name: string; 
}
type User = Name & { age: number  };
```
#### 不同点
1. type 可以声明基本类型别名，联合类型，元组等类型, interface不可以
```ts
type Name: string

type Cat = { name: 'tom'}
type Mouse = { name: 'jerry'}
//联合类型
type  Pet = Cat | Mouse
//元组
type Cartoon =  [Cat, Mouse]
```
2. interface 能够声明合并, type不可以
``` ts
interface User {
  name: string
  age: number
}

interface User {
  gender: string
}

const user: User = { name: '123', age: 12, gender: 'male' };
```
3. interface 有可选属性和只读属性, type没有

## 函数
### 函数类型
```ts
function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number { return x + y; };
```
### 可选参数及默认参数
```ts
function createUser(name: string, age?: number, height: number = 180): string{
    return `my name is ${name}, age is ${age}, height is ${height}` 
}

createUser('jack', 10) //"my name is jack, age is 10, height is 180"
```
### 剩余参数
```ts
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie"); //"Joseph Samuel Lucas MacKinzie"
```
### 函数重载
函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力。
```ts
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
```
其他重载：
- 重载类中的成员方法
- 构造函数重载
- 特定重载签名

为啥不用联合类型?
```ts
type Combinable = string | number;

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
const result = add('Semlinker', ' Kakuqo');
result.split(' '); //error,  Combinable 和 number 类型的对象上并不存在 split 属性
```
## 泛型
允许同一个函数接受不同类型参数的一种模板，通常创建可复用的组件
``` ts
function identity<T>(arg: T): T {
    return arg;
}
console.log(identity<Number>(1)) //Number像传参数传给T
console.log(identity(1)) //不传Number，编译器自动识别1的类型

function identity <T, U>(value: T, message: U) : T {
  console.log(message);
  return value;
}
console.log(identity<Number, string>(68, "Semlinker")); 
```
#### 常见泛型变量
- K（Key）：表示对象中的键类型；
- V（Value）：表示对象中的值类型；
- E（Element）：表示元素类型。

#### 泛型接口
```ts
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
```
#### 泛型类
```ts
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
console.log(myGenericNumber.add(myGenericNumber.zeroValue, "test"));

```
泛型约束使用extends实现

## 高级类型
### 交叉类型

### 联合类型
