# scroll-snap

Modern scroll snapping feature with CSS or a JS library.

# 1. Scroll snapping with CSS

The scroll snap specification enables a web page to snap to specific points as the user scrolls. Scrolling detection and transition are handled by the browser and cannot be customized. Two main CSS properties enable scroll snapping behaviour: _scroll-snapp-type_ and _scroll-snap-align_. Example in folder scroll-snap CSS.

**scroll-snap-type**

- Applies to the scroll container element (must have fixed height)
- Tells the browser the direction to snapp and wether snapping is mandatory
- Takes two main keyword values: _x/y_ and _mandatory/proximity_
- _x/y_ specify vertical/horizontal snapping
- _mandatory_: User stops scrolling -> always snap to nearest snap point
- _proximity_: User stops scrolling -> only snap if scrolling position in proximity of snap point

Full property list @ https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type

**scroll-snap-align**

- Is applied to children of scroll snap container
- Specifies the box’s snap position as an alignment of its snap area (as the alignment subject) within its snap container’s snapport (as the alignment container)
- Keywords: _none_, _start end_ and _center_
- The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.

Full property list @ https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align

# 2. scroll-snap JS library

There can be two main reason to use any scroll snap library instead of the native css solution: they work in all modern browsers and have a customizable configuration to allow custom timing in transitions and scrolling detection. In this example scroll snapping will be enabled with scroll-snap from lucafalasco [github](https://github.com/lucafalasco/scroll-snap). [Demo][https://lucafalasco.github.io/scroll-snap/] and [Code Sandbox][https://codesandbox.io/s/n2ynjj8lj] from the author. Follow docs of author for usage and installation.

Simple example in folder scroll-snap JS.

# 2. Sources and further reading material

- https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type
- https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align
- https://24ways.org/2019/beautiful-scrolling-experiences-without-libraries/
