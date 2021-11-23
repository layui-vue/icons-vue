<script lang="ts">
export default {
  name: "Logout",
};
</script>

<script setup lang="ts">
import { defineProps } from "vue";
import LayIcon from "../components/icon/index";

const props = withDefaults(
  defineProps<{
    color?: string;
    size?: string;
  }>(),
  {}
);
</script>

<template>
  <lay-icon :color="props.color" :size="props.size" type="layui-icon-logout" />
</template>