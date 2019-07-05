## Step 3: Identify The Minimal (but complete) Representation Of UI State

### For the trainer
Read step three, ask and answer the questions:

- Indentify al pieces of data that we have in our application
- Ask the three questions for every piece of data:
1. Is it passed in from a parent via props? If so, it probably isn’t state.
2. Does it remain unchanged over time? If so, it probably isn’t state.
3. Can you compute it based on any other state or props in your component? If so, it isn’t state.
