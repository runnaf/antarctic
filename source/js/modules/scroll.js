import {MoveTo} from '../../moveto/dist/moveTo.min.js';

function scrolling() {
  const moveTo = new MoveTo();

  const triggers = document.querySelectorAll('[data-link-menu]');
  triggers.forEach((trigger)=>{
    trigger.addEventListener('click', ()=>{
      moveTo.registerTrigger(trigger);
    });
  });
}

export {scrolling};
