<script setup>
import * as Cesium from "cesium";
import "@/Widgets/widgets.css";
import { onMounted } from "vue";

window.CESIUM_BASE_URL = "/";

onMounted(() => {
    Cesium.Ion.defaultAccessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3YjRlOTQ1NS03YmIwLTQzMGMtYjc0Ny1jNGNmMjM5YTk2MzgiLCJpZCI6MzYwMjk3LCJpYXQiOjE3NjMwOTU1MDN9.Cwy3bNsjtcCRNrlzEdxWnlRgMV8m4KU_l60DFbtYSlw";
    const viewer = new Cesium.Viewer("cesiumContainer");
});
</script>

<template>
    <div id="cesiumContainer"></div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
#cesiumContainer {
    width: 100vw;
    height: 100vh;
}
</style>
