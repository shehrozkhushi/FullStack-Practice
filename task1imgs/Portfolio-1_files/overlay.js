google.maps.__gjsload__('overlay', function(_){var Cya=function(){},OB=function(a){a.cB=a.cB||new Cya;return a.cB},Dya=function(a){this.Eg=new _.Jm(()=>{const b=a.cB;if(a.getPanes()){if(a.getProjection()){if(!b.Hg&&a.onAdd)a.onAdd();b.Hg=!0;a.draw()}}else{if(b.Hg)if(a.onRemove)a.onRemove();else a.remove();b.Hg=!1}},0)},Fya=function(a,b){const c=OB(a);let d=c.Fg;d||(d=c.Fg=new Dya(a));_.Sb(c.Eg||[],_.tk);var e=c.Ig=c.Ig||new _.yra;const f=b.__gm;e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("center",f,"projectionCenterQ");e.bindTo("projection",
b);e.bindTo("projectionTopLeft",f);e=c.Kg=c.Kg||new Eya(e);e.bindTo("zoom",f);e.bindTo("offset",f);e.bindTo("projection",b);e.bindTo("projectionTopLeft",f);a.bindTo("projection",e,"outProjection");a.bindTo("panes",f);e=()=>_.Km(d.Eg);c.Eg=[_.rk(a,"panes_changed",e),_.rk(f,"zoom_changed",e),_.rk(f,"offset_changed",e),_.rk(b,"projection_changed",e),_.rk(f,"projectioncenterq_changed",e)];_.Km(d.Eg);b instanceof _.Uk?(_.pl(b,"Ox"),_.N(b,148440)):b instanceof _.Fl&&(_.pl(b,"Oxs"),_.N(b,181451))},Gya=function(a){const b=
OB(a);var c=b.Ig;c&&c.unbindAll();(c=b.Kg)&&c.unbindAll();a.unbindAll();a.set("panes",null);a.set("projection",null);b.Eg&&b.Eg.forEach(d=>{_.tk(d)});b.Eg=null;b.Fg&&(_.Lm(b.Fg.Eg),b.Fg=null)},Lya=function(a){if(a){var b=a.getMap();if(Hya(a)!==b&&b&&b instanceof _.Uk){const c=b.__gm;c.overlayLayer?a.__gmop=new Iya(b,a,c.overlayLayer):c.Fg.then(({ah:d})=>{const e=new Jya(b,d);d.Ji(e);c.overlayLayer=e;Kya(a);Lya(a)})}}},Kya=function(a){if(a){var b=a.__gmop;b&&(a.__gmop=null,b.Eg.unbindAll(),b.Eg.set("panes",
null),b.Eg.set("projection",null),b.Hg.Xn(b),b.Fg&&(b.Fg=!1,b.Eg.onRemove?b.Eg.onRemove():b.Eg.remove()))}},Hya=function(a){return(a=a.__gmop)?a.map:null},Mya=function(a,b){a.Eg.get("projection")!=b&&(a.Eg.bindTo("panes",a.map.__gm),a.Eg.set("projection",b))},Eya=class extends _.Gk{constructor(a){super();this.projection=a}changed(a){a!=="outProjection"&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.sj(this.get("zoom"))),a===!this.get("outProjection")&&this.set("outProjection",
a?this.projection:null))}};_.Fa(Dya,_.Gk);var Iya=class{constructor(a,b,c){this.map=a;this.Eg=b;this.Hg=c;this.Fg=!1;_.pl(this.map,"Ox");_.N(this.map,148440);c.to(this)}draw(){this.Fg||(this.Fg=!0,this.Eg.onAdd&&this.Eg.onAdd());this.Eg.draw&&this.Eg.draw()}},Jya=class{constructor(a,b){this.Ig=a;this.Hg=b;this.Eg=null;this.Fg=[]}dispose(){}Xh(a,b,c,d,e,f,g,h){const l=this.Eg=this.Eg||new _.ky(this.Ig,this.Hg,()=>{});l.Xh(a,b,c,d,e,f,g,h);for(const n of this.Fg)Mya(n,l),n.draw()}to(a){this.Fg.push(a);this.Eg&&Mya(a,this.Eg);this.Hg.refresh()}Xn(a){_.ac(this.Fg,
a)}};_.fj("overlay",{KC:function(a){if(a){Gya(a);delete OB(a).Jg;Kya(a);var b=a.getMap();b&&(b instanceof _.Uk?Lya(a):a&&(b=a.getMap(),(OB(a).Jg||null)!==b&&(b&&Fya(a,b),OB(a).Jg=b)))}},preventMapHitsFrom:a=>{_.ku(a,{Sl:({event:b})=>{_.es(b.Eg)},rk:b=>_.Wt(b),Oq:b=>_.Xt(b),vl:b=>_.Xt(b),Ik:b=>_.Yt(b)}).As(!0)},preventMapHitsAndGesturesFrom:a=>{a.addEventListener("click",_.pk);a.addEventListener("contextmenu",_.pk);a.addEventListener("dblclick",_.pk);a.addEventListener("mousedown",_.pk);a.addEventListener("mousemove",
_.pk);a.addEventListener("MSPointerDown",_.pk);a.addEventListener("pointerdown",_.pk);a.addEventListener("touchstart",_.pk);a.addEventListener("wheel",_.pk)}});});
