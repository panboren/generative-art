(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{282:function(e,n,t){"use strict";t.r(n);t(28),t(39),t(26),t(75),t(76),t(50),t(27);var r=t(48),o=t(32),c=(t(29),t(7)),v=t(205);function l(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(n){Object(o.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var m={animate:!0,context:"webgl",attributes:{antialias:!0}},f={name:"page-7",data:function(){return{sketchManager:null}},mounted:function(){var e=this;this.$nextTick(Object(c.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$sketch(d({},m,{canvas:e.$refs.canvas}),e.sketch);case 3:e.sketchManager=n.sent,n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.error(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])}))))},beforeDestroy:function(){this.sketchManager&&this.sketchManager.unload()},methods:{sketch:function(e){var n=this,o=e.context,canvas=e.canvas,c=e.width,l=e.height,d=e.update;d({dimensions:[c,l]});var m=t(207).OrbitControls,f=t(229),h=!1,w=new v.A({context:o}),x=new v.p,y=new v.x,O=new v.l(63,c/l,.001,1e3),U=new m(O,canvas),j=new v.m(c/l,1,54,54),k=[20,140],_=[400,2600],P=[5200,14e3],D=new v.b,audio=new v.n(D),M=new v.a(audio,2048),S=function(data,e){for(var n=Math.round(e[0]/24e3*data.length),t=Math.round(e[1]/24e3*data.length),r=0,o=0,i=n;i<=t;i++)r+=data[i],o+=1;return r/o/255},C=function(e){audio.gain.gain.value=.001,audio.setMediaStreamSource(e),audio.context.resume()},video=document.createElement("video"),E=function(e){video.srcObject=e,video.width=c,video.height=l,video.autoplay=!0,video.play(),L.uniforms.video.value.needsUpdate=!0},L=new v.r({vertexShader:"#define GLSLIFY 1\nvarying vec2 vUv;\nvarying vec3 vPosition;\n\nvoid main () {\n\n    vUv = uv;\n\n    vPosition = position;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n",fragmentShader:"#define GLSLIFY 1\nuniform sampler2D microphone;\nuniform sampler2D video;\n\nuniform float bass;\nuniform float mid;\nuniform float treble;\n\nuniform float time;\n\nuniform vec3 mouse;\nuniform float mouse_radius;\n\nvarying vec3 vPosition;\n\nvarying vec2 vUv;\n\nfloat map(\n    float value,\n    float min1,\n    float max1,\n    float min2,\n    float max2\n) {\n\n    return min2 + ( value - min1 ) * ( max2 - min2 ) / ( max1 - min1 );\n\n}\n\nvoid main() {\n\n    vec3 webcam = texture2D(\n        video,\n        vUv\n    ).rgb;\n\n    vec2 displacedUv = vec2(\n        vUv.x,\n        vUv.y\n    );\n\n    displacedUv.y = mix(\n        vUv.y,\n        bass,\n        1.0\n    );\n    displacedUv.x = mix(\n        vUv.x,\n        mid,\n        treble\n    );\n\n    float dist = length( vPosition - mouse );\n    float prox = 1. - map(\n        dist,\n        0.,\n        mouse_radius,\n        0.,\n        1.\n    );\n\n    prox = clamp(\n        prox,\n        0.,\n        1.\n    );\n\n    // Microphone\n    vec3 backgroundColor = vec3( displacedUv.y, displacedUv.x, prox );\n\n    float f = texture2D( microphone, vec2( displacedUv.x, 0.0 ) ).r;\n    float g = texture2D( microphone, vec2( displacedUv.x, 0.0 ) ).g;\n    float b = texture2D( microphone, vec2( displacedUv.x, 0.0 ) ).b;\n\n    vec3 color = vec3( f, g, b );\n\n    float i = sin( step( vUv.y, f ) * step( f - 0.0125, vUv.y ) );\n\n    // Webcam\n    webcam.r = webcam.r + ( 1. - bass );\n    webcam.g = webcam.g + ( 1. - treble );\n    webcam.b = webcam.b + ( 1. - mid );\n\n    // Color mixer\n    vec4 mixed = vec4( mix( webcam, mix( backgroundColor, color, i ), bass ), 1.0 );\n\n    gl_FragColor = mixed;\n\n}\n",extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},side:v.g,uniforms:{time:{type:"f",value:0},mouse_radius:{type:"f",value:.3},bass:{type:"f",value:0},mid:{type:"f",value:0},treble:{type:"f",value:0},video:{type:"t",value:new v.z(video)},microphone:{type:"t",value:new v.e(M.data,1024,1,v.i)},mouse:{type:"v3",value:y},resolution:{type:"v2",value:new v.w(c,l)},uvRate1:{value:new v.w(1,1)}}}),F=new v.k(j,L),R=new v.q,$={mouse_radius:.3},G=new f.GUI;return canvas.addEventListener("click",(function e(){canvas.removeEventListener("click",e,!1),n.$refs.title.remove(),navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(C),navigator.mediaDevices.getUserMedia({video:{width:c,height:l,facingMode:"user"},audio:!1}).then(E)}),!1),canvas.addEventListener("mousemove",(function(e){var n;y.x=e.clientX/window.innerWidth*2-1,y.y=-e.clientY/window.innerHeight*2+1,x.setFromCamera(y,O);var t=x.intersectObjects(R.children),o=Object(r.a)(t,1)[0],c=null!==(n=null==o?void 0:o.point)&&void 0!==n?n:null;h=!!c}),!1),O.position.set(0,0,1),R.add(F),G.add($,"mouse_radius",0,1,.1),G.close(),{resize:function(e){var n=e.pixelRatio,t=e.viewportWidth,r=e.viewportHeight;d({dimensions:[t,r]}),w.setPixelRatio(n),w.setSize(t,r),L.uniforms.resolution.value.x=t,L.uniforms.resolution.value.y=r,O.aspect=t/r,O.updateProjectionMatrix()},render:function(e){var time=e.time,data=M.getFrequencyData(),n=S(data,k),t=S(data,_),r=S(data,P);L.uniforms.bass.value=n,L.uniforms.mid.value=t,L.uniforms.treble.value=r,L.uniforms.microphone.value.needsUpdate=!0,L.uniforms.time.value=time,L.uniforms.mouse_radius.value=$.mouse_radius,h&&(L.uniforms.mouse.value=y),U.update(),w.render(R,O)},unload:function(){audio.context.suspend(),G.destroy(),w.dispose()}}}}},h=t(31),component=Object(h.a)(f,(function(){var e=this.$createElement,n=this._self._c||e;return n("main",{staticClass:"container canvas-container"},[n("h6",{ref:"title",staticClass:"absolute text--center text--red no-pointer-event"},[this._v(" Click on the canvas"),n("br"),n("small",[this._v("(allow access to camera and microphone)")])]),n("canvas",{ref:"canvas"})])}),[],!1,null,null,null);n.default=component.exports}}]);