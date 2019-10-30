// After trying to get the nav bar to collpase after a click with Boostrap only i found this snippet 
// in StackOverflow https://stackoverflow.com/questions/42401606/how-to-hide-collapsible-bootstrap-4-navbar-on-click

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
    });
