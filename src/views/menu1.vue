<script setup lang="ts">
interface Humen {
  say(): void;
  name: string;
}
function say(humen: Humen) {
  console.log('humen', humen)
}
class Men {
  name: string;
  constructor(shortName: string) {
    this.name = shortName
  }
  say(): void {
  }
}
// function Women(name: string) {
//   Men.call(this, name)
// }
const men1 = {
  say: () => {
    console.log(`men name is $this.name`)
  },
  name: 'hello'
}
const men2 = new Men('world')
const onClick = () => {
  say(men1)
  console.log(men1 instanceof Men)

  say(men2)
  console.log(men2 instanceof Men)
}
</script>

<template>
  <main>
    <h1>Hello world!</h1>
  </main>
</template>
