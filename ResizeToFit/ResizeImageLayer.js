if (app.documents.length > 0) {
  var doc = app.activeDocument;
  if (doc.activeLayer) {
    var activeLayer = doc.activeLayer;
    var canvasWidth = doc.width.value;
    var canvasHeight = doc.height.value;
    var layerWidth = activeLayer.bounds[2] - activeLayer.bounds[0];
    var layerHeight = activeLayer.bounds[3] - activeLayer.bounds[1];

    if (layerWidth > canvasWidth) {
      var scaleRatio = canvasWidth / layerWidth;
      activeLayer.resize(scaleRatio * 100, scaleRatio * 100);
    }

    if (layerHeight > canvasHeight) {
      var scaleRatio = canvasHeight / layerHeight;
      activeLayer.resize(scaleRatio * 100, scaleRatio * 100);
    }
  } else {
    alert("No active layer found.");
  }
} else {
  alert("No open document found.");
}
