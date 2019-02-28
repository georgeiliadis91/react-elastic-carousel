(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"./src/docs/mdx/slideNext.mdx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),l=n("./node_modules/docz/dist/index.m.js"),c=n("./src/react-elastic-carousel/index.js"),i=n("./src/docs/components/SimpleItem.js");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=function(e){var t=e.components,n=f(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"slidenext--slideprev"}},"slideNext / slidePrev"),o.a.createElement(a.MDXTag,{name:"h4",components:t,props:{id:"you-can-trigger-the-slidenext-or-slideprev-methods-via-a-ref-to-the-carousel"}},"You can trigger the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"h4"},"slideNext")," or ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"h4"},"slidePrev")," methods via a ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"h4"},"ref")," to the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"h4"},"Carousel"),":"),o.a.createElement(a.MDXTag,{name:"pre",components:t},o.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{metaString:null}},"this.carousel.slideNext()\nthis.carousel.slidePrev()\n")),o.a.createElement(l.Playground,{__codesandbox:"undefined",__position:0,__code:"class App extends React.Component {\n  render() {\n    return (\n      <div>\n        <button onClick={() => this.carousel.slidePrev()}>Prev</button>\n        <button onClick={() => this.carousel.slideNext()}>Next</button>\n        <hr />\n        <Carousel ref={ref => (this.carousel = ref)}>\n          <Item>1</Item>\n          <Item>2</Item>\n          <Item>3</Item>\n          <Item>4</Item>\n          <Item>5</Item>\n          <Item>6</Item>\n        </Carousel>\n      </div>\n    )\n  }\n}",__scope:{props:n,Carousel:c.b,Item:i.a}},function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,p(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return e.carousel.slidePrev()}},"Prev"),o.a.createElement("button",{onClick:function(){return e.carousel.slideNext()}},"Next"),o.a.createElement("hr",null),o.a.createElement(c.b,{ref:function(t){return e.carousel=t}},o.a.createElement(i.a,null,"1"),o.a.createElement(i.a,null,"2"),o.a.createElement(i.a,null,"3"),o.a.createElement(i.a,null,"4"),o.a.createElement(i.a,null,"5"),o.a.createElement(i.a,null,"6")))}}])&&u(n.prototype,r),a&&u(n,a),t}()))}}}]);