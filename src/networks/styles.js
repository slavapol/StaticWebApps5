var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.3",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "default",
  "style": [
    {
    "selector" : "node",
    "css" : {
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "border-width" : 0.0,
      "width" : 75.0,
      "border-color" : "rgb(204,204,204)",
      "shape" : "roundrectangle",
      "text-valign" : "center",
      "text-halign" : "center",
      "background-opacity" : 1.0,
      "color" : "rgb(0,0,0)",
      "text-opacity" : 1.0,
      "height" : 35.0,
      "border-opacity" : 1.0,
      "background-color" : "rgb(137,208,245)",
      "font-size" : 10,
      "content" : "data(ID)"
    }
  }, {
    "selector" : "node[IS_DOE = 'Y']",
    "css" : {
      "shape" : "rectangle"
    }
  }, {
    "selector" : "node[IS_DOE = 'N']",
    "css" : {
      "shape" : "ellipse"
    }
  }, {
    "selector" : "node[Status = 'Archive']",
    "css" : {
      "background-color" : "rgb(239,59,44)"
    }
  }, {
    "selector" : "node[Status = 'NULL']",
    "css" : {
      "background-color" : "rgb(115,115,115)"
    }
  }, {
    "selector" : "node[Status = 'Draft - for Review']",
    "css" : {
      "background-color" : "rgb(208,209,230)"
    }
  }, {
    "selector" : "node[Status = 'Current']",
    "css" : {
      "background-color" : "rgb(65,171,93)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      //"background-color": "rgb(255,255,0)"
      'background-color': 'yellow'
    }
  }, {
    "selector" : "edge",
    "css" : {
      "line-style" : "solid",
      "target-arrow-shape" : "triangle",
      //"target-arrow-color" : "rgb(0,0,0)",
      "target-arrow-color": "rgb(132,132,132)",
      "curve-style": "bezier",
      "text-opacity" : 1.0,
      "width" : 2.0,
      "opacity" : 1.0,
      "line-color" : "rgb(132,132,132)",
      "color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,0,0)",
      "font-size" : 8,
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "source-arrow-shape" : "none",
      "content" : "data(interaction)"
      }
  //  style: {
  //    'width': 4,
  //    'target-arrow-shape': 'triangle',
  //    'line-color': '#9dbaea',
  //    'target-arrow-color': '#9dbaea',
  //    'curve-style': 'bezier'
  //  }
  }, {
    "selector" : "edge[interaction = 'History Supersedes']",
    "css" : {
      "line-style": "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'History Cancels']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'History Superseded By']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'History Canceled By']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge[interaction = 'History Certified By']",
    "css" : {
      "line-style" : "dashed"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
    },

  //{
  //  selector: 'node-highlight',
  //  style: {
  //    'border-color': '#FFF',
  //    'border-width': '2px',
  //    'background-color': 'yellow',
  //  }
  //  },

    {
    selector: ':selected',
    style: {
      'border-color': '#FFF',
      'border-width': '2px',
      'background-color': 'yellow',
    }
    },

    {
      selector: 'node.highlight',
      style: {
        'border-color': '#FFF',
        'border-width': '2px',
        'background-color': 'LightYellow',
        //'background-color': 'brown',
        //'background-color': 'yellow',
      }
    },
    //{
    //  selector: ':selected',
    //  css: {
    //    'background-color': 'SteelBlue',
    //    'line-color': 'black',
    //    'target-arrow-color': 'black',
    //    'source-arrow-color': 'black'
    //  }
    //}

  //  {
  //    selector: 'node',
  //    style: {
  //      'background-color': '#11479e'
  //    }
  //  }
  ]
} ]