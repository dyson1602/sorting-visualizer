(this["webpackJsonpsort-visualizer"]=this["webpackJsonpsort-visualizer"]||[]).push([[0],{39:function(e,t,r){},41:function(e,t,r){},42:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r(1),o=r.n(n),i=r(19),s=r.n(i),c=r(16),l=r(6),h=r(15),d=r(4),p=(r(39),r(10)),u=r(11),m=r(13),g=r(12),f=r(3);function b(e,t){if(0!==e.length){var r=e.shift();("color"===r[0]?t.changeBarColor:"height"===r[0]?t.changeBarHeight:"bucket"===r[0]?t.buildBuckets:"clear"===r[0]?t.clearBuckets:null)(r[1],r[2]),setTimeout((function(){return b(e,t)}),t.speed)}else t.dispatchSetFinishedSorting()}var y="#545f66ff",j="#829399ff",v="pink",O="#b1cc74ff";function x(e){for(var t=[],r=Object(f.a)(e.randomArray),a=0;a<r.length;a++){for(var n=!0,o=0;o<r.length-a;o++){if(t.push(["color",O,o]),t.push(["color",O,o+1]),r[o]>r[o+1]){var i=r[o],s=r[o+1];r[o]=s,r[o+1]=i,t.push(["height",s,o]),t.push(["height",i,o+1]),n=!1}t.push(["color",j,o]),t.push(["color",j,o+1])}if(t.push(["color",y,r.length-1-a]),t.push(["color",y,r.length-a]),!0===n){for(var c=0;c<a;c++)t.push(["color",y,c]);break}}b(t,e)}function w(e){var t=Object(f.a)(e.randomArray),r=[];!function(e,t){var r=Math.floor(e.length/2);for(;r>=0;)k(e,r,e.length,t),r--}(t,r);for(var a=t.length-1;a>0;)S(t,a,r),a--;r.push(["color",y,0]),b(r,e)}function S(e,t,r){var a=e[t],n=e[0];e[t]=e[0],e[0]=a,r.push(["color",O,0]),r.push(["color",O,t]),r.push(["height",a,0]),r.push(["height",n,t]),r.push(["color",y,t]),k(e,0,t,r)}function k(e,t,r,a){var n,o=2*t+1,i=2*t+2<r?2*t+2:null;if(!(t>=Math.floor(r/2)))if(e[n=i?e[o]>e[i]?o:i:o]>e[t]){var s=e[n],c=e[t];e[n]=e[t],e[t]=s,a.push(["color",O,n]),a.push(["color",O,t]),a.push(["height",s,t]),a.push(["height",c,n]),a.push(["color",j,n]),a.push(["color",j,t]),k(e,n,r,a)}else a.push(["color",j,t]),a.push(["color",j,o])}function A(e){for(var t=Object(f.a)(e.randomArray),r=[],a=1;a<t.length;a++){var n=t[a],o=a-1,i=0;for(r.push(["color",O,a]),r.push(["color",O,o]);o>=0&&n<t[o];){var s=t[o];t[o]=n,t[o+1]=s,i++,r.push(["height",n,o]),r.push(["height",s,o+1]),r.push(["color",j,o+1]),o-1>=0?r.push(["color",O,o-1]):r.push(["color",j,o]),n>=t[o-1]&&(r.push(["color",j,o]),r.push(["color",j,o-1])),o--}0===i&&(r.push(["color",j,o+1]),r.push(["color",j,o]))}for(var c=0;c<t.length;c++)r.push(["color",y,c]);b(r,e)}function I(e){var t=[],r=Object(f.a)(e.randomArray),a=Object(f.a)(e.randomArray);if(r.length<=1)return r;C(r,0,r.length-1,a,t),function(e,t){for(var r=0;r<e.length;r++)t.push(["color",y,r])}(r,t),b(t,e)}function C(e,t,r,a,n){if(t!==r){var o=Math.floor((t+r)/2);C(a,t,o,e,n),C(a,o+1,r,e,n);var i=!1;return r-t+1===e.length&&(i=!0),function(e,t,r,a,n,o,i){console.log("final merge? ",i);var s=t,c=t,l=r+1;console.log("i-k-j-middle ",c,s,l,r);for(;c<=r&&l<=a;)console.log("first while:",c,s,l,r,i),o.push(["color",O,c]),o.push(["color",O,l]),n[c]<=n[l]?(console.log("in first cond",s),o.push(["height",n[c],s]),o.push(["color",j,c]),o.push(["color",j,l]),i&&o.push(["color",y,c]),e[s++]=n[c++]):(console.log("in else cond",s),o.push(["height",n[l],s]),o.push(["color",j,c]),o.push(["color",j,l]),i&&o.push(["color",y,s]),e[s++]=n[l++]);for(;c<=r;)console.log("second while",c,l,s,r,a),o.push(["color",O,c]),i?o.push(["color",y,c]):o.push(["color",j,c]),o.push(["height",n[c],s]),e[s++]=n[c++];for(;l<=a;)console.log("third while",c,l,s,r,a),o.push(["color",O,l]),i?o.push(["color",y,s]):o.push(["color",j,l]),o.push(["height",n[l],s]),e[s++]=n[l++];return e}(e,t,o,r,a,n,i)}}function T(e){var t=Object(f.a)(e.randomArray),r=[];N(t,0,t.length-1,r),b(r,e)}function N(e,t,r,a){if(t>=r)a.push(["color",y,t]);else{var n=t,o=t+1,i=r;for(a.push(["color",v,n]);i>=o;){if(e[i]<e[n]&&e[o]>e[n]){a.push(["color",O,o]),a.push(["color",O,i]);var s=e[i];a.push(["height",e[o],i]),a.push(["height",s,o]),e[i]=e[o],e[o]=s,a.push(["color",j,o]),a.push(["color",j,i])}e[i]>=e[n]&&i--,e[o]<=e[n]&&o++}if(n!==i){var c=e[i];a.push(["height",e[n],i]),a.push(["height",c,n]),e[i]=e[n],e[n]=c,a.push(["color",j,n]),a.push(["color",j,i])}a.push(["color",y,o]),a.push(["color",y,i]),N(e,t,i-1,a),N(e,i+1,r,a)}}var R=r(29);function M(e){for(var t,r,a=Object(f.a)(e.randomArray),n=[],o=function(e){var t,r=0,a=Object(R.a)(e);try{for(a.s();!(t=a.n()).done;){var n=t.value;r<n.toString().length&&(r=n.toString().length)}}catch(o){a.e(o)}finally{a.f()}return r}(a),i=0;i<o;i++){for(var s,c=Array.from({length:10},(function(){return[]})),l=0;l<a.length;l++){var h=(t=a[l],r=i,Math.floor(Math.abs(t)/Math.pow(10,r))%10);c[h].push(a[l]),n.push(["color","pink",l]),n.push(["bucket",h,a[l]])}var d=0;a=(s=[]).concat.apply(s,Object(f.a)(c));for(var p=0;p<c.length;p++)if(c[p].length)for(var u=c[p].length,m=0;m<u;m++)n.push(["clear",p,0]),n.push(["height",c[p][m],d]),i===o-1?n.push(["color",y,d]):n.push(["color",j,d]),d++}b(n,e)}function _(e){for(var t=[],r=Object(f.a)(e.randomArray),a=0;a<r.length;a++){for(var n=a,o=a+1;o<r.length;o++)t.push(["color",O,o]),t.push(["color",v,n]),r[o]<r[n]?(t.push(["color",j,n]),n=o):t.push(["color",j,o]);if(n!==a){t.push(["color",O,a]),t.push(["height",r[n],a]),t.push(["height",r[a],n]);var i=[r[n],r[a]];r[a]=i[0],r[n]=i[1]}t.push(["color",y,a]),n!==a&&t.push(["color",j,n])}b(t,e)}var E=function(e){for(var t,r,a=[],n=0;n<e;n++)a.push((t=20,r=400,t=Math.ceil(t),r=Math.floor(r),Math.floor(Math.random()*(r-t+1)+t)));return a},H=function(e,t){for(var r=[],a=0;a<e;a++)r.push(t);return r},z="SET_RANDOM_ARRAY",B="SORTED_ARRAY",L="IS_SORTED",q="FINISHED_SORTING",F="CHANGE_BAR_HEIGHT",D="CHANGE_BAR_COLOR",G="SET_COLOR_ARRAY",V="STYLE",U="METHOD",X="SPEED",Y="BUCKETS",J="CLEAR_BUCKETS",Q="ON_INFO",W="OFF_INFO";var K=function(e){Object(m.a)(r,e);var t=Object(g.a)(r);function r(){var e;Object(p.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={arrayLength:50},e.styleSwapHandler=function(t){var r=e.props.style;switch(r){case"bars":return e.props.dispatchStyleSwap("gradient");case"gradient":return e.props.dispatchStyleSwap("bars");default:return e.props.dispatchStyleSwap(r)}},e.arrayLengthHandler=function(t){e.setState({arrayLength:t.target.value},e.newArrayHandler),e.props.dispatchMethod(null)},e.newArrayHandler=function(){e.props.dispatchRandomArray(E(e.state.arrayLength)),e.props.dispatchSetOffInfo(),e.props.dispatchColorArray(H(e.state.arrayLength,j)),e.props.dispatchMethod(null),e.state.arrayLength<30&&e.state.arrayLength>15?e.props.dispatchSpeed(50):e.state.arrayLength>60?e.props.dispatchSpeed(5):e.state.arrayLength<16?e.props.dispatchSpeed(250):e.props.dispatchSpeed(30)},e.sortHandler=function(){switch(e.props.dispatchSetOffInfo(),e.props.dispatchSetIsSorting(),e.props.method){case"bubble":return x(e.props);case"heap":return w(e.props);case"insertion":return A(e.props);case"quick":return T(e.props);case"selection":return _(e.props);case"merge":return I(e.props);case"radix":return M(e.props);default:return T(e.props)}},e.setSortingMethod=function(t){e.props.dispatchMethod(t),e.props.dispatchSetOffInfo()},e.handleOnInfo=function(){e.props.dispatchSetOnInfo()},e}return Object(u.a)(r,[{key:"componentDidMount",value:function(){this.newArrayHandler()}},{key:"render",value:function(){var e=this;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("nav",{class:"nav-extended",style:{backgroundColor:"".concat("#477890ff"),paddingLeft:"15px",paddingRight:"15px"},children:[Object(a.jsxs)("div",{className:"nav-wrapper",children:[Object(a.jsx)("div",{className:"brand-logo right",children:"Sorting Algorithm Visualizer"}),Object(a.jsxs)("ul",{id:"nav-mobile",className:"left hide-on-med-and-down",children:[Object(a.jsx)("li",{children:"Set Array Size: "}),Object(a.jsx)("li",{children:Object(a.jsx)("form",{action:"#",children:Object(a.jsx)("div",{className:"range-field",children:Object(a.jsx)("input",{type:"range",id:"test5",min:"10",max:"100",onChange:this.props.isSorting?null:this.arrayLengthHandler})})})}),Object(a.jsx)("li",{children:Object(a.jsx)("div",{class:"switch",children:Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox"}),Object(a.jsx)("span",{onClick:this.styleSwapHandler,class:"lever"})]})})}),Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/sorting-visualizer",children:Object(a.jsx)("div",{onClick:this.props.isSorting?null:this.newArrayHandler,children:"Generate New Array"})})}),Object(a.jsx)("li",{children:Object(a.jsx)(l.b,{to:"/sorting-visualizer",children:this.props.method?Object(a.jsx)("div",{onClick:this.props.isSorting?null:this.sortHandler,style:this.props.onInfo?{display:"none"}:{display:"block"},children:"Sort!"}):null})})]})]}),Object(a.jsx)("div",{className:"nav-content",children:Object(a.jsxs)("ul",{className:"tabs tabs-transparent",children:[Object(a.jsx)("li",{className:"tab",children:Object(a.jsx)(l.b,{to:"/sorting-visualizer",children:Object(a.jsx)("div",{onClick:this.props.isSorting?null:function(){return e.setSortingMethod("bubble")},className:"bubble"===this.props.method?"active":null,children:"Bubble Sort"})})}),Object(a.jsx)("li",{className:"tab",children:Object(a.jsx)(l.b,{to:"/sorting-visualizer",children:Object(a.jsx)("div",{onClick:this.props.isSorting?null:function(){return e.setSortingMethod("insertion")},className:"insertion"===this.props.method?"active":null,children:"Insertion Sort"})})}),Object(a.jsx)("li",{className:"tab",children:Object(a.jsx)(l.b,{to:"/sorting-visualizer",children:Object(a.jsx)("div",{onClick:this.props.isSorting?null:function(){return e.setSortingMethod("selection")},className:"selection"===this.props.method?"active":null,children:"Selection Sort"})})}),Object(a.jsx)("li",{className:"tab",children:Object(a.jsx)(l.b,{to:"/sorting-visualizer",children:Object(a.jsx)("div",{onClick:this.props.isSorting?null:function(){return e.setSortingMethod("quick")},className:"quick"===this.props.method?"active":null,children:"Quick Sort"})})}),Object(a.jsx)("li",{className:"tab",children:Object(a.jsx)(l.b,{to:"/sorting-visualizer",children:Object(a.jsx)("div",{onClick:this.props.isSorting?null:function(){return e.setSortingMethod("heap")},className:"heap"===this.props.method?"active":null,children:"Heap Sort"})})}),Object(a.jsx)("li",{className:"tab",children:Object(a.jsx)(l.b,{to:"/sorting-visualizer",children:Object(a.jsx)("div",{onClick:this.props.isSorting?null:function(){return e.setSortingMethod("merge")},className:"merge"===this.props.method?"active":null,children:"Merge Sort"})})}),Object(a.jsx)("li",{className:"tab",children:Object(a.jsx)(l.b,{to:"/sorting-visualizer",children:Object(a.jsx)("div",{onClick:this.props.isSorting?null:function(){return e.setSortingMethod("radix")},className:"radix"===this.props.method?"active":null,children:"Radix"})})}),Object(a.jsx)("li",{class:"hide-on-med-and-down tab",children:Object(a.jsx)(l.b,{to:"/sorting-visualizer/info",children:Object(a.jsx)("div",{onClick:this.props.onInfo?null:this.handleOnInfo,children:"Algorithm Info"})})}),Object(a.jsx)("li",{class:"right hide-on-med-and-down tab",children:Object(a.jsx)("a",{href:"https://mkoenke.github.io/pathfinding-visualizer/",children:Object(a.jsx)("div",{children:"Pathfinding Algorithm Visualizer"})})})]})})]})})}}]),r}(o.a.Component);var P=Object(c.b)((function(e){return{isSorting:e.isSorting,randomArray:e.randomArray,sortedArray:e.sortedArray,style:e.style,method:e.method,speed:e.speed,onInfo:e.onInfo}}),(function(e){return{dispatchRandomArray:function(t){return e(function(e){return{type:z,payload:e}}(t))},dispatchSortedArray:function(t){return e(function(e){return{type:B,payload:e}}(t))},dispatchSetIsSorting:function(){return e({type:L,payload:!0})},dispatchSetFinishedSorting:function(){return e({type:q,payload:!1})},changeBarHeight:function(t,r){return e(function(e,t){return{type:F,newHeight:e,index:t}}(t,r))},changeBarColor:function(t,r){return e(function(e,t){return{type:D,newColor:e,index:t}}(t,r))},dispatchStyleSwap:function(t){return e(function(e){return{type:V,payload:e}}(t))},dispatchColorArray:function(t){return e(function(e){return{type:G,payload:e}}(t))},dispatchMethod:function(t){return e(function(e){return{type:U,payload:e}}(t))},dispatchSpeed:function(t){return e({type:X,payload:t})},buildBuckets:function(t,r){return e(function(e,t){return{type:Y,bucket:e,height:t}}(t,r))},clearBuckets:function(t){return e(function(e){return{type:J,bucket:e}}(t))},dispatchSetOnInfo:function(){return e({type:Q,payload:!0})},dispatchSetOffInfo:function(){return e({type:W,payload:!1})}}}))(K),Z=function(e){Object(m.a)(r,e);var t=Object(g.a)(r);function r(){var e;Object(p.a)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).radixBars=function(){var t=Object(f.a)(e.props.bucketsArray),r=[],n=e.props.randomArray.length;switch(e.props.style){case"bars":for(var o=0;o<t.length;o++){for(var i=[],s=0;s<t[o].length;s++)i.push(Object(a.jsx)("div",{style:{display:"inline-block",verticalAlign:"top",margin:"2px",backgroundColor:j,height:"".concat(t[o][s],"px"),width:"".concat(600/n,"px"),borderRadius:"3px"}}));r.push(Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("div",{style:{display:"inline-block",margin:"2px",border:"3px solid ".concat(y),borderRadius:"3px"},children:i})}))}return r;case"gradient":for(var c=0;c<t.length;c++){for(var l=[],h=0;h<t[c].length;h++)l.push(Object(a.jsx)("div",{style:{display:"inline-block",backgroundColor:"rgba(3,9,9,".concat(t[c][h]/400,")"),height:"400px",width:"".concat(600/n,"px"),borderRadius:"3px",margin:"2px"}}));r.push(Object(a.jsx)("div",{className:"col",children:Object(a.jsx)("div",{style:{display:"inline-block",margin:"2px",border:"3px solid ".concat(v),borderRadius:"3px"},children:l})}))}return r}},e.arrayBars=function(t){switch(e.props.style){case"bars":for(var r=[],n=0;n<t.length;n++)r.push(Object(a.jsx)("div",{style:{display:"inline-block",margin:"".concat(200/t.length,"px"),backgroundColor:e.props.colorArray[n],height:"".concat(t[n],"px"),width:"".concat(600/t.length,"px"),borderRadius:"3px"}}));return r;case"gradient":return t.map((function(e){return Object(a.jsx)("div",{style:{display:"inline-block",backgroundColor:"rgba(3,25,38,".concat(e/400,")"),height:"400px",width:"".concat(1e3/t.length,"px"),marginTop:"75px",borderRadius:"3px"}})}));default:return console.log("hello")}},e}return Object(u.a)(r,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:"radix"===this.props.method?Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"bottom"},children:this.arrayBars(this.props.randomArray)}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"bottom"},children:this.radixBars(this.props)})})]})}):Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"bottom"},children:this.arrayBars(this.props.randomArray)})})})}}]),r}(o.a.Component);var $=Object(c.b)((function(e){return{randomArray:e.randomArray,sorted:e.sorted,sortedArray:e.sortedArray,style:e.style,arrayColor:e.arrayColor,colorArray:e.colorArray,method:e.method,bucketsArray:e.bucketsArray}}))(Z),ee=function(e){Object(m.a)(r,e);var t=Object(g.a)(r);function r(){return Object(p.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)($,{})})}}]),r}(o.a.Component),te=function(e){Object(m.a)(r,e);var t=Object(g.a)(r);function r(){return Object(p.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"col s4",children:Object(a.jsxs)("div",{class:"card hoverable medium",children:[Object(a.jsxs)("div",{class:"card-image waves-effect waves-block waves-light",children:[Object(a.jsx)("img",{class:"activator"}),Object(a.jsx)("img",{class:"activator",src:this.props.cardObj.coverImage})]}),Object(a.jsx)("div",{class:"card-content",children:Object(a.jsx)("span",{class:"card-title activator grey-text text-darken-4",children:this.props.cardObj.name})}),Object(a.jsxs)("div",{class:"card-reveal",children:[Object(a.jsxs)("span",{class:"card-title grey-text text-darken-4",children:[this.props.cardObj.name,Object(a.jsx)("i",{class:"material-icons right",children:"close"})]}),Object(a.jsx)("p",{children:this.props.cardObj.description}),Object(a.jsx)("img",{src:this.props.cardObj.chartImage})]})]})})})}}]),r}(o.a.Component),re=r.p+"static/media/bubblesortchart.89bc0893.png",ae=r.p+"static/media/bubblesortgif.1a035f77.gif",ne=r.p+"static/media/heapsortchart.558f36f6.png",oe=r.p+"static/media/heapsortgif.161d8295.gif",ie=r.p+"static/media/insertionsortchart.12bb378e.png",se=r.p+"static/media/insertionsortgif.0644989a.gif",ce=r.p+"static/media/mergesortchart.dfb7b81d.png",le=r.p+"static/media/mergesortgif.274044dc.gif",he=r.p+"static/media/quicksortchart.d24f6a02.png",de=r.p+"static/media/quicksortgif.1f34ac91.gif",pe=r.p+"static/media/radixsortchart.aeef7be6.png",ue=r.p+"static/media/radixsortimg.2cd2e4de.jpeg",me=r.p+"static/media/selectionsortchart.3d3b3633.png",ge=r.p+"static/media/selectionsortgif.2d424ac2.gif",fe=r.p+"static/media/spacetimecomplexity.b60eced8.png",be=function(e){Object(m.a)(r,e);var t=Object(g.a)(r);function r(){var e;Object(p.a)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).cardObjects=function(){return[{id:1,name:"Bubble Sort",coverImage:ae,description:"Bubble Sort is the simplest sorting algorithm that works by creating a loop that compares each item in the array with another item and repeatedly swapping the adjacent elements if they are in wrong order. This process is repeated until the entire array is sorted.",chartImage:re},{id:2,name:"Insertion Sort",coverImage:se,description:"Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part. The algorithm's name comes from the process of picking an element and inserting it in its correct place and then repeating it for all elements. It works by assuming the first element in the array is already sorted. It then selects the next element and compares this to all elements in the array. Every element that is greater than the selected element is shifted, and the selected element is inserted. This process is repeated until the array is sorted.",chartImage:ie},{id:3,name:"Selection Sort",coverImage:ge,description:"The selection sort algorithm sorts an array by repeatedly finding the minimum element from an unsorted portion of an array and putting it at the beginning. It does this by assuming the first element in the array is the smallest one and looping through to compare that value to every other value in the array. If it ever reaches a value smaller than itself, that element is set as the new smallest value and their positions in the array are swapped. The process continues doing comparisons until it reaches the end. The loops starts all over again moving on to the second element in the array as the smallest one. This continues until the entire array is sorted.",chartImage:me},{id:4,name:"Quick Sort",coverImage:de,description:"Quick sort is one of the most efficient ways of sorting elements in computer systems. It is known as a divide and conquer algorithm. The term 'divide and conquer' means we divide one large problem into several smaller problems and solve the smaller problems to ultimately solve the large problem.  In quick sort, we find a pivot point in the array to compare all other elements in the array. A pivot can be selected in different ways, as the first, last, random, or median element. If an element is smaller than the pivot, it is moved before the pivot. If an element is greater than the pivot, it is moved after the pivot. This is done simultaneously from both ends of the array, with a left pointer (first element) and right pointer (last element), incrementing toward each other and swapping values should they be on the wrong side. Once this is complete, the process continues recursively on the sub arrays, created by dividing the array in half, or partitioning, until the entire array is sorted.",chartImage:he},{id:5,name:"Heap Sort",coverImage:oe,description:"Heap sorting is a way of sorting elements by using the 'Heap' data structure. The is actually quite similar to the selection sort technique. In order to understand heap sort, you must first understand what heaps are and how they are defined.\xa0Basically, a heap is a binary tree with some added rules. The added rules are that, first, the binary tree must be complete. This means that you have to fill all the nodes at one level before adding another one. Secondly, there must be a defined parent/child relationship with the element values of the heap. In a min heap, the value of the parent must be smaller than its children. In a max heap, the value of the parent must be greater than its children.\xa0In heap sort, we build a max heap that makes sure the highest value element is at the top. That top element is then swapped with the last element of the heap. The top element is removed and stored on a sorted array. This process is repeated until only one element remains in the heap.\xa0One important point is that heaps are not natively supported in JavaScript, therefore we implement heaps using arrays. Although heap sort is complex, its space complexity is excellent.",chartImage:ne},{id:6,name:"Merge Sort",coverImage:le,description:"Merge sort is also a divide and conquer algorithm. It divides the input array into two halves, calls itself recursively on the two halves, and then merges the two sorted halves.\xa0In merge sort we divide the array into n arrays until each of the arrays contain only one element. The smaller arrays are merged in order to produce a new array. This is repeated until there is only one array remaining, the original array in its sorted state.",chartImage:ce},{id:7,name:"Radix Sort",coverImage:ue,description:"The best time complexity for comparison based sorting algorithms (all of the algorithms we have discussed thus far) is O(nlogn). So how do we do better?  Radix sort is the answer. Radix sort is a non-comparison based sorting algorithm. The radix sort algorithm distributes integers into buckets based on a number's significant digit or value (the radix) to avoid the comparison.\xa0The idea of Radix Sort is to do digit by digit sort starting from least significant digit to most significant digit. In other words, the ones place digits are sorted in into buckets first, then the tens place, then the hundreds place, and so on. Radix sort uses another sorting method called counting sort as a subroutine to complete its sort.",chartImage:pe},{id:8,name:"Time Complexity",coverImage:fe,description:"Time complexity is computational representation that describes the amount of time it takes to run an algorithm to completion. Since an algorithm\u2019s running time may vary among different inputs of the same size, we need to consider worst case time complexity, or the maximum amount of time required for inputs of a given size.  Like space complexity, time complexity is also affected by factors such as the operating system and hardware, that is completely independent of the algorithm itself.  Time complexity is commonly estimated by counting the number of elementary operations performed by the algorithm, supposing that each elementary operation takes a fixed amount of time to perform. Therefore, the amount of time taken and the number of elementary operations performed by the algorithm are assumed to differ by at most a constant factor, and the algorithm that performs a task in the smallest number of operations is considered the most efficient one.  As with space complexity, time complexity is also usually represented with big O notation, considering the worst-case scenario. What you create takes up time, and we need to be prepared for the worst!",chartImage:""},{id:9,name:"Space Complexity",coverImage:fe,description:"Space complexity is used to evaluate the use of memory, or data storage. Algorithms require the use of memory to store program instructions, execute (i.e. function calls) and store data. While these are all contributing factors, the stored variable data is often the primary consideration.  Space complexity is equal to the sum of two components: First, a fixed amount of space that is required to store certain data such as variables, constants, program size, etc. and is not dependent on the size of the problem. Second, a variable amount of space that is required by variables and is totally dependent on the size of the problem (i.e. recursion stack space and dynamic memory allocation).  Space complexity is usually represented with big O notation, which considers the worst-case scenario. What you create takes up space, and we need to be prepared for the worst!",chartImage:""}]},e.arrayOfCards=function(){return e.cardObjects().map((function(e){return Object(a.jsx)(te,{cardObj:e},e.id)}))},e}return Object(u.a)(r,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"row",children:this.arrayOfCards()})}}]),r}(o.a.Component);var ye=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(P,{}),Object(a.jsx)("br",{}),Object(a.jsxs)(d.c,{children:[Object(a.jsx)(d.a,{path:"/sorting-visualizer/info",component:be}),Object(a.jsx)(d.a,{path:"/sorting-visualizer",component:ee})]})]})},je=(r(41),{randomArray:[],sortedArray:[],colorArray:[],bucketsArray:[[],[],[],[],[],[],[],[],[],[]],bucketsColor:[],arrayLength:100,isSorting:!1,style:"bars",arrayColor:j,method:null,speed:50,onInfo:!1});var ve=Object(h.b)({randomArray:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je.randomArray,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return t.payload;case F:var r=Object(f.a)(e);return r[t.index]=t.newHeight,r;default:return e}},sortedArray:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je.sortedArray,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return t.payload;default:return e}},isSorting:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je.isSorting,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:case q:return t.payload;default:return e}},style:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je.style,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return t.payload;default:return e}},colorArray:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je.colorArray,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return t.payload;case D:var r=Object(f.a)(e);return r[t.index]=t.newColor,r;default:return e}},method:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je.method,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return t.payload;default:return e}},speed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je.speed,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return t.payload;default:return e}},bucketsArray:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je.bucketsArray,t=arguments.length>1?arguments[1]:void 0,r=Object(f.a)(e);switch(t.type){case Y:return r[t.bucket].push(t.height),r;case J:r[t.bucket].shift();return r;default:return e}},onInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je.onInfo,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:case W:return t.payload;default:return e}}}),Oe=Object(h.c)(ve,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(Object(a.jsx)(c.a,{store:Oe,children:Object(a.jsx)(l.a,{children:Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(ye,{})})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.71f02294.chunk.js.map