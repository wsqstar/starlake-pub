import { PointLayer } from "@antv/l7";

const layer = new PointLayer()
layer.source([{
    lng: 120,
    lat: 30
}, {
    lng: 110,
    lat: 30
}], {
    parser: {
        type: "json",
        x: "lng",
        y: "lat"
    }
})
    .size(20)
    .shape("circle")
    .color("#f00")



export {
    layer
};