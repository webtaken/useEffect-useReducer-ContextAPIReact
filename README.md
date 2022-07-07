# `useEffect` & `useReducer` hooks examples

In this repo you will find two examples of advanced _React Hooks_ `useEffect() and useReducer()`, this two hooks are very important tools for different purposes that I will explain in following sections.

# UseEffect Hook

UseEffect is a hook that react provides to act accordingly a sideEffect on a web app, for example a call to an API is performed making an http request that is not controlled by React so this is a side effect, on the image bellow you can see the typical side effects on a web app.

<p>
  <img src="./projectResources/react-side-effects.png" alt="typical_side_effects">
  <br>
  <em>Typical side effects on a web application</em>
</p>
Once we recognized this side effects, we can use `useEffect()` hook to face this changes, the structure of useEffect is showed bellow.

<p>
  <img src="./projectResources/useEffect-structure.PNG" alt="">
  <br>
  <em>Structure of the useEffect hook</em>
</p>

two parameters are given the first one is a function and the second one is an array of dependencies, the function on the first parameter will run whenever a value on the dependencies array change, and after the first render of the component where it belongs, in the project folder `useEffectProject/` you can check `src/components/Login/Login.js` to see an example of the hook in the inside `useEffect()` call in the Login component, basically the useEffect function used here implements a technique called debouncing, that is used whenever we want to check the form validity on every keystroke but not taking to much effort on the rerendering, this is done very simple with useEffect.  
For more information about this hook you can check this great [tutorial](https://youtu.be/0ZJgIjIuY7U) and also check the Acknowledgements section where you can find the course of react from udemy.

# UseReducer Hook

comming soon...

# Acknowledgements

Thanks to ([Maximilian Schwarzmüller](https://www.linkedin.com/in/maximilian-schwarzmueller/)) and his great React course on Udemy [Complete React Course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/). I am learning a lot 👍.
