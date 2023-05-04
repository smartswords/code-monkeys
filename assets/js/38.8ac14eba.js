(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{549:function(t,s,e){"use strict";e.r(s);var a=e(18),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey},scopedSlots:t._u([{key:"header",fn:function(){return[e("h1",{attrs:{id:"vuepress-tutorial-11-sticky-footer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-tutorial-11-sticky-footer"}},[t._v("#")]),t._v(" VuePress Tutorial 11 - Sticky Footer")])]},proxy:!0}])},[e("h2",{attrs:{id:"what-we-re-doing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-we-re-doing"}},[t._v("#")]),t._v(" What We're Doing")]),t._v(" "),e("p",[t._v("We're going to continue styling the blog by making the "),e("code",{staticClass:"inline-code-block"},[t._v("Footer")]),t._v(" component we created in "),e("a",{attrs:{href:"/vuepress-tutorial-8"}},[t._v("VuePress Tutorial 8 - Custom Footer")]),t._v(" into a sticky footer. We were going to be adding a highlight effect when hovering over the "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/SVG",target:"_blank",rel:"noopener noreferrer"}},[t._v("SVG"),e("OutboundLink")],1),t._v(" icons in this tutorial as well, but the process is a little more involved than I remembered. So, we're going to be adding the highlight effect when hovering in the next tutorial.")]),t._v(" "),e("p",[t._v("Make sure you start the local development server which should be running at "),e("a",{attrs:{href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080/"),e("OutboundLink")],1),t._v(" to see the changes we'll be making to the site. If the changes aren't appearing after you save them, then try restarting your local development server.")]),t._v(" "),e("p",[t._v("You can view all of the code in this tutorial by going to the "),e("code",{staticClass:"inline-code-block"},[t._v("tutorial-11")]),t._v(" branch of the "),e("a",{attrs:{href:"https://github.com/codemonkeysio/code-monkeys-blog-tutorials/tree/tutorial-11",target:"_blank",rel:"noopener noreferrer"}},[t._v("code-monkeys-blog-tutorials"),e("OutboundLink")],1),t._v(" repository.")]),t._v(" "),e("p",[t._v("Now let's get started by discussing what a sticky footer is.")]),t._v(" "),e("h2",{attrs:{id:"what-is-a-sticky-footer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-sticky-footer"}},[t._v("#")]),t._v(" What is a Sticky Footer?")]),t._v(" "),e("p",[t._v("A sticky footer adheres or "),e("span",{staticClass:"post-term-one"},[t._v("sticks")]),t._v(" to the bottom of the browser window assuming there isn't enough content on the page to push the footer lower like on this blog post for example. If the content on the page is short like on the "),e("RouterLink",{attrs:{to:"/"}},[t._v("homepage")]),t._v(", then the footer will still stick to the bottom of the page instead of appearing directly below the content above it.")],1),t._v(" "),e("p",[t._v("There are multiple ways to add a sticky footer to your site, but we're only going to discuss how to use the CSS "),e("code",{staticClass:"inline-code-block"},[t._v("calc()")]),t._v(" function. If you're interested in learning about the other ways of adding a sticky footer, then check out "),e("a",{attrs:{href:"https://css-tricks.com/couple-takes-sticky-footer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sticky Footer, Five Ways"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"sticky-footer-styling"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sticky-footer-styling"}},[t._v("#")]),t._v(" Sticky Footer Styling")]),t._v(" "),e("p",[t._v("Here's what the "),e("code",{staticClass:"inline-code-block"},[t._v("index.styl")]),t._v(" file looks like after adding the sticky footer styling:")]),t._v(" "),e("code-group",[e("code-block",{attrs:{title:"index.styl"}},[e("div",{staticClass:"language-stylus line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-stylus"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property-declaration"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $backgroundColor")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property-declaration"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $backgroundColor")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".theme-container")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property-declaration"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token func"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("calc")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token unit"}},[t._v("vh")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.3125")]),e("span",{pre:!0,attrs:{class:"token unit"}},[t._v("rem")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".home")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property-declaration"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),e("span",{pre:!0,attrs:{class:"token unit"}},[t._v("rem")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".hero")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property-declaration"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-left")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token unit"}},[t._v("rem")])]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property-declaration"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-right")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token unit"}},[t._v("rem")])]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property-declaration"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.125")]),e("span",{pre:!0,attrs:{class:"token unit"}},[t._v("rem")]),t._v(" solid $darkBorderColor")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property-declaration"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),e("span",{pre:!0,attrs:{class:"token unit"}},[t._v("rem")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token unit"}},[t._v("rem")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" $darkBorderColor")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property-declaration"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" box-shadow "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),e("span",{pre:!0,attrs:{class:"token unit"}},[t._v("s")])]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property-declaration"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5.625")]),e("span",{pre:!0,attrs:{class:"token unit"}},[t._v("rem")])]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property-declaration"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-bottom")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.625")]),e("span",{pre:!0,attrs:{class:"token unit"}},[t._v("rem")])]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property-declaration"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-image")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token func"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("radial-gradient")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("circle at center center"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#2c303a")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $backgroundColor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property-declaration"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token unit"}},[t._v("rem")])]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("img")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property-declaration"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" transform "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.2")]),e("span",{pre:!0,attrs:{class:"token unit"}},[t._v("s")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".hero:hover")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property-declaration"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.125")]),e("span",{pre:!0,attrs:{class:"token unit"}},[t._v("rem")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),e("span",{pre:!0,attrs:{class:"token unit"}},[t._v("rem")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token unit"}},[t._v("rem")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.125")]),e("span",{pre:!0,attrs:{class:"token unit"}},[t._v("rem")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token hexcode"}},[t._v("#0b0c0f")])]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("img")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property-declaration"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token func"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("scale")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".features")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property-declaration"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-left")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token unit"}},[t._v("rem")])]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property-declaration"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-right")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token unit"}},[t._v("rem")])]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property-declaration"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.125")]),e("span",{pre:!0,attrs:{class:"token unit"}},[t._v("rem")]),t._v(" solid $borderColor")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token property-declaration"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-bottom")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.125")]),e("span",{pre:!0,attrs:{class:"token unit"}},[t._v("rem")]),t._v(" solid $borderColor")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".feature")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property-declaration"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v("h2")]),t._v("\n              "),e("span",{pre:!0,attrs:{class:"token property-declaration"}},[e("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.4")]),e("span",{pre:!0,attrs:{class:"token unit"}},[t._v("rem")])]),t._v("\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br"),e("span",{staticClass:"line-number"},[t._v("29")]),e("br"),e("span",{staticClass:"line-number"},[t._v("30")]),e("br"),e("span",{staticClass:"line-number"},[t._v("31")]),e("br"),e("span",{staticClass:"line-number"},[t._v("32")]),e("br"),e("span",{staticClass:"line-number"},[t._v("33")]),e("br")])])])],1),t._v(" "),e("p",[t._v("Here we added "),e("code",{staticClass:"inline-code-block"},[t._v("min-height: calc(100vh - 10.3125rem)")]),t._v(" to a "),e("code",{staticClass:"inline-code-block"},[t._v("div")]),t._v(" tag with a class of "),e("code",{staticClass:"inline-code-block"},[t._v("theme-container")]),t._v(".")]),t._v(" "),e("p",[t._v("If you inspect the browser and go to the "),e("code",{staticClass:"inline-code-block"},[t._v("Elements")]),t._v(" tab, you can see where the "),e("code",{staticClass:"inline-code-block"},[t._v("div")]),t._v(" tag with a class of "),e("code",{staticClass:"inline-code-block"},[t._v("theme-container")]),t._v(" is in the HTML of the blog.")]),t._v(" "),e("code-group",[e("code-block",{attrs:{title:"HTML Showing the theme-container Class"}},[e("div",{staticClass:"language-html line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("global-layout"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("theme-container no-sidebar"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("footer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data-v-60ae214a")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("footer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("footer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("global-ui"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])])])],1),t._v(" "),e("p",[t._v("The "),e("code",{staticClass:"inline-code-block"},[t._v("div")]),t._v(" tag with a class of "),e("code",{staticClass:"inline-code-block"},[t._v("theme-container")]),t._v(" contains all of the content of the blog except for the "),e("code",{staticClass:"inline-code-block"},[t._v("footer")]),t._v(" tag.")]),t._v(" "),e("p",[t._v("So, here we're using "),e("code",{staticClass:"inline-code-block"},[t._v("min-height: calc(100vh - 10.3125rem)")]),t._v(" to set the minimum height of the content inside of the "),e("code",{staticClass:"inline-code-block"},[t._v("div")]),t._v(" tag with a class of "),e("code",{staticClass:"inline-code-block"},[t._v("theme-container")]),t._v(" to be "),e("code",{staticClass:"inline-code-block"},[t._v("100vh")]),t._v(" minus "),e("code",{staticClass:"inline-code-block"},[t._v("10.3125rem")]),t._v(" which is the height of the "),e("code",{staticClass:"inline-code-block"},[t._v("Footer")]),t._v(" component including the top and bottom padding.")]),t._v(" "),e("p",[t._v("The unit of "),e("code",{staticClass:"inline-code-block"},[t._v("vh")]),t._v(" is relative to 1% of the height of the viewport which is the browser window size, so "),e("code",{staticClass:"inline-code-block"},[t._v("100vh")]),t._v(" is 100% of the height of the viewport.")]),t._v(" "),e("p",[t._v("So, when we subtract "),e("code",{staticClass:"inline-code-block"},[t._v("10.3125rem")]),t._v(" from "),e("code",{staticClass:"inline-code-block"},[t._v("100vh")]),t._v(", we're subtracting the height of the "),e("code",{staticClass:"inline-code-block"},[t._v("Footer")]),t._v(" component from 100% of the viewport height.")]),t._v(" "),e("p",[t._v("This means the minimum height of the content inside of the "),e("code",{staticClass:"inline-code-block"},[t._v("div")]),t._v(" tag with a class of "),e("code",{staticClass:"inline-code-block"},[t._v("theme-container")]),t._v(" will be the entire homepage height minus the height of the "),e("code",{staticClass:"inline-code-block"},[t._v("Footer")]),t._v(" component.")]),t._v(" "),e("p",[t._v("After setting this style, notice how the "),e("code",{staticClass:"inline-code-block"},[t._v("Footer")]),t._v(" component is now pushed to the bottom of the page. This is how we get the "),e("code",{staticClass:"inline-code-block"},[t._v("Footer")]),t._v(" component to stick to the bottom of the page.")]),t._v(" "),e("p",[t._v("Also, since we added this style to the "),e("code",{staticClass:"inline-code-block"},[t._v("index.styl")]),t._v(" file, this style will be applied globally to the blog which is fine since the "),e("code",{staticClass:"inline-code-block"},[t._v("Footer")]),t._v(" component will be used on every page in the blog.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Using a Fixed Footer Size")]),t._v(" "),e("p",[t._v("We're using a fixed size for the height of the "),e("code",{staticClass:"inline-code-block"},[t._v("Footer")]),t._v(" component which means if we change the height later on we'll have to update this value. In a future tutorial we'll be changing the height, so we'll have to update this value. If you prefer to not update this value whenever you update the height of the "),e("code",{staticClass:"inline-code-block"},[t._v("Footer")]),t._v(" component, then it may be worth looking into implementing the "),e("code",{staticClass:"inline-code-block"},[t._v("flexbox")]),t._v(" or "),e("code",{staticClass:"inline-code-block"},[t._v("grid")]),t._v(" methods for adding a sticky footer which you can find in the "),e("a",{attrs:{href:"https://css-tricks.com/couple-takes-sticky-footer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sticky Footer, Five Ways"),e("OutboundLink")],1),t._v(" post.")])]),t._v(" "),e("p",[t._v("If you have questions about the CSS discussed above, then check out these resources:")]),t._v(" "),e("ul",[e("li",[e("span",{staticClass:"external-link-wrap"},[e("a",{attrs:{href:"https://www.w3schools.com/cssref/pr_dim_min-height.asp",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS min-height Property"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("span",{staticClass:"external-link-wrap"},[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/calc",target:"_blank",rel:"noopener noreferrer"}},[t._v("calc()"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("span",{staticClass:"external-link-wrap"},[e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS values and units"),e("OutboundLink")],1)])])]),t._v(" "),e("h2",{attrs:{id:"next-steps"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next Steps")]),t._v(" "),e("p",[t._v("As mentioned in the beginning of this post, in the next tutorial we're going to be adding a highlight effect when hovering over the "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/SVG",target:"_blank",rel:"noopener noreferrer"}},[t._v("SVG"),e("OutboundLink")],1),t._v(" icons.")])],1)}),[],!1,null,null,null);s.default=n.exports}}]);