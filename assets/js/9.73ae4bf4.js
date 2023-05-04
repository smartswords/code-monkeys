(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{406:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));const s={props:{src:{type:String,required:!0},srcPlaceholder:{type:String,default:"data:,"},srcset:{type:String},intersectionOptions:{type:Object,default:()=>({})},usePicture:{type:Boolean,default:!1}},inheritAttrs:!1,data:()=>({observer:null,intersected:!1,loaded:!1}),computed:{srcImage(){return this.intersected&&this.src?this.src:this.srcPlaceholder},srcsetImage(){return!(!this.intersected||!this.srcset)&&this.srcset}},methods:{load(){this.$el.getAttribute("src")!==this.srcPlaceholder&&(this.loaded=!0,this.$emit("load"))},error(){this.$emit("error",this.$el)}},render(e){let t=e("img",{attrs:{src:this.srcImage,srcset:this.srcsetImage},domProps:this.$attrs,class:{"v-lazy-image":!0,"v-lazy-image-loaded":this.loaded},on:{load:this.load,error:this.error}});return this.usePicture?e("picture",{on:{load:this.load}},this.intersected?[this.$slots.default,t]:[t]):t},mounted(){"IntersectionObserver"in window&&(this.observer=new IntersectionObserver(e=>{e[0].isIntersecting&&(this.intersected=!0,this.observer.disconnect(),this.$emit("intersect"))},this.intersectionOptions),this.observer.observe(this.$el))},destroyed(){"IntersectionObserver"in window&&this.observer.disconnect()}}},440:function(e,t,r){},499:function(e,t,r){"use strict";r(440)},531:function(e,t,r){"use strict";r.r(t);var s={components:{VLazyImage:r(406).a}},a=(r(499),r(18)),n=Object(a.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey},scopedSlots:e._u([{key:"header",fn:function(){return[r("h1",{attrs:{id:"vuepress-tutorial-2-why-use-vuepress"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-tutorial-2-why-use-vuepress"}},[e._v("#")]),e._v(" VuePress Tutorial 2 - Why Use VuePress?")])]},proxy:!0}])},[r("h2",{attrs:{id:"what-is-vuepress"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-is-vuepress"}},[e._v("#")]),e._v(" What is VuePress?")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress"),r("OutboundLink")],1),e._v(" is a minimalistic "),r("span",{staticClass:"post-term-two"},[e._v("static site generator (SSG)")]),e._v(" with a Vue-powered "),r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/theme/",target:"_blank",rel:"noopener noreferrer"}},[e._v("theming system"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Plugin API"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("Originally, it was created to serve the documentation needs of "),r("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue's"),r("OutboundLink")],1),e._v(" own sub projects, so it comes with a "),r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/theme/default-theme-config.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("default theme"),r("OutboundLink")],1),e._v(" optimized for writing technical documentation.")]),e._v(" "),r("p",[e._v("As well has being useful for writing technical documentation, it also has a "),r("a",{attrs:{href:"https://vuepress-plugin-blog.billyyyyy3320.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("blog plugin"),r("OutboundLink")],1),e._v(" which we'll be looking at in more detail in future tutorials.")]),e._v(" "),r("p",[e._v("Now, to clear up any confusion we'll define what an "),r("span",{staticClass:"post-term-two"},[e._v("SSG")]),e._v(" is, then we'll talk more about the "),r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/theme/",target:"_blank",rel:"noopener noreferrer"}},[e._v("theming system"),r("OutboundLink")],1),e._v(" and the "),r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Plugin API"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("After that we'll provide a list of some of the features of "),r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress"),r("OutboundLink")],1),e._v(", and then we'll give some quick comparisons with similar technologies.")]),e._v(" "),r("h2",{attrs:{id:"different-types-of-websites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#different-types-of-websites"}},[e._v("#")]),e._v(" Different Types of Websites")]),e._v(" "),r("p",[e._v("Before we define what an "),r("span",{staticClass:"post-term-two"},[e._v("SSG")]),e._v(" is, let's first look at some different types of websites. This will allow us to get a better understanding of the pros and cons of using an "),r("span",{staticClass:"post-term-two"},[e._v("SSG")]),e._v(".")]),e._v(" "),r("p",[e._v("We'll mainly be looking at each type of website in terms of "),r("span",{staticClass:"post-term-one"},[e._v("search engine optimization (SEO)")]),e._v(", "),r("span",{staticClass:"post-term-one"},[e._v("speed")]),e._v(", and "),r("span",{staticClass:"post-term-one"},[e._v("ease of updating")]),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"static-website"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#static-website"}},[e._v("#")]),e._v(" Static Website")]),e._v(" "),r("ul",[r("li",[e._v("Uses static HTML pages with possible CSS and JavaScript")]),e._v(" "),r("li",[e._v("Pages are uploaded to a content delivery network (CDN) or a web host")])]),e._v(" "),r("p",[e._v("Here's a simple diagram illustrating the process:")]),e._v(" "),r("div",{staticClass:"website-diagrams"},[r("v-lazy-image",{attrs:{src:e.$withBase("/images/vuepress-tutorials/tutorial-2/static-website-diagram-760w.png"),"src-placeholder":e.$withBase("/images/vuepress-tutorials/tutorial-2/static-website-diagram-232w.png"),alt:"Static Website Diagram"}})],1),e._v(" "),r("h4",{attrs:{id:"pros"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pros"}},[e._v("#")]),e._v(" Pros")]),e._v(" "),r("ul",[r("li",[r("span",{staticClass:"post-term-one"},[e._v("SEO-friendly")]),e._v(" since a search engine can crawl the site and fully rendered HTML pages with content are provided")])]),e._v(" "),r("h4",{attrs:{id:"cons"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cons"}},[e._v("#")]),e._v(" Cons")]),e._v(" "),r("ul",[r("li",[e._v("Need to do a request to the server for each page a user visits which "),r("span",{staticClass:"post-term-one"},[e._v("slows")]),e._v(" down the site")]),e._v(" "),r("li",[r("span",{staticClass:"post-term-one"},[e._v("Difficult to update")]),e._v(" since you need to rewrite the same code on multiple pages, e.g., the footer")]),e._v(" "),r("li",[e._v("Has "),r("span",{staticClass:"post-term-one"},[e._v("limited functionality")]),e._v(" and generally doesn't contain dynamic data")])]),e._v(" "),r("h3",{attrs:{id:"single-page-application-spa"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#single-page-application-spa"}},[e._v("#")]),e._v(" Single-Page Application (SPA)")]),e._v(" "),r("ul",[r("li",[e._v("Typical "),r("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("React"),r("OutboundLink")],1),e._v(" application")]),e._v(" "),r("li",[e._v("A single request is made to the server which returns a simple HTML page with the styles and scripts linked")]),e._v(" "),r("li",[e._v("The "),r("span",{staticClass:"post-term-three"},[e._v("SPA")]),e._v(" then handles rendering the page content in the browser, e.g., routing, data, etc.")])]),e._v(" "),r("p",[e._v("Simple diagram illustrating the process:")]),e._v(" "),r("div",{staticClass:"website-diagrams"},[r("v-lazy-image",{attrs:{src:e.$withBase("/images/vuepress-tutorials/tutorial-2/single-page-application-diagram-760w.png"),"src-placeholder":e.$withBase("/images/vuepress-tutorials/tutorial-2/single-page-application-diagram-232w.png"),alt:"Single Page Application Diagram"}})],1),e._v(" "),r("h4",{attrs:{id:"pros-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pros-2"}},[e._v("#")]),e._v(" Pros")]),e._v(" "),r("ul",[r("li",[r("span",{staticClass:"post-term-one"},[e._v("Fast")]),e._v(", no extra requests are made to the server when navigating to new pages since the "),r("span",{staticClass:"post-term-three"},[e._v("SPA")]),e._v(" handles rendering the pages in the browser")]),e._v(" "),r("li",[e._v("Component driven which means "),r("span",{staticClass:"post-term-one"},[e._v("easier updating")]),e._v(", e.g., if you want to update the footer you only need to update it in one file")])]),e._v(" "),r("h4",{attrs:{id:"cons-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cons-2"}},[e._v("#")]),e._v(" Cons")]),e._v(" "),r("ul",[r("li",[r("span",{staticClass:"post-term-one"},[e._v("More difficult")]),e._v(" for search engines to crawl and index the site for "),r("span",{staticClass:"post-term-one"},[e._v("SEO")]),e._v(" since the page returned by the server is a simple HTML page")])]),e._v(" "),r("h3",{attrs:{id:"server-side-rendered-ssr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server-side-rendered-ssr"}},[e._v("#")]),e._v(" Server-Side Rendered (SSR)")]),e._v(" "),r("ul",[r("li",[e._v("A traditional "),r("a",{attrs:{href:"https://www.php.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PHP"),r("OutboundLink")],1),e._v(" site uses this technique as well as a "),r("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),r("OutboundLink")],1),e._v(" application using "),r("a",{attrs:{href:"https://expressjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Express"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://ejs.co/",target:"_blank",rel:"noopener noreferrer"}},[e._v("EJS"),r("OutboundLink")],1),e._v(" for templating")]),e._v(" "),r("li",[e._v("Returns an HTML page that is built on the fly for each request using templates and data")]),e._v(" "),r("li",[e._v("Each page returned is a static HTML page")])]),e._v(" "),r("p",[e._v("Simple diagram illustrating the process:")]),e._v(" "),r("div",{staticClass:"website-diagrams"},[r("v-lazy-image",{attrs:{src:e.$withBase("/images/vuepress-tutorials/tutorial-2/server-side-rendered-diagram-760w.png"),"src-placeholder":e.$withBase("/images/vuepress-tutorials/tutorial-2/server-side-rendered-diagram-232w.png"),alt:"Server-Side Rendered Diagram"}})],1),e._v(" "),r("h4",{attrs:{id:"pros-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pros-3"}},[e._v("#")]),e._v(" Pros")]),e._v(" "),r("ul",[r("li",[r("span",{staticClass:"post-term-one"},[e._v("SEO-friendly")]),e._v(" since each request returns a fully rendered HTML page, so a search engine can easily crawl and index the site")]),e._v(" "),r("li",[r("span",{staticClass:"post-term-one"},[e._v("Easy to update")]),e._v(" since the server is using a templating system")])]),e._v(" "),r("h4",{attrs:{id:"cons-3"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cons-3"}},[e._v("#")]),e._v(" Cons")]),e._v(" "),r("ul",[r("li",[e._v("Since the server has to send back fully rendered HTML pages for each request, it can "),r("span",{staticClass:"post-term-one"},[e._v("slow")]),e._v(" down the page rendering")])]),e._v(" "),r("h3",{attrs:{id:"static-site-generator-ssg"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#static-site-generator-ssg"}},[e._v("#")]),e._v(" Static Site Generator (SSG)")]),e._v(" "),r("ul",[r("li",[e._v("An "),r("span",{staticClass:"post-term-two"},[e._v("SSG")]),e._v(" creates pre-rendered static HTML pages using a combination of templates, components, and data")]),e._v(" "),r("li",[e._v("These static HTML pages are generated at build-time, i.e., "),r("span",{staticClass:"post-term-one"},[e._v("before")]),e._v(" deployment")]),e._v(" "),r("li",[e._v("The static pages are then deployed to the web")])]),e._v(" "),r("p",[e._v("Simple diagram illustrating the process:")]),e._v(" "),r("div",{staticClass:"website-diagrams"},[r("v-lazy-image",{attrs:{src:e.$withBase("/images/vuepress-tutorials/tutorial-2/static-site-generator-diagram-760w.png"),"src-placeholder":e.$withBase("/images/vuepress-tutorials/tutorial-2/static-site-generator-diagram-232w.png"),alt:"Static Site Generator Diagram"}})],1),e._v(" "),r("h4",{attrs:{id:"pros-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#pros-4"}},[e._v("#")]),e._v(" Pros")]),e._v(" "),r("ul",[r("li",[r("span",{staticClass:"post-term-one"},[e._v("SEO-friendly")]),e._v(" since it returns fully rendered HTML which can then be crawled and indexed")]),e._v(" "),r("li",[e._v("Navigating to new pages is "),r("span",{staticClass:"post-term-one"},[e._v("fast")]),e._v(" since after the initial request the site behaves like a normal "),r("span",{staticClass:"post-term-three"},[e._v("SPA")])]),e._v(" "),r("li",[r("span",{staticClass:"post-term-one"},[e._v("Easy to update")]),e._v(" since the site is component driven")])]),e._v(" "),r("h4",{attrs:{id:"cons-4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cons-4"}},[e._v("#")]),e._v(" Cons")]),e._v(" "),r("ul",[r("li",[e._v("Have to rebuild the static pages "),r("span",{staticClass:"post-term-one"},[e._v("evey time")]),e._v(" a change is made to the site, and the build time will "),r("span",{staticClass:"post-term-one"},[e._v("increase")]),e._v(" as more pages are added")])]),e._v(" "),r("h2",{attrs:{id:"use-cases-for-ssgs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#use-cases-for-ssgs"}},[e._v("#")]),e._v(" Use Cases for SSGs")]),e._v(" "),r("p",[e._v("Since "),r("span",{staticClass:"post-term-two"},[e._v("SSGs")]),e._v(" create static HTML pages at build-time then behave like an "),r("span",{staticClass:"post-term-three"},[e._v("SPA")]),e._v(", they are suited for websites that "),r("span",{staticClass:"post-term-one"},[e._v("don't")]),e._v(" have a lot of frequent content changes.")]),e._v(" "),r("ul",[r("li",[e._v("Here are some examples:\n"),r("ul",[r("li",[e._v("Personal Website/Portfolio")]),e._v(" "),r("li",[e._v("Documentation")]),e._v(" "),r("li",[e._v("Blog")])])])]),e._v(" "),r("h2",{attrs:{id:"how-it-works-in-vuepress"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works-in-vuepress"}},[e._v("#")]),e._v(" How it Works in VuePress")]),e._v(" "),r("p",[e._v("Like other "),r("span",{staticClass:"post-term-two"},[e._v("SSGs")]),e._v(", the static HTML pages are rendered at build-time. Then the static HTML pages are deployed to the web.")]),e._v(" "),r("p",[e._v("Once the page is loaded, "),r("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue"),r("OutboundLink")],1),e._v(" takes control of the static content and the site behaves like an "),r("span",{staticClass:"post-term-three"},[e._v("SPA")]),e._v(". The "),r("span",{staticClass:"post-term-three"},[e._v("SPA")]),e._v(" is powered by "),r("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://router.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue Router"),r("OutboundLink")],1),e._v(", and "),r("a",{attrs:{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("Each Markdown file gets compiled into HTML with "),r("a",{attrs:{href:"https://markdown-it.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("markdown-it"),r("OutboundLink")],1),e._v(" which is then processed as the template of a "),r("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue"),r("OutboundLink")],1),e._v(" component. This is what enables you to use "),r("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue"),r("OutboundLink")],1),e._v(" directly in your Markdown files and also makes it possible to embed dynamic content.")]),e._v(" "),r("h2",{attrs:{id:"theming"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#theming"}},[e._v("#")]),e._v(" Theming")]),e._v(" "),r("p",[e._v("A theme in "),r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress"),r("OutboundLink")],1),e._v(" allows you to control how your project is structured. You can simply use the provided "),r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/theme/default-theme-config.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("default theme"),r("OutboundLink")],1),e._v(", use "),r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/theme/inheritance.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("theme inheritance"),r("OutboundLink")],1),e._v(" to create a child theme based on a parent theme, or "),r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/theme/writing-a-theme.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("write your own theme"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("Within a theme you are able to create directories that handle "),r("span",{staticClass:"post-term-one"},[e._v("global components")]),e._v(", "),r("span",{staticClass:"post-term-one"},[e._v("components")]),e._v(", "),r("span",{staticClass:"post-term-one"},[e._v("layouts")]),e._v(", "),r("span",{staticClass:"post-term-one"},[e._v("styles")]),e._v(", and "),r("span",{staticClass:"post-term-one"},[e._v("templates")]),e._v(". You can also create files for "),r("span",{staticClass:"post-term-one"},[e._v("theme configurations")]),e._v(" and "),r("span",{staticClass:"post-term-one"},[e._v("app level enhancements")]),e._v(". When writing your own theme the only file that is necessary is Layout.vue, everything else is up to. You can also publish your theme as an "),r("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm"),r("OutboundLink")],1),e._v(" package which allows other people to easily install it.")]),e._v(" "),r("p",[e._v("The "),r("RouterLink",{attrs:{to:"/"}},[e._v("Code Monkeys Blog")]),e._v(" is currently a child theme inherited from the default theme. Eventually, I would like to look into publishing it as an "),r("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm"),r("OutboundLink")],1),e._v(" package.")],1),e._v(" "),r("p",[e._v("We'll go over the directory structure, what each directory in a theme is used for, theme configuration, app level enhancement, and "),r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/theme/inheritance.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("theme inheritance"),r("OutboundLink")],1),e._v(" in future tutorials.")]),e._v(" "),r("ul",[r("li",[e._v("Example themes you can check out:\n"),r("ul",[r("li",[r("span",{staticClass:"external-link-wrap"},[r("a",{attrs:{href:"https://vuepress-theme-meteorlxy.meteorlxy.cn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress-theme-meteorlxy"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("span",{staticClass:"external-link-wrap"},[r("a",{attrs:{href:"https://vp-modern.z3by.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress-theme-modern-blog"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("span",{staticClass:"external-link-wrap"},[r("a",{attrs:{href:"https://succinct.mflash.dev/",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress-theme-succinct"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("span",{staticClass:"external-link-wrap"},[r("a",{attrs:{href:"https://vuepress-theme-hope.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress-theme-hope"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("span",{staticClass:"external-link-wrap"},[r("a",{attrs:{href:"https://vuepress-theme-mini.wxsm.space/",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress-theme-mini"),r("OutboundLink")],1)])])])])]),e._v(" "),r("h2",{attrs:{id:"plugin-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#plugin-api"}},[e._v("#")]),e._v(" Plugin API")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Plugins"),r("OutboundLink")],1),e._v(" allow you to add "),r("span",{staticClass:"post-term-one"},[e._v("global-level functionality")]),e._v(" to "),r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress"),r("OutboundLink")],1),e._v(". You can configure them by passing in options. It's also possible to write your own and publish them as "),r("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm"),r("OutboundLink")],1),e._v(" packages.")]),e._v(" "),r("p",[e._v("We'll go over installing and configuring "),r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/",target:"_blank",rel:"noopener noreferrer"}},[e._v("plugins"),r("OutboundLink")],1),e._v(" in future tutorials.")]),e._v(" "),r("ul",[r("li",[e._v("Examples of some plugins:\n"),r("ul",[r("li",[r("span",{staticClass:"external-link-wrap"},[r("a",{attrs:{href:"https://vuepress-plugin-blog.billyyyyy3320.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("@vuepress/plugin-blog"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("span",{staticClass:"external-link-wrap"},[r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/official/plugin-active-header-links.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("@vuepress/plugin-active-header-links"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("span",{staticClass:"external-link-wrap"},[r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/official/plugin-back-to-top.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("@vuepress/plugin-back-to-top"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("span",{staticClass:"external-link-wrap"},[r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/plugin/official/plugin-search.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("@vuepress/plugin-search"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("span",{staticClass:"external-link-wrap"},[r("a",{attrs:{href:"https://vp-icon.goyfe.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("@goy/vuepress-plugin-svg-icons"),r("OutboundLink")],1)])])])])]),e._v(" "),r("h2",{attrs:{id:"features"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),r("p",[e._v("Here are some of the features that come with "),r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress"),r("OutboundLink")],1),e._v(":")]),e._v(" "),r("p",[e._v("Built-in Markdown Extensions")]),e._v(" "),r("ul",[r("li",[r("span",{staticClass:"external-link-wrap"},[r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/guide/markdown.html#table-of-contents",target:"_blank",rel:"noopener noreferrer"}},[e._v("Table of Contents"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("span",{staticClass:"external-link-wrap"},[r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/guide/markdown.html#custom-containers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Custom Containers"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("span",{staticClass:"external-link-wrap"},[r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/guide/markdown.html#line-highlighting-in-code-blocks",target:"_blank",rel:"noopener noreferrer"}},[e._v("Line Highlighting"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("span",{staticClass:"external-link-wrap"},[r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/guide/markdown.html#line-numbers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Line Numbers"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("span",{staticClass:"external-link-wrap"},[r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/guide/markdown.html#import-code-snippets",target:"_blank",rel:"noopener noreferrer"}},[e._v("Import Code Snippets"),r("OutboundLink")],1)])])]),e._v(" "),r("p",[e._v("Ability to Use Vue In Markdown Files")]),e._v(" "),r("ul",[r("li",[r("span",{staticClass:"external-link-wrap"},[r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/guide/using-vue.html#templating",target:"_blank",rel:"noopener noreferrer"}},[e._v("Templating"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("span",{staticClass:"external-link-wrap"},[r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/guide/using-vue.html#using-components",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using Components"),r("OutboundLink")],1)])])]),e._v(" "),r("p",[e._v("Vue-powered Custom Theme System")]),e._v(" "),r("ul",[r("li",[r("span",{staticClass:"external-link-wrap"},[r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/theme/writing-a-theme.html#site-and-page-metadata",target:"_blank",rel:"noopener noreferrer"}},[e._v("Metadata"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("span",{staticClass:"external-link-wrap"},[r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/theme/writing-a-theme.html#content-excerpt",target:"_blank",rel:"noopener noreferrer"}},[e._v("Content Excerpt"),r("OutboundLink")],1)])])]),e._v(" "),r("p",[e._v("A Default Theme with")]),e._v(" "),r("ul",[r("li",[e._v("Responsive layout")]),e._v(" "),r("li",[r("span",{staticClass:"external-link-wrap"},[r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/theme/default-theme-config.html#homepage",target:"_blank",rel:"noopener noreferrer"}},[e._v("Optional Homepage"),r("OutboundLink")],1)])]),e._v(" "),r("li",[e._v("Customizable "),r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/theme/default-theme-config.html#navbar",target:"_blank",rel:"noopener noreferrer"}},[e._v("Navbar"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/theme/default-theme-config.html#sidebar",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sidebar"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("span",{staticClass:"external-link-wrap"},[r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/theme/default-theme-config.html#built-in-search",target:"_blank",rel:"noopener noreferrer"}},[e._v("Simple Out-of-the-Box Header-Based Search"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("span",{staticClass:"external-link-wrap"},[r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/theme/default-theme-config.html#algolia-search",target:"_blank",rel:"noopener noreferrer"}},[e._v("Algolia Search"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("span",{staticClass:"external-link-wrap"},[r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/theme/default-theme-config.html#last-updated",target:"_blank",rel:"noopener noreferrer"}},[e._v("Last Updated"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("span",{staticClass:"external-link-wrap"},[r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/theme/default-theme-config.html#git-repository-and-edit-links",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git Repository and Edit Links"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("span",{staticClass:"external-link-wrap"},[r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/theme/default-theme-config.html#custom-layout-for-specific-pages",target:"_blank",rel:"noopener noreferrer"}},[e._v("Custom Layout for Specific Pages"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("span",{staticClass:"external-link-wrap"},[r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/theme/default-theme-config.html#default-code-block",target:"_blank",rel:"noopener noreferrer"}},[e._v("Code Groups and Code Blocks"),r("OutboundLink")],1)])])]),e._v(" "),r("p",[e._v("It also has a "),r("a",{attrs:{href:"https://vuepress-theme-blog.billyyyyy3320.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("blog theme"),r("OutboundLink")],1),e._v(", numerous community themes, official plugins, and community plugins.")]),e._v(" "),r("p",[e._v("You can find a list of these themes, plugins, and more resources at "),r("a",{attrs:{href:"https://github.com/vuepress/awesome-vuepress",target:"_blank",rel:"noopener noreferrer"}},[e._v("Awesome VuePress"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"comparisons"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#comparisons"}},[e._v("#")]),e._v(" Comparisons")]),e._v(" "),r("p",[e._v("Here are some similar technologies and how they compare with "),r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress"),r("OutboundLink")],1),e._v(":")]),e._v(" "),r("p",[r("span",{staticClass:"external-link-headers"},[r("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nuxt"),r("OutboundLink")],1)])]),e._v(" "),r("ul",[r("li",[e._v("Designed for building applications whereas "),r("a",{attrs:{href:"https://v1.vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("VuePress"),r("OutboundLink")],1),e._v(" is focused on content-centric static sites with a focus on technical documentation")])]),e._v(" "),r("p",[r("span",{staticClass:"external-link-headers"},[r("a",{attrs:{href:"https://docsify.js.org/#/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docsify"),r("OutboundLink")],1),e._v(" / "),r("a",{attrs:{href:"https://docute.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docute"),r("OutboundLink")],1)])]),e._v(" "),r("ul",[r("li",[e._v("Both are runtime-driven, so they're not SEO-friendly")]),e._v(" "),r("li",[e._v("Good if SEO isn't a concern and you don't want to deal with installing dependencies")])]),e._v(" "),r("p",[r("span",{staticClass:"external-link-headers"},[r("a",{attrs:{href:"https://hexo.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hexo"),r("OutboundLink")],1)])]),e._v(" "),r("ul",[r("li",[e._v("Static and string-based theming system, so we're unable to take advantage of "),r("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue"),r("OutboundLink")],1),e._v(" for layout and interactivity")]),e._v(" "),r("li",[e._v("Markdown rendering configuration is not that flexible")])]),e._v(" "),r("p",[r("span",{staticClass:"external-link-headers"},[r("a",{attrs:{href:"https://www.gitbook.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitBook"),r("OutboundLink")],1)])]),e._v(" "),r("ul",[r("li",[e._v("Development reload performance is not ideal with a large amount of files")]),e._v(" "),r("li",[e._v("Limiting navigation structure for the default theme")]),e._v(" "),r("li",[e._v("Theming system is not "),r("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue"),r("OutboundLink")],1),e._v(" based")])])])}),[],!1,null,"1f31566c",null);t.default=n.exports}}]);