<script setup lang="ts">
interface Men {
  name: string
  age: number
}
class Empty {}

class OtherEmpty {}
const objectAsAinterface = () => {
  function name(men: Men) {
    console.log('men.name', men.name)
  }
  function age(men: Men) {
    console.log('men.age', men.age)
  }
  let men = {
    age: 10,
    name: 'xiaohu'
  }
  function empty(empty: Empty) {
    console.log(empty, empty instanceof Empty)
  }
  name(men)
  age(men)

  let obg = {
    aKey: 'aValue'
  }
  empty(obg)

  let empty2: Empty = new OtherEmpty()
  console.log('empty2', empty2, empty2 instanceof OtherEmpty, empty2 instanceof Empty)
}

const objTointerface = () => {
  interface WoMen {
    age: number
    name: string
  }
}

const typeUse = () => {
  // 联合类型
  type MyBool = true | false | number
  let is: MyBool = 1
  console.log('is', is)

  function unionParams(value: string | string[] | null | undefined) {
    console.log(typeof value)
  }
  unionParams('hello')
  unionParams(null)
  unionParams(undefined)
  unionParams(['hello'])

  type ObjectWithNameArray = Array<{ name: string }>
  let array = [{ name: 'zhangsan' }]
}

interface Car<T> {
  brand: T
  value(): () => T
}

declare const CCar: Car<string>

const interfaceGenerice = () => {
  console.log('car', CCar.value())
}

class APerson {
  fullName: string
  constructor(
    public first: string,
    public last: string
  ) {
    this.fullName = first + last
  }
}
const classUse = () => {
  let ap = new APerson('tian', 'lin')
  console.log(ap, Object.getPrototypeOf(ap), ap instanceof APerson)
}
</script>

<template>
  <pre>
    1，ts类型没有具体运行时含义，一个obj可以同属于其他的类型
    2，能使用interface尽量使用interface，需要使用复杂数据才使用type
    3，只要给出的对象属性满足需要的对象的属性，ts就会认为类型兼容，可以增加属性，相当于对父类的扩充
  </pre>

  <div class="about">
    <button class="btn btn-primary" @click="objectAsAinterface">ts的面向对象语言的差别</button>
    <button class="btn btn-primary" @click="objTointerface">interface定义对象</button>

    <button class="btn btn-primary" @click="typeUse">type的用法</button>
    <button class="btn btn-primary" @click="interfaceGenerice">interface定义泛型</button>

    <button class="btn btn-primary" @click="classUse">定义class</button>
  </div>
</template>

<style></style>
