
window.addEventListener('DOMContentLoaded', InitCy); 

function InitCy() {
  var cont = document.getElementById('cy');
  //var elementsNetworks = networksTest;

  //var netw = networks; // todo switch files
  var netw = networksAll; // todo switch files
  const firstKey = Object.keys(netw)[0];
  const firstValue = netw[firstKey];

  //console.log(firstValue); 
  var elementsNetworks = firstValue.elements;

  var cy = window.cy = cytoscape({
    container: cont,
    //container: document.getElementById('cy'),

    boxSelectionEnabled: true,
    autounselectify: false,

    layout: {
      name: 'preset'
      //name: 'dagre'
    },

    style: styles[0].style,
    //style: styles.style,
    //style: styleSmallDemo.styles,
    //style: styleSmallDemo.styles,

    elements: elementsNetworks ,

    //elements: networks.elements
    //elements: networksSmallDemo,

    //autounselectify: false,
    //selectionType: 'additive'
    //selectionType : 'single'


  });

  //cy.add(elementsNetworks);
  //cy.layout({ name: 'dagre' }).run();
  //cy.layout().run();
  //cy.run();

  //cy.autounselectify(true);

  cy.on('tap', 'node', tapNode); 
  //cy.on('select', 'node', tapNode); 
  cy.on('select', 'node', function (evt) {
    console.log('select ' + evt.target.id());
    var typeIdsNodes = cy.elements('node:selected');
    console.log('select node:selected', typeIdsNodes);
  });

  cy.on('unselect', 'node', function (evt) {
    console.log('Node unselected:', evt.target);
    //cy.nodes().removeClass('highlight');
    //evt.target.removeClass('highlight');
  });

//  cy.on('tap', 'node', function (evt) {
//    console.log('tapped ' + evt.target.id());
//    var node = evt.target;
//    console.log(node);
//    node.select();
//    //cytoscape js select node on tup
//    node.addClass('highlighted');

//    const nodeData = node.data();
//    console.log(nodeData);
//    //nodeData.selected = true;
//    //console.log(nodeData);
//  });
}

function tapNode(evt) {
  console.log('tapNode');
  const node = evt.target;
  showInfo(node);
  //const connectedNodes = node.connectedNodes();
  const connectedNodes = node.neighborhood();

  cy.elements().unselect(); // Unselect all elements first
  node.select(); // Select the tapped node
  connectedNodes.select(); // Select the connected nodes

  cy.nodes().removeClass('highlight'); // Remove the highlight from all nodes
  connectedNodes.addClass('highlight'); // Select the connected nodes


  var chkShowNeighbor = $("#chkShowNeighbor").is(":checked");
  if (chkShowNeighbor) {
    cy.nodes().hide(); // Hide all nodes
    connectedNodes.show();
    node.show(); // Show the tapped node
    cy.fit(padding = 200 );
    //cy.fit( [eles] [, padding] )
  }  
  
  return;
  //var node = evt.target;
  console.log('selected',node.selected());
  console.log('selectable', node.selectable());
  
  node.selectify();
  //node.select();

  // get node by id
  //var nodeById = cy.getElementById(8194); //node.id());
  //nodeById.select();

  var typeIdsNodes = cy.elements('node:selected');
  console.log('node:selected',typeIdsNodes);

  //setTimeout(() => node.select(), 100);
  return;

  //var node = evt.target;
  console.log(node);
  node.select();
  setTimeout(() => cy.nodes().select(), 100);
  
  //setTimeout(() => cy.nodes().select(), 100);
  //var typeIds = cy.elements(':selected'); // al elm
  //console.log(typeIds);
  return;

  cy.nodes().unselect(); 
  var typeIds = cy.elements(':selected'); // al elm
  console.log(typeIds);
  var typeIdsNodes = cy.elements('node:selected');
  console.log(typeIdsNodes);

  //var node = evt.target;
  console.log(node);
  node.select();

  var typeIdsNodes2 = cy.elements('node:selected');
  console.log(typeIdsNodes2);

  //typeIds.removeClass('highlighted');
  return;
  console.log('tapped ' + evt.target.id());
  //var node = evt.target;
  console.log(node);
  node.select();
  //cytoscape js select node on tup
  node.addClass('highlighted');

  const nodeData = node.data();
  console.log(nodeData);

}


var styleSmallDemo = {
  styles: [
    {
      selector: 'node',
      style: {
        'background-color': '#11479e'
      }
    },

    {
      selector: 'edge',
      style: {
        'width': 4,
        'target-arrow-shape': 'triangle',
        'line-color': '#9dbaea',
        'target-arrow-color': '#9dbaea',
        'curve-style': 'bezier'
      }
    }
  ]
}


var networksSmallDemo =  {
  nodes: [
    { data: { id: 'n0' }, "selected": true },
    { data: { id: 'n1' }, "selected": true },
      { data: { id: 'n2' } },
      { data: { id: 'n3' } },
      { data: { id: 'n4' } },
      { data: { id: 'n5' } },
      { data: { id: 'n6' } },
      { data: { id: 'n7' } },
      { data: { id: 'n8' } },
      { data: { id: 'n9' } },
      { data: { id: 'n10' } },
      { data: { id: 'n11' } },
      { data: { id: 'n12' } },
      { data: { id: 'n13' } },
      { data: { id: 'n14' } },
      { data: { id: 'n15' } },
      { data: { id: 'n16' } }
    ],
    edges: [
    { data: { source: 'n0', target: 'n1' } },
    { data: { source: 'n1', target: 'n2' } },
    { data: { source: 'n1', target: 'n3' } },
    { data: { source: 'n4', target: 'n5' } },
    { data: { source: 'n4', target: 'n6' } },
    { data: { source: 'n6', target: 'n7' } },
    { data: { source: 'n6', target: 'n8' } },
    { data: { source: 'n8', target: 'n9' } },
    { data: { source: 'n8', target: 'n10' } },
    { data: { source: 'n11', target: 'n12' } },
    { data: { source: 'n12', target: 'n13' } },
    { data: { source: 'n13', target: 'n14' } },
    { data: { source: 'n13', target: 'n15' } },
  ]
}

function resetAll() {
  cy.nodes().unselect();
  cy.nodes().removeClass('highlight'); // Remove the highlight from all nodes
  cy.nodes().show(); 
  cy.fit();

  $('#tblInfo').hide();
}
function searchByID(el) {
  var sval = el.value;
  console.log('search', el.value);
  //console.log('search', $("#txtSearch").value);

  cy.nodes().unselect(); 
  if(sval === '') {
    return;
  }
  cy.nodes().filter(function (ele) {
    return ele.data('ID').includes(sval);
  }).select();

  //> 5 && ele.data('type') === 'protein';

}

function showSelectedOnly() {
  cy.nodes().hide();
  var typeIdsNodes = cy.elements('node:selected');
  typeIdsNodes.show();
  var nodesHighlight = cy.elements('.highlight');
  nodesHighlight.show();

  cy.nodes().unselect();
  cy.nodes().removeClass('highlight'); // Remove the highlight from all nodes
  
}
function showActiveOnly() {
  cy.nodes().hide();
  cy.nodes().filter(function (ele) {
    return ele.data('Status') === "Current";
  }).show();
}

//showInfo(node);
function showInfo(n) {
  $('#tblInfo').show();

  var nd = n.data();
  console.log(nd);
  console.log(JSON.stringify(nd, null, 4));

  $('#lblID').text(nd.ID);
  $('#lblSubjects').text(nd.Subjects);
  $('#lblTitle1').text(nd.Title1);
  $('#lblStatus').text(nd.Status);
  $('#lblType').text(nd.Type);
  $('#lblUrl').attr("href", nd.name);
  //$('#lblUrl').text("href", nd.name);
  //$('#lblURL').attr("href", nd.name);

//  var info = document.getElementById('info');
//  info.innerHTML = JSON.stringify(nodeData, null, 4);
}
