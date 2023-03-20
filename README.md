## Introduction

Vue3 click outside directive.
Development with TS.

## Installation

```bash
 npm i @baiguangteng/vue3-click-outside
 // or
 pnpm add @baiguangteng/vue3-click-outside
```

## Example

```js
<script lang="ts" setup>
import vClickOutside from '@baiguangteng/vue3-click-outside'

function clickOutside() {
  console.log('点击外面了')
}
</script>

<template>
  <div class="about">
    <h1 v-click-outside="clickOutside">This is an about page</h1>
  </div>
</template>

```

or

```js
import vClickOutside from '@baiguangteng/vue3-click-outside'
app.use(vClickOutside)
```
