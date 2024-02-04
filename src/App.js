// app.js
import "./App.css";
import { useEffect } from "react";
import { PointLayer, Scene } from "@antv/l7"
import { GaodeMap } from "@antv/l7-maps"

import {layer} from "./layers/demo02"

function App() {
  useEffect(() => {
    const scene = new Scene({
      id: "map",
      map: new GaodeMap({
        // style: "dark", // 样式URL
        center: [120.19382669582967, 30.258134],
        // pitch: 0,
        zoom: 5,
        token: "9f9a2bf3be5918aa03fac7664c186119",
      })
    })

    // const layer = new PointLayer()
    // layer.source([{
    //   lng: 120,
    //   lat: 30
    // }, {
    //   lng: 110,
    //   lat: 30
    // }], {
    //   parser: {
    //     type: "json",
    //     x: "lng",
    //     y: "lat"
    //   }
    // })
    //   .size(20)
    //   .shape("circle")
    //   .color("#f00")

    scene.on("loaded", () => {
      scene.addLayer(layer)
    })
  }, []) // 添加空的依赖数组以确保 useEffect 仅在组件挂载时运行
  return (
    <div id="map" style={{
      positon: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }}>

    </div>
  );
}
export default App;
