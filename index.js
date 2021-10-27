
let postbtn=document.getElementById('PostB');

postbtn.addEventListener('click', function(){
    let review=document.getElementById('Restaurantreview').value;
    let restname=document.getElementById('RestaurantName').value;
  // to see if its correct console.log(Restaurantreview);

  var review1=document.getElementById('rreview');
  review1.innerHTML= review;

  var blank=document.getElementById('Restaurantreview');
  blank.value=null;
  var restname1=document.getElementById('rname');
  restname1.innerHTML= restname;
  var blank1=document.getElementById('RestaurantName');
  blank1.value=null;
  if(restname1 || review1 === null){

  }
})


let editbtn=document.getElementById('EditB');


editbtn.addEventListener('click', function(){
    document.getElementById('Restaurantreview').value=document.getElementById('rreview').innerHTML;
    document.getElementById('RestaurantName').value=document.getElementById('rname').innerHTML;

    var blank=document.getElementById('rreview').value;
    blank.value=null;
    console.log('chdawdwd');

})
