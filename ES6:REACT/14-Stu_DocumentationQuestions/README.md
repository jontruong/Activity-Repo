# React Quiz

In this activity, we will begin by installing a few helpful packages and then explore the React documentation to answer questions.

## Instructions

### Part 1

* Create an app called `myapp` by running Create React App with the following command in your terminal:

`npx create-react-app myapp`

### Part 2

* While those are installing, work with your group to answer each of the following questions using the [ReactJS Documentation](https://facebook.github.io/react/):

1. In the previous section we installed Create React App. What is it for?
Creates a react app
2. What are some benefits of using ReactJS?
In addition to providing reusable React library code (saving development time and cutting down on the chance for coding errors), React comes with two key features that add to its appeal for JavaScript developers:

JSX
Virtual DOM

3. What is a React component? Hint: Check the "Components and Props" section of the React documentation.
Components let you split the UI into independent, reusable pieces, and think about each piece in isolation


4. What is the significance of the `ReactDOM.render` method? Hint: Check the "ReactDOM" section of the documentation.
ReactDOM.render() controls the contents of the container node you pass in. Any existing DOM elements inside are replaced when first called. Later calls use React’s DOM diffing algorithm for efficient updates.

ReactDOM.render() does not modify the container node (only modifies the children of the container). It may be possible to insert a component to an existing DOM node without overwriting the existing children.

ReactDOM.render() currently returns a reference to the root ReactComponent instance. However, using this return value is legacy and should be avoided because future versions of React may render components asynchronously in some cases. If you need a reference to the root ReactComponent instance, the preferred solution is to attach a callback ref to the root element.

Using ReactDOM.render() to hydrate a server-rendered container is deprecated and will be removed in React 17. Use hydrate() instead.

only need to use it once

5. What is JSX? Why does Facebook recommend using it? Hint: Check the "Introducing JSX" section of the documentation.

html like code, REACT will give you good error messages,

6. What does Facebook recommend as the “best way to start building a new React single page application”? Hint: Check the "Installation" section of the React documentation.

Create react app

7. What is Babel? And what role does it play in converting JSX into vanilla JavaScript? Hint: Check the "Introducing JSX" section of the documentation.

translator for legacy browsers

8. What is the significance of { } curly braces in JSX? Hint: Check the "Introducing JSX" section of the documentation.

signifies javascript code
9. What is a component prop? Hint: Check the "Components and Props" section of the React documentation.
input that the component takes, arguments for the component