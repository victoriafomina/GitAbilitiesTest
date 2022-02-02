"use strict";(self.webpackChunkunittestbot_web=self.webpackChunkunittestbot_web||[]).push([[377],{63315:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return g},default:function(){return N}});var a=n(87462),o=n(63366),s=(n(15007),n(64983)),r=n(23017),i=n(41419),l=n(77879),c=n(2829),p=n(51141),u=n(76734),m=n(89132),k=n(5162),d=(n(92586),["components"]),g={};void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&!g.hasOwnProperty("__filemeta")&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/docs/usage/generating.md"}});var f={_frontmatter:g},h=r.Z;function N(e){var t=e.components,n=(0,o.Z)(e,d);return(0,s.kt)(h,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"generating-tests"},"Generating Tests"),(0,s.kt)("p",null,"In this section we describe various tests generation scenarios that UTBot supports."),(0,s.kt)("h2",{id:"generating-tests-for-project"},"Generating Tests for Project"),(0,s.kt)("p",null,"You can generate tests for the entire project."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"How-to steps"),":"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Right mouse click on VS Code Explorer;"),(0,s.kt)("li",{parentName:"ol"},"Select ",(0,s.kt)("inlineCode",{parentName:"li"},"UTBot: Generate Tests for Project"),".")),(0,s.kt)("img",{src:i.Z,className:"usageGif"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"📝",(0,s.kt)("strong",{parentName:"p"},"Note")),(0,s.kt)("p",{parentName:"blockquote"},"It can take some time to analyze a big project. If you see a pop-up message at the right bottom corner of the IDE window, it means analysis is still in progress.\nOnce code analysis is completed, a test folder will be created.")),(0,s.kt)("h2",{id:"generating-tests-for-folder"},"Generating Tests for Folder"),(0,s.kt)("p",null,"You can generate tests for the folder."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"How-to steps"),":"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Right mouse click on VS Code Explorer;"),(0,s.kt)("li",{parentName:"ol"},"Select ",(0,s.kt)("inlineCode",{parentName:"li"},"UTBot: Generate Tests for Folder"),";"),(0,s.kt)("li",{parentName:"ol"},"Specify the path to the folder you want to generate tests for.")),(0,s.kt)("img",{src:l.Z,className:"usageGif"}),(0,s.kt)("h2",{id:"generating-tests-for-file"},"Generating Tests for File"),(0,s.kt)("p",null,"You can generate tests for a ",(0,s.kt)("inlineCode",{parentName:"p"},"'*.c'")," file."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"📝",(0,s.kt)("strong",{parentName:"p"},"Note")),(0,s.kt)("p",{parentName:"blockquote"},"It's worth to note only public functions (declared in a corresponding header file) are considered as targets for tests.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"How-to steps"),":"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Right mouse click to a target source file;"),(0,s.kt)("li",{parentName:"ol"},"Select ",(0,s.kt)("inlineCode",{parentName:"li"},"UTBot: Generate Tests... for Current File"),".")),(0,s.kt)("img",{src:c.Z,className:"usageGif"}),(0,s.kt)("p",null,"Once code analysis is completed, a test folder with test named according convention ",(0,s.kt)("inlineCode",{parentName:"p"},"test_%filename%.cpp")," will be created.\nNow you can sync local and remote environments, recompile the project and run tests."),(0,s.kt)("h2",{id:"generating-tests-for-function"},"Generating Tests for Function"),(0,s.kt)("p",null,"Generate tests for a particular function is also possible."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"How-to steps"),":"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Move the caret inside function body;"),(0,s.kt)("li",{parentName:"ol"},"Right mouse click to a text editor;"),(0,s.kt)("li",{parentName:"ol"},"Select ",(0,s.kt)("inlineCode",{parentName:"li"},"UTBot: Generate Tests... > for Current Function"),".")),(0,s.kt)("img",{src:p.Z,className:"usageGif"}),(0,s.kt)("p",null,"Once code analysis is completed, a test folder with test named according convention ",(0,s.kt)("inlineCode",{parentName:"p"},"test_%filename%.cpp")," will be created.\nNow you can sync local and remote environments, recompile the project and run tests."),(0,s.kt)("h2",{id:"generating-tests-for-line"},"Generating Tests for Line"),(0,s.kt)("p",null,"It's even possible to cover a particular branch instead of entire function."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"How-to steps"),":"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Move the caret to a line you're going to cover by a test;"),(0,s.kt)("li",{parentName:"ol"},"Right mouse click to a text editor;"),(0,s.kt)("li",{parentName:"ol"},"Select ",(0,s.kt)("inlineCode",{parentName:"li"},"UTBot: Generate Tests... > for Current Line"),".")),(0,s.kt)("img",{src:u.Z,className:"usageGif"}),(0,s.kt)("p",null,"Once code analysis is completed, a test folder with a test file named according convention ",(0,s.kt)("inlineCode",{parentName:"p"},"test_%filename%.cpp")," will be created.\nNow you can sync local and remote environments, recompile the project and the run test."),(0,s.kt)("h2",{id:"generating-tests-with-prompted-result"},"Generating Tests with Prompted Result"),(0,s.kt)("p",null,"If you need to find parameters for which a function returns a specific output, you may find this UTBot feature extremely useful. "),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"📝",(0,s.kt)("strong",{parentName:"p"},"Note")),(0,s.kt)("p",{parentName:"blockquote"},"In general, UTBot ",(0,s.kt)("strong",{parentName:"p"},"is not able to solve NP-hard problems"),", that's why it is meaningless to use this feature on, for example, hash functions.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"How-to steps"),":"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Move the caret inside a function body;"),(0,s.kt)("li",{parentName:"ol"},"Right mouse click to a text editor;"),(0,s.kt)("li",{parentName:"ol"},"Select ",(0,s.kt)("inlineCode",{parentName:"li"},"UTBot: Generate Tests... > with a Prompted Result"),".")),(0,s.kt)("img",{src:m.Z,className:"usageGif"}),(0,s.kt)("p",null,"Set up a condition (as an inequation or as an equation) the target output satisfies:\nan operator (in C syntax),\na value (constants supported only)."),(0,s.kt)("h2",{id:"generating-tests-that-fail-assertion"},"Generating Tests that Fail Assertion"),(0,s.kt)("p",null,'If some code blocks in your project are guarded by asserts (means, classic C-language asserts provided by "assert.h") you probably want to know which parameters break them. With UnitTestBot you can generate tests to find such parameters.'),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"How-to steps"),":"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Move the caret to a line with ",(0,s.kt)("inlineCode",{parentName:"li"},"assert(...)")," statement you're going to break;"),(0,s.kt)("li",{parentName:"ol"},"Right mouse click to a text editor;"),(0,s.kt)("li",{parentName:"ol"},"Select ",(0,s.kt)("inlineCode",{parentName:"li"},"UTBot: Generate Tests... > that Fail an Assertion"),".")),(0,s.kt)("img",{src:k.Z,className:"usageGif"}),(0,s.kt)("p",null,"Once code analysis is completed, a test folder with a test file named according convention ",(0,s.kt)("inlineCode",{parentName:"p"},"test_%filename%.cpp")," will be created."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"⚠️",(0,s.kt)("strong",{parentName:"p"},"Be advised")),(0,s.kt)("p",{parentName:"blockquote"},"It's not recommended to include assert-failures tests to a common test suite with regular checks as a failure triggers the engine to terminate tests execution.")))}N&&N===Object(N)&&Object.isExtensible(N)&&!N.hasOwnProperty("__filemeta")&&Object.defineProperty(N,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/docs/usage/generating.md"}}),N.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-docs-usage-generating-md-200e143f2ab713788b27.js.map