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
    .size([100000, 100000, 100000])
    .shape("cylinder")
    .color("#f00")
    .style({
        opacity: 0.3,
        heightfixed:true
    })
    .animate({
        repeat: 2, //生长次数
        speed: 0.02 //生长速度
    })



export {
    layer
};