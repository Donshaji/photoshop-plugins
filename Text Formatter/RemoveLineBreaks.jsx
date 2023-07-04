// RemoveLineBreaks.jsx

// Get the active document
var doc = app.activeDocument;

// Check if a text layer is selected
if (doc.activeLayer.kind !== LayerKind.TEXT) {
  alert('Please select a text layer.');
}

// Get the selected text layer
var textLayer = doc.activeLayer.textItem;

// Get the text content
var textContent = textLayer.contents;

// Remove line breaks
var newTextContent = textContent.replace(/[\r\n]+/g, '');

// Update the text layer with the modified content
textLayer.contents = newTextContent;

// Display a success message
alert('Line breaks removed from the text layer.');
