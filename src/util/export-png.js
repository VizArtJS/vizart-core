// Below are the functions that handle actual exporting:
// getSVGString ( svgNode ) and svgString2Image( svgString, width, height, format, callback )
const appendCSS =(cssText, element)=> {
    let styleElement = document.createElement("style");
    styleElement.setAttribute("type","text/css");
    styleElement.innerHTML = cssText;
    let refNode = element.hasChildNodes() ? element.children[0] : null;
    element.insertBefore( styleElement, refNode );
}


const getCSSStyles =( parentElement )=> {
    let selectorTextArr = [];

    // Add Parent element Id and Classes to the list
    selectorTextArr.push( '#'+parentElement.id );
    for (let c = 0; c < parentElement.classList.length; c++)
        if ( !selectorTextArr.includes('.'+parentElement.classList[c]))
            selectorTextArr.push( '.'+parentElement.classList[c] );

    // Add Children element Ids and Classes to the list
    let nodes = parentElement.getElementsByTagName("*");
    for (let i = 0; i < nodes.length; i++) {
        let id = nodes[i].id;
        if ( !selectorTextArr.includes('#'+id) )
            selectorTextArr.push( '#'+id );

        let classes = nodes[i].classList;
        for (let c = 0; c < classes.length; c++)
            if (selectorTextArr.includes('.'+classes[c]) )
                selectorTextArr.push( '.'+classes[c] );
    }

    // Extract CSS Rules
    let extractedCSSText = "";
    for (let i = 0; i < document.styleSheets.length; i++) {
        let s = document.styleSheets[i];

        try {
            if(!s.cssRules) continue;
        } catch( e ) {
            if(e.name !== 'SecurityError') throw e; // for Firefox
            continue;
        }

        let cssRules = s.cssRules;
        for (let r = 0; r < cssRules.length; r++) {
            if ( selectorTextArr.includes(cssRules[r].selectorText) )
                extractedCSSText += cssRules[r].cssText;
        }
    }


    return extractedCSSText;

}

const getSVGString = (svgNode)=> {
    svgNode.setAttribute('xlink', 'http://www.w3.org/1999/xlink');
    let cssStyleText = getCSSStyles( svgNode );
    appendCSS( cssStyleText, svgNode );

    let serializer = new XMLSerializer();
    let svgString = serializer.serializeToString(svgNode);
    svgString = svgString.replace(/(\w+)?:?xlink=/g, 'xmlns:xlink='); // Fix root xlink without namespace
    svgString = svgString.replace(/NS\d+:href/g, 'xlink:href'); // Safari NS namespace fix

    return svgString;
}


const svgString2Image =( svgString, width, height, name )=> {
    let imgsrc = 'data:image/svg+xml;base64,'+ btoa( unescape( encodeURIComponent( svgString ) ) ); // Convert SVG string to data URL

    let canvas = document.createElement("canvas");
    let context = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;

    let image = new Image();
    image.onload = function() {
        context.clearRect ( 0, 0, width, height );
        context.drawImage(image, 0, 0, width, height);

        // canvas.toBlob( function(blob) {
        //     let filesize = Math.round( blob.length/1024 ) + ' KB';
        //     if ( callback ) callback( blob, filesize );
        // });

        let canvasdata = canvas.toDataURL("image/png");

        // download the data
        let a = document.createElement("a");
        a.download = name;
        a.href = canvasdata;
        a.click();
    }

    image.src = imgsrc;
}

const exportPNG = (chart, name)=> {
    let svgString = getSVGString(chart._container.node());

    svgString2Image( svgString,
        2 * chart.options().chart.innerWidth,
        2 * chart.options().chart.innerHeight,
        name || chart.options().title.text || 'chart.png');
}

export default exportPNG;
