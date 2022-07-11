import {MoveTo} from 'moveto';

function scrolling() {
  const moveTo = new MoveTo();

  const triggers = document.querySelectorAll('[data-link-menu]');
  triggers.forEach((trigger)=>{
    moveTo.registerTrigger(trigger);
  });
}

export {scrolling};
