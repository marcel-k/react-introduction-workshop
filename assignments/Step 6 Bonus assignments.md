##Bonus assignments

#### assignment 18: use branch --> 18a-component-did-mount
We have worked with hardcoded data untill now. Switch to branch 18a and run the npm install command in a new terminal. This will install a preconfigured json server package that will function as a mock-api.
After npm install is done, start the api with the command 'npm run api'.
Now remove the hardcoded menuitems and use the componentDidMount lifecycle method to retreive the data with the fetch http-client (boilerplate code already present). Use the result of the http get call to set the list of items on the state and set the initial selectedItemId.

#### assignment 19: use branch --> 18b-component-did-mount
Now also remove any hardcoded paragraphs text and adjust the handleMenuItemClick function to fetch the right content/paragraph. Update the state with the retreived paragraph.
Make sure the component also retreives the correct paragraph the first time it renders, when the user has not clicked anything yet.

#### assignment 20: use branch --> 20a-update-meetup
We also need to be able to update a meetup after clicking register for example. This will need to happen before the state is updated (to keep the server and client state in sync) and will also happen asynchronously of course, with a http put call.
Finish the updateMeetup function and call it in the handleRegisterClick. You will need to move code from handleRegisterClick to updateMeetup.

#### assignment 21: use branch --> 20b-update-meetup
To optimize the user experience, we want to put the focus on the search/filter input as soon as the app is loaded the first time. We will do this by getting a ref to the input element and store it in the SearchComponent (this.elementRef). You will need to refactor the SearchComponent to a statefull/class component.

##### bonus 21
It is actually a bit strange for the search component to put the focus on the input itself. What if we want to use more then one search component on the same page? Therefore we need to at least move this functionality one level up, to the menu component. You can do this by receiving the refObject returned by the createRef function from the outside via the props.

#### assignment 22: use branch --> 22a-conditional-rendering-spinner
In this branch a spinner component has been added. The spinner component is an inline svg!
We want to use this spinner component in the MenuContentContainer to display a spinner while the menu and content are loading. Edit the spinner component so its color and size (height and width) can be set from the outside. Track if the menu and/or content are loading via two booleans on the state of MenuContentContainer and show or hide a spinner when the menu and/or content is loading.


#### assignment 23: use branch --> 22b-conditional-rendering-spinner
To finish the app and make it perfect, We also want to show a tiny spinner beside the register when the register button is clicked.
To do this we want to make a new component 'SpinnerButton' that combines the button and spinner components. The spinners visibility should be editable from the outside via props.
Use the SpinnerButton in the content component instead of the simple button. Make sure the spinner is shown when the MenuContentContainer starts updating a meetup.


#### bonus bonus
- A user should not be able to register/unregister a meetup in the past
- Change the color of the register button to green and red for register and unregister
