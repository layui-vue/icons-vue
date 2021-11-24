# Icons Vue 1.0.0

### ⭐ The abstract trees of the layui iconfont icons.


![输入图片说明](image.png)


icons - vue 是一套提取至 layui vue 的高质量 iconfont 库，你可以自由的在其他 vue 项目中独立使用。


在 icons - vue 发布之前，layui vue 内置 icon 组件，你可以像以下方式去使用它


```
<lay-icon type="layui-icon-bluetooth"></lay-icon>
```

现在 icons - vue 作为一个独立库，你需要使用 npm 或 yarn 安装

npm:

```
npm install @layui/icons-vue
```

yarn:

```
yarn add @layui/icons-vue
```


全局引入 icons - vue 所需的 iconfont 样式文件

```
import '@layui/icons-vue/lib/index.css'
```

现在你可以使用 icons-vue 了，我们在 icons - vue 中提供了 组件化，动态，自定义 三种使用方式。


1. 组件化，将 iconfont 的 class 作为组件名称，直接使用

```
<template>
    <!-- 组件图标 -->
    <AlignCenterIcon></AlignCenterIcon>
    <DiamondIcon></DiamondIcon>
</template>
<script lang="ts">
import { AlignCenterIcon, DiamondIcon } from '@layui/icons-vue';
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    AlignCenterIcon,
    DiamondIcon,
    NotFoundIcon
  }
});
</script>
```

2. 依托于 lay-icon 组件，通过 type 传递 class 的方式渲染组件

```
<template>
  <!-- 动态图标 -->
  <LayIcon type="layui-icon-not-found"></LayIcon>
  <LayIcon type="layui-icon-diamond"></LayIcon>
</template>
<script lang="ts">
import { LayIcon } from '@layui/icons-vue';
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    LayIcon
  }
});
</script>
```

3. 我们允许用户接触 lay-icon 来使用自己引入的 iconfont 字体图标

```
<template>
   <!-- 自定义图标 -->
   <LayIcon prefix="iconfont" type="sample"></LayIcon>
</template>
<script lang="ts">
import './iconfont.css';
import { LayIcon } from '@layui/icons-vue';
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
    LayIcon
  },
  setup() {
    return {
    };
  },
});
</script>
```

在 layui - vue 的后续迭代中，我们仍支持内置 lay-icon 组件，但 组件化的 icon 使用方式，需要自行引入 icons vue 库
