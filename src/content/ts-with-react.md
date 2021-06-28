---
title: "TypeScript With React"
date: "2021-06-28"
draft: false
path: "/blog/ts-with-react"
---
### Type Annotations ForProps #

``` tsx
// destructuring the props
const Hello = ({ who }: {who: string}) => <p>Hello, {props.who}</p>;

// using interface or type alias:
type Props = { who: string }
const Hello = ({ who }: Props) => <p>Hello, {who}</p>

// regular function
function Hello({ who }: Props) {
 return <p>Hello, {who}</p>;
}

// React.FC generic type 
// “FC” stands for Function Component
const Hello: React.FC<Props> = ({ who }) => (
  <p>Hello, {who}</p>
);
```
### Optional/default/render Props #
``` tsx
type Props = { 
  who: string; 
  // if not pass message value, message will be undefined
  message?: string 
  // render ReactNode
  renderMessage?: (message: string) => React.ReactNode;
};
```
```tsx
const Hello = ({ who,renderMessage,message = "hello" }: Props) => (
  <React.Fragment>
    <p>Hello, {who}</p>
    {message && (renderMessage ? renderMessage(message) : <p>{message}</p>)}
  </React.Fragment>
);
Hello.defaultProps = {
  who: "Kyle",
}
// consumption of Hello Component
<Hello
  who={{ name: "Bob", friend: true }}
  message="Hey, how are you?"
  renderMessage={m => <i>{m}</i>}
/>
```

### Object Props #
```tsx
type Address = {
  line1: string; 
  line2: string; 
  state: string; 
  zipcode: string;
}
type Who = {
  name: string;
  friend: boolean;
  address?: Address;
}
type Props = {
  who: Who;
  message?: string;
}
```
### Strongly-typed UseState #
```tSX
// const [...] = React.useState<StateType>(...);
const [count, setCount] = React.useState<number | null>(null);
```

### Strongly-typed UseReducer#
```tSX
// action
type Increment = {
  readonly type: 'increment';
  readonly incrementStep: number;
};
interface Increment {
  readonly type: 'increment';
  readonly incrementStep: number;
}
interface Decrement {
  readonly type: 'decrement';
  readonly decrementStep: number;
}
type Actions = Increment | Decrement;
// reducers
const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.incrementStep };
    case 'decrement':
      return { count: state.count - action.decrementStep };
  }
  return state;
};
// useReducer hook
const Counter = ( ... ) => {
  const [state, dispatch] = React.useReducer<React.Reducer<State, Actions>>(reducer, { count: initialCount });

  return ( ... );
};
```








