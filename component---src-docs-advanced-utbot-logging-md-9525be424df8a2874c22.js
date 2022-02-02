"use strict";(self.webpackChunkunittestbot_web=self.webpackChunkunittestbot_web||[]).push([[123],{84567:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return u}});var a=n(87462),l=n(63366),r=(n(15007),n(64983)),i=n(23017),o=n(24892),s=n(73070),p=(n(92586),["components"]),m={};void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/advanced/utbot-logging.md"}});var g={_frontmatter:m},c=i.Z;function u(e){var t=e.components,n=(0,l.Z)(e,p);return(0,r.kt)(c,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"utbot-logging-principles"},"UTBot logging principles"),(0,r.kt)("h2",{id:"server-log"},"Server log"),(0,r.kt)("p",null,"The server generates two types of data: logs and temporary files needed to generate tests. Log data is written into ",(0,r.kt)("inlineCode",{parentName:"p"},"logs")," folder placed inside the docker container. The path in which folder is created can be managed by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"--log /my/path")," option to UnitTestBot binary. The default path for this option is the home folder: ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/{$USERNAME}/logs"),"."),(0,r.kt)("p",null,"The same principles are applied to the temporary directory ",(0,r.kt)("inlineCode",{parentName:"p"},"tmp"),", in which the artifacts are placed and which path you can control via ",(0,r.kt)("inlineCode",{parentName:"p"},"--tmp /my/path")," option."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"logs")," folder structure is represented in the following way:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"logs",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"client1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"everything.log"),(0,r.kt)("li",{parentName:"ul"},"latest_readable.log"),(0,r.kt)("li",{parentName:"ul"},"project1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"stage1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"timestamp.log"))),(0,r.kt)("li",{parentName:"ul"},"stage2",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"timestamp.log"))))),(0,r.kt)("li",{parentName:"ul"},"project2"))),(0,r.kt)("li",{parentName:"ul"},"client2"),(0,r.kt)("li",{parentName:"ul"},"everything.log"),(0,r.kt)("li",{parentName:"ul"},"latest_readable.log")))),(0,r.kt)("p",null,"As you can see, the server creates a subdirectory for each client. There are two files inside it: one of them stores every log message written during the execution of the requests from this client, while the other stores ",(0,r.kt)("strong",{parentName:"p"},"INFO")," level logs from the last session. There are ",(0,r.kt)("strong",{parentName:"p"},"ERROR"),", ",(0,r.kt)("strong",{parentName:"p"},"WARNING"),", ",(0,r.kt)("strong",{parentName:"p"},"INFO")," and ",(0,r.kt)("strong",{parentName:"p"},"DEBUG")," logging levels."),(0,r.kt)("p",null,"Besides writing server log to files, UTBot sends the same logs to clients so they can be viewed in VS Code directly. You can find them in a tab called ",(0,r.kt)("strong",{parentName:"p"},"UTBot: Server Log"),"."),(0,r.kt)("img",{src:o.Z,className:"demoImg"}),(0,r.kt)("p",null,"Logging level can be changed using the ",(0,r.kt)("strong",{parentName:"p"},"UTBot: Log Settings")," menu item."),(0,r.kt)("img",{src:s.Z,className:"usageGif"}),(0,r.kt)("h2",{id:"client-logs"},"Client logs"),(0,r.kt)("p",null,"Client logs monitors sent requests and received responses. They can be viewed in ",(0,r.kt)("strong",{parentName:"p"},"UTBot: Client Log")," tab."),(0,r.kt)("img",{src:o.Z,className:"demoImg"}))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/advanced/utbot-logging.md"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-advanced-utbot-logging-md-9525be424df8a2874c22.js.map