(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return h}));var a=t(3),o=t(7),i=(t(0),t(92)),r={id:"common_functions",title:"5 - Common Functions in Chialisp"},s={unversionedId:"common_functions",id:"common_functions",isDocsHomePage:!1,title:"5 - Common Functions in Chialisp",description:"When you start to write full smart contracts, you will start to realize that you will need certain common functionality in a lot of puzzles.  Let's go over how to include them and what some of them are:",source:"@site/docs/common_functions.md",slug:"/common_functions",permalink:"/docs/common_functions",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/main/docs/common_functions.md",version:"current",sidebar:"someSidebar",previous:{title:"4 - The High Level Language, Compiler, and Functions",permalink:"/docs/high_level_lang"},next:{title:"6 - The Standard Transaction",permalink:"/docs/standard_transaction"}},c=[{value:"include",id:"include",children:[]},{value:"sha256tree1",id:"sha256tree1",children:[]},{value:"Currying",id:"currying",children:[]},{value:"Outer and Inner puzzles",id:"outer-and-inner-puzzles",children:[]}],l={toc:c};function h(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)("p",null,"When you start to write full smart contracts, you will start to realize that you will need certain common functionality in a lot of puzzles.  Let's go over how to include them and what some of them are:"),Object(i.a)("h2",{id:"include"},"include"),Object(i.a)("p",null,"If you want to import some functionality that you use frequently without having to copy/paste it between files, you can use ",Object(i.a)("inlineCode",{parentName:"p"},"include"),":"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},";; condition_codes.clvm\n(\n  (defconstant AGG_SIG_ME 50)\n  (defconstant CREATE_COIN 51)\n)\n")),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},';;main.clvm\n(mod create_sig_coin (pubkey msg puzzle_hash amount)\n\n  (include "condition_codes.clvm")\n\n  (list (list AGG_SIG_ME pubkey msg) (list CREATE_COIN puzzle_hash amount))\n\n)\n')),Object(i.a)("p",null,"When running main.clvm with ",Object(i.a)("inlineCode",{parentName:"p"},"run"),", make sure to use the ",Object(i.a)("inlineCode",{parentName:"p"},"-i")," option to specify in which directories to look for files."),Object(i.a)("p",null,"Also note that the include files are a special format. Everything that is defined goes into a single set of parentheses like in condition_codes.clvm above.  You can then use any of those constants/functions when writing your program, without having to import each one individually.  The compiler will only include things that you use, so don't worry about including a large library file when attempting to optimize the size of your program."),Object(i.a)("h2",{id:"sha256tree1"},"sha256tree1"),Object(i.a)("p",null,"When puzzles are hashed, they are not simply serialized and passed to sha256.  Instead, we take the ",Object(i.a)("em",{parentName:"p"},"tree hash")," of the puzzle."),Object(i.a)("p",null,"Recall that every clvm program can be represented as a binary tree.  Every object is either an atom (a leaf of the tree) or a cons box (a branch of the tree).  When we hash the puzzle we start at the leaves of the tree and hash our way up, concatenating either a 1 or a 2 to denote that it's either an atom or a cons box.  Once a cons box is hashed, it becomes a new leaf to be hashed into its parent cons box and the process recurses.  Here's what that looks like in Chialisp:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},"(defun sha256tree1\n   (TREE)\n   (if (l TREE)\n       (sha256 2 (sha256tree1 (f TREE)) (sha256tree1 (r TREE)))\n       (sha256 1 TREE)\n   )\n)\n")),Object(i.a)("p",null,"It is extremely useful to calculate tree hashes within a Chialisp puzzle.  You can assert puzzles of other coins, condense puzzles for easier signing, and make CREATE_COIN conditions that are dependent on some passed in data.  "),Object(i.a)("h2",{id:"currying"},"Currying"),Object(i.a)("p",null,"Currying is an extremely important concept in Chialisp that is responsible for almost the entirety of how state is stored in coins.  The idea is to pass in arguments to a puzzle ",Object(i.a)("em",{parentName:"p"},"before")," it is hashed.  When you curry, you commit to solution values so that the individual solving the puzzle cannot change them.  Let's take a look at how this is implemented in Chialisp:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},";; utility function used by curry\n(defun fix_curry_args (items core)\n (if items\n     (qq (c (q . (unquote (f items))) (unquote (fix_curry_args (r items) core))))\n     core\n )\n)\n\n; (curry sum (list 50 60)) => returns a function that is like (sum 50 60 ...)\n(defun curry (func list_of_args) (qq (a (q . (unquote func)) (unquote (fix_curry_args list_of_args (q . 1))))))\n")),Object(i.a)("p",null,"The reason this is so useful is because you may want to create the blueprint of a puzzle, but use different values for certain parameters every time you create it.  You can't rely on the puzzle solver to honestly and correctly pass in the information you want to use, so you need to make sure it is passed in before they ever get the chance to solve it."),Object(i.a)("p",null,"The above function may look complex, but all it's really doing is wrapping the function in an ",Object(i.a)("inlineCode",{parentName:"p"},"a")," and prepending the arguments to ",Object(i.a)("inlineCode",{parentName:"p"},"1")," which (when compiled to clvm) will refer the rest of the puzzle arguments.  Absent of all the quotes, the above code reduces to something like this:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},"(a func (c curry_arg_1 (c curry_arg_2 1)))\n")),Object(i.a)("p",null,"You can also do the reverse operation.  Given a program, you can ",Object(i.a)("em",{parentName:"p"},"uncurry")," the list of arguments, with a simple ",Object(i.a)("inlineCode",{parentName:"p"},"(f (r (r )))"),":"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},"(f (r (r curried_func)))\n; (c curry_arg_1 (c curry_arg_2 1))\n")),Object(i.a)("p",null,"Let's take our password locked coin example from earlier, this time as a Chialisp puzzle:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},"(mod (password new_puzhash amount)\n  (defconstant CREATE_COIN 51)\n\n  (defun check_password (password new_puzhash amount)\n\n    (if (= (sha256 password) (q . 0x2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824))\n      (list (list CREATE_COIN new_puzhash amount))\n      (x)\n    )\n  )\n\n  ; main\n  (check_password password new_puzhash amount)\n)\n")),Object(i.a)("p",null,"You can see that the password hash is baked into the source of the puzzle.  This means every time that you want to lock up a coin with a new password, you have to recreate the file that contains the source of the code.  It would be much nicer if we fully generalized it:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},"(mod (PASSWORD_HASH password new_puzhash amount)\n  (defconstant CREATE_COIN 51)\n\n  (defun check_password (PASSWORD_HASH password new_puzhash amount)\n\n    (if (= (sha256 password) PASSWORD_HASH)\n      (list (list CREATE_COIN new_puzhash amount))\n      (x)\n    )\n  )\n\n  ; main\n  (check_password PASSWORD_HASH password new_puzhash amount)\n)\n")),Object(i.a)("p",null,"However, now we have the problem that anyone can pass in whatever password/hash combo that they please and unlock this coin.  When we create this coin we need the password hash to be committed to. Before determining the puzzle hash of the coin we're going to create, we need to curry in the hash with something like this:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},'; curry_password_coin.clvm\n(mod (password_hash password_coin_mod)\n  (include "curry.clvm") ; From above\n\n  (curry password_coin_mod (list password_hash))\n)\n')),Object(i.a)("p",null,"If we compile this function and pass it parameters like this:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"brun <curry password coin mod> '((q . 0xcafef00d) (q . <password coin mod>))'\n")),Object(i.a)("p",null,"we will receive a puzzle that looks very similar to our password coin module, but has been expanded to include the hash we passed in.  You can now run the currying mod above with a different password hash and it will output a new puzzle every time.  We can then hash that puzzle and create a coin with the returned puzzle hash."),Object(i.a)("p",null,"Note that this required that we run the currying module using ",Object(i.a)("inlineCode",{parentName:"p"},"brun")," in our own environment off chain in order to create the puzzle we would lock up our coin with.  A lot of the time this currying will happen in python or whatever wrapper language is being used by the software creating the coins.  However, there are some use cases in which we would want to use currying within the scope of a puzzle.  Let's look at one now."),Object(i.a)("h2",{id:"outer-and-inner-puzzles"},"Outer and Inner puzzles"),Object(i.a)("p",null,'A common design pattern, and one of the most powerful features of Chialisp, is the ability to have an outer smart contract the "wraps" an inner puzzle.  This concept is extremely handy because it allows a coin to retain all of it\'s standard functionality and programmability within the inner puzzle, but be bound to an extra set of rules by the outer puzzle.'),Object(i.a)("p",null,"For this example, we're going to continue with our password locking, but this time we're going to require that every time the coin is spent, it requires a new password to be set.  Let's look at all the code and then we'll break it down:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},'(mod (\n    MOD_HASH        ;; curried in\n    PASSWORD_HASH   ;; curried in\n    INNER_PUZZLE    ;; curried in\n    inner_solution\n    password\n    new_password_hash\n  )\n\n  (include "condition_codes.clvm")\n  (include "sha256tree1.clvm")\n  (include "curry-and-treehash.clvm")\n\n  (defun pw-puzzle-hash (MOD_HASH mod_hash_hash new_password_hash_hash inner_puzzle_hash)\n     (puzzle-hash-of-curried-function\n       MOD_HASH\n       inner_puzzle_hash new_password_hash_hash mod_hash_hash ; parameters must be passed in reverse order\n     )\n   )\n\n  ;; tweak `CREATE_COIN` condition by wrapping the puzzle hash, forcing it to be a password locked coin\n  (defun-inline morph-condition (condition new_password_hash MOD_HASH)\n   (if (= (f condition) CREATE_COIN)\n     (list CREATE_COIN\n       (pw-puzzle-hash MOD_HASH (sha256tree1 MOD_HASH) (sha256tree1 new_password_hash) (f (r condition)))\n       (f (r (r condition)))\n     )\n     condition\n   )\n  )\n\n  ;; tweak all `CREATE_COIN` conditions, enforcing created coins to be locked by passwords\n  (defun morph-conditions (conditions new_password_hash MOD_HASH)\n   (if conditions\n     (c\n       (morph-condition (f conditions) new_password_hash MOD_HASH)\n       (morph-conditions (r conditions) new_password_hash MOD_HASH)\n     )\n     ()\n   )\n  )\n\n  ; main\n  (if (= (sha256 password) PASSWORD_HASH)\n    (morph-conditions (a INNER_PUZZLE inner_solution) new_password_hash MOD_HASH)\n    (x "wrong password")\n  )\n\n)\n')),Object(i.a)("p",null,"You may notice that we imported a new library called ",Object(i.a)("inlineCode",{parentName:"p"},"curry-and-treehash"),".  We'll talk about that in a few steps."),Object(i.a)("p",null,"First, let's talk about the arguments.  When you create this puzzle for the first time you need to curry in 3 things: ",Object(i.a)("inlineCode",{parentName:"p"},"MOD_HASH")," which is the tree hash of this code, ",Object(i.a)("inlineCode",{parentName:"p"},"PASSWORD_HASH")," which is the hash of the password that will unlock this coin, and ",Object(i.a)("inlineCode",{parentName:"p"},"INNER_PUZZLE")," which is a completely separate puzzle that will have its own rules about how the coin can be spent."),Object(i.a)("p",null,"Chialisp puzzles have the tendency to be read from the bottom up, so lets start with this chunk:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},'; main\n(if (= (sha256 password) PASSWORD_HASH)\n  (morph-conditions (a INNER_PUZZLE inner_solution) new_password_hash MOD_HASH)\n  (x "wrong password")\n)\n')),Object(i.a)("p",null,"All that's happening here is that we're making sure the password is correct and, if it is, we're going to run the curried in ",Object(i.a)("inlineCode",{parentName:"p"},"INNER_PUZZLE")," with the passed in ",Object(i.a)("inlineCode",{parentName:"p"},"inner_solution"),".  This will return a list of opcodes that we will pass to the next function along with the new password hash and ",Object(i.a)("inlineCode",{parentName:"p"},"MOD_HASH"),"."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},";; tweak all `CREATE_COIN` conditions, enforcing created coins to be locked by passwords\n(defun morph-conditions (conditions new_password_hash MOD_HASH)\n (if conditions\n   (c\n     (morph-condition (f conditions) new_password_hash MOD_HASH)\n     (morph-conditions (r conditions) new_password_hash MOD_HASH)\n   )\n   ()\n )\n)\n")),Object(i.a)("p",null,"Recursion is the foundation of Chialisp and functions like these very commonly show up when writing it.  In order to iterate through the list of conditions, we first check if there are still items left (remember that an empty list ",Object(i.a)("inlineCode",{parentName:"p"},"()")," or ",Object(i.a)("strong",{parentName:"p"},"nil")," evaluates to false). Then, we morph the first condition and concatenate it with the recursive output of the rest of the list.  In the end, we will have the same list of items in the same order, but all of them will have passed thru ",Object(i.a)("inlineCode",{parentName:"p"},"morph-condition"),"."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},";; tweak `CREATE_COIN` condition by wrapping the puzzle hash, forcing it to be a password locked coin\n(defun-inline morph-condition (condition new_password_hash MOD_HASH)\n (if (= (f condition) CREATE_COIN)\n   (list CREATE_COIN\n     (pw-puzzle-hash MOD_HASH (sha256tree1 MOD_HASH) (sha256tree1 new_password_hash) (f (r condition)))\n     (f (r (r condition)))\n   )\n   condition\n )\n)\n")),Object(i.a)("p",null,"This function is also pretty simple. We're first checking if the opcode (first item in the list) is CREATE_COIN.  If it's not, just return the condition as usual.  If it is, return a condition that is almost exactly the same, except we're passing the puzzle hash into a function that will modify it:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-lisp"},"(defun pw-puzzle-hash (MOD_HASH mod_hash_hash new_password_hash_hash inner_puzzle_hasr\n   (puzzle-hash-of-curried-function\n     MOD_HASH\n     inner_puzzle_hash new_password_hash_hash mod_hash_hash ; parameters must be passed in reverse order\n   )\n)\n")),Object(i.a)("p",null,"This is where the exciting stuff happens.  Since we don't know the inner puzzle, only it's hash, it's impossible to curry it directly into the next puzzle we want to create.  Furthermore, if we don't want to pass in the whole source of this current module every time that we spend it, we don't have a puzzle to curry things into either."),Object(i.a)("p",null,"However, all we care about is generating the correct ",Object(i.a)("em",{parentName:"p"},"puzzle hash")," for the next puzzle, and we do have the tree hashes for both this module and the inner puzzle.  We can use ",Object(i.a)("inlineCode",{parentName:"p"},"puzzle-hash-of-curried-function")," which allows us to create the puzzle hash of a function given: a) the puzzle hash of that function and b) the puzzle hashes of all of its arguments in reverse order.  The implementation details of this library are a bit much to go into in this part of the tutorial but, in essence, it allows us to ",Object(i.a)("em",{parentName:"p"},"resume")," a tree hash that we have completed except for the last step."),Object(i.a)("p",null,'And that\'s it!  When this coin is created, it can only be spent by a password that hashes to the curried in PASSWORD_HASH.  The inner puzzle can be anything that you want including other smart contracts that have their own inner puzzles.  Whatever coins get created as a result of that inner puzzle will be "wrapped" by this same outer puzzle ensuring that every child of this coin is locked by a password ',Object(i.a)("em",{parentName:"p"},"forever"),"."),Object(i.a)("p",null,"We created a simple coin, but you can see the potential of this. You can enforce a set of rules not only on a coin that you lock up, but on ",Object(i.a)("em",{parentName:"p"},"every")," descendant coin.  Not only that, the rules can be enforced ",Object(i.a)("em",{parentName:"p"},"on top of other smart contracts"),".  In the Chialisp ecosystem, all smart contracts are interoperable with each other unless otherwise specified by a parent smart contract. The possibilities are endless and represent the vast programmability that Chialisp enables for coins."),Object(i.a)("p",null,"In the next section, we'll talk about the standard transaction format on the Chia network."))}h.isMDXComponent=!0},92:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t(0),o=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),h=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=h(t),d=a,m=p["".concat(r,".").concat(d)]||p[d]||u[d]||i;return t?o.a.createElement(m,s(s({ref:n},l),{},{components:t})):o.a.createElement(m,s({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=t[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);