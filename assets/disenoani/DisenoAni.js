(function (img, cjs, ss, an) {

var lib={};var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Interpolación1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD4131").s().p("Az+cQQgmgagPgrQgQgtAOgsQBWkRDfm0QDBl5EPnCQEPnAE6nQQFdoDFmnQQASgXAZgOQAagOAdgDIANgBQA1AAAoAkQA1AwA6AoQBhBDBmAjQAeAKAWAXQAXAVALAeQALAdgDAfQgDAggQAbQkcHml5ItQk7HOk9GhQk8GikYE+QlCFwjdCyQgnAggxgBQgrAAgkgYgACNrPQk3HKkNG+QkNG9jAF3QjZGqhSEGQDVitE5lkQEVk8E6meQE5mdE5nLQF4osEYnfQh3gqhyhOQhCgug6g0QlqHVlUH3g");
	this.shape.setTransform(-11.3,17.2,0.208,0.208);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373A41").s().p("Ai6DRQAohOA3hdQA4hbBBhgQBGhpBMhiQAMAMAOAJQAYAQAYAJQg6BkhOBzQhCBfhABWQhCBXg5BBQhCBLgsAjQARg2AuhZg");
	this.shape_1.setTransform(-11.3,17.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DD4131").s().p("AkdQtQgHgCgHgDQiHgvh8hXQg0gjg0gsQghgOgVgbIgEgFQglgygog/QgYgmgrhMQg5hggagoQgNgVgFgXQg3jfBkjbQBjjcDmilQCFhfCdhHQBdgqCrg+QC3hBBJgpQB2hABJhnQAjgwA1gcQA1gcA8AAQAQAAAOADQBDAIA2ApQA1AqAZA/QCHFVAKFlQAKFlh0FtQguCRijB6Qh8Bei1BLQiVA9ihAnQigAohoAAQgrAAghgIgAneMwQBtBLB1AqQAPADAcABQBUgBCMghQCZglCPg6QF0iaA+jDQDaqwj9p/QgLgcgXgRQgXgSgdgEIgNAAQgagBgXAMQgXAMgPAWQhaB9iNBQQhXAwjFBGQimA8hVAnQiQBAh7BZQjDCLhUC0QhVC1AsC1QAZAlBSCOQBCBvAwBAIACADIAEgFQA6A0BCAug");
	this.shape_2.setTransform(18.8,-33,0.208,0.208);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DD4131").s().p("Aj8OlQh1gqhthMQhCgtg7g1IgEAGIgCgDQgwhAhBhvQhTiOgZgmQgsi1BVi0QBVi0DCiMQB7hYCQhBQBWgnCmg7QDFhGBWgxQCOhPBah+QARgYAbgMQAagLAdADQAdAEAXASQAXARALAcQD9J/jZKvQgjBviQBmQh6BXi3BFQieA8iaAeQhkAUg5AAQgbAAgRgEg");
	this.shape_3.setTransform(18.8,-33,0.208,0.208);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.2,-55.4,78.6,110.8);


// stage content:
(lib.DisenoAni = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.instance = new lib.Interpolación1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(124.2,69.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-9.5},5).to({regY:0.1,rotation:14.3,y:69.5},9).to({regY:0,rotation:0,y:69.4},5).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD4131").s().p("EgZIAuoQpVj4mmoqQmnoqitr4QgZhtgTh7QhqqzDGqmQDHqnHTohQHWokKEksQKEktK+AAQBSAAAdACQLnA3KDGaQIBFIGrIbQEwGBDmHEQBzDiA2CVQAxBxBIDjQBcEjAABtQAADThJDAQhGC6iBCPQiBCPinBPQitBRi9AAQhpAAhpgaIgDAAQgZAFi1hBQkdhmhugjQpOi7jsBbQjZBThAAsQh5BVgZCYQgKBCADBTQABAyALBoQAKBnACAzQADBXgKBGQgnEMiRECQi8FRkuC5QkuC5lpAAQkkAAkoh7gEghnAHpQhmA4g/BkQgwBNgPBYQgPBYAUBZQAUBYA0BJQAzBJBNAxQBvBGCCAAQB2AABmg4QBmg5A/hjQAwhNAPhYQAPhZgUhYQgUhZg0hJQg0hJhNgxQhuhFiDAAQh2AAhlA4gEggLgS0QhmA4g/BkQgwBNgPBYQgPBYAUBZQAUBYA0BKQAzBJBNAwQBvBGCCAAQB2AABmg4QBmg5A/hjQBkifgqi3Qgqi4iehjQhvhGiDAAQh2AAhlA4gAPh8TQhmA4g/BkQgxBNgPBYQgPBYAUBZQAUBZA0BJQA0BJBNAwQBvBGCCAAQB2AABmg4QBmg4A/hkQAwhNAPhYQAPhYgUhZQgUhZg0hJQg0hJhNgwQhuhGiDAAQh1AAhmA4gEgK7gicQhmA4g+BkQgxBNgPBYQgPBZAUBYQAUBZA0BJQA0BJBNAwQBuBGCDAAQB1AABmg4QBmg4A/hkQBjiegpi4Qgpi3ifhkQhvhGiCAAQh2AAhmA4g");
	this.shape.setTransform(80.8,73.9,0.21,0.21);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(97.9,81.7,152.1,130.5);
// library properties:
lib.properties = {
	id: '4DFD9534BAD90A448E2AB84FCC8BF319',
	width: 173,
	height: 146,
	fps: 29,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4DFD9534BAD90A448E2AB84FCC8BF319'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var images, createjs, ss, AdobeAn;