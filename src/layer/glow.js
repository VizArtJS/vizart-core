//Code taken from http://stackoverflow.com/questions/9630008/how-can-i-create-a-glow-around-a-rectangle-with-svg
//Filter for the outside glow

let GaussianBlur = function(_svg, _canvasId) {
    var defs = _svg.append("defs");
    var defId = _canvasId.substring(1, _canvasId.length) + '-glow';

    var filter = defs.append("filter")
        .attr("id", defId);

    filter.append("feGaussianBlur")
        .attr("class", "blur")
        .attr("stdDeviation","4.5")
        .attr("result","coloredBlur");

    var feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode")
        .attr("in","coloredBlur");
    feMerge.append("feMergeNode")
        .attr("in","SourceGraphic");

    return defId;
};

let RadialFuzzy = function(_def , _data) {

    var prefix = 'motionBlurFilter-';

    //Create a filter per circle so we can adjust the fuzzyness per circle that is flying out
    var updatedDef = _def.selectAll(".flyCircleFilters")
        .data(_data);

    updatedDef.exit().remove();

    updatedDef.attr("id",function(d,i) { return prefix + i; });

    updatedDef
        .enter().append("filter")
        .attr("class", "flyCircleFilters")
        .attr("id",function(d,i) { return prefix + i; })
        .attr("width", "300%")	//increase the width of the filter region to remove blur "boundary"
        .attr("x", "-100%") //make sure the center of the "width" lies in the middle
        .attr("height", "200%")
        .attr("y", "-50%")
        .attr("color-interpolation-filters","sRGB") //to fix safari: http://stackoverflow.com/questions/24295043/svg-gaussian-blur-in-safari-unexpectedly-lightens-image
        .append("feGaussianBlur")
        .attr("class", "blurValues")
        .attr("in","SourceGraphic")
        .attr("stdDeviation","0,0");

    return prefix;
};


let MotionBlur = function(_svg, _canvasId) {
    var defs = _svg.append("defs");
    var defId = _canvasId.substring(1, _canvasId.length) + '-motion-blur';

    //Create a filter per circle so we can adjust the fuzzyness per circle that is flying out
    defs.append("filter")
        .attr("id", defId)
        .attr("width", "300%")	//increase the width of the filter region to remove blur "boundary"
        .attr("x", "-100%") //make sure the center of the "width" lies in the middle
        .attr("color-interpolation-filters","sRGB") //to fix safari: http://stackoverflow.com/questions/24295043/svg-gaussian-blur-in-safari-unexpectedly-lightens-image
        .append("feGaussianBlur")
        .attr("class", "blurValues")
        .attr("in","SourceGraphic")
        .attr("stdDeviation","0 0"); //start without a blur

    return defId;
};

let GooeyBlur = function(_svg, _canvasId) {
    var defId = _canvasId.substring(1, _canvasId.length) + '-motion-blur';
    //SVG filter for the gooey effect
    //Code based on http://tympanus.net/codrops/2015/03/10/creative-gooey-effects/
    var filter = _svg.append("defs")
        .append("filter")
        .attr("id", defId); //use a unique id to reference again later on

    //Append multiple "pieces" to the filter
    filter.append("feGaussianBlur")
        .attr("in","SourceGraphic")
        .attr("stdDeviation","10")
        //to fix safari:
        //http://stackoverflow.com/questions/24295043/svg-gaussian-blur-in-safari-unexpectedly-lightens-image
        .attr("color-interpolation-filters","sRGB")
        .attr("result","blur");

    filter.append("feColorMatrix")
        .attr("class","blurValues") //used later to transition the gooey effect
        .attr("in","blur")
        .attr("mode","matrix")
        .attr("values","1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9")
        .attr("result","gooey");

    //If you want the end shapes to be exactly the same size as without the filter
    //add the feBlend below. However this will result in a less beautiful gooey effect
    filter.append("feBlend")
        .attr("in","SourceGraphic")
        .attr("in2","gooey");
    //Instead of the feBlend, you can do feComposite. This will also place a sharp image on top
    //But it will result in smaller circles
    filter.append("feComposite") //feBlend
    	.attr("in","SourceGraphic")
    	.attr("in2","gooey")
    	.attr("operator","atop");

    return defId;
}

export {
    GaussianBlur,
    RadialFuzzy,
    MotionBlur,
    GooeyBlur
}