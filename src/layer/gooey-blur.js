const GooeyBlur = (_svg, _canvasId)=> {
    let defId = _canvasId.substring(1, _canvasId.length) + '-motion-blur';
    //SVG filter for the gooey effect
    //Code based on http://tympanus.net/codrops/2015/03/10/creative-gooey-effects/
    let filter = _svg.append("defs")
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

export default GooeyBlur;