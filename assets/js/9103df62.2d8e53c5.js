"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[15500],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},12544:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=t(83117),o=t(80102),a=(t(67294),t(3905)),i=["components"],l={title:"\u7b2c\u4e09\u65b9\u5de5\u5177"},c=void 0,s={unversionedId:"external-libraries",id:"external-libraries",isDocsHomePage:!1,title:"\u7b2c\u4e09\u65b9\u5de5\u5177",description:"\u6982\u8ff0",source:"@site/docs/external-libraries.md",sourceDirName:".",slug:"/external-libraries",permalink:"/taro/docs/next/external-libraries",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/external-libraries.md",tags:[],version:"current",frontMatter:{title:"\u7b2c\u4e09\u65b9\u5de5\u5177"},sidebar:"docs",previous:{title:"Reconciler",permalink:"/taro/docs/next/platform-plugin-reconciler"},next:{title:"\u793e\u533a\u4f18\u8d28\u7269\u6599",permalink:"/taro/docs/next/treasures"}},p=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",children:[],level:2},{value:"\u57fa\u7840\u914d\u7f6e",id:"\u57fa\u7840\u914d\u7f6e",children:[{value:"Webpack",id:"webpack",children:[],level:3},{value:"Babel",id:"babel",children:[],level:3}],level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"StoryBook",id:"storybook",children:[],level:3}],level:2}],u={toc:p};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"\u5982\u4f55\u5229\u7528\u597d\u7b2c\u4e09\u65b9\u5de5\u5177\u63d0\u5347\u4f7f\u7528 Taro \u7684\u5f00\u53d1\u4f53\u9a8c\u662f\u5f88\u591a\u793e\u533a\u5185\u5f00\u53d1\u8005\u5171\u6709\u7684\u95ee\u9898\uff0c\u6bd4\u65b9\u8bf4\u5982\u4f55\u5229\u7528 Jest \u6d4b\u8bd5\u6216\u8005\u4f7f\u7528 StoryBook \u7f16\u5199\u7ec4\u4ef6\u5e93\u793a\u4f8b\u7b49\u7b49\uff0c\u90fd\u9700\u8981\u501f\u52a9 Taro-H5 \u76f8\u5173\u7684\u80fd\u529b\u3002"),(0,a.kt)("h2",{id:"\u57fa\u7840\u914d\u7f6e"},"\u57fa\u7840\u914d\u7f6e"),(0,a.kt)("p",null,"\u6b63\u5e38\u4f7f\u7528 Taro \u65f6\uff0ccli \u4f1a\u5e2e\u52a9\u6211\u4eec\u5b8c\u6210\u7f16\u8bd1\u914d\u7f6e\u5e76\u5bf9 ast \u505a\u51fa\u4e00\u5b9a\u7684\u4fee\u6539\uff0c\u5982\u679c\u4f7f\u7528\u7b2c\u4e09\u65b9\u5de5\u5177\uff0c\u90a3\u4e48\u6211\u4eec\u9700\u8981\u5bf9 webpack \u548c babel \u76f8\u5173\u7684\u914d\u7f6e\u505a\u51fa\u4e00\u5b9a\u7684\u4fee\u6539\u3002"),(0,a.kt)("h3",{id:"webpack"},"Webpack"),(0,a.kt)("p",null,"Taro-H5 \u4e2d\u4f7f\u7528\u5230\u7684 API \u5b9e\u9645\u4e0a\u5e76\u4e0d\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"@tarojs/taro")," \u7684\u5165\u53e3\u6587\u4ef6\u4e4b\u4e0b\uff0c\u5982\u679c\u60f3\u8981\u4f7f\u7528\u9700\u8981\u5728 Webpack \u4e2d\u914d\u7f6e\u89e3\u6790\u5165\u53e3\u548c\u522b\u540d\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="webpack.config.js"',title:'"webpack.config.js"'},"module.exports = {\n  // ...\n  resolve: {\n    mainFields: ['main:h5', 'browser', 'module', 'jsnext:main', 'main'],\n    alias: {\n      ...config.resolve.alias,\n      '@tarojs/taro': '@tarojs/taro-h5'\n    },\n  },\n  // ...\n}\n")),(0,a.kt)("h3",{id:"babel"},"Babel"),(0,a.kt)("p",null,"Taro-H5 \u5b9e\u9645\u5e76\u6ca1\u6709\u5728 Taro \u5bf9\u8c61\u4e0a\u6302\u8f7d\u6240\u6709\u7684 API\uff0c\u8fd9\u662f\u4e3a\u4e86\u907f\u514d\u4e0d\u5fc5\u8981\u7684 API \u5360\u7528\u5305\u4f53\u7684\u5927\u5c0f\uff0c\u90a3\u4e48\u4e3a\u4e86\u517c\u5bb9\u5c0f\u7a0b\u5e8f\u7684 API \u4f7f\u7528\u65b9\u6cd5\u5c31\u9700\u8981\u5bf9\u5f00\u53d1\u8005\u7684\u4ee3\u7801\u5728\u7f16\u8bd1\u524d\u505a\u51fa\u4e00\u4e9b\u8c03\u6574\uff0c\u5728\u4f7f\u7528\u7b2c\u4e09\u65b9\u5de5\u5177\u65f6\uff0c\u4e5f\u9700\u8981\u901a\u8fc7\u5f15\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"babel-plugin-transform-taroapi")," \u4f9d\u8d56\u5b8c\u6210\u8fd9\u4e00\u64cd\u4f5c\u3002"),(0,a.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("h3",{id:"storybook"},"StoryBook"),(0,a.kt)("p",null,"\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"StoryBook: 6.4.13")," \u4e3a\u4f8b\uff0c\u5728 Taro \u4e2d\u4f7f\u7528\u9700\u8981\u5728 StoryBook \u5b89\u88c5\u5b8c\u6210\u4e4b\u540e\uff0c\u66f4\u65b0\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".storybook/main.js"',title:'".storybook/main.js"'},"// 6.4.13\nconst path = require('path')\n\nmodule.exports = {\n  // ...\n  babel: options => ({\n    ...options,\n    plugins: [\n      [require('babel-plugin-transform-taroapi').default, {\n        apis: require(require.resolve('@tarojs/taro-h5/dist/taroApis', { basedir: path.resolve(__dirname, '..') })),\n        packageName: '@tarojs/taro'\n      }],\n    ]\n  }),\n  webpackFinal: config => ({\n    ...config,\n    resolve: {\n      ...config.resolve,\n      mainFields: ['main:h5', 'browser', 'module', 'jsnext:main', 'main'],\n      alias: {\n        ...config.resolve.alias,\n        '@tarojs/taro': '@tarojs/taro-h5'\n      },\n    },\n  })\n  // ...\n}\n\n``\n")))}d.isMDXComponent=!0}}]);