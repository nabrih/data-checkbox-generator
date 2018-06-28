(function( $ ){
	$.fn.getSelectedData= function(options) {
		var elem = this;
		var data = [];

   		// Set default options.
        var settings = $.extend({
            id: "id"
        }, options );

   		var tdbody = " tbody > tr";
   		var tdcheckbox = " td:nth-child(1) > input[type='checkbox']";
   		var items_cb_checked = $(elem).find(tdbody+" > "+tdcheckbox+":checked");

   		items_cb_checked.each(function () {
   			data.push($(this).closest('tr').data(settings.id));
   		});

   		return data;
	}


    $.fn.multiSelectTable = function(options) {
   		var elem = this;

   		// Set default options.
        var settings = $.extend({
            
        }, options );

   		var tdhead = " thead > tr";
   		var tdbody = " tbody > tr";
   		var tdcheckbox = " td:nth-child(1) > input[type='checkbox']";
   		
   		$(elem).find(tdhead + "," + tdbody).prepend('<td><input type="checkbox" name=""></td>');
   		
   		var head_cb = $(elem).find(tdhead+" > "+tdcheckbox);
   		var items_cb = $(elem).find(tdbody+" > "+tdcheckbox);

   		// on checkbox head change
   		head_cb.change(function() {
   			console.log("head changed");
            var a = $(this).prop("checked");
            if (a) {
              items_cb.each(function() {
                $(this).prop("checked", true);
              })
            }else{
              items_cb.each(function() {
                $(this).prop("checked", false);
              })
            }
          }
        );

   		// on item change
   		items_cb.change(function () {
   			console.log("item changed");

   			var a = $(this).prop("checked");
            var c = 1;
            items_cb.each(function() {
              var all = $(this).prop("checked");
              if (!all) {
                c = 0;
              }
            });
            if (c) {
              head_cb.prop("checked", true);
            }else{
              head_cb.prop("checked", false);
            }
   		});              	
   };            
})( jQuery );
