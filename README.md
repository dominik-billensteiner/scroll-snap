# scroll-snap

Modern scrolling experiences with polyfill fallback.

# Scroll snapping with CSS

Two main CSS property enable scroll snapping behavour: _scroll-snapp-type_ and _scroll-snap-align_.

**scroll-snapp-type**

- Applies to the scroll container element (must have fixed height)
- Tells the browser the direction to snapp and wether snapping is mandatory
- Takes two main keyword values: _x/y_ and _mandatory/proximity_
- _x/y_ specify vertical/horizontal snapping
- _mandatory_: User stops scrolling -> always snap to nearest snap point
- _proximity_: User stops scrolling -> only snap if scrolling position in proximity of snap point

# Sources and further reading material

- https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type
- https://24ways.org/2019/beautiful-scrolling-experiences-without-libraries/

https://stackoverflow.com/questions/13756236/how-can-i-snap-scroll-to-the-nearest-predefined-position
https://github.com/ckrack/scrollsnap-polyfill
https://stackoverflow.com/questions/31245252/how-to-emulate-css-scroll-snap-points-in-chrome#33149981
https://github.com/lucafalasco/scroll-snap
https://lucafalasco.github.io/scroll-snap/
