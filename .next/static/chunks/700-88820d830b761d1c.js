"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[700],{8700:function(e,t,r){r.d(t,{Z:function(){return B}});var o=r(3950),n=r(2988),s=r(2265),i=r(4839),l=r(424),a=r(587),u=r(6990),c=r(2617),p=r(3143),f=r(7267);let m=["ownerState"],y=["variants"],d=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function h(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}let v=(0,p.Z)(),Z=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function k({defaultTheme:e,theme:t,themeId:r}){return 0===Object.keys(t).length?e:t[r]||t}function g(e,t){let{ownerState:r}=t,s=(0,o.Z)(t,m),i="function"==typeof e?e((0,n.Z)({ownerState:r},s)):e;if(Array.isArray(i))return i.flatMap(e=>g(e,(0,n.Z)({ownerState:r},s)));if(i&&"object"==typeof i&&Array.isArray(i.variants)){let{variants:e=[]}=i,t=(0,o.Z)(i,y);return e.forEach(e=>{let o=!0;"function"==typeof e.props?o=e.props((0,n.Z)({ownerState:r},s,r)):Object.keys(e.props).forEach(t=>{(null==r?void 0:r[t])!==e.props[t]&&s[t]!==e.props[t]&&(o=!1)}),o&&(Array.isArray(t)||(t=[t]),t.push("function"==typeof e.style?e.style((0,n.Z)({ownerState:r},s,r)):e.style))}),t}return i}let b=function(e={}){let{themeId:t,defaultTheme:r=v,rootShouldForwardProp:s=h,slotShouldForwardProp:i=h}=e,a=e=>(0,f.Z)((0,n.Z)({},e,{theme:k((0,n.Z)({},e,{defaultTheme:r,themeId:t}))}));return a.__mui_systemSx=!0,(e,u={})=>{var p;let f;(0,c.internal_processStyles)(e,e=>e.filter(e=>!(null!=e&&e.__mui_systemSx)));let{name:m,slot:y,skipVariantsResolver:v,skipSx:b,overridesResolver:w=(p=Z(y))?(e,t)=>t[p]:null}=u,A=(0,o.Z)(u,d),S=void 0!==v?v:y&&"Root"!==y&&"root"!==y||!1,_=b||!1,x=h;"Root"===y||"root"===y?x=s:y?x=i:"string"==typeof e&&e.charCodeAt(0)>96&&(x=void 0);let R=(0,c.default)(e,(0,n.Z)({shouldForwardProp:x,label:f},A)),j=e=>"function"==typeof e&&e.__emotion_real!==e||(0,l.P)(e)?o=>g(e,(0,n.Z)({},o,{theme:k({theme:o.theme,defaultTheme:r,themeId:t})})):e,P=(o,...s)=>{let i=j(o),l=s?s.map(j):[];m&&w&&l.push(e=>{let o=k((0,n.Z)({},e,{defaultTheme:r,themeId:t}));if(!o.components||!o.components[m]||!o.components[m].styleOverrides)return null;let s=o.components[m].styleOverrides,i={};return Object.entries(s).forEach(([t,r])=>{i[t]=g(r,(0,n.Z)({},e,{theme:o}))}),w(e,i)}),m&&!S&&l.push(e=>{var o;let s=k((0,n.Z)({},e,{defaultTheme:r,themeId:t}));return g({variants:null==s||null==(o=s.components)||null==(o=o[m])?void 0:o.variants},(0,n.Z)({},e,{theme:s}))}),_||l.push(a);let u=l.length-s.length;if(Array.isArray(o)&&u>0){let e=Array(u).fill("");(i=[...o,...e]).raw=[...o.raw,...e]}let c=R(i,...l);return e.muiName&&(c.muiName=e.muiName),c};return R.withConfig&&(P.withConfig=R.withConfig),P}}();var w=r(3075),A=r(7007),S=r(261),_=r(6575),x=r(3351),R=r(7437);let j=["component","direction","spacing","divider","children","className","useFlexGap"],P=(0,p.Z)(),C=b("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function N(e){return function(e){let{props:t,name:r,defaultTheme:o,themeId:n}=e,s=(0,A.Z)(o);return n&&(s=s[n]||s),function(e){let{theme:t,name:r,props:o}=e;return t&&t.components&&t.components[r]&&t.components[r].defaultProps?(0,w.Z)(t.components[r].defaultProps,o):o}({theme:s,name:r,props:t})}({props:e,name:"MuiStack",defaultTheme:P})}let E=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],O=({ownerState:e,theme:t})=>{let r=(0,n.Z)({display:"flex",flexDirection:"column"},(0,_.k9)({theme:t},(0,_.P$)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e})));if(e.spacing){let o=(0,x.hB)(t),n=Object.keys(t.breakpoints.values).reduce((t,r)=>(("object"==typeof e.spacing&&null!=e.spacing[r]||"object"==typeof e.direction&&null!=e.direction[r])&&(t[r]=!0),t),{}),s=(0,_.P$)({values:e.direction,base:n}),i=(0,_.P$)({values:e.spacing,base:n});"object"==typeof s&&Object.keys(s).forEach((e,t,r)=>{if(!s[e]){let o=t>0?s[r[t-1]]:"column";s[e]=o}}),r=(0,l.Z)(r,(0,_.k9)({theme:t},i,(t,r)=>e.useFlexGap?{gap:(0,x.NA)(o,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${E(r?s[r]:e.direction)}`]:(0,x.NA)(o,t)}}))}return(0,_.dt)(t.breakpoints,r)};var M=r(8024),$=r(9570),B=function(e={}){let{createStyledComponent:t=C,useThemeProps:r=N,componentName:l="MuiStack"}=e,c=()=>(0,u.Z)({root:["root"]},e=>(0,a.ZP)(l,e),{}),p=t(O);return s.forwardRef(function(e,t){let l=r(e),a=(0,S.Z)(l),{component:u="div",direction:f="column",spacing:m=0,divider:y,children:d,className:h,useFlexGap:v=!1}=a,Z=(0,o.Z)(a,j),k=c();return(0,R.jsx)(p,(0,n.Z)({as:u,ownerState:{direction:f,spacing:m,useFlexGap:v},ref:t,className:(0,i.Z)(k.root,h)},Z,{children:y?function(e,t){let r=s.Children.toArray(e).filter(Boolean);return r.reduce((e,o,n)=>(e.push(o),n<r.length-1&&e.push(s.cloneElement(t,{key:`separator-${n}`})),e),[])}(d,y):d}))})}({createStyledComponent:(0,M.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,$.i)({props:e,name:"MuiStack"})})}}]);