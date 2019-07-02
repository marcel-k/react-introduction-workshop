## Step 2: Build A Static Version in React

### For the trainer
Lees step 2 van thinking in react.

#### assignment 5: use branch --> 04-stateless-button-list-input
One component we haven’t made yet is the list item component. Every item of our list is also a component. So create a component called ListItem. You will need use props inside your listitem component to print the title or tekst that is on each item. The list will use this list-item component for every item and supply this title via it’s props. You can but don’t need to use a map function yet.

#### assignment 6: use branch --> 05-stateless-list-item
List is a component we would like to re-use at some point. In its current condition, we can’t because it always displays the same items. Now instead of hardcoding every listItem into the List, create an array object of menuItems and iterate over them by using the map function inside the List component.

#### assignment 7: use branch --> 06-list-items-map
In our menu, we want to be able to see which items we registered to, which item is the current item and which item is selected. I want you to add properties current, registered and selected to the array of menuItems and use those to set a cssClasses property on the individual list-items. You wil need to add a property cssClasses to the listitem component. You will also need to move the mapping function out of the list component and into the menu component so you have more control over them inside your menu. Essentially, you wil compose your list of items inside your menu component. To keep the list working you will need to use the children property inside your list component.

#### assignment 8: use branch --> 07-menu-item-status-composition
Lastly, our content component needs to get at least 2 paragraphs of tekst from the outside as props, and also the register button needs to get it’s tekst from the content component, be it ‘register’ or ‘unregister’. Can’t use index as a key for the paragraphs.
