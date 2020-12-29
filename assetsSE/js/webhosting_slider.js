
var cpu_arr = new Array('24x7x365','24x7x365','24x7x365','24x7x365','24x7x365');
var ram_arr = new Array('3','5','6','6 ','-');
var hdd_arr  = new Array('Chat/Tickets','Chat/Tickets','Chat/Tickets','Chat/Tickets','Chat/Tickets');
var bandwidth_arr = new Array('Enabled','Enabled','Enabled','Enabled','Enabled');
var ip_arr = new Array('3 IPs', '5 IPs','7 IPs','9 IPs','Unlimited')
var price_arr = 	new Array('$999/mo','$2999/mo','$4999/mo','$6999/mo','-');
var link_arr = 		new Array('?cmd=cart&action=add&id=9','?cmd=cart&action=add&id=10','?cmd=cart&action=add&id=11','?cmd=cart&action=add&id=12','tickets/new/','');
var b_url = 'https://clients.supporteagles.com/';

// This is what you want the default position to be
var def_pos = 2;

$(document).ready(function(){

    $( "#slider" ).slider({
        range: 'min',
        animate: true,
        min: 1,
        max: 5,
        paddingMin: 80,
        paddingMax: 100,
        change: function( event, ui ) {
            $('.slider-container #cpu_val span.value').html(cpu_arr[ui.value-1]);
            $('.slider-container #ram_val span.value').html(ram_arr[ui.value-1]);
            $('.slider-container #hdd_val span.value').html(hdd_arr[ui.value-1]);
            $('.slider-container #bandwidth_val span.value').html(bandwidth_arr[ui.value-1]);
            $('.slider-container #ip_val span.value').html(ip_arr[ui.value-1]);
            $('.slider-container #price_val').html(price_arr[ui.value-1]);
            $('.slider-container a.buynow_button').attr('href', b_url + link_arr[ui.value-1]);
            $('.slider-container div.price_rangetxt div#icon-'+(ui.value-1)).addClass("current");
            $('.slider-container #sub-heading-'+(ui.value-1)).addClass("current1");
        }
    });
    $( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) );
    $('#slider').slider('value', def_pos);
    $('.icon').click(function() {
        ch_value= parseInt(this.id.slice(5)) + 1;
        $(".slider-container div.price_rangetxt div").removeClass("current");
        $(".slider-container .heading div").removeClass("current1");
        $('#slider').slider('value', ch_value);
    });
});