<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>@formkit/drag-and-drop 案列</h2>

    <DndGrid :list="list">
      <template #item="data">
        <img class="img-style" :src="data.imgSrc" />
        <!-- <p>{{ data.imgSrc }}</p> -->
      </template>
    </DndGrid>
  </div>
</template>

<script setup>
import { shallowRef } from "vue";
import DndGrid from "@/components/DndGrid.vue";

import battery from "@/assets/dnd/battery.png";
import drill from "@/assets/dnd/drill.png";
import koala from "@/assets/dnd/koala.png";
import ui from "@/assets/dnd/ui.png";
import wallet from "@/assets/dnd/wallet.png";
import yeti from "@/assets/dnd/yeti.png";

defineOptions({ name: "DndDemo" });
const list = shallowRef([battery, drill, koala, ui, wallet, yeti]);
</script>

<style lang="scss">
.img-style {
  object-fit: cover;
  width: 100%;
  box-sizing: border-box;
  background: 0px 1px 1px #091e42;
  padding: 4px;
  border-radius: 4px;
  box-shadow: 0px 0px 1px #091e42;
  transition: all 50ms ease-in-out;
  /* needed to avoid a "save image" popup on iOS */
  -webkit-touch-callout: "none";
  &:hover {
    background: #ffffff;
    box-shadow: 0px 1px 1px #091e42;
  }
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
