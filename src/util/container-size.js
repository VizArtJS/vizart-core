/*
 Sanitize and provide default for the container height.
 */
let sanitizeHeight = function(height, container) {
    return container.node() === null
        ? 0
        : (height || parseInt(container.node().getBoundingClientRect().height, 10) || 300);
};


/*
 Sanitize and provide default for the container width.
 */
let sanitizeWidth = function(width, container) {
    return container.node() === null
        ? 0
        : (width || parseInt(container.node().getBoundingClientRect().width, 10) || 400);
};


/*
 Calculate the available height for a chart.
 */
let availableHeight = function(height, container, margin) {
    return Math.max(0, sanitizeHeight(height, container) - margin.top - margin.bottom);
};

/*
 Calculate the available width for a chart.
 */
let availableWidth = function(width, container, margin) {
    return Math.max(0, sanitizeWidth(width, container) - margin.left - margin.right);
};

/*
 Gets the browser window size
 Returns object with height and width properties
 */
let windowSize = function() {
    // Sane defaults
    let size = {width: 640, height: 480};

    // Most recent browsers use
    if (window.innerWidth && window.innerHeight) {
        size.width = window.innerWidth;
        size.height = window.innerHeight;
        return (size);
    }

    // IE can use depending on mode it is in
    if (document.compatMode=='CSS1Compat' &&
        document.documentElement &&
        document.documentElement.offsetWidth ) {

        size.width = document.documentElement.offsetWidth;
        size.height = document.documentElement.offsetHeight;
        return (size);
    }

    // Earlier IE uses Doc.body
    if (document.body && document.body.offsetWidth) {
        size.width = document.body.offsetWidth;
        size.height = document.body.offsetHeight;
        return (size);
    }

    return (size);
};

export {
    sanitizeWidth,
    sanitizeHeight,
    availableWidth,
    availableHeight,
    windowSize
}
