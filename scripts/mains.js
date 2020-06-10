StarWars = (function() {
  
    /* 
     * Constructor
     */
    function StarWars(args) {
      // Context wrapper
      this.el = $(args.el);
      
      // Audio to play the opening crawl
      this.audio = this.el.find('audio').get(0);
      
      // Start the animation
      this.start = this.el.find('.start');
      
      // The animation wrapper
      this.animation = this.el.find('.animation');
      
      // Remove animation and shows the start screen
      this.reset();
  
      // Start the animation on click
      this.start.bind('click', $.proxy(function() {
        this.start.hide();
        this.audio.play();
        
        // Add the div.animation to the dom
        this.el.append(this.animation);
      }, this));
      
      // Reset the animation and shows the start screen
      $(this.audio).bind('ended', $.proxy(function() {
        this.audio.currentTime = 0;
        this.reset();
      }, this));
    }
    
    /*
     * Resets the animation and shows the start screen.
     */
    StarWars.prototype.reset = function() {
      this.start.show();
      
      // Clone the div.animation
      this.cloned = this.animation.clone(true);
      
      // Remove it from dom
      this.animation.remove();
      
      // Overwrite the this.animation property with the cloned one
      this.animation = this.cloned;
    };
  
    return StarWars;
  })();