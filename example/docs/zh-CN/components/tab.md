::: title 基础使用
:::

::: demo

<template>
  <lay-tab v-model="current1">
    <lay-tab-item title="选项一" id="1"><div style="padding:20px">选项一</div></lay-tab-item>
    <lay-tab-item title="选项二" id="2"><div style="padding:20px">选项二</div></lay-tab-item>
  </lay-tab>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const current1 = ref("1")

    return {
      current1
    }
  }
}
</script>

:::

::: title 简约模式
:::

::: demo

<template>
  <lay-tab type="brief" v-model="current2">
    <lay-tab-item title="选项一" id="1"><div style="padding:20px">选项一</div></lay-tab-item>
    <lay-tab-item title="选项二" id="2"><div style="padding:20px">选项二</div></lay-tab-item>
  </lay-tab>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const current2 = ref("1")

    return {
      current2
    }
  }
}
</script>

:::

::: title 卡片模式
:::

::: demo

<template>
  <lay-tab type="card" v-model="current3">
    <lay-tab-item title="选项一" id="1"><div style="padding:20px">选项一</div></lay-tab-item>
    <lay-tab-item title="选项二" id="2"><div style="padding:20px">选项二</div></lay-tab-item>
  </lay-tab>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const current3 = ref("1")

    return {
      current3
    }
  }
}
</script>

:::

::: title 允许关闭
:::

::: demo

<template>
  <lay-tab type="card" v-model="current4" :allow-close="allowClose" @change="change" @close="close">
    <lay-tab-item title="选项一" id="1"><div style="padding:20px">选项一</div></lay-tab-item>
    <lay-tab-item title="选项二" id="2"><div style="padding:20px">选项二</div></lay-tab-item>
  </lay-tab>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const current4 = ref("1")
    const allowClose = ref(true)

    const change = function(id){
      console.log("当前值:" +id)
    }

    const close = function(id){
      console.log("需要关闭:" + id)
    }

    return {
      current4,
      allowClose,
      change,
      close
    }
  }
}
</script>

:::

::: title 嵌套循环
:::

::: demo

<template>
  <lay-tab type="card" v-model="current5" @change="change5">
    <lay-tab-item v-for="a in arr" :key="a" :title="a.title" :id="a.id">
    </lay-tab-item>
  </lay-tab>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const current5 = ref('1')
    const change5 = function(id){
      alert(id)
    }

    const arr = ref([
      {id:'1', title:'选项一'},
      {id:'2', title:'选项二'}
    ])

    arr.value.push({id:'3', title:'选项三'})

    return {
      current5,
      arr
    }
  }
}
</script>

:::

::: title 选项卡属性
:::

::: table

| 属性        | 描述     | 可选值         |
| ----------- | -------- | -------------- |
| v-model     | 当前激活 | --             |
| type        | 主题样式 | --             |
| allow-close | 允许关闭 | `true` `false` |

:::

::: title 选项卡事件
:::

::: table

| 事件   | 描述     | 参数 |
| ------ | -------- | ---- |
| change | 选中切换 | --   |
| close  | 关闭事件 | --   |

:::
