function ILTitle() {
    return app.activeDocument.name
}

function ILLayer(){
    return app.activeDocument.activeLayer.name
}

function ILLayerMax(){
    return app.activeDocument.layers.length
}

function ILLayerMin(){
    return app.activeDocument.activeLayer.zOrderPosition
}