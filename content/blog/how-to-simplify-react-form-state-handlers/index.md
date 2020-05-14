---
title: How To Simplify React Forms State Handlers
date: "2020-05-14"
description: "Let's face it. Most of our web applications will require us to use forms for data input. In this article, we'll discuss how to simplify handling our forms by using React hooks."
---

Web application forms are essential for data processing and display of information. We've had our fair share of using them for the reasons identified above. They're an inevitable part of web development.

While learning React, you must've encountered constructs such as the example below from various tutorials. A piece of small code snippet that shows you how to use [controlled components](https://reactjs.org/docs/forms.html#controlled-components) in `render` functions and how to assign them into different state variables.

<!-- ### Pre-Hook Example (< v 16.8) - Class Component

In this example, let's assume we have three input fields that need to be stored inside our class component state.

```javascript{numberLines: true}
import React, { Component } from "react"

class MyForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
    }
  }

  handleFirstNameChange = event => {
    this.setState({ firstName: event.target.value })
  }

  handleLastNameChange = event => {
    this.setState({ lastName: event.target.value })
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value })
  }

  render = () => {
    const { firstName, lastName, email } = this.state
    return (
      <>
        <input onChange={handleFirstNameChange} type="text" value={firstName} />
        <input onChange={handleLastNameChange} type="text" value={lastName} />
        <input onChange={handleEmailChange} type="text" value={email} />
      </>
    )
  }
}
``` -->

### Hook Example (> v16.8) - Functional Component

In this example, let's assume we have three input fields that need to be stored inside our component's state.

```javascript{numberLines:true}
import React, { useState } from "react"

const MyForm = () => {
  // Form states
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")

  // Form handlers
  const handleFirstNameChange = event => {
    setFirstName(event.target.value)
  }
  const handleLastNameChange = event => {
    setLastName(event.target.value)
  }
  const handleEmailChange = event => {
    setEmail(event.target.value)
  }

  // Render components
  return (
    <>
      <input onChange={handleFirstNameChange} type="text" value={firstName} />
      <input onChange={handleLastNameChange} type="text" value={lastName} />
      <input onChange={handleEmailChange} type="text" value={email} />
    </>
  )
}
```

Notice that we have three different `onChange` handlers for each of our input fields. That's a lot and will be a lot more if we add another input field.

## Problem

Our example above will definitely work. However, when we encounter a requirement that will demand us to add another input field for our form, we will be forced to add another state handler.

This may pose as a threat to the maintainability and readability of our dear code.

## Solution

Fortunately, we have a simple pattern that we can use for us to retain the maintainability and readability of our source codes.

We can create a custom React hook that we can use across our codebase repetitively without confusing our future selves. The solution will look something like the custom hook below.

```javascript{numberLines:true}
/**
 * src/hooks/form.js
 */
import { useState } from "react"

export const useInputState = initialValue => {
  // Initialize state holder and value setter
  const [value, setValue] = useState(initialValue)
  // On value change handler
  const onChange = event => setValue(event.target.value)
  // Reset the current state
  const clear = () => setValue(initialValue)
  return [value, onChange, clear]
}
```

This custom hook works by handling the state value internally. It will return the **value**, **change handler**, and the **setter of the state** respectively, which will be used by the calling function.

## Usage

To use the hook we recently created, see the example below that modifies our first example above.

```javascript{numberLines:true}
import React from "react"
import { useInputState } from "hooks/form"

const MyForm = () => {
  // Form states and change handlers
  const [firstName, handleFirstNameChange] = useInputState("")
  const [lastName, handleLastNameChange] = useInputState("")
  const [email, handleEmailChange] = useInputState("")

  // Render components
  return (
    <>
      <input onChange={handleFirstNameChange} type="text" value={firstName} />
      <input onChange={handleLastNameChange} type="text" value={lastName} />
      <input onChange={handleEmailChange} type="text" value={email} />
    </>
  )
}
```

We minimized the number of lines in our original code by using the custom hook that we just created. We called on the `useInputState` hook and initialized it with the default value. Then we destructure the array returned by the hook with `value` data and the `onChange` function. In the modified code, we renamed the destructured values accordingly.

## Different Flavors

This is not the only way to create and use this hook.

While updating my source codes, I did not use the hook above. Instead, I used a different approach wherein the returned value of the hook is not an array but an object. Check out the code below.

```javascript
// Declaration
export const useInputState = initialValue => {
  const [value, setValue] = useState(initialValue)
  const onChange = event => setValue(event.target.value)
  return {
    value,
    setValue,
    attributes: {
      value,
      onChange,
    },
  }
}

/* ------------------------------------------------------ */

// Usage
const MyForm = () => {
  const { value: firstName, attributes } = useInputState("")
  // ...
  return (
    <>
      <input type="text" {...attributes} />
      {/* ... */}
    </>
  )
}
```

As usual, you can play around this setup and take into consideration how you're going to use this on your end.

## Benefits

These are the benefits of using this hook:

1. Simple and clean code.
2. Fewer lines to maintain.
3. Readable code and easy to digest.

For sure, there's a lot more than what was identified.

## Conclusion

The introduction of [React hooks](https://reactjs.org/docs/hooks-intro.html) allows you to always use functions instead of having to juggle the existing concepts of React such as functions, classes, and Higher-Order Components. This makes our codebases lean and simple to maintain.

We are also adding a new concept in our arsenal of [Design Patterns](https://en.wikipedia.org/wiki/Software_design_pattern) that we can apply to our codebases, which can definitely make our development lives easier.

Before we go, always remember to stay awesome!
