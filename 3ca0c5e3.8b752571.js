(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{143:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(9),i=(r(0),r(152)),s=r(153),c={title:"Brief"},o={id:"dotnet/brief",title:"Brief",description:"Please install the required tools before continuing",source:"@site/docs/dotnet/brief.mdx",permalink:"/technical-assignments/docs/dotnet/brief",editUrl:"https://github.com/stackworx/technical-assignments/edit/master/docs/docs/dotnet/brief.mdx",sidebar:"someSidebar",previous:{title:"Requirements",permalink:"/technical-assignments/docs/dotnet/requirements"}},l=[{value:"Requirements",id:"requirements",children:[]},{value:"Bonus Requirements (Difficulty in brackets):",id:"bonus-requirements-difficulty-in-brackets",children:[]},{value:"Help",id:"help",children:[]},{value:"Hints",id:"hints",children:[]},{value:"Resources",id:"resources",children:[]}],u={rightToc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Please install the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"requirements"}),"required")," tools before continuing"),Object(i.b)("p",null,"The goal of this project is to create a simple server that aggregates website health checks."),Object(i.b)("p",null,"First download the project zip from ",Object(i.b)("a",{href:Object(s.a)("project/dotnet-master.zip")},"here"),".\nUnzip the file and examine the instructions in the Readme.\nOpen the solution in Visual Studio"),Object(i.b)("h3",{id:"requirements"},"Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use the standard library or a library of your choosing to do a get request against the server health check URI's embedded in the project. Consider any non 2xx response a failure"),Object(i.b)("li",{parentName:"ul"},"These results should be automatically fetched every 5 minutes (hint: use a lower value during testing)"),Object(i.b)("li",{parentName:"ul"},"Make sure the fetch request timeout is lower than 5 minutes"),Object(i.b)("li",{parentName:"ul"},"Make the health check calls in parallel"),Object(i.b)("li",{parentName:"ul"},"Store the last successful health check time in ",Object(i.b)("inlineCode",{parentName:"li"},"lastTimeUp")),Object(i.b)("li",{parentName:"ul"},"Ensure the checker is de-registered when the server shuts down"),Object(i.b)("li",{parentName:"ul"},"Add an error field to Server object which contains the status code and response body when the health check fails")),Object(i.b)("p",null,"Example Error Response:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "servers": [\n      {\n        "id": 1,\n        "name": "Server1",\n        "healthCheckUri": "https://stackworx.io",\n        "status": "DOWN",\n        "error": {\n          "status": 500,\n          "body": "An Internal Server Error Occurred"\n        }\n      }\n    ]\n  }\n}\n')),Object(i.b)("h3",{id:"bonus-requirements-difficulty-in-brackets"},"Bonus Requirements (Difficulty in brackets):"),Object(i.b)("p",null,"Bonus requirements for extra credit. Not listed in any particular order"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Persist the server status and last up time somewhere so that they are not lost between server restarts (5)"),Object(i.b)("li",{parentName:"ul"},"Abstract all the code into a server layer and keep that code separate from the GraphQL code (2)"),Object(i.b)("li",{parentName:"ul"},"Add a filter parameter to the server field so that a user can request results for only specific servers (2)"),Object(i.b)("li",{parentName:"ul"},"Add a filter to only fetch servers with a specific status. E.g. DOWN (2)"),Object(i.b)("li",{parentName:"ul"},"Create a mutation to disable the checking of a server (10)")),Object(i.b)("h3",{id:"help"},"Help"),Object(i.b)("p",null,"Send an email to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:assignment@stackworx.io"}),"assignment@stackworx.io")," if you get stuck"),Object(i.b)("h3",{id:"hints"},"Hints"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Use ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://httpstat.us/"}),"httpstat")," to simulate failures"),Object(i.b)("li",{parentName:"ul"},"Graphql Resolvers can be async or return promises"),Object(i.b)("li",{parentName:"ul"},"Use an IDE that understands typescript")),Object(i.b)("h3",{id:"resources"},"Resources"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://graphql.org/learn/"}),"https://graphql.org/learn/"))))}b.isMDXComponent=!0},151:function(e,t,r){"use strict";var n=r(0),a=r(51);t.a=function(){return Object(n.useContext)(a.a)}},152:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),b=u(r),h=n,d=b["".concat(s,".").concat(h)]||b[h]||p[h]||i;return r?a.a.createElement(d,c({ref:t},l,{components:r})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=h;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<i;l++)s[l]=r[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},153:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(154);var n=r(151);function a(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},154:function(e,t,r){"use strict";var n=r(17),a=r(35),i=r(156),s="".startsWith;n(n.P+n.F*r(157)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),r=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return s?s.call(t,n,r):t.slice(r,r+n.length)===n}})},156:function(e,t,r){var n=r(71),a=r(23);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(a(e))}},157:function(e,t,r){var n=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(a){}}return!0}}}]);