"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[689],{1689:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var r=n(2791),i=n(1523),a=n(6842),o=n(184),s=function(e){var t=e.data;return(0,o.jsx)("article",{className:"degree-container",children:(0,o.jsxs)("header",{children:[(0,o.jsx)("h4",{className:"degree",children:t.degree}),(0,o.jsxs)("p",{className:"school",children:[(0,o.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},c=function(e){var t=e.data;return(0,o.jsxs)("div",{className:"education",children:[(0,o.jsx)("div",{className:"link-to",id:"education"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,o.jsx)(s,{data:e},e.school)}))]})};c.defaultProps={data:[]};var l=c,u=function(e){var t=e.data;return(0,o.jsxs)("article",{className:"jobs-container",children:[(0,o.jsxs)("header",{children:[(0,o.jsxs)("h4",{children:[(0,o.jsx)("a",{href:t.link,children:t.company})," "]}),(0,o.jsx)("p",{className:"daterange",children:t.position}),(0,o.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,o.jsx)("ul",{className:"points",children:t.points.map((function(e){return(0,o.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return(0,o.jsxs)("div",{className:"experience",children:[(0,o.jsx)("div",{className:"link-to",id:"experience"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,o.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var m=d;function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=n(9611);function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var y=n(1002);function g(e,t){if(t&&("object"===(0,y.Z)(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var i=h(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return g(this,n)}}var v=n(4942),j=n(1413),k=function(e){var t=e.handleClick,n=e.active,r=e.label;return(0,o.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},x=function(e){var t=e.data,n=e.categories,r=t.category,i=t.competency,a=t.title,s={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},c=(0,j.Z)((0,j.Z)({},s),{},{width:"".concat(String(Math.min(100,Math.max(i/5*100,0))),"%")});return(0,o.jsxs)("div",{className:"skillbar clearfix",children:[(0,o.jsx)("div",{className:"skillbar-title",style:s,children:(0,o.jsx)("span",{children:a})}),(0,o.jsx)("div",{className:"skillbar-bar",style:c}),(0,o.jsxs)("div",{className:"skill-bar-percent",children:[i," / 5"]})]})};x.defaultProps={categories:[]};var w=x,P=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,f.Z)(e,t)}(a,e);var t,n,r,i=b(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return(0,j.Z)((0,j.Z)({},n),{},(0,v.Z)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,j.Z)((0,j.Z)({},e),{},(0,v.Z)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=a,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return(0,o.jsx)(w,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,o.jsx)(k,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,o.jsxs)("div",{className:"skills",children:[(0,o.jsx)("div",{className:"link-to",id:"skills"}),(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h3",{children:"Skills"}),(0,o.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),(0,o.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,o.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&p(t.prototype,n),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(r.Component);P.defaultProps={skills:[],categories:[]};var S=P,N=function(e){var t=e.data,n=e.last;return(0,o.jsxs)("li",{className:"course-container",children:[(0,o.jsxs)("a",{href:t.link,children:[(0,o.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,o.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,o.jsx)("div",{className:"course-dot",children:(0,o.jsx)("p",{className:"course-name",children:" \u2022"})})]})};N.defaultProps={last:!1};var C=N,O=function(e){return e.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(t,n){return(0,o.jsx)(C,{data:t,last:n===e.length-1},t.title)}))},A=function(e){var t=e.data;return(0,o.jsxs)("div",{className:"courses",children:[(0,o.jsx)("div",{className:"link-to",id:"courses"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)("h3",{children:"Selected Courses"})}),(0,o.jsx)("ul",{className:"course-list",children:O(t)})]})};A.defaultProps={data:[]};var R=A,M=function(){return(0,o.jsxs)("div",{className:"references",children:[(0,o.jsx)("div",{className:"link-to",id:"references"}),(0,o.jsx)("div",{className:"title",children:(0,o.jsx)(i.rU,{to:"/contact",children:(0,o.jsx)("h3",{children:"References are available upon request"})})})]})},E=[{title:"Structure of Computer Programs",number:"CS 61A",link:"#"},{title:"Data Structures",number:"CS 61B",link:"#"},{title:"Computer & Machine Structure",number:"CS 61C",link:"#"},{title:"Artificial Intelligence",number:"CS 188",link:"#"},{title:"Multivariable Calculus",number:"Math 53",link:"#"},{title:"Linear Algebra",number:"Math 54",link:"#"},{title:"Discrete Maths and Probability Theory",number:"CS 70",link:"#"},{title:"Classical Mechanics and Relativity",number:"Physics 5A",link:"#"},{title:"; Electromagetism, Waves and Optics",number:"Physics 5B",link:"#"},{title:"Mathematics in Physics",number:"Physics 89",link:"#"},{title:"Experimental Physics",number:"Physics 5BL",link:"#"}],Z=[{school:"University of California, Berkeley",degree:"B.A. Computer Science and Physics",link:"https://en.wikipedia.org/wiki/University_of_California,_Berkeley",year:"2021 - 2025"},{school:"Raffles Institution",degree:"High School",link:"https://en.wikipedia.org/wiki/Raffles_Institution",year:"2019 - 2020"}],L=[{company:"Pure Storage",position:"Software Engineer Intern",link:"https://www.purestorage.com/",daterange:"May 2023 \u2013 Aug 2023 ",points:["Ported and optimized the Operating System Software Purity (based on Linux Kernel and C++) from Intel x86 onto Ampere ARM64 processor.Purity serves as the software for FlashArray, a high-performance, low-latency, and highly available storage system.","Spearheaded the development of the ARM development support for Purity, encompassing essential libraries for SSE to NEON intrinsics translation, implemented AES encryption module using ARM64 crypto instructions, and solved multi-threading issues due to incompatible memory coherency between x86 and ARM64.","Conducted comprehensive performance per watt analysis, comparing Intel x86 and Ampere ARM64 single socket, 128-core CPU systems, the result shows the ARM has a 4x improvement in energy consumption with the same workload ."]},{company:"University of California, Berkeley \u2013 Lingua Franca",position:"Research Intern",link:"https://www.lf-lang.org/",daterange:"May 2022 \u2013 May 2023 ",points:["Contributed to Lingua Franca open source mentored by Professor Edward A. Lee ","Led the modeling and simulation team; worked on the application of Lingua Franca in physical systems/embedded systems","Refined the algorithm of a Furuta Pendulum project (implemented the ODE solver (RK4) and aligned simultaneous disturbance) implemented the Arduino support for Lingua Franca and utilized the support on Furuta Pendulum"]},{company:"Uiversity of California, San Francisco \u2013 Wang Lab",position:"Research Assistant",daterange:"Sep 2022 \u2013 Nov 2022",points:["Processed images obtained from the custom-built two-photon microscope and performed 5D live imaging to uncover the molecular mechanisms and hemodynamic signal in development for mouse models after gene deletion/expression","Employed micro program on ImageJ and PTGui Pro to simplify the image merging / stitching process for the lab","Performed blood vessel quantification and analysis collaboratively to provide statistic insights to disease progression"]},{company:"Wuhan University of Technology",position:"Research Assistant",daterange:"Jun 2019 \u2013 Jul 2019",points:["Researched on AI in Traffic Light Control at Intelligent Transportation Systems Research Center under Professor Duanfeng Chu","Helped with Literature Review on SARSA, Q-learning, Deep Neural Network; helped with development of the Q-value computation for multi-traffic junctions and facilitated meetings and presentations for research groups on a biweekly manner"]}],D=n(907);var F=n(181);var I,T=[{title:"Python",competency:5,category:["Programming Language"]},{title:"Java",competency:5,category:["Programming Language"]},{title:"C",competency:4,category:["Programming Language"]},{title:"JavaScript",competency:3,category:["Programming Language","Web Development"]},{title:"Matlab",competency:3,category:["Framework/Tool"]},{title:"NumPy",competency:5,category:["Framework/Tool"]},{title:"Pandas",competency:4,category:["Framework/Tool"]},{title:"Scipy",competency:4,category:["Framework/Tool"]},{title:"Matplotlib",competency:4,category:["Framework/Tool"]},{title:"Git",competency:3,category:["Framework/Tool"]},{title:"AWS",competency:3,category:["Web Development"]},{title:"Html",competency:3,category:["Web Development"]},{title:"React",competency:2,category:["Web Development"]},{title:"CSS",competency:3,category:["Web Development"]}].map((function(e){return(0,j.Z)((0,j.Z)({},e),{},{category:e.category.sort()})})),B=["#6968b3","#37b1f5","#40494e"],_=(I=new Set(T.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return(0,D.Z)(e)}(I)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(I)||(0,F.Z)(I)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:B[t]}})),W=["Education","Experience","Skills","Courses","References"],U=function(){return(0,o.jsx)(a.Z,{title:"Resume",description:"Michael D'Angelo's Resume. Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet Labs, and Facebook.",children:(0,o.jsxs)("article",{className:"post",id:"resume",children:[(0,o.jsx)("header",{children:(0,o.jsxs)("div",{className:"title",children:[(0,o.jsx)("h2",{"data-testid":"heading",children:(0,o.jsx)(i.rU,{to:"resume",children:"Resume"})}),(0,o.jsx)("div",{className:"link-container",children:W.map((function(e){return(0,o.jsx)("h4",{children:(0,o.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,o.jsx)(l,{data:Z}),(0,o.jsx)(m,{data:L}),(0,o.jsx)(S,{skills:T,categories:_}),(0,o.jsx)(R,{data:E}),(0,o.jsx)(M,{})]})})}},4942:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},1413:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(4942);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},1002:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=689.2e043111.chunk.js.map