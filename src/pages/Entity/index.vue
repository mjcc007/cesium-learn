<template>
  <div id="container"></div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import * as Cesium from "cesium";

onMounted(async () => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNzBkOGJlNC1kZTYzLTRmYTEtOTY4MS01ZGQ0NDkyZjUyZDYiLCJpZCI6NzAzMzIsImlhdCI6MTY2NTU2ODQ0OX0.rXNUySwBrDNV1lW-evlPXqgDnXJNqqsjAtGB7eLWrqo";

  const viewer = new Cesium.Viewer("container", {
    terrainProvider: Cesium.createWorldTerrain(),
  });

  const wyoming = viewer.entities.add({
    polygon: {
      hierarchy: Cesium.Cartesian3.fromDegreesArray([
        -109.080842, 45.002073, -105.91517, 45.002073, -104.058488, 44.996596,
        -104.053011, 43.002989, -104.053011, 41.003906, -105.728954, 40.998429,
        -107.919731, 41.003906, -109.04798, 40.998429, -111.047063, 40.998429,
        -111.047063, 42.000709, -111.047063, 44.476286, -111.05254, 45.002073,
      ]),
      height: 0,
      material: Cesium.Color.RED.withAlpha(0.5),
      outline: true,
      outlineColor: Cesium.Color.BLACK,
    },
  });

  viewer.zoomTo(wyoming);
});
</script>

<style scoped>
#container {
  width: 100%;
  height: 100%;
}
</style>
