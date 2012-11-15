
// remap jQuery to $
(function($){

    var pluginName = 'textHoverImage',
    defaults = {
    color: 0,
    max: 10,
    intervalo: 1,
};

                // The actual plugin constructor
                function Plugin( element, options ) {
                    this.element = element;
                    this.$element = $(element);

                    // jQuery has an extend method which merges the contents of two or 
                    // more objects, storing the result in the first object. The first object
                    // is generally empty as we don't want to alter the default options for
                    // future instances of the plugin
                    this.options = $.extend( {}, defaults, options) ;

                    this._defaults = defaults;
                    this._name = pluginName;
                    this.$img = this.$element.find('img');
                    this.width = this.$img.width();
                    this.height = this.$img.height();
                    this.top = this.$element.css('padding-top');
                    this.left = this.$element.css('padding-left');
                    this.$layer = this.$element.find('div');
                    this.showLayer = function(){
                        stop();
                        this.$layer.fadeIn();
                    };
                    this.init();
                    // this.show(this);
                }


                Plugin.prototype.init = function () {
                    // Place initialization logic here
                    // You already have access to the DOM element and the options via the instance, 
                    // e.g., this.element and this.options
                    // alert(this.element);

                    // console.log(this.top);
                    this.$layer.hide().addClass('popover');
                    this.$layer.width(this.width - 40);
                    this.$layer.height(this.height -40);
                    this.$element.css({position: ' relative'})
                    this.$layer.css({position: ' absolute', top: this.top, left:this.left,})
                    // console.log(this.left);

                    this.$element.hover($.proxy(show, this), $.proxy(oculta, this) );

                };

                var show = function () {

                    this.$layer.fadeIn();

                };

                var oculta = function () {

                    this.$layer.fadeOut('fast');

                };

                // A really lightweight plugin wrapper around the constructor, 
                // preventing against multiple instantiations
                $.fn[pluginName] = function ( options ) {
                    return this.each(function () {
                        if (!$.data(this, 'plugin_' + pluginName)) {
                            $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
                        }
                    });
                }


})(window.jQuery);



// usage: log('inside coolFunc',this,arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console){
    console.log( Array.prototype.slice.call(arguments) );
  }
};



// catch all document.write() calls
(function(doc){
  var write = doc.write;
  doc.write = function(q){ 
    log('document.write(): ',arguments); 
    if (/docwriteregexwhitelist/.test(q)) write.apply(doc,arguments);  
  };
})(document);


