## Step x: Refactoring to hooks

### For the trainer
*Tip: For these assignments there are some useful links in the file 'Useful links.md' that may help ;)*


#### assignment 24: use branch --> 23-passthrough-props-register
We are going to refactor our application to use hooks. In our app there are three class components: Search, Menu and MenuContentContainer. We will start with the Menu component. Refactor this component to a functional component and use the 'useState' hook to keep track of the searchText.

#### assignment 25: use branch --> 24-menu-use-state
Our Search component uses a ref to put the focus on the input as soon as the component has mounted. Refactor the Search component to a functional component. Use the 'useRef' hook instead of createRef and use the useEffect hook instead of the componentDidMount lifecycle method.

#### assignment 26: use branch --> 25-search-use-ref-effect
Our MenuContentContainer component is a little more complex but should also be converted into a functional component. Try this yourself first, if it's to overwelming, you can use _MenuContentContainer_.js to get a head start.

take it step by step:
- convert from class to function and fix all 'errors'
- then convert this.state to 'useState' hooks
- use 'useEffect' in stead of componentDidMount to update the state
- you can rewrite async functions like ```async updateContent(itemId)``` to ``const updateContent = async function(itemId)``
- after everything is working, try to convert all the useState hooks to a useReducer hook.