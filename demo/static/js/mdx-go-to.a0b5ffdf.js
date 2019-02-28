(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/docs/mdx/goTo.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),l=n("./node_modules/docz/dist/index.m.js"),c=n("./src/react-elastic-carousel/index.js"),u=n("./src/docs/components/SimpleItem.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.default=function(e){var t=e.components,n=d(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"goto"}},"goTo"),r.a.createElement(a.MDXTag,{name:"h4",components:t,props:{id:"you-can-trigger-the-goto-method-via-a-ref-to-the-carousel"}},"You can trigger the ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"h4"},"goTo")," method via a ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"h4"},"ref")," to the ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"h4"},"Carousel"),":"),r.a.createElement(a.MDXTag,{name:"pre",components:t},r.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{metaString:null}},"this.carousel.goTo(someIndex)\n")),r.a.createElement(l.Playground,{__codesandbox:"undefined",__position:0,__code:'class App extends React.Component {\n  constructor(props) {\n    super(props)\n    this.goto = this.goto.bind(this)\n  }\n  goto({ target }) {\n    this.carousel.goTo(Number(target.value))\n  }\n  render() {\n    return (\n      <div>\n        <label>Go to </label>\n        <input type="number" defaultValue={0} onChange={this.goto} />\n        <hr />\n        <Carousel ref={ref => (this.carousel = ref)}>\n          <Item>1</Item>\n          <Item>2</Item>\n          <Item>3</Item>\n          <Item>4</Item>\n          <Item>5</Item>\n          <Item>6</Item>\n        </Carousel>\n      </div>\n    )\n  }\n}',__scope:{props:n,Carousel:c.b,Item:u.a}},function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=m(t).call(this,e))||"object"!==i(r)&&"function"!==typeof r?f(o):r).goto=n.goto.bind(f(f(n))),n}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,r.a.Component),n=t,(o=[{key:"goto",value:function(e){var t=e.target;this.carousel.goTo(Number(t.value))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("label",null,"Go to "),r.a.createElement("input",{type:"number",defaultValue:0,onChange:this.goto}),r.a.createElement("hr",null),r.a.createElement(c.b,{ref:function(t){return e.carousel=t}},r.a.createElement(u.a,null,"1"),r.a.createElement(u.a,null,"2"),r.a.createElement(u.a,null,"3"),r.a.createElement(u.a,null,"4"),r.a.createElement(u.a,null,"5"),r.a.createElement(u.a,null,"6")))}}])&&s(n.prototype,o),a&&s(n,a),t}()))}}}]);