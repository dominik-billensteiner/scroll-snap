import ScrollSnap from "./node_modules/scroll-snap/dist/esm/index.js";

const snapConfig = {
  /**
   * snap-destination for x and y axes
   * should be a valid css value expressed as px|%|vw|vh
   **/
  snapDestinationX: "0%",
  snapDestinationY: "100%",
  /**
   * time in ms after which scrolling is considered finished
   * [default: 100]
   **/
  timeout: 100,
  /**
   * duration in ms for the smooth snap
   * [default: 300]
   **/
  duration: 300,
  /**
   * threshold to reach before scrolling to next/prev element, expressed as a percentage in the range [0, 1]
   * [default: 0.2]
   **/
  threshold: 0,
  /**
   * custom easing function
   * [default: easeInOutQuad]
   * for reference: https://gist.github.com/gre/1650294
   * @param t normalized time typically in the range [0, 1]
   **/
};

function callback() {
  console.log("element snapped");
}

const element = document.getElementById("scroll-snap");
const snapObject = new ScrollSnap(element, snapConfig);

snapObject.bind(callback);

// unbind the element
// snapObject.unbind();
