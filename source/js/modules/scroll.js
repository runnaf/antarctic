import MoveTo from 'moveto';

function scrolling() {
  const moveTo = new MoveTo({
    tolerance: 0,
    duration: 1000,
    easing: 'easeOutQuart',
    container: window,
  });

  const triggers = document.querySelectorAll('[data-link-menu]');
  triggers.forEach((trigger)=>{
    moveTo.registerTrigger(trigger);
  });
}

export {scrolling};
