(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{79:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(3),l=a(7),i=(a(0),a(92)),r={id:"serialization",title:"CLVM Reference Manual",sidebar_label:"2 - Serialization"},s={unversionedId:"ref/serialization",id:"ref/serialization",isDocsHomePage:!1,title:"CLVM Reference Manual",description:"Serialization",source:"@site/docs/ref/serialization.md",slug:"/ref/serialization",permalink:"/docs/ref/serialization",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/main/docs/ref/serialization.md",version:"current",sidebar_label:"2 - Serialization",sidebar:"someSidebar",previous:{title:"CLVM Reference Manual",permalink:"/docs/ref/clvm"},next:{title:"ChiaLisp and CLVM FAQ",permalink:"/docs/faq"}},o=[{value:"Serialization",id:"serialization",children:[{value:"Values",id:"values",children:[]},{value:"Encoding",id:"encoding",children:[]},{value:"Encoded Size bytes layout",id:"encoded-size-bytes-layout",children:[]},{value:"Decoding",id:"decoding",children:[]},{value:"Lists",id:"lists",children:[]}]}],c={toc:o};function b(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h2",{id:"serialization"},"Serialization"),Object(i.a)("p",null,"The CLVM serialization format closely follows the in-memory representation of the program tree."),Object(i.a)("p",null,"This in turn, closely resembles the text format of a fully compiled CLVM program."),Object(i.a)("p",null,"At the lowest level, there are only two types of Object in the CLVM."),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Pair (also called Cons Pair/Cons Box/Cons Cell) - A pair of two values. Usually, the first value is an atom and contains information, whereas the second value is usually either a pointer to another pair, or a ",Object(i.a)("inlineCode",{parentName:"li"},"nil")," atom. Lists are built from these pairs."),Object(i.a)("li",{parentName:"ul"},"Atom - A value that holds data, which is represented as a byte array with the static length. Empty, zero-length atoms are used to represent ",Object(i.a)("inlineCode",{parentName:"li"},"nil")," value.")),Object(i.a)("p",null,"Each CLVM Object is represented by a series of one or more bytes. Each byte belongs to the representation of exactly one CLVM Object. That is, no bits in a byte are shared by multiple CLVM objects."),Object(i.a)("h3",{id:"values"},"Values"),Object(i.a)("p",null,"Each value in the CLVM is an untyped sequence of bytes. In the running virtual machine, values have a property length, containing the number of bytes. The same concept is preserved in the serialization format. However, values must be distinguished from cons boxes in the byte stream, so an escaping scheme is used. This escaping means that serialized values using more than 7 bits have a different representation than the in memory representation."),Object(i.a)("p",null,"Nil has a single predefined value which is not shared with any user-defined value."),Object(i.a)("h3",{id:"encoding"},"Encoding"),Object(i.a)("p",null,"Values which can be represented in 7 bits are encoded as a single byte with that value. Larger serialized values are represented as a sequence of bytes that encode the size, and then the value bytes."),Object(i.a)("p",null,"The encoding scheme for the size prefix is as follows:"),Object(i.a)("p",null,"The value of the first serialized byte determines the number of size bytes (1 to 6, including the first byte). The size then determines the number of bytes denoting the value (0 to 0x400000000-1 bytes long)"),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"size")," is the length of the byte array containing the value, as an integer.\nIn the table below, we use ",Object(i.a)("strong",{parentName:"p"},"s")," to describe the bytes that make up the encoded size value, s","[0]"," being the least significant byte of ",Object(i.a)("strong",{parentName:"p"},"size"),". The size bytes are encoded MSB first."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"object is cons box:   0xFF\nvalue == nil:         0x80\nvalue <= 0x7F:        value\n\nsize < 0x40:          0x80 | s[0], value\nsize < 0x2000:        0xC0 | s[1], s[0], value\nsize < 0x100000:      0xE0 | s[2], s[1], s[0], value\nsize < 0x8000000:     0xF0 | s[3], s[2], s[1], s[0], value\nsize < 0x400000000:   0xF8 | s[4], s[3], s[2], s[1], s[0], value\n")),Object(i.a)("p",null,"In the table below, the bits marked x contain the length of the value array, in bytes."),Object(i.a)("h3",{id:"encoded-size-bytes-layout"},"Encoded Size bytes layout"),Object(i.a)("table",null,Object(i.a)("thead",{parentName:"table"},Object(i.a)("tr",{parentName:"thead"},Object(i.a)("th",{parentName:"tr",align:null},"Size bytes"),Object(i.a)("th",{parentName:"tr",align:null},"Min Value Len"),Object(i.a)("th",{parentName:"tr",align:null},"Max Value Length"),Object(i.a)("th",{parentName:"tr",align:null},"Byte 1"),Object(i.a)("th",{parentName:"tr",align:null},"Byte 2"),Object(i.a)("th",{parentName:"tr",align:null},"Byte 3"),Object(i.a)("th",{parentName:"tr",align:null},"Byte 4"),Object(i.a)("th",{parentName:"tr",align:null},"Byte 5"))),Object(i.a)("tbody",{parentName:"table"},Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",{parentName:"tr",align:null},"1"),Object(i.a)("td",{parentName:"tr",align:null},"0x00"),Object(i.a)("td",{parentName:"tr",align:null},"0x3F"),Object(i.a)("td",{parentName:"tr",align:null},"1xxxxxxx"),Object(i.a)("td",{parentName:"tr",align:null}),Object(i.a)("td",{parentName:"tr",align:null}),Object(i.a)("td",{parentName:"tr",align:null}),Object(i.a)("td",{parentName:"tr",align:null})),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",{parentName:"tr",align:null},"2"),Object(i.a)("td",{parentName:"tr",align:null},"0x40"),Object(i.a)("td",{parentName:"tr",align:null},"0x1FFF"),Object(i.a)("td",{parentName:"tr",align:null},"11xxxxxx"),Object(i.a)("td",{parentName:"tr",align:null},"xxxxxxxx"),Object(i.a)("td",{parentName:"tr",align:null}),Object(i.a)("td",{parentName:"tr",align:null}),Object(i.a)("td",{parentName:"tr",align:null})),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",{parentName:"tr",align:null},"3"),Object(i.a)("td",{parentName:"tr",align:null},"0x2000"),Object(i.a)("td",{parentName:"tr",align:null},"0xFFFFF"),Object(i.a)("td",{parentName:"tr",align:null},"111xxxxx"),Object(i.a)("td",{parentName:"tr",align:null},"xxxxxxxx"),Object(i.a)("td",{parentName:"tr",align:null},"xxxxxxxx"),Object(i.a)("td",{parentName:"tr",align:null}),Object(i.a)("td",{parentName:"tr",align:null})),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",{parentName:"tr",align:null},"4"),Object(i.a)("td",{parentName:"tr",align:null},"0x100000"),Object(i.a)("td",{parentName:"tr",align:null},"0x7FFFFFF"),Object(i.a)("td",{parentName:"tr",align:null},"1111xxxx"),Object(i.a)("td",{parentName:"tr",align:null},"xxxxxxxx"),Object(i.a)("td",{parentName:"tr",align:null},"xxxxxxxx"),Object(i.a)("td",{parentName:"tr",align:null},"xxxxxxxx"),Object(i.a)("td",{parentName:"tr",align:null})),Object(i.a)("tr",{parentName:"tbody"},Object(i.a)("td",{parentName:"tr",align:null},"5"),Object(i.a)("td",{parentName:"tr",align:null},"0x8000000"),Object(i.a)("td",{parentName:"tr",align:null},"0x3FFFFFFFF"),Object(i.a)("td",{parentName:"tr",align:null},"11111xxx"),Object(i.a)("td",{parentName:"tr",align:null},"xxxxxxxx"),Object(i.a)("td",{parentName:"tr",align:null},"xxxxxxxx"),Object(i.a)("td",{parentName:"tr",align:null},"xxxxxxxx"),Object(i.a)("td",{parentName:"tr",align:null},"xxxxxxxx")))),Object(i.a)("h3",{id:"decoding"},"Decoding"),Object(i.a)("p",null,"The decoding scheme is as follows:"),Object(i.a)("p",null,"c","[0]"," is the first byte of the serialized CLVM object."),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"size")," is the number of bytes contained in the value byte array\n",Object(i.a)("strong",{parentName:"p"},"s")," is the byte array containing the bytes of the two's complement integer size, the number of bytes in the value array.\n",Object(i.a)("strong",{parentName:"p"},"value")," is the span of bytes describing the CLVM Object itself"),Object(i.a)("p",null,"c","[0]"," can contain the entire value, or it can be part of the size header.\nValues below 0x80 do not have size header bytes."),Object(i.a)("p",null,"0x00-0x7f: A literal one byte value. c","[0]"," contains the value.\n",Object(i.a)("inlineCode",{parentName:"p"},"size = 1; value = c[0]")),Object(i.a)("p",null,"0x80-0xbf: The value starts at the byte c","[1]",", and size is in the lower 6 bits of c","[0]","\n",Object(i.a)("inlineCode",{parentName:"p"},"size = (c[0] & 0x3F); value = c[1] .. c[size]")),Object(i.a)("p",null,"0xc0-0xdf: The value starts at c","[2]","; the lower 5 bits of c","[0]"," are the high bits of size\n",Object(i.a)("inlineCode",{parentName:"p"},"size = (c[0] & 0x1F) .. c[1]; value = c[2] .. c[size+1]")),Object(i.a)("p",null,"0xe0-0xef: The value starts at c","[3]","; the lower 4 bits of c","[0]"," are the high bits of size\n",Object(i.a)("inlineCode",{parentName:"p"},"size = (c[0] & 0x0F) .. c[2]; value = c[3] .. c[size+2]")),Object(i.a)("p",null,"0xf0-0xf7: The value starts at c","[4]","; the lower 3 bits of c","[0]"," are the high bits of size\n",Object(i.a)("inlineCode",{parentName:"p"},"size = (c[0] & 0x07) .. c[3]; value = c[4] .. c[size+3]")),Object(i.a)("p",null,"0xf7-0xfb: The value starts at c","[5]","; the lower 2 bits of c","[0]"," are the high bits of size\n",Object(i.a)("inlineCode",{parentName:"p"},"size = (c[0] & 0x03) .. c[4]; value = c[5] .. c[size+4]")),Object(i.a)("p",null,"Atoms of size 0x400000000 or greater are disallowed in the serialization format."),Object(i.a)("p",null,"As an example:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"c = [ 0x84 0x33 0x22 0x11 0x00 ]\nc[0] = 0x84\nsize = (0x84 & 0x3F) = 4\nvalue = [ 33 22 11 00 ]\n")),Object(i.a)("p",null,"In the above example, the length of the value is ",Object(i.a)("strong",{parentName:"p"},"4"),", and we only needed the bottom 3 bits of the c","[0]"," byte to encode the length, so the size is completely described by the first serialized byte. The total length of the encoded atom is 5 bytes."),Object(i.a)("p",null,"Note that for values greater than 0x7F, the bytes of the serialized value representing the length are disjoint with the actual value bytes."),Object(i.a)("p",null,"Let us consider some special cases."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"value(0x80) = 81 80\n")),Object(i.a)("p",null,"c","[0]"," is ",Object(i.a)("inlineCode",{parentName:"p"},"0x81"),".Since c","[0]"," is between ",Object(i.a)("inlineCode",{parentName:"p"},"0x7F")," and ",Object(i.a)("inlineCode",{parentName:"p"},"0xC0"),", we know that there is only one size byte, c","[0]",", and the value is contained in the following bytes, starting at c","[1]",". The total size of the value array is\n",Object(i.a)("inlineCode",{parentName:"p"},"size")," = ",Object(i.a)("inlineCode",{parentName:"p"},"c[0] & 0x3F")," = ",Object(i.a)("inlineCode",{parentName:"p"},"0x1"),". So, the full value is contained in the single following byte."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"value(0x81) = 81 81\nvalue(0x82) = 81 82\nvalue(0xFF) = 81 ff\n")),Object(i.a)("p",null,"Note that the special byte 0xFF is allowed within the bytes representing a value.\n0xFF denotes a cons box when it is the first byte of a decoded CLVM object, but it may also occur within the serialized bytes of a value."),Object(i.a)("p",null,"A 2 byte value"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"value(0x01FF) = 82 01 ff\n")),Object(i.a)("h3",{id:"lists"},"Lists"),Object(i.a)("p",null,"Lists are the primary high-level data structure in most LISP implementations. Traditionally, a LISP builds lists from cons boxes, a two-celled data structure that can be thought of as a struct with two fields, left and right, each of which contains either a value, or a (pointer to) another cons cell."),Object(i.a)("p",null,"Because the cons cell is the low level data structure that lists are built from, LISP lists are only lists by way of the fact that lists can be implemented from trees. A lisp list built from cons cells in a binary tree."),Object(i.a)("p",null,"Serialized cons cells are represented by the byte 0xFF, followed by the objects in its cells, left then right.\nValues are represented by a variable length byte-aligned encoding scheme, described above.\nNil is chosen to be the zero-length object, which is represented by the byte 0x80."),Object(i.a)("p",null,"Because lists are represented as a sequence of cons boxes, the byte 0xff occurs frequently in the serialization format."),Object(i.a)("p",null,"After the FF introducer byte, the next two values describe what is in the left and right cons boxes, respectively."),Object(i.a)("p",null,"The first examples use single byte values for clarity."),Object(i.a)("p",null,"The list (1 2 3) will be encoded as:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"ff 01 ff 02 ff 03 80\n")),Object(i.a)("p",null,"This can be read as:"),Object(i.a)("p",null,Object(i.a)("inlineCode",{parentName:"p"},"(a cons box containing 01")," and ",Object(i.a)("inlineCode",{parentName:"p"},"a cons box (containing 02")," and ",Object(i.a)("inlineCode",{parentName:"p"},"a cons box (containing 03 and nil)))")),Object(i.a)("p",null,"Alternatively, it could be viewed as a binary tree that looks like this:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"      [ ]\n     /   \\\n    1    [ ]\n         / \\\n        2  [ ]\n           / \\\n          3  nil\n")),Object(i.a)("p",null,"Or, as a chain of memory cells that look like this:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"(a)[ 1, ->b ]   (b)[ 2, ->c ]   (c)[ 3, nil ]\n")),Object(i.a)("p",null,"Where"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},'(a) means "The contents of the memory cells at position a and a+1 (cons box a)"'),Object(i.a)("li",{parentName:"ul"},'->b means "a pointer to cons box (b)"'),Object(i.a)("li",{parentName:"ul"},Object(i.a)("inlineCode",{parentName:"li"},"(a)"),", ",Object(i.a)("inlineCode",{parentName:"li"},"(b)"),", ",Object(i.a)("inlineCode",{parentName:"li"},"(c)")," are arbitrary labels for the cons cells, and do not exist in the CLVM")),Object(i.a)("p",null,"Because the above list contains only one level of nesting, a single ",Object(i.a)("inlineCode",{parentName:"p"},"0x80")," byte is sufficient to terminate the list. Note the two ",Object(i.a)("inlineCode",{parentName:"p"},"0x80")," bytes in the example below."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"opc '(1 (2 3))'\nff 01 ff ff 02 ff 03 80 80\n")),Object(i.a)("p",null,"There can be many cons cells in a CLVM program, so 0xFF will be common in the serialized program. There will be one serialized nil (0x80) per properly terminated list. Nil may also occur at other places in the program. There are usually more cons boxes than lists, so 0xFF occurs more frequently than 0x80."))}b.isMDXComponent=!0},92:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),l=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=l.a.createContext({}),b=function(e){var t=l.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},p=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,h=p["".concat(r,".").concat(d)]||p[d]||u[d]||i;return a?l.a.createElement(h,s(s({ref:t},c),{},{components:a})):l.a.createElement(h,s({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);