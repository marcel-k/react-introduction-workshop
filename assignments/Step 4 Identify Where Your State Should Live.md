## Step 4: Identify Where Your State Should Live

### For the trainer
Follow these steps for every piece of state
- Identify every component that renders something based on that state.
- Find a common owner component (a single component above all the components that need the state in the hierarchy).
- Either the common owner or another component higher up in the hierarchy should own the state.
- If you can’t find a component where it makes sense to own the state, create a new component simply for holding the state (called a container component) and add it somewhere in the hierarchy above the common owner component.

#### assignment 9: use branch --> 08-content-props
We will start with the state for our search component. Rewrite the menu component into a class component so it can become stateful. Set the initial value of the searchText on this.state in the constructor. Pas the searchText to the search component and use it as value for the input.

#### assigment 10: use branch --> 09-statefull-menu-search
Now to use the actual search text in the search component. Use it to filter the menu items by name and map the filtered list items in the render function instead of the full list.

#### assignment 11: use branch --> 10-statefull-menu-list
Our next piece of state we want to use is our selected item. And actually the register button as well. When we click on an item, we want it to become the selected one, change the title of the content and set the correct text on the register button. Our common owner would be the app component, but we want to keep our app component as clean as possible, it should not be polluted with to much logic. Hence we create an new common ancestor component that wil track the state of the selectedItem and the register button. So first, create the component and move the menu and content from the app to this component.

#### assignment 12: use branch --> 11-container-menu-content
Now that we have done that, to keep track of the selecteditem and the register state of each item, we also need to move the menuItems data to the container component.

#### assignment 13: use branch --> 12-container-menu-items
Now that we have our common ancestor, we can have communication between the menu and content components. Find the selecteditem and pass its register property and its title to the content as props. When a menu items 'registered' property is true, the button tekst should say ‘unregister’.

#### assignment 14: use branch --> 13-container-registered-content
Finally, we van keep track of our selectedItem. imagine our data coming from a back-end server. A server should not and will not know which item is selected in our app. So we need to remove that property from the hardcoded data array. Instead, we will keep track of our selected item via the state. Begin by setting the default selected item on the **initial** state of the container component. Make sure our menu component gets the selecteditem via props.