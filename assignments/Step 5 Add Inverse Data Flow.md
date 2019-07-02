## Step 5: Add Inverse Data Flow

## For the trainer:
Data flowed nu alleen naar beneden via de props. Wat we willen is dat de state ook wordt bijgewerkt wanneer er getypt wordt in het filter, geklikt wordt op register of selected meetup wanneer er geklikt wordt op een meetup.

#### assigment 15: use branch --> 14-container-selected-item
When our search text changes, we need to communicate to our menu component that It should filter our list. You can do this by adding an event to the input an call a function that is supplied by the menu component via props, essentially delegating the event handling, so we create a custom event. Start by catching the changes on the input with on change and add a onInputChange property on the props of the search component. Then you have to make them work together.
In our menu component we eventually will need to use this.setState

#### assignment 16: use branch --> 15-search-text-event
When a listitem is clicked (actually our button) the MenuContentContainer component needs to know about this. Use the onClick function on the button to communicate our selecteditemid to our menucontentcontainer and handle it the same way as we did with our search text.

#### assignment 17: use branch --> 16-selected-item-event
The MenuContentContainer is responsible for keeping our state and updating our items, When the register button is clicked, it needs to update the register state of that item. So you need to do this the same way as we did with our selecteditem, BUT we are dealing with al list here. There are many ways to do this, but only a few are right. One of the right way is by putting the menuitems on the state.