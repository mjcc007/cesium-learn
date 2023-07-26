<template>
  <div id="building"></div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import * as Cesium from "cesium";

onMounted(async () => {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNzBkOGJlNC1kZTYzLTRmYTEtOTY4MS01ZGQ0NDkyZjUyZDYiLCJpZCI6NzAzMzIsImlhdCI6MTY2NTU2ODQ0OX0.rXNUySwBrDNV1lW-evlPXqgDnXJNqqsjAtGB7eLWrqo";

  const viewer = new Cesium.Viewer("building", {
    terrainProvider: Cesium.createWorldTerrain(),
  });

  // @ts-ignore
  const osmBuildings = viewer.scene.primitives.add(Cesium.createOsmBuildings());

  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(-104.9965, 39.742248, 4000),
  });

  const addBuildingGeoJSON = async () => {
    const geoJSONURL = await Cesium.IonResource.fromAssetId(1912940);
    const geoJSON = await Cesium.GeoJsonDataSource.load(geoJSONURL, {
      clampToGround: true,
    });
    const dataSource = await viewer.dataSources.add(geoJSON);

    for (const entity of dataSource.entities.values) {
      entity.polygon.classificationType = Cesium.ClassificationType.TERRAIN;
    }

    viewer.flyTo(dataSource);
  };

  addBuildingGeoJSON();

  osmBuildings.style = new Cesium.Cesium3DTileStyle({
    // Create a style rule to control each building's "show" property.
    show: {
      conditions: [
        // Any building that has this elementId will have `show = false`.
        ["${elementId} === 332469316", false],
        ["${elementId} === 332469317", false],
        ["${elementId} === 235368665", false],
        ["${elementId} === 530288180", false],
        ["${elementId} === 530288179", false],
        // If a building does not have one of these elementIds, set `show = true`.
        [true, true],
      ],
    },
    // Set the default color style for this particular 3D Tileset.
    // For any building that has a `cesium#color` property, use that color, otherwise make it white.
    color:
      "Boolean(${feature['cesium#color']}) ? color(${feature['cesium#color']}) : color('#ffffff')",
  });

  const building = await Cesium.IonResource.fromAssetId(1913018);
  const buildingTileset = await Cesium.Cesium3DTileset.fromUrl(building);
  const newBuildingTileset = viewer.scene.primitives.add(buildingTileset);

  viewer.flyTo(newBuildingTileset);
});
</script>

<style scoped>
#building {
  width: 100%;
  height: 100%;
}
</style>
