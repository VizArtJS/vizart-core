const RadialFuzzy = (_def, _data)=> {
    let prefix = 'motionBlurFilter-';

    //Create a filter per circle so we can adjust the fuzzyness per circle that is flying out
    let updatedDef = _def.selectAll(".flyCircleFilters")
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

export default RadialFuzzy;