"use strict";(self.webpackChunkchialisp_web=self.webpackChunkchialisp_web||[]).push([[7162],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=o,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||i;return n?a.createElement(m,r(r({ref:t},h),{},{components:n})):a.createElement(m,r({ref:t},h))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6749:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return h}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={id:"coin_lifecycle",title:"Lifecycle of a Coin"},l=void 0,c={unversionedId:"coin_lifecycle",id:"coin_lifecycle",isDocsHomePage:!1,title:"Lifecycle of a Coin",description:"You should now understand how to create Chialisp puzzles that lock up coins with a particular set of rules.",source:"@site/docs/coin_lifecycle.md",sourceDirName:".",slug:"/coin_lifecycle",permalink:"/docs/coin_lifecycle",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/main/docs/coin_lifecycle.md",tags:[],version:"current",frontMatter:{id:"coin_lifecycle",title:"Lifecycle of a Coin"},sidebar:"someSidebar",previous:{title:"Coins, Spends and Wallets",permalink:"/docs/coins_spends_and_wallets"},next:{title:"Security",permalink:"/docs/security"}},h=[{value:"The Coin Set Model",id:"the-coin-set-model",children:[]},{value:"Farming Rewards",id:"farming-rewards",children:[]},{value:"Spend Bundles",id:"spend-bundles",children:[]},{value:"Fees and the Mempool",id:"fees-and-the-mempool",children:[]},{value:"Transaction Generators",id:"transaction-generators",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],u={toc:h};function d(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You should now understand how to create Chialisp puzzles that lock up coins with a particular set of rules.\nYou may be wondering how a coin gets locked up, where it is stored, how and when it gets spent, and who can spend it.\nLet's take a look at the steps a coin goes through from its creation to its destruction."),(0,i.kt)("h2",{id:"the-coin-set-model"},"The Coin Set Model"),(0,i.kt)("p",null,"Chia's model of how coins are stored is called the ",(0,i.kt)("strong",{parentName:"p"},"coin set")," model and is closely modelled after Bitcoin's UTXO model.\nThe idea is simple, every full node holds onto a database of ",(0,i.kt)("strong",{parentName:"p"},"coin records"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class Coin:\n  parent_coin_info: bytes32\n  puzzle_hash: bytes32\n  amount: uint64\n\nclass CoinRecord:\n  coin: Coin\n  confirmed_block_index: uint32\n  spent_block_index: uint32\n  spent: boolean\n  coinbase: boolean\n  timestamp: uint64\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note that the ",(0,i.kt)("inlineCode",{parentName:"em"},"Coin")," object is part of the blockchain format and cannot be changed, while the ",(0,i.kt)("inlineCode",{parentName:"em"},"CoinRecord")," object is part of the full node and can be modified by alternative implementations")),(0,i.kt)("p",null,"This database is generated by looking at the blockchain from block height zero and processing all of the transactions until it is in sync with the current peak.\nWhen a full node processes a spend, it first makes sure that the coin being spent exists in its database, runs and validates the Chialisp conditions that are produced, marks the coin that was being spent as spent, and adds any new coins that were created as a result."),(0,i.kt)("p",null,"This approach makes the database very light as the blockchain grows, but still allows for complexity and smart coins through Chialisp which is committed to inside the puzzle hash.\nIt is also an important distinction from some other blockchains in that ",(0,i.kt)("em",{parentName:"p"},"all state in Chialisp is stored in the coins"),".\nThere is no special way to store data so that people can access it; the majority of that functionality comes from finding ways to reveal the proper information in puzzle reveals and by committing to predictable puzzle hashes."),(0,i.kt)("h2",{id:"farming-rewards"},"Farming Rewards"),(0,i.kt)("p",null,"As you probably know, farmers create the entirety of new value in Chia.\nEvery 18.75 seconds or so, a new block pops into existence that allows for a farmer to create a coin out of thin air, in two amounts of a very specific ratio: 1 to 7 (farmer to pool).\nHere are two actual farming rewards that were generated in block 10,000 of the blockchain:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "amount" : 1750000000000,\n    "parent_coin_info" : "0xccd5bb71183532bff220ba46c268991a0000000000000000000000000000270b",\n    "puzzle_hash" : "0x0b42a11b76d276f191026ae1a01c711cc0637e63d8ce0c2f62d6d079cc974920"\n  },\n  {\n    "amount" : 250000000000,\n    "parent_coin_info" : "0x3ff07eb358e8255a65c30a2dce0e5fbb0000000000000000000000000000270b",\n    "puzzle_hash" : "0x0b42a11b76d276f191026ae1a01c711cc0637e63d8ce0c2f62d6d079cc974920"\n  }\n]\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},'Fun fact: The genesis challenge is the hash of a bitcoin block around the time when the Chia network was launched and the message from Bram Cohen: ""Operational error causes Fed payment system to crash" We stand on the shoulders of giants, now let\'s get farming!"')),(0,i.kt)("p",null,"Notice that the ",(0,i.kt)("inlineCode",{parentName:"p"},"parent_coin_info"),' for both is a little strange.\nBecause they are created out of thin air, the coins are assigned a special value as their parent coin: one half of the "genesis challenge", some filler zeroes, and the index of the block they are farmed in.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'pool_parent_id = bytes32(genesis_challenge[:16] + block_height.to_bytes(16, "big"))\nfarmer_parent_id = bytes32(genesis_challenge[16:] + block_height.to_bytes(16, "big"))\n')),(0,i.kt)("p",null,"This information is usually not very relevant, but it is used.\nFor example, in the pooling puzzles, the reward coin needs to make an announcement as it's being claimed and another puzzle needs to assert that announcement.\nIt's also important to point out that since the genesis challenge is part of the parent info, and since the genesis challenge is different between mainnet and each testnet, it's nearly impossible to end up with two identical coin ids. This is, in part, to prevent signature replay attacks: coins that are signed on testnet won't be able to use the same signature on mainnet."),(0,i.kt)("h2",{id:"spend-bundles"},"Spend Bundles"),(0,i.kt)("p",null,"Alright, so you've received some XCH and you want to deploy your first smart coin.\nTo do that, you're first going to have to create a ",(0,i.kt)("strong",{parentName:"p"},"spend bundle"),'.\nThis is sometimes referred to colloquially as a "transaction". A spend bundle is a simple construct.\nIt is an object that contains exactly two things: a list of coin spends and an aggregated signature.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class SpendBundle:\n  coin_spends: List[CoinSpend]\n  aggregated_signature: G2Element\n")),(0,i.kt)("p",null,"A ",(0,i.kt)("strong",{parentName:"p"},"coin spend")," contains exactly three things: The coin you are trying to spend (parent_coin_info, amount, puzzle_hash), the puzzle reveal (needs to tree hash to the puzzle hash), and the solution."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class CoinSpend:\n  coin: Coin\n  puzzle_reveal: SerializedProgram\n  solution: SerializedProgram\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"aggregated signature"),' is a BLS signature and needs to be a signature of exactly the public key/message pairs that are output by the conditions from puzzles in the bundle.\nYou cannot aggregate extra signatures, nor can you leave out any.\nIf there are no AGG_SIG_ME or AGG_SIG_UNSAFE conditions that are output, the aggregated signature must be an empty signature which is a "c" followed 191 zeroes.'),(0,i.kt)("p",null,"Once you have constructed a spend bundle, you can push it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/push_tx")," RPC endpoint on a Chia full node.\nKeep in mind a few things though:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Unless you farm the block, you cannot guarantee if or when your spend bundle will make it to the network.\nIf two spends rely on each other some way, they must be in the same spend bundle and bound with signatures."),(0,i.kt)("li",{parentName:"ul"},"When using short absolute timelocks, make sure to leave in a reasonable amount of time for the bundle to reach the network.\nSometimes, due to high fee pressure, it may take a while for a low fee transaction to get in.\nIf your spend relies on having the coin available on the blockchain before the timelock passes, it's not a guarantee, so make sure to leave in a good amount of time just in case."),(0,i.kt)("li",{parentName:"ul"},"Nothing technically keeps the spends in a spend bundle together except for the aggregated signature and announcement logic.\nIf you make a spend that does not assert an announcement from another coin in the spend AND does not require a signature, that spend can be excluded from the bundle by a malicious node or farmer.\nAlso note that a spend bundle can be aggregated with another without your permission.\nIn fact, the block creation code does something similar when it creates the generator, which we will talk about soon.")),(0,i.kt)("p",null,"Remember that other nodes are handling this piece of data as well, and it's best to assume that they will try to change everything that they can.\nMake sure that if anything changes in a way you don't like, the whole bundle will fail."),(0,i.kt)("h2",{id:"fees-and-the-mempool"},"Fees and the Mempool"),(0,i.kt)("p",null,"Once you create and push a spend bundle, your node will validate it and then start gossiping the information out to its peers.\nWhen each node receives a transaction it tries to validate it on its own and will reject it if it considers the spend to be invalid.\nIt is ",(0,i.kt)("em",{parentName:"p"},"extremely")," important to note that before it validates it, the node can run software that tries to change it.\nThis is why it's very important that you create your spend bundles in a way that any changes will automatically invalidate the signature or the puzzle hash.\nThe malicious node can push the changed transaction to other honest nodes, and if it's not invalid, the honest nodes will accept it."),(0,i.kt)("p",null,"Once it has validated the spend bundle, it will include the relevant information into its ",(0,i.kt)("strong",{parentName:"p"},"mempool"),".\nThe mempool is a list of transactions that a node is holding onto and waiting to put into a block.\nItems in the mempool are sorted by ",(0,i.kt)("strong",{parentName:"p"},"fees"),".\nA fee is created when the sum of the ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE_COIN")," outputs is less than the amount of the coin that is being spent.\nThis means that no value can ever be destroyed in the Chia ecosystem: if you spend a coin and don't create any new coins, the farmer can add the value of the existing coin to their farming rewards."),(0,i.kt)("p",null,"When the mempool is deciding which transactions to put into a block, it looks to put in the transactions with the highest fee / cost ratio.\nWe haven't talked much about cost yet, but you can find out more about it ",(0,i.kt)("a",{parentName:"p",href:"/docs/ref/clvm#costs"},"here")," and we'll talk about optimization more in a later section.\nThe main idea is: if you make a complex and hard to run transaction with a lot of data, you will probably end up paying a higher fee to get it into a block in a reasonable time frame."),(0,i.kt)("h2",{id:"transaction-generators"},"Transaction Generators"),(0,i.kt)("p",null,"When a farmer decides to include transactions in a block, they will aggregate all of them into something called a ",(0,i.kt)("strong",{parentName:"p"},"transaction generator"),".\nA generator is a clvm program that outputs the information in the spend bundle.\nIt will result in a list of lists that contain:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The parent ID of the coin being spent"),(0,i.kt)("li",{parentName:"ul"},"The puzzle and solution reveals"),(0,i.kt)("li",{parentName:"ul"},"The coin amount")),(0,i.kt)("p",null,"That program is then run through ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/blob/59de4ffe9f98de62d281695d1f519d65ef2e2ece/chia/wallet/puzzles/rom_bootstrap_generator.clvm"},"another Chialisp program")," that is a part of consensus and is used when validating every block that a node receives.\nThat program parses the generator for puzzle and solution reveals, and returns a total list of conditions for every transaction in the block."),(0,i.kt)("p",null,"This is an important concept: ",(0,i.kt)("em",{parentName:"p"},"all transactions in a block are run in parallel"),".\nThe fact that all of these transactions are evaluated as one big program provides some valuable benefits:"),(0,i.kt)("p",null,"Farmers cannot front-run a transaction at farm time because there is no order to the transactions.\nThey can kick transactions and spend the coins that the kicked transactions were planning to spend if they'd like, but they cannot then add the transaction back into the set because the coin it ",(0,i.kt)("em",{parentName:"p"},"was")," spending is now already spent."),(0,i.kt)("p",null,"Also, since all transactions are returned as a single list of conditions, your conditions can potentially rely on ",(0,i.kt)("em",{parentName:"p"},"announcements from other transactions"),".\nIf you know that a spend frequently happens that creates an announcement, your puzzles can assert that announcement without being the owner of that transaction!  This is a potential implementation for oracles on the Chia Network.\nAn entity can create a ",(0,i.kt)("strong",{parentName:"p"},"singleton"),", or a coin that there is verifiably only one of, and can make announcements every block that puzzles reliant on the announcements can assert."),(0,i.kt)("p",null,"Furthermore, generators also enable the compression of certain puzzles in a block to reduce their cost.\nThis is entirely dependent on the farmers to make this compression happen, and as a Chialisp developer you don't have much control over it.\nHowever, it does incentivize the use of those specific compress-able puzzles.\nFor example, when farmers create a block with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/standard_transaction"},"standard transaction")," format in them, they can compress those transactions down to a single pubkey and a reference of a block to look in to find the full uncompressed puzzle.\nIf you look at the standard puzzle and decide that it's too complex to use as an inner puzzle for a puzzle you are writing, you may try to make a simpler puzzle to save cost.\nHowever, you may actually end up paying more cost because your puzzle may not be compressed whereas the standard transaction will!"),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"You should now have a pretty decent grasp of the environment that your puzzles will be running in.\nWriting secure Chialisp puzzles requires a somewhat unique way of looking at things that is not shared by many other programming languages or blockchains.\nUnderstanding of the network is inextricably intertwined with the creation of puzzles and while that creates a steep learning curve, it also enables incredible functionality in an incredibly compact format."),(0,i.kt)("p",null,"It is highly recommended that you fully understand this section before you decide to deploy any smart coin so that you can ensure they are secure and functional.\nSimply running the puzzle on your computer is no substitute for having it run on millions of nodes with indeterminable intent."))}d.isMDXComponent=!0}}]);