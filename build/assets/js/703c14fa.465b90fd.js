"use strict";(self.webpackChunkplu_ts_docs=self.webpackChunkplu_ts_docs||[]).push([[839],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(n),d=a,y=l["".concat(c,".").concat(d)]||l[d]||m[d]||o;return n?r.createElement(y,s(s({ref:t},u),{},{components:n})):r.createElement(y,s({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},s="Generic Structs",i={unversionedId:"onchain/Values/Structs/generic_structs",id:"onchain/Values/Structs/generic_structs",title:"Generic Structs",description:"Sometimes it might be necessary to define custom types that are able to work with any other type; often acting as containers.",source:"@site/docs/onchain/Values/Structs/generic_structs.mdx",sourceDirName:"onchain/Values/Structs",slug:"/onchain/Values/Structs/generic_structs",permalink:"/docs/onchain/Values/Structs/generic_structs",draft:!1,editUrl:"https://github.com/HarmonicLabs/plu-ts/tree/main/packages/create-docusaurus/templates/shared/docs/onchain/Values/Structs/generic_structs.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Struct definition",permalink:"/docs/onchain/Values/Structs/definition"},next:{title:"Methods of Terms",permalink:"/docs/onchain/Values/Methods of Terms"}},c={},p=[],u={toc:p},l="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"generic-structs"},"Generic Structs"),(0,a.kt)("p",null,"Sometimes it might be necessary to define custom types that are able to work with any other type; often acting as containers."),(0,a.kt)("p",null,"A great example are lists; which can work with elements of any type; and for this reason we have ",(0,a.kt)("inlineCode",{parentName:"p"},"list( int )"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"list( bs )"),", etc..."),(0,a.kt)("p",null,"But lists are built into the language; how do we define our own containers?"),(0,a.kt)("p",null,"In the same way we define ",(0,a.kt)("a",{parentName:"p",href:"../../Types#plu-ts-generics"},"generic types"),"!"),(0,a.kt)("p",null,"As we know ",(0,a.kt)("a",{parentName:"p",href:"./definition"},"structs can have multiple constructors")," and the same is true for generic ones; so let's try to define a type that can hold either one or two instances of the same type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const POneOrTwo = ( ty ) => pstruct({\n    One: { value: ty },\n    Two: { fst: ty, snd: ty }\n});\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pgenericStruct")," returns a funciton (and not a class like ",(0,a.kt)("inlineCode",{parentName:"p"},"pstruct")," does) that takes as input as many ",(0,a.kt)("inlineCode",{parentName:"p"},"TermType"),"s as in the definition (the arguments of thefunction passed to `pgenericStruct')"),(0,a.kt)("p",null,"and only then returns a class; which represents the actual struct type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const OneOrTwoInts = POneOrTwo( int ),\n\nconst OneOrTwoBS = POneOrTwo( bs );\n\nconst OneOrTwoOneOrTwoInts = POneOrTwo( POneOrTwo( int ).type );\n")),(0,a.kt)("admonition",{title:"make Typescript happy",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"each time we need to deal with something that is generic Typescript needs a little help understanding\nwhat is the type of the argument."),(0,a.kt)("p",{parentName:"admonition"},"We can make Typescript happy by making the funciton that returns a struct generic in typescript;"),(0,a.kt)("p",{parentName:"admonition"},"So the correct version of the snipped above would be:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const POneOrTwo = <TyArg extends TermType>( ty: TyArg ) => \n    pstruct({\n        One: { value: ty },\n        Two: { fst: ty, snd: ty }\n    });\n"))))}m.isMDXComponent=!0}}]);