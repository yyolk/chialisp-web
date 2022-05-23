"use strict";(self.webpackChunkchialisp_web=self.webpackChunkchialisp_web||[]).push([[6022],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||r;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5308:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"intro_to_chialisp",title:"Intro to Chialisp"},s=void 0,p={unversionedId:"getting_started/intro_to_chialisp",id:"getting_started/intro_to_chialisp",isDocsHomePage:!1,title:"Intro to Chialisp",description:"Chialisp is a language based on Lisp that is used on the Chia blockchain to dictate how and when coins can be spent. It's designed to be as simple and efficient as possible, but still provide broad functionality and Turing Completeness.",source:"@site/docs/getting_started/intro_to_chialisp.md",sourceDirName:"getting_started",slug:"/getting_started/intro_to_chialisp",permalink:"/docs/getting_started/intro_to_chialisp",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/main/docs/getting_started/intro_to_chialisp.md",tags:[],version:"current",frontMatter:{id:"intro_to_chialisp",title:"Intro to Chialisp"},sidebar:"someSidebar",next:{title:"Setting up the Testnet",permalink:"/docs/getting_started/setting_up_testnet"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Atoms",id:"atoms",children:[]},{value:"Lists",id:"lists",children:[]},{value:"Modules",id:"modules",children:[]},{value:"Putting it Together",id:"putting-it-together",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],c={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://chialisp.com"},"Chialisp")," is a language based on ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lisp_(programming_language)"},"Lisp")," that is used on the Chia blockchain to dictate how and when ",(0,r.kt)("a",{parentName:"p",href:"https://docs.chia.net/docs/01introduction/chia-system-overview#coins-and-transactions"},"coins")," can be spent. It's designed to be as simple and efficient as possible, but still provide broad functionality and ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Turing_completeness"},"Turing Completeness"),"."),(0,r.kt)("p",null,"Throughout this guide you will learn the basics of Chialisp, and by the end you should have the skills required to write working programs using it. No prior knowledge of Lisp is required."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"You can follow ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-dev-tools/#install"},"this guide")," to install and use Chia Dev Tools. You will be using these tools and a simple text editor of your choice to write and run snippets of code."),(0,r.kt)("p",null,"Once you have it set up, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'run "test"\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"run")," command compiles Chialisp code. In this case, we are compiling a simple string to make sure it is installed properly."),(0,r.kt)("p",null,"If it is working correctly, it should output ",(0,r.kt)("inlineCode",{parentName:"p"},'"test"'),". You can now follow along with any of the code in the coming sections."),(0,r.kt)("h2",{id:"atoms"},"Atoms"),(0,r.kt)("p",null,"An ",(0,r.kt)("strong",{parentName:"p"},"atom")," can represent an integer, string, or hexadecimal number. However, the difference is only known before the code is compiled, and every atom is stored directly as bytes."),(0,r.kt)("p",null,"For example, these atoms all have the same value:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Representation"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Symbol"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"A")),(0,r.kt)("td",{parentName:"tr",align:null},"Names and operators")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"A"')),(0,r.kt)("td",{parentName:"tr",align:null},"Used to represent text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"65")),(0,r.kt)("td",{parentName:"tr",align:null},"Whole numbers, positive or negative")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hexadecimal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0x41")),(0,r.kt)("td",{parentName:"tr",align:null},"Raw byte representation")))),(0,r.kt)("p",null,"If you are interested in learning more about how atoms are represented, see the ",(0,r.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/ref/clvm#types"},"Types")," section."),(0,r.kt)("h2",{id:"lists"},"Lists"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"list")," is a nested chain of ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cons"},"cons pairs")," used to represent a set of values, which are also either atoms or lists. While you can manually create these pairs, and it is a good thing to know how to do, we will focus on the higher-level concept of lists for now, since they are easier to use and more practical."),(0,r.kt)("p",null,"The first item in an unquoted list is the operator, and the rest are its operands. The same goes for functions or macros and their arguments. If you want to express a list of values, you either have to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," operator or quote the list."),(0,r.kt)("p",null,"Here is a list of values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-chialisp"},"(list 1 2 3)\n")),(0,r.kt)("p",null,"And here is an operator:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-chialisp"},"(+ 2 3)\n")),(0,r.kt)("p",null,"As you can see, just about everything in this language is based on lists, hence the name Lisp (an abbreviation for List Processor). You can see a full list of built-in operators ",(0,r.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/ref/clvm#the-built-in-opcodes"},"here"),"."),(0,r.kt)("h2",{id:"modules"},"Modules"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"mod")," operator creates a context for converting the usage of constants into a single expression. It's used for more complicated features such as creating functions and including library files."),(0,r.kt)("p",null,"Note that definitions inside the module will not have direct access to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/glossary#solution"},"solution")," values provided during execution, so values will have to be passed in manually as function parameters. In other words, there is no concept of a module ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Scope_(computer_science)"},"scope"),", although constants can be used anywhere."),(0,r.kt)("p",null,"This module will add two arbitrary values together:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-chialisp"},"(mod (first second)\n    (+ first second)\n)\n")),(0,r.kt)("p",null,"And this is an example of defining a constant and a function, followed by their usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-chialisp"},";;; Raises the number by one order of magnitude.\n\n(mod (value)\n    ; Defines a constant value with a name.\n    (defconstant ORDER_OF_MAGNITUDE 10)\n\n    ; Defines a function that can be called with a value.\n    (defun raise_magnitude (value)\n        (* value ORDER_OF_MAGNITUDE)\n    )\n\n    ; Calls the previously defined function.\n    (raise_magnitude value)\n)\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The module takes in a ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," parameter."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"ORDER_OF_MAGNITUDE")," is defined as 10."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"raise_magnitude")," function takes in a ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," parameter (even though they have the same name, this is a different variable from the ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," defined as a module parameter)."),(0,r.kt)("li",{parentName:"ol"},"Returns the ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," function parameter multiplied by the ",(0,r.kt)("inlineCode",{parentName:"li"},"ORDER_OF_MAGNITUDE"),"."),(0,r.kt)("li",{parentName:"ol"},"Calls the function with the module parameter ",(0,r.kt)("inlineCode",{parentName:"li"},"value"),".")),(0,r.kt)("h2",{id:"putting-it-together"},"Putting it Together"),(0,r.kt)("p",null,"By now you have seen how some aspects of the language work, and we can use these concepts to write and run a simple Chialisp program. We will write a module that calculates the factorial of a number using ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Recursion"},"recursion"),"."),(0,r.kt)("p",null,"Put this in a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"factorial.clsp"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-chialisp"},";;; Calculates a factorial recursively.\n;;; f(n) = n * f(n - 1)\n;;; f(n) = n if n <= 2\n\n(mod (number)\n    ; Defines the factorial function.\n    (defun factorial (number)\n        (if (> number 1)\n            (* number (factorial (- number 1)))\n            1\n        )\n    )\n\n    ; Calls the function with the number provided.\n    (factorial number)\n)\n")),(0,r.kt)("p",null,"Run this example with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'brun "$(run factorial.clsp)" "(5)"\n')),(0,r.kt)("p",null,"It will compile it and run the result with a solution where ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," is 5. The result of this should be the factorial of that number, which is 120. There were a few new operators used in these examples. For more information, you should refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/ref/clvm#the-built-in-opcodes"},"operator reference"),". Below is a detailed explanation of how this works."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The module takes in a ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," parameter."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"factorial")," function also takes in a ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," parameter."),(0,r.kt)("li",{parentName:"ol"},"If the number is greater than 2, returns the number times the previous factorial."),(0,r.kt)("li",{parentName:"ol"},"Otherwise, returns the number itself."),(0,r.kt)("li",{parentName:"ol"},"Call the recursive function with the ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," module parameter.")),(0,r.kt)("p",null,"We can visualize this function with the input 5 as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-chialisp"},"(factorial 5)\n(* 5 (factorial 4))\n(* 5 (* 4 (factorial 3)))\n(* 5 (* 4 (* 3 (factorial 2))))\n(* 5 (* 4 (* 3 (* 2 (factorial 1)))))\n(* 5 (* 4 (* 3 (* 2 1))))\n")),(0,r.kt)("p",null,"Which then simplifies like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-chialisp"},"(* 5 (* 4 (* 3 2)))\n(* 5 (* 4 6))\n(* 5 24)\n120\n")),(0,r.kt)("p",null,"Everything that would normally be written using iteration in an imperative language, for example array modification, is instead written using recursion in Chialisp. It can be hard to understand at first, but eventually it will make more and more sense."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Hopefully this guide has been a good introduction into the world of Chialisp. We know it's a lot to take in, so feel free to take a break before continuing on with more guides or the documentation."),(0,r.kt)("p",null,"If you really want to get started with using it, the best way is to simply write code in the language and ask questions on our ",(0,r.kt)("a",{parentName:"p",href:"https://keybase.io/team/chia_network.public"},"Keybase")," that come up along the way. We are always happy to help you learn."))}d.isMDXComponent=!0}}]);