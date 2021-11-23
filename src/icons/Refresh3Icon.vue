<script lang="ts">
export default {
  name: "Refresh3Icon",
};
</script>
<script setup lang="ts">
import { defineProps } from "vue";
import LayIcon from "../components/icon/index";
      
const props = defineProps<{
  color?: string;
  size?: string;
}>();
</script>
<template>
  <lay-icon
    :color="props.color"
    :size="props.size"
    type="layui-icon-refresh-3"
  />
</template>