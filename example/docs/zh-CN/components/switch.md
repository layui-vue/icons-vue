::: title 基础使用
:::

::: demo

<template>
  <lay-switch v-model="active1"></lay-switch>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const active1 = ref(false);

    return {
        active1
    }
  }
}
</script>

:::

::: title 事件回调
:::

::: demo

<template>
  <lay-switch v-model="active2" @change="change"></lay-switch>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const active2 = ref(true);

    const change = function( val ) {
        console.log("当前值:" + val)
    }

    return {
        active2,
        change
    }
  }
}
</script>

:::

::: title 禁用状态
:::

::: demo

<template>
  <lay-switch v-model="active3" :disabled="disabled"></lay-switch>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const active3 = ref(true);
    const disabled = ref(true)

    return {
        active3
    }
  }
}
</script>

:::

::: title 修改描述
:::

::: demo

<template>
  <lay-switch v-model="active4" active-text="白天"  inactive-text="夜间"></lay-switch>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const active4 = ref(true)

    return {
        active4
    }
  }
}
</script>

:::

::: title 开关属性
:::

::: table

| 属性          | 描述           | 可选值         |
| ------------- | -------------- | -------------- |
| name          | 原生 name 属性 | --             |
| v-model       | 是否启用       | `true` `false` |
| disabled      | 禁用           | `true` `false` |
| active-text   | 启用描述       | `启动`         |
| inactive-text | 禁用描述       | `禁用`         |

:::

::: title 开关事件
:::

::: table

| 属性   | 描述     | 可选值           |
| ------ | -------- | ---------------- |
| change | 切换事件 | current : 当前值 |

:::
