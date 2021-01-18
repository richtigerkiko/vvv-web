<template>
  <div id="baseContent">
    <div class="title">
      <h1>vlexo</h1>
    </div>
    <div class="title page">
      <h2>{{ routename }}</h2>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    computed: {
        routename (): string {
            return (this.$route.name as string).split('.')[1]
        }
    }
})
</script>