(this["webpackJsonpm-s-saurabh"]=this["webpackJsonpm-s-saurabh"]||[]).push([[0],[,,,,,,function(e,t,i){"use strict";(function(e){var n=i(7),a=i.n(n),s=(i(4),i(21),i(8)),o=i(10),r=i(14),c=i(1),l=i(0);e.jQuery=a.a;const d={name:"Saurabh Mylavaram",pronunce:"S-OW-ruh-b \xa0  MY-luh-vuh-rum",email:"saurabh.mylavaram@gmail.com",imgpath:"images/picture.jpg"};class m extends c.Component{render(){return Object(l.jsx)("div",{className:"App container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{id:"profileInfo",className:"col-md-8",children:[Object(l.jsx)(s.a,{profile:d}),Object(l.jsxs)("p",{children:[Object(l.jsx)("span",{className:"h6",children:"Email:"})," ",Object(l.jsx)("span",{className:"text-muted",children:d.email})]}),Object(l.jsx)("p",{children:Object(l.jsx)("a",{href:"resume.pdf",download:!0,children:Object(l.jsx)("span",{className:"h6",children:"Download my Resume as PDF"})})}),Object(l.jsx)(r.a,{}),Object(l.jsx)(o.a,{selection:"Education"})]}),Object(l.jsx)("div",{className:"col-md-4",children:Object(l.jsx)("img",{id:"profilePic",src:d.imgpath,alt:"Me standing in front on UMN building"})})]})})}}t.a=m}).call(this,i(3))},,function(e,t,i){"use strict";(function(e){var n=i(1),a=i(9),s=i.n(a),o=i(0);class r extends n.Component{constructor(e){super(e),this.state={isHovering:!1},this.handleMouseover=this.handleMouseover.bind(this)}handleMouseover(){this.setState((e=>({isHovering:!e.isHovering})))}componentDidMount(){const t=this.props.profile.pronunce,i=s.a.renderToStaticMarkup(Object(o.jsxs)("div",{children:["Pronounced as:",Object(o.jsx)("br",{}),Object(o.jsx)("strong",{children:t})]}));e.jQuery(document).ready((function(){e.jQuery(".infoIndicator").popover({trigger:"focus",html:!0,content:i})}))}render(){return Object(o.jsx)("div",{id:"nameDiv",children:Object(o.jsxs)("h1",{id:"profileName",onMouseEnter:this.handleMouseover,onMouseLeave:this.handleMouseover,className:this.state.isHovering?"nameAnimate":void 0,children:[this.props.profile.name,Object(o.jsx)("button",{type:"button",className:"btn btn-link infoIndicator","data-toggle":"popover",tabIndex:"75",children:"i"})]})})}}t.a=r}).call(this,i(3))},,function(e,t,i){"use strict";var n=i(11),a=i(12),s=i(13),o=i(1),r=i(0);const c={Education:a,Projects:n,Experience:s},l=Object.keys(c);function d(e){var t=Object(r.jsx)("p",{});return t=Array.isArray(e.item.description)?Object(r.jsx)("ul",{children:e.item.description.map(((e,t)=>Object(r.jsx)("li",{children:e},t)))}):Object(r.jsx)("p",{children:e.item.description}),Object(r.jsxs)("div",{className:"col-md-12 mt-3",children:[Object(r.jsxs)("h5",{className:"d-flex justify-content-between mb-1",children:[Object(r.jsx)("div",{children:e.item.url?Object(r.jsx)("a",{href:e.item.url,target:"_blank",rel:"noreferrer",children:e.item.title}):Object(r.jsx)("span",{children:e.item.title})}),Object(r.jsx)("div",{children:Object(r.jsx)("small",{className:"text-muted",children:e.item.dates})})]}),Object(r.jsxs)("h6",{className:"d-flex justify-content-between",children:[Object(r.jsx)("div",{children:!!e.item.organization&&Object(r.jsx)("em",{className:"text-muted",children:e.item.organization})}),Object(r.jsx)("div",{children:Object(r.jsx)("em",{className:"text-muted",children:e.item.place})})]}),t]})}class m extends o.Component{constructor(e){super(e),this.state={selected:"Education"},this.handleButtonClick=this.handleButtonClick.bind(this)}handleButtonClick(e){this.setState((t=>({selected:e.target.value})))}render(){const e=c[this.state.selected];return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"row mt-5",children:Object(r.jsx)("div",{className:"col-md-12 justify-content-begin",children:l.map((e=>Object(r.jsx)("button",{className:"btn btn-outline-dark mr-3 ".concat(e===this.state.selected?"active":""),value:e,onClick:this.handleButtonClick,children:e},e)))})}),Object(r.jsx)("div",{className:"listPages row",children:e.map(((e,t)=>Object(r.jsx)(d,{item:e},t.toString())))})]})}}t.a=m},function(e){e.exports=JSON.parse('[{"title":"All animation projects","url":"https://sites.google.com/view/animation-projects/home","organization":"(Java, Processing)","dates":"Spring 2020"},{"title":"Path planning and Collision avoidance","url":"https://sites.google.com/view/animation-projects/home/motion-planning-crowd-simulation","description":["Implemented motion planning for crowds of agents to navigate a map with obstacles in > 40 fps.","Experimented with A-star, 3D RRT for planning and time-to-collision, boids for collision avoidance.","https://www.youtube.com/watch?v=0DgEE4MBD1I"],"organization":"(Java, Processing)","dates":"March 2020"},{"title":"Physics-based game animations","url":"https://sites.google.com/view/animation-projects/home/cloth-water-simulation","description":["Built realistic looking cloth using a grid of nodes acted on by spring forces, gravity and air drag.","Built 2D water waves using a grid of water columns acted on by forces from shallow water equations.","Wrote our own vector math library, and implemented numerical integrations to render at > 30 fps."],"organization":"(Java, Processing)","dates":"February 2020"},{"title":"Replicated Bank Server Application","url":"https://github.com/M-S-Saurabh/ServerReplication","description":["Created a group of server processes performing total-ordered operations, just using Lamport clocks.","Many distributed multithreaded clients can all only see a consistent state machine model."],"organization":"Java RMI","dates":"Spring 2021"},{"title":"Distributed Hash Table","url":"https://github.com/M-S-Saurabh/ChordDataStore","description":["Built a dictionary storage server using the Chord P2P protocol using Java RMI for communication."],"organization":"Java RMI","dates":"April 2021"},{"title":"Machine Learning algorithms","url":"https://linkslist.app/arVUc3N","description":["Implemented Logistic Regression, Naive Bayes, SVM, Neural Networks, CNNs, Random Forests.","Compared de-biasing methods using fairness metrics like demographic parity and equal opportunity."],"organization":"Python, MNIST, Breast-Cancer","dates":"Fall 2020"},{"title":"AI Agent to play Super Mario","url":"https://github.com/M-S-Saurabh/deepqn-mario","description":["Implemented Deep Q-learning and Actor-Critic models to learn the game using reinforcement learning.","Successfully completed the first level of the game with 4 hours of training."],"organization":"PyTorch, Python","dates":"April 2021"}]')},function(e){e.exports=JSON.parse('[{"title":"Master of Science in Computer Science","place":"Minneapolis, MN","description":["GPA: 4.0 / 4.0","Teaching Assistant: Intro to AI (CSCI 4311W)","Teaching Assistant: Web programming (CSCI 4131)"],"organization":"University of Minnesota-Twin Cities","dates":"May 2021"},{"title":"B.Tech. in Electrical Engineering","place":"New Delhi, India","description":"","organization":"Indian Institute of Technology-Delhi","dates":"May 2017"}]')},function(e){e.exports=JSON.parse('[{"title":"Dell EMC Corporation","place":"Remote (Austin, TX)","description":["Built automation workflows to collect network, system performance stats from servers. (Python, VBA)","Our system led to the discovery of an existing fatal problem in one model of switches.","Learned the architecture of server chassis and mastered their automation platform (Axon) within 2mos."],"organization":"Graduate Intern","dates":"June 2020 - July 2020"},{"title":"Samsung Research","place":"Delhi, India","description":["Built web crawlers and parsers in Java. Proposed a new crawler to improve price collection by 2x.","Built Vue JS, Bootstrap frontend with CRUD operations for hundreds of tasks using REST apis.","Initiative to reduce storage costs by moving processed data from ElasticSearch to S3. (Python)","Built Lambda tasks for a new domain after proactively learning AWS services (Athena, Cloudwatch)"],"organization":"Software Engineer","dates":"July 2017 - July 2019"},{"title":"Citibank Services India Ltd.","place":"Pune, India","description":["Built a full-stack web application to track project status in the organization.","Learned Node, Express, Angular and MongoDB stack starting from no experience.","Released the app and incorporated evolving user requirements in an Agile fashion."],"organization":"Summer Intern","dates":"May 2016 - June 2016"}]')},function(e,t,i){"use strict";var n=i(15),a=i(0);t.a=function(e){const t=n.map((e=>Object(a.jsx)("p",{className:"socialLinks",children:Object(a.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:Object(a.jsx)("img",{className:"socialIcons",src:e.icon,alt:e.name+(e.username?": ".concat(e.username):"")})})},e.name)));return Object(a.jsx)("div",{id:"socialList",children:t})}},function(e){e.exports=JSON.parse('[{"name":"LinkedIn","icon":"images/linkedin.png","link":"https://www.linkedin.com/in/saurabh-mylavaram/"},{"name":"Github","icon":"images/github.png","link":"https://github.com/M-S-Saurabh/"},{"name":"Youtube","icon":"images/youtube.png","link":"https://www.youtube.com/channel/UC7VEbIKstYTDlz9iSBo3ycQ"},{"name":"Goodreads","icon":"images/goodreads.png","link":"https://www.goodreads.com/saurabh_mylavaram"}]')},,,,,function(e,t,i){},function(e,t,i){},,,,function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n),s=i(5),o=i.n(s),r=(i(20),i(6));var c=e=>{e&&e instanceof Function&&i.e(3).then(i.bind(null,26)).then((t=>{let{getCLS:i,getFID:n,getFCP:a,getLCP:s,getTTFB:o}=t;i(e),n(e),a(e),s(e),o(e)}))},l=(i(24),i(4),i(0));o.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(r.a,{})}),document.getElementById("root")),c()}],[[25,1,2]]]);
//# sourceMappingURL=main.dfef930d.chunk.js.map