(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{280:function(t,e,n){"use strict";n.r(e);n(28),n(201),n(38),n(26),n(75),n(76),n(50),n(27);var r=n(210),c=n(211),o=n(31),l=(n(39),n(7)),h=n(212),f=n.n(h),v=n(215);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={scaleToView:!0,dimensions:[2048,2048]},y={name:"page-10",data:function(){return{drawManager:null}},mounted:function(){var t=this;this.$nextTick(Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$draw(w({},O,{canvas:t.$refs.canvas}),t.sketch);case 3:t.drawManager=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))))},beforeDestroy:function(){this.drawManager&&this.drawManager.unload()},methods:{sketch:function(t){var e=t.context,n=t.width,o=t.height,l=f.a.shuffle(f.a.pick(v)),h=[0,.5,1,1.5],d=l.shift(),w=f.a.rangeFloor.apply(f.a,[4,10]);e.clearRect(0,0,n,o),e.fillStyle=d,e.fillRect(0,0,n,o);for(var O=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Math.PI*f.a.pick(h),v=arguments.length>4&&void 0!==arguments[4]?arguments[4]:o+1.5*Math.PI,d=arguments.length>5&&void 0!==arguments[5]?arguments[5]:f.a.pick(l);Object(r.a)(this,t),this.x=e,this.y=n,this.radius=c,this.startAngle=o,this.endAngle=v,this.color=d}return Object(c.a)(t,[{key:"draw",value:function(t,e,n){t.save(),t.strokeStyle=this.color,t.fillStyle=this.color,t.beginPath(),t.moveTo(e,n),t.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle),t.fill(),t.restore()}}]),t}(),y=[],j=0;j<w;j++){var m=300*j,circle=new O(m,m,300);circle.draw(e,600),y.push(circle)}return console.info(y),function(){}}}},j=n(30),component=Object(j.a)(y,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"container canvas-container"},[this._m(0),e("canvas",{ref:"canvas",attrs:{id:"canvas"}})])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h6",{staticClass:"absolute text--center text--red no-pointer-event"},[e("small",[this._v("TODO")])])}],!1,null,null,null);e.default=component.exports}}]);