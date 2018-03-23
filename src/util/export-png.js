const svgString2Image = (svgString, width, height, name) => {
  const serializer = new XMLSerializer();
  const imgsrc =
    'data:image/svg+xml;base64,' +
    btoa(serializer.serializeToString(svgString)); // Convert SVG string to data URL

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const devicePixelRatio = window.devicePixelRatio || 1;

  canvas.width = width * devicePixelRatio;
  canvas.height = height * devicePixelRatio;
  canvas.style.width = canvas.width / devicePixelRatio + 'px';
  canvas.style.height = canvas.height / devicePixelRatio + 'px';

  const image = new Image();
  image.onload = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    // canvas.toBlob( function(blob) {
    //     let filesize = Math.round( blob.length/1024 ) + ' KB';
    //     if ( callback ) callback( blob, filesize );
    // });

    let canvasdata = canvas.toDataURL('image/png');

    // download the data
    let a = document.createElement('a');
    a.download = name;
    a.href = canvasdata;
    a.click();
  };

  image.src = imgsrc;
};

const exportPNG = (chart, name) => {
  svgString2Image(
    chart._container.node(),
    chart.options().chart.innerWidth,
    chart.options().chart.innerHeight,
    name || chart.options().title.text || 'chart.png'
  );
};

export default exportPNG;
