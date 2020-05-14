---
title: How To Conditionally Wrap A React Component
date: "2020-05-03"
description: "You must've probably needed to wrap a component, one way or another. In this article, we'll discuss how to conditionally wrap a React component by using Higher Order Components (HOC)."
---

While working on your React project, you've probably encountered a scenario where you want to conditionally place a component inside a parent component.

Maybe you've found yourself using this format in one of your codes:

```javascript
{
  condition ? (
    <ProtectedLayout>
      <p>This is a short message.</p>
    </ProtectedLayout>
  ) : (
    <UnprotectedLayout>
      <p>This is a short message.</p>
    </UnprotectedLayout>
  )
}
```

Yes! We've been there and it is working. Nothing's wrong. Convincing ourselves that if it works when the browser is refreshed, then it is already good for us.

## Problem

If you take a good look, there is a problem with this setup, the problem is that we're duplicating the code.

How and why? In the example above, as mentioned, we're writing the code above twice. Imagine if we have more than that as our child component, that alone will increase the number of lines we have to code and maintain.

## Solution

For us to solve this issue, let's create a function that will wrap our child component if it satisfies the condition.

```js{numberLines: true}
const Wrapper = ({ children, condition, wrapper }) =>
  condition ? wrapper(children) : children
```

This wrapping component works by passing a **condition** and a **wrapping** function as props and encloses the **child** component via the function. Easy, right?

Just 2 lines of code and let's break it down, API style!

| Props       | Definition                                                                                           |
| ----------- | ---------------------------------------------------------------------------------------------------- |
| `children`  | The component we want to wrap with the `wrapper` function                                            |
| `condition` | The condition that will identify if the child component should be wrapped                            |
| `wrapper`   | A function that will accept the `children` component and will return the already `wrapped` component |

### Usage

To use this component, see the example below.

```js{numberLines: true}
<Wrapper
  condition={shouldWrap}
  wrapper={children => <ProtectedLayout>{children}</ProtectedLayout>}
>
  <p>This is a short message.</p>
</Wrapper>
```

We enclose the `<p>` child component inside the `<Wrapper>` component passing the different props needed.

The `wrapper` prop should receive the `<p>` child component as the function parameter and inside the wrapping function, we define how our `<p>` child will look like once the `condition` prop is satisfied.

## Different Flavors

Of course, this is not the only flavor we can do to wrap our components. We also have alternative ways of doing this, but I'll leave it up to you to find it out by playing around with the base function or wrapper component.

Take into consideration how you're going to use this wrapping component for your codebase.

## Possible Use Cases and Examples

Here are possible use cases that I believe will require us to wrap our component(s) this way:

1. If you want to wrap your components into different wrappers.

2. If you want OR not want to enclose your component.

## My Use Cases

Most of my React projects require authentication, and given that setup, I receive features that demand distinct layouts for authenticated and unauthenticated users respectively. _Hence the example above_.

Take a look at this code for example:

```js
// The main component that uses the `wrapper` function
export default () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Iterate through the list of routes */}
        {routes.map((item, index) => {
          // Destructuring the individual route items
          const { component: Component, path, protectedPath } = item

          // The route component for the
          return (
            <Route
              key={index}
              {/* Conditionally wrapping the child component */}
              component={() => (
                <Wrapper
                  condition={protectedPath}
                  wrapper={children => <AdminLayout>{children}</AdminLayout>}
                >
                  <Component />
                </Wrapper>
              )}
              exact
              path={path}
            />
          )
        })}
      </Switch>
    </BrowserRouter>
  )
}
```

## Benefits

These are the benefits of using this approach:

1. You get to have a clean code. Who wouldn't want this, right?
2. You will be able to practice the [DRY and KISS principles](https://dzone.com/articles/software-design-principles-dry-and-kiss).
3. By practicing the two principles above, you can reuse this abstracted component again and again. Fewer lines to code and maintain.

## Conclusion

It may not be every day that we encounter these kinds of problems while coding. It's also great to think twice if what we’re coding is going to be maintainable. You know, lesser headaches for our future selves.

What we just did is an example of a [Design Pattern](https://en.wikipedia.org/wiki/Software_design_pattern) that we can apply to our codebases.

As developers, we should aim to find these recurring problems and find patterns that can be abstracted into a simple solution to make our lives easier.

Finally, always remember to stay awesome!
