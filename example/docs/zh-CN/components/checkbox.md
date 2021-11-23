::: title 基础使用
:::

::: demo

<template>
  <lay-form>
    <lay-checkbox name="like" skin="primary"  v-model="checked1" label="1" ></lay-checkbox>
 </lay-form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const checked1 = ref(false)

    return {
      checked1
    }
  }
}
</script>

:::

::: title 默认样式
:::

::: demo

<template>
  <lay-form>
    <lay-checkbox name="like" label="1" v-model="checked2" >普通</lay-checkbox>
 </lay-form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const checked2 = ref(false)

    return {
      checked2
    }
  }
}
</script>

:::

::: title 复选框组
:::

::: demo

<template>
  <lay-form>
    <lay-checkbox-group v-model="checkeds" @change="groupChange">
      <lay-checkbox name="like" skin="primary" label="1">写作</lay-checkbox>
      <lay-checkbox name="like" skin="primary" label="2">画画</lay-checkbox>
      <lay-checkbox name="like" skin="primary" label="3">运动</lay-checkbox>
    </lay-checkbox-group>
  </lay-form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const checkeds = ref(['1','2']);
    const groupChange = function(val) {
      console.log("回调:" + JSON.stringify(val))
    }
    
    return {
        checkeds,
        groupChange
    }
  }
}
</script>

:::

::: title 完整案例
:::

::: demo

<template>
  <lay-form>
    <lay-checkbox name="like" skin="primary" v-model="checked3" label="1">写作</lay-checkbox>
    <lay-checkbox name="like" skin="primary" v-model="checked4" label="2">画画</lay-checkbox>
    <lay-checkbox name="like" skin="primary" v-model="checked5" label="3">运动</lay-checkbox>
  </lay-form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const checked3 = ref(true);
    const checked4 = ref(true);
    const checked5 = ref(true);

    return {
        checked3, checked4, checked5
    }
  }
}
</script>

:::

::: title 禁用状态
:::

::: demo

<template>
  <lay-form>
    <lay-checkbox name="like" skin="primary" label="1" :disabled="disabled" v-model="checked6">禁用</lay-checkbox>
 </lay-form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const disabled = ref(true)

    const checked6 = ref(false);

    return {
      disabled,checked6
    }
  }
}
</script>

:::

::: title 事件回调
:::

::: demo

<template>
  <lay-form>
    <lay-checkbox name="like" skin="primary" label="1" @change="change" v-model="checked7">回调</lay-checkbox>
 </lay-form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {

    const checked7 = ref(true);

    const change = function(isChecked) {
        console.log("是否选中:" + isChecked)
    }

    return {
        change,
        checked7
    }
  }
}
</script>

:::

::: title 复选框属性
:::

::: table

| 属性                | 描述          | 可选值               |
| ------------------- | ------------- | -------------------- |
| name                | 原始属性 name | --                   |
| skin                | 主题          | --                   |
| label               | 选中值        | --                   |
| v-model | 是否选中      | `true` `false`       |
| change              | 切换事件      | isChecked : 当前状态 |

:::

::: title 复选框事件
:::

::: table

| 事件   | 描述     | 可选值               |
| ------ | -------- | -------------------- |
| change | 切换事件 | isChecked : 当前状态 |

:::
