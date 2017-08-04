//Code taken from http://stackoverflow.com/questions/9630008/how-can-i-create-a-glow-around-a-rectangle-with-svg
//Filter for the outside glow

const GaussianBlur = (_svg, _canvasId)=> {
    let defs = _svg.append("defs");
    let defId = _canvasId.substring(1, _canvasId.length) + '-glow';

    let filter = defs.append("filter")
        .attr("id", defId);

    filter.append("feGaussianBlur")
        .attr("class", "blur")
        .attr("stdDeviation","4.5")
        .attr("result","coloredBlur");

    let feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode")
        .attr("in","coloredBlur");
    feMerge.append("feMergeNode")
        .attr("in","SourceGraphic");

    return defId;
};

export default GaussianBlur;