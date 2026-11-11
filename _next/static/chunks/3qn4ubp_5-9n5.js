(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,16938,e=>{var t=e.i(43476),r=e.i(71645),i=e.i(98903),s=e.i(38408),a=e.i(90072),o=e.i(8560);let n={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var l=a;class h{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}let d=new l.Sc(-1,1,1,-1,0,1);class u extends l.ld{constructor(){super(),this.setAttribute("position",new l.ki([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new l.ki([0,2,0,0,2,0],2))}}let c=new u;class p{constructor(e){this._mesh=new l.kE(c,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,d)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class f extends h{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof a.Zg?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=a.SP.clone(e.uniforms),this.material=new a.Zg({name:void 0!==e.name?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new p(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this._fsQuad.render(e)}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class m extends h{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){let i,s,a=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0),this.inverse?(i=0,s=1):(i=1,s=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),o.buffers.stencil.setFunc(a.ALWAYS,i,0xffffffff),o.buffers.stencil.setClear(s),o.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(a.EQUAL,1,0xffffffff),o.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),o.buffers.stencil.setLocked(!0)}}class g extends h{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class x{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),void 0===t){let r=e.getSize(new a.wq);this._width=r.width,this._height=r.height,(t=new a.qL(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:a.HN})).texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new f(n),this.copyPass.material.blending=a.A1,this.timer=new a.US}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);-1!==t&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),void 0===e&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),r=!1;for(let t=0,i=this.passes.length;t<i;t++){let i=this.passes[t];if(!1!==i.enabled){if(i.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),i.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),i.needsSwap){if(r){let t=this.renderer.getContext(),r=this.renderer.state.buffers.stencil;r.setFunc(t.NOTEQUAL,1,0xffffffff),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),r.setFunc(t.EQUAL,1,0xffffffff)}this.swapBuffers()}void 0!==m&&(i instanceof m?r=!0:i instanceof g&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(void 0===e){let t=this.renderer.getSize(new a.wq);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let r=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(r,i),this.renderTarget2.setSize(r,i);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(r,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class w extends h{constructor(e,t,r=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new a.Es}render(e,t,r){let i,s,a=e.autoClear;e.autoClear=!1,null!==this.overrideMaterial&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),null!==this.clearColor&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),null!==this.clearAlpha&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),!0==this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),!0===this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),null!==this.clearColor&&e.setClearColor(this._oldClearColor),null!==this.clearAlpha&&e.setClearAlpha(i),null!==this.overrideMaterial&&(this.scene.overrideMaterial=s),e.autoClear=a}}let _={name:"AfterimageShader",uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float damp;

		uniform sampler2D tOld;
		uniform sampler2D tNew;

		varying vec2 vUv;

		vec4 when_gt( vec4 x, float y ) {

			return max( sign( x - y ), 0.0 );

		}

		void main() {

			vec4 texelOld = texture2D( tOld, vUv );
			vec4 texelNew = texture2D( tNew, vUv );

			texelOld *= damp * when_gt( texelOld, 0.1 );

			gl_FragColor = max(texelNew, texelOld);

		}`};class v extends h{constructor(e=.96){super(),this.uniforms=a.SP.clone(_.uniforms),this.damp=e,this.compFsMaterial=new a.Zg({uniforms:this.uniforms,vertexShader:_.vertexShader,fragmentShader:_.fragmentShader}),this.copyFsMaterial=new a.Zg({uniforms:a.SP.clone(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,blending:a.A1,depthTest:!1,depthWrite:!1}),this._textureComp=new a.qL(window.innerWidth,window.innerHeight,{magFilter:a.r8,type:a.HN,depthBuffer:!1}),this._textureOld=new a.qL(window.innerWidth,window.innerHeight,{magFilter:a.r8,type:a.HN,depthBuffer:!1}),this._compFsQuad=new p(this.compFsMaterial),this._copyFsQuad=new p(this.copyFsMaterial)}get damp(){return this.uniforms.damp.value}set damp(e){this.uniforms.damp.value=e}render(e,t,r){this.uniforms.tOld.value=this._textureOld.texture,this.uniforms.tNew.value=r.texture,e.setRenderTarget(this._textureComp),this._compFsQuad.render(e),this._copyFsQuad.material.uniforms.tDiffuse.value=this._textureComp.texture,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear()),this._copyFsQuad.render(e);let i=this._textureOld;this._textureOld=this._textureComp,this._textureComp=i}setSize(e,t){this._textureComp.setSize(e,t),this._textureOld.setSize(e,t)}dispose(){this._textureComp.dispose(),this._textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this._compFsQuad.dispose(),this._copyFsQuad.dispose()}}let M={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class y extends h{constructor(){super(),this.isOutputPass=!0,this.uniforms=a.SP.clone(M.uniforms),this.material=new a.or({name:M.name,uniforms:this.uniforms,vertexShader:M.vertexShader,fragmentShader:M.fragmentShader}),this._fsQuad=new p(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},a.v0.getTransfer(this._outputColorSpace)===a.W7&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===a.N9?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===a.Gr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===a.d4?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===a.c2?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===a.Li?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===a.x8?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===a.lG&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),!0===this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this._fsQuad.render(e)}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var C=a;class b extends C.P6{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new C.kG;e.deleteAttribute("uv");let t=new C.aV({side:C.tw}),r=new C.aV,i=new C.SN(0xffffff,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new C.kE(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new C.YJ(e,r,6),o=new C.t;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let n=new C.kE(e,S(50));n.position.set(-16.116,14.37,8.208),n.scale.set(.1,2.428,2.739),this.add(n);let l=new C.kE(e,S(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new C.kE(e,S(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new C.kE(e,S(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new C.kE(e,S(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let c=new C.kE(e,S(100));c.position.set(0,20,0),c.scale.set(1,.1,1),this.add(c)}dispose(){let e=new Set;for(let t of(this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))}),e))t.dispose()}}function S(e){return new C.ht({color:0,emissive:0xffffff,emissiveIntensity:e})}var E=e.i(59291),T=e.i(76686),P=e.i(82367),R=e.i(50825),A=e.i(76909);function F(){let e=(0,s.f)(e=>e.gl),t=(0,s.f)(e=>e.size),n=(0,r.useRef)(null),l=(0,R.w)(),h=(0,r.useRef)({target:{x:0,y:0},look:{x:0,y:0},move:0,last:null}),d=(0,r.useRef)(0);return(0,r.useEffect)(()=>{let t=(0,A.j)(),r=new a.P6;r.background=(0,A.X)(getComputedStyle(document.documentElement).getPropertyValue("--bg").trim());let i=new o.c(e),s=new b,h=i.fromScene(s,.04);r.environment=h.texture;let d=E.c.notFound.robot.light;r.environmentIntensity=d.environment;let u=(0,A.X)(t.light);r.add(new a.VF(u,(0,A.X)(t.ground),d.hemisphere));let c=new a.ya(u,d.key);c.position.set(-4,5,6),r.add(c);let p=new a.ya(u,d.rim);p.position.set(5,2,-4),r.add(p);let f=(0,A.O)(t);r.add(f.group);let m=new a.zm(E.c.notFound.robot.fov,1,.1,100),g=new x(e),_=new w(r,m);g.addPass(_);let M=new v(l?0:E.c.notFound.robot.trail.damp[0]);M.enabled=!l,g.addPass(M);let C=new y;return g.addPass(C),n.current={scene:r,camera:m,composer:g,trail:M,robot:f},R.m.frames=l?2:1/0,T.f&&(T.f.robot=n.current),()=>{n.current=null,g.dispose(),_.dispose(),M.dispose(),C.dispose(),f.dispose(),h.dispose(),i.dispose(),s.dispose(),r.clear(),T.f&&delete T.f.robot}},[e,l]),(0,r.useEffect)(()=>{let r=n.current;if(!r)return;let i=(0,P.J)()?E.c.notFound.robot.desktop:E.c.notFound.robot.phone;r.composer.setPixelRatio(e.getPixelRatio()),r.composer.setSize(t.width,t.height),r.camera.aspect=t.width/t.height,r.camera.position.set(0,i.cameraY,i.cameraZ),r.camera.updateProjectionMatrix();let s=t.width/t.height,o=i.cameraZ*Math.tan(a.rB.degToRad(E.c.notFound.robot.fov/2))*s;r.robot.group.position.set((i.screenX-.5)*2*o,i.y,0),r.robot.group.scale.setScalar(i.scale*(i.refAspect?Math.min(1,s/i.refAspect):1)),l&&(R.m.frames=Math.max(R.m.frames,2))},[e,t,l]),(0,r.useEffect)(()=>{if(l)return;let e=h.current,t=t=>{if("mouse"===t.pointerType){if(e.target.x=t.clientX/innerWidth*2-1,e.target.y=-(t.clientY/innerHeight*2-1),e.last){let r=Math.hypot(t.clientX-e.last.x,t.clientY-e.last.y);e.move+=r,r>E.c.notFound.robot.glitch.fastPointer&&n.current?.robot.kick()}e.last={x:t.clientX,y:t.clientY}}};return addEventListener("pointermove",t),()=>removeEventListener("pointermove",t)},[l]),(0,i.f)((e,t)=>{let r=n.current;if(!r)return;let i=E.c.notFound.robot,s=Math.min(t,.05),a=h.current;if(l)r.robot.update(0,0,a.look,!0);else{d.current+=s,a.look.x+=(a.target.x-a.look.x)*i.lookLerp,a.look.y+=(a.target.y-a.look.y)*i.lookLerp,r.robot.update(d.current,s,a.look);let e=Math.min(1,a.move/i.trail.speedPx);a.move*=i.trail.decay,r.trail.uniforms.damp.value=i.trail.damp[0]+e*(i.trail.damp[1]-i.trail.damp[0])}r.composer.render(s);let{gl:o,scene:u,camera:c}=e,p=o.autoClear;o.autoClear=!1,o.render(u,c),o.autoClear=p,1/0!==R.m.frames&&(R.m.frames=Math.max(0,R.m.frames-1))},1),null}e.s(["default",0,function(){return(0,r.useSyncExternalStore)(R.p,R.H,R.Q)?(0,t.jsx)(F,{}):null}],16938)},76909,e=>{var t=e.i(90072),r=t;let i=new r.cE;function s(e,t,r,s,a,o){let n=2*Math.PI*a/4,l=Math.max(o-2*a,0),h=Math.PI/4;i.copy(t),i[s]=0,i.normalize();let d=.5*n/(n+l),u=1-i.angleTo(e)/h;return 1===Math.sign(i[r])?u*d:l/(n+l)+d+d*(1-u)}class a extends r.kG{constructor(e=1,t=1,i=1,a=2,o=.1){let n=2*a+1;if(o=Math.min(e/2,t/2,i/2,o),super(1,1,1,n,n,n),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:a,radius:o},1===n)return;let l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;let h=new r.cE,d=new r.cE,u=new r.cE(e,t,i).divideScalar(2).subScalar(o),c=this.attributes.position.array,p=this.attributes.normal.array,f=this.attributes.uv.array,m=c.length/6,g=new r.cE,x=.5/n;for(let r=0,a=0;r<c.length;r+=3,a+=2)switch(h.fromArray(c,r),d.copy(h),d.x-=Math.sign(d.x)*x,d.y-=Math.sign(d.y)*x,d.z-=Math.sign(d.z)*x,d.normalize(),c[r+0]=u.x*Math.sign(h.x)+d.x*o,c[r+1]=u.y*Math.sign(h.y)+d.y*o,c[r+2]=u.z*Math.sign(h.z)+d.z*o,p[r+0]=d.x,p[r+1]=d.y,p[r+2]=d.z,Math.floor(r/m)){case 0:g.set(1,0,0),f[a+0]=s(g,d,"z","y",o,i),f[a+1]=1-s(g,d,"y","z",o,t);break;case 1:g.set(-1,0,0),f[a+0]=1-s(g,d,"z","y",o,i),f[a+1]=1-s(g,d,"y","z",o,t);break;case 2:g.set(0,1,0),f[a+0]=1-s(g,d,"x","z",o,e),f[a+1]=s(g,d,"z","x",o,i);break;case 3:g.set(0,-1,0),f[a+0]=1-s(g,d,"x","z",o,e),f[a+1]=1-s(g,d,"z","x",o,i);break;case 4:g.set(0,0,1),f[a+0]=1-s(g,d,"x","y",o,e),f[a+1]=1-s(g,d,"y","x",o,t);break;case 5:g.set(0,0,-1),f[a+0]=s(g,d,"x","y",o,e),f[a+1]=1-s(g,d,"y","x",o,t)}}static fromJSON(e){return new a(e.width,e.height,e.depth,e.segments,e.radius)}}var o=e.i(59291);function n(e){let r=document.createElement("canvas");r.width=r.height=1;let i=r.getContext("2d",{willReadFrequently:!0});i.fillStyle=e,i.fillRect(0,0,1,1);let[s,a,o]=i.getImageData(0,0,1,1).data;return new t.Es().setRGB(s/255,a/255,o/255,t.nj)}e.s(["O",0,function(e){let r=o.c.notFound.robot,i=[],s=e=>(i.push(e),e),l=s(new t.Ox({color:n(e.shell),roughness:.22,metalness:0,clearcoat:1,clearcoatRoughness:.06,side:t.Vs})),h=s(new t.aV({color:n(e.frame),roughness:.78,metalness:.15})),d=s(new t.Ox({color:n(e.helmet),roughness:.12,metalness:.1,clearcoat:1,clearcoatRoughness:.04})),u=s(new t.aV({color:n(e.joint),roughness:.35,metalness:.4})),c=(e,t,r,i)=>s(new a(e,t,r,5,Math.min(i,Math.min(e,t,r)/2-.001))),p=(e,r)=>s(new t.aQ(e,r,6,20)),f=e=>s(new t.Gu(e,24,16)),m=(e,r,i,a=1.15*Math.PI)=>s(new t.o1(e,r,i,28,1,!0,-a/2,a)),g=(e,r)=>{let i=s(new t.o1(e,e,r,20));return i.rotateZ(Math.PI/2),i},x=(e,r,i,s=0,a=0,o=0)=>{let n=new t.kE(e,r);return n.position.set(s,a,o),i.add(n),n},w=new t.C9,_=new t.C9;w.add(_);let v=document.createElement("canvas");v.width=v.height=128;let M=v.getContext("2d"),y=M.createRadialGradient(64,64,0,64,64,64);y.addColorStop(0,"rgba(255,255,255,1)"),y.addColorStop(1,"rgba(255,255,255,0)"),M.fillStyle=y,M.fillRect(0,0,128,128);let C=s(new t.Nk(v));x(s(new t.CQ(r.shadow.width,r.shadow.depth)),s(new t.p$({map:C,color:n(e.frame),transparent:!0,opacity:r.shadow.opacity,depthWrite:!1})),w,0,r.shadow.y,.05).rotation.x=-Math.PI/2,x(c(1.3,1.5,.78,.12),h,_,0,.55),x(c(1.6,.62,.46,.07),l,_,0,.98,.18),x(c(1.28,.36,.42,.07),l,_,0,.56,.2);for(let e=0;e<3;e++)x(c(.98-.06*e,.15,.64,.05),h,_,0,.14-.19*e,.04);x(c(1,.4,.7,.1),h,_,0,-.42),x(c(1.14,.42,.76,.07),l,_,0,-.58,.02),x(s(new t.o1(.17,.22,.34,24)),u,_,0,1.42);let b=new t.C9;b.position.y=2.02,_.add(b);let S=new t.cE(1,1.16,1.06);x(f(.5),d,b).scale.copy(S);let E=r.face,T=document.createElement("canvas");T.width=E.width,T.height=E.height;let P=T.getContext("2d",{willReadFrequently:!0}),R=s(new t.Nk(T));R.colorSpace=t.nj,R.magFilter=t.r8;let A=s(new t.p$({map:R,toneMapped:!1}));x(s(new t.Gu(.506,32,16,Math.PI/2-r.screen.width/2,r.screen.width,Math.PI/2-r.screen.height/2-r.screen.raise,r.screen.height)),A,b).scale.copy(S);let F=e=>{let r=new t.C9;r.position.set(.95*e,1.1,0),_.add(r),x(f(.17),u,r),x(f(.21),l,r,.05*e,.05).scale.set(1,.62,1),x(p(.115,.66),h,r,0,-.5),x(m(.14,.125,.5),l,r,0,-.48).rotation.y=.5*e;let i=new t.C9;i.position.y=-.95,r.add(i),x(g(.1,.24),u,i),x(p(.095,.62),h,i,0,-.42),x(m(.135,.11,.42),l,i,0,-.36).rotation.y=.5*e;let s=new t.C9;s.position.y=-.84,i.add(s),x(f(.075),u,s),x(c(.12,.26,.26,.04),h,s,0,-.16);for(let r=0;r<4;r++){let i=new t.C9;i.position.set(0,-.29,-.09+.06*r),i.rotation.set(.06*(r-1.5),0,-(.2*e)),s.add(i),x(p(.024,.09),h,i,0,-.06);let a=new t.C9;a.position.y=-.13,a.rotation.z=-(.5*e),i.add(a),x(p(.022,.07),h,a,0,-.05)}let a=new t.C9;return a.position.set(-.04*e,-.11,.12),a.rotation.set(-.5,0,-(.3*e)),s.add(a),x(p(.026,.11),h,a,0,-.07),{root:r,mid:i,end:s}},N=F(-1),k=F(1);for(let e of[-1,1]){let r=new t.C9;r.position.set(.33*e,-.72,0),_.add(r),x(f(.16),u,r),x(p(.15,.72),h,r,0,-.52),x(m(.2,.155,.62),l,r,0,-.48).rotation.y=.25*e,x(g(.12,.3),u,r,0,-1.05),x(p(.12,.72),h,r,0,-1.55),x(m(.16,.125,.6),l,r,0,-1.48).rotation.y=.15*e,x(f(.09),u,r,0,-2),x(c(.32,.16,.56,.05),h,r,0,-2.13,.08)}let O=e.accent,I=0,z=1.5,D=0,L=.8,G=(t,r)=>{let{width:i,height:s,pixel:a}=E;P.fillStyle=e.screen,P.fillRect(0,0,i,s);let o=I>0?Math.abs(Math.cos(I*Math.PI)):1,n=Math.round(t.x*E.eyeShift.x)*a,l=Math.round(-t.y*E.eyeShift.y)*a,h=(t,r)=>{let i=Math.max(1,Math.round(4*o));P.fillStyle=e.face;for(let e=0;e<i;e++)for(let s=0;s<3;s++)P.fillRect(t+s*a,r+(e-i/2)*a,a-2,a-2)};h(i/2-4.5*a+n,.4*s+l),h(i/2+1.5*a+n,.4*s+l),P.fillStyle=O;for(let e=0;e<7;e++){let t=.78*s+(r?a/2*(e%2?-1:1):0);P.fillRect(i/2-3.5*a+e*a,t,a-2,a-2)}P.fillStyle=e.scanline;for(let e=0;e<s;e+=4)P.fillRect(0,e,i,1);if(D>0){let t=E.glitch;for(let e=0;e<t.slices;e++){let e=Math.random()*s|0,r=t.sliceHeight[0]+Math.random()*(t.sliceHeight[1]-t.sliceHeight[0])|0;P.putImageData(P.getImageData(0,e,i,r),(Math.random()-.5)*t.sliceShift|0,e)}P.globalCompositeOperation="lighter",P.globalAlpha=t.tint,P.fillStyle=O,P.fillRect((Math.random()-.5)*t.tintShift|0,0,i,s),P.globalAlpha=1,P.globalCompositeOperation="source-over";for(let r=0;r<t.noise;r++)P.fillStyle=.5>Math.random()?e.face:O,P.fillRect(Math.random()*i,Math.random()*s,a,a/2)}R.needsUpdate=!0};return{group:w,update:(e,t,i,s=!1)=>{if(b.rotation.y=i.x*r.headTurn.y,b.rotation.x=-i.y*r.headTurn.x,s){I=0,D=0,_.rotation.set(0,r.turn,0),N.root.rotation.z=-r.shrug.armRest,k.root.rotation.z=r.shrug.armRest,G(i,!1);return}_.rotation.y=r.turn+Math.sin(e*r.sway.speed)*r.sway.angle+i.x*r.bodyTurn,_.rotation.z=Math.sin(e*r.breathe.speed)*r.breathe.angle;let a=e%r.shrug.every/r.shrug.every,o=a<r.shrug.share?Math.sin(a/r.shrug.share*Math.PI):0;for(let[e,t]of[[N,-1],[k,1]]){let i=r.shrug;e.root.rotation.z=t*(i.armRest+o*i.armOut),e.root.position.y=1.1+o*i.shoulderUp,e.mid.rotation.z=-t*o*i.elbow,e.mid.rotation.x=-o*i.forearmForward,e.end.rotation.y=t*o*i.palmUp}b.position.y=2.02-o*r.shrug.headDrop,b.rotation.z=o*r.shrug.headTilt,(z-=t)<0&&(I=1,z=r.blink.min+Math.random()*r.blink.range),I>0&&(I=Math.max(0,I-t*r.blink.speed)),(L-=t)<0&&(D=r.glitch.length[0]+Math.random()*(r.glitch.length[1]-r.glitch.length[0]),L=r.glitch.min+Math.random()*r.glitch.range),D>0?(D-=t,b.position.x=(Math.random()-.5)*r.jitter):b.position.x=0,G(i,o>.2)},kick:()=>{D=Math.max(D,r.glitch.length[0])},dispose:()=>i.forEach(e=>e.dispose())}},"X",0,n,"j",0,function(){let e=getComputedStyle(document.documentElement),t=t=>e.getPropertyValue(t).trim();return{shell:t("--robot-shell"),frame:t("--robot-frame"),helmet:t("--robot-helmet"),joint:t("--robot-joint"),screen:t("--robot-screen"),face:t("--robot-face"),scanline:t("--robot-scanline"),light:t("--robot-light"),ground:t("--robot-ground"),accent:t("--accent")}}],76909)}])})();