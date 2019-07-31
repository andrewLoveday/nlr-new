var coaches;
var colorArray = ['#e7333f','#fabc43','#269b4c'];
$(document).ready(function(){
	setTimeout(
  		function(){
  			//COACH LIST FILTERING AND ORDERING
			if($('.open-coach-filters').length){
				//CHANGING THE ORDER OF RESULTS DISPLAYED
				$('.open-coach-filters').unbind('click').click(function(){
					//OPEN THE FILTERS
					if($(this).hasClass('down')){
						$(this).addClass('up').removeClass('down').removeClass('text-info').html('Click to hide <b>Coach</b> filters <i class="fa fas fa-angle-up coach-filter-arrow up"></i>');
						$(this).parents('.card').eq(0).removeClass('card').addClass('cards');
						setTimeout(
  							function(){
  								//AFTER THE FILTERING PANEL HAS BEEN OPENED AND ALL DOM ELEMENTS ARE NOW PRESENT
								if($('.order_coaches').length){
									coaches = $('.coach-card').clone();
									$('.order_coaches').unbind('change').change(function(){
										toggleCoaches();
									});
									$('.filter-card').matchHeight();
								}
								//CHANGE THE AMOUNT OF COACHES ON DISPLAY
								$('input[type="radio"][name="amount_of_coaches"]').unbind('change').change(function(){
									toggleCoaches();
								});
						},500);
					}
					//CLOSE THE FILTERS
					else if($(this).hasClass('up')){
						$(this).removeClass('up').addClass('down').addClass('text-info').html('Click to show <b>Coach</b> filters <i class="fa fas fa-angle-down coach-filter-arrow down"></i>');
						$('.open-coach-filters').parents('.cards').eq(0).removeClass('cards').addClass('card');
					}
				});
			}
			// END COACH LIST FILTERING AND ORDERING
			//CHANGE COLOUR OF THE PROGRESS BARS
			if($('.progress-bar').length){
				$('.progress-bar').each(function(i,ele){
					var this_score = $(ele).attr('aria-valuenow');
					if(this_score < 60){
						$(ele).addClass('red-bkgd');
					}
					if(this_score > 59 && this_score < 80){
						$(ele).addClass('amber-bkgd');
					}
					if(this_score > 79){
						$(ele).addClass('green-bkgd');
					}
				});
			}
			//END CHANGE COLOUR OF THE PROGRESS BARS 
			//FULL SCREEN MODE0
			if($('.fullscreen-mode').length){
				var doc_body = $(document);
			    $('.fullscreen-mode').click(function(){
					toggleFullScreen();
			    });
			}
			//END FULL SCREEN MODE
  	},1000);
});
//filter and sort coach cards on display
function toggleCoaches(elem){
	"use strict";
	//clone all the coaches
	var do_this   = $('.order_coaches').val();
	//get the amount of coaches to be displayed from the user selection
	var amount    = $('input[type="radio"][name="amount_of_coaches"]:checked').val();
	//create an array/object to store the coaches to be appended to the screen
	var coach_arr = [];
	//loop over each coach and get their plan counts and plan activity values
	$(coaches).each(function(i,ele){
		var coach_name    = $(ele).data('coach');
		var plan_count    = parseInt($(ele).data('plan_count'));
		var plan_activity = parseInt($(ele).data('plan_activity'));
		//add to array of coaches with 3 keys (coach name, plan count, plan activity) to be able to sort the order to display them
		coach_arr.push({
			"coach_name"    : coach_name,
			"plan_count"    : plan_count,
			"plan_activity" : plan_activity,
			"dom_element"   : $(ele)
		});
	});
	//see what 'order by' clause was requested
	switch(do_this){
		case "coach_name_a_z":
			coach_arr = sortByKeyAsc(coach_arr,"coach_name");
			break;
		case "coach_name_z_a":
			coach_arr = sortByKeyDesc(coach_arr,"coach_name");
			break;
		case "most_plans":
			coach_arr.sort(function(a,b){
			    return b.plan_count-a.plan_count;
			});
			break;
		case "least_plans":
			coach_arr.sort(function(a,b){
			    return a.plan_count-b.plan_count;
			});
			break;
		case "most_active":
			coach_arr.sort(function(a,b){
			    return b.plan_activity-a.plan_activity;
			});
			break;
		case "least_active":
			coach_arr.sort(function(a,b){
			    return a.plan_activity-b.plan_activity;
			});
			break;
		
	}
	//reset the gloabal coaches array to blank ready to be rebuilt in the next loop
	coaches = [];
	//remove the coaches from the dom
	$('.coach-card').remove();
	//loop over the newly sorted array and append each dom element to '.coach-cards' div
	$.each(coach_arr, function(j,el) {
		//only display the amount of coaches as per the '.amount_of_coaches' radio group value
		if(j < amount){
			$('.coach-cards').append(el.dom_element);
		}
		//set the new order to the global 'coaches' array for further filtering and limiting
		coaches.push(el.dom_element);
	});
	
}
//array sorters
function sortByKeyDesc(array, key) {
    return array.sort(function (a, b) {
        var x = a[key]; var y = b[key];
        return ((x > y) ? -1 : ((x < y) ? 1 : 0));
    });
}
function sortByKeyAsc(array, key) {
    return array.sort(function (a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}
//full screen mode
function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}