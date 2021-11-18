(function($){
    $.fn.tableColor = function(options) {
        for (var i in options) {
            console.log(i);
            console.log(options[i]);
            this.find(i).css(options[i]);
        }
    };
})(jQuery);