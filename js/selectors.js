// declare your functions here...
function paragraphSelector(){
  return $('p')
}

function lastImageSelector(){
  return $('img:last')
}

function ninjaBabySelector(){
  return $('#baby-ninja')
}

function divSelector(){
  return $('.pics')
}

function firstListItem(){
  console.log($('#ul li:first-child'))
  return  $('#ul li:first-child')[0]
}