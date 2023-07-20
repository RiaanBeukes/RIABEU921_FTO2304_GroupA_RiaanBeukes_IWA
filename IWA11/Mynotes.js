    /*-The querySelector() method returns the first element that matches a CSS selector.
      -To return all matches (not only the first), use the querySelectorAll() instead.
      -Why:[data-key="order3"]: This is an attribute selector. 
        It selects an element based on the value of its data-key attribute
      -Why:.biscuits.count: This is a class selector. 
        It selects an element with both the "biscuits" and "count" classes.
      -Note: The dataset property itself can be read, but not directly written.
        Instead, all writes must be to the individual properties within the dataset,
        which in turn represent the data attributes. */

  /*Variables cannot start with numbers or have kebab case.
   *Replaced ":" with "=", Added semi colons
   *Adding querySelector.
   *[data-key="order1"] needs square brackets for calling up element.
   *Original sample*  const 1-biscuits: document(biscuits),  *Original example* */
//=========Order1=========================
const order1Root = document.querySelector('[data-key="order1"]'); 
const order1Biscuits = order1Root.querySelector('.biscuits.count');
const order1Donuts = order1Root.querySelector('.donuts.count');
const order1Pancakes = order1Root.querySelector('.pancakes.count');
const order1Status = order1Root.querySelector('.status dd');  
  /*('.status dd'); The correct selector to target the <dd> element within the .status element
   *is .status dd. The dd represents the <dd> element, which is a child element of the .status element.
   *"....querySelector('.status');" - It selects the <dd> element within the .status element of "Order 1".
   *If the <dd> element is the only child of the .status element, you can use the child combinator (>) to 
   select it: const order1Status = order1Root.querySelector('.status > dd');*/

  /*Variable name and its textContent assigned to the order1Root variable.
   *"textcontent" allows one to modify content in html.
   *"dataset" property allows one to access custom data attributes.*/
order1Biscuits.textContent = order1Root.dataset.biscuits;
order1Donuts.textContent = order1Root.dataset.donuts;
order1Pancakes.textContent = order1Root.dataset.pancakes;
order1Status.textContent = order1Root.dataset.delivered === 'true' ? 'Delivered' : 'Pending';

//=========Order2=========================
const order2Root = document.querySelector('[data-key="order2"]');
const order2Biscuits = order2Root.querySelector('.biscuits.count');
const order2Donuts = order2Root.querySelector('.donuts.count');
const order2Pancakes = order2Root.querySelector('.pancakes.count');
const order2Status = order2Root.querySelector('.status dd');  //('.status dd');

order2Biscuits.textContent = order2Root.dataset.biscuits;
order2Donuts.textContent = order2Root.dataset.donuts;
order2Pancakes.textContent = order2Root.dataset.donuts;
order2Status.textContent = order2Root.dataset.delivered === 'true' ? 'Delivered' : 'Pending';

//=========Order3=========================
const order3Root = document.querySelector('[data-key="order3"]');
const order3Biscuits = order3Root.querySelector('.biscuits.count');
const order3Donuts = order3Root.querySelector('.donuts.count');
const order3Pancakes = order3Root.querySelector('.pancakes.count');
const order3Status = order3Root.querySelector('.status dd');

order3Biscuits = order3Root.dataset.biscuits;
order3Donuts = order3Root.dataset.donuts;
order3Pancakes = order3Root.dataset.pancakes;
order3Status = order3Root.dataset.delivered ==='true' ? 'Delivered' : 'Pending'