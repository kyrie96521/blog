---
title: "React-Hooks Review"
date: "2021-06-28"
draft: false
path: "/blog/react-hooks"
---
### Life-cycle briefly intro

#### Old

```js

import React, { Component } from 'react'

export default class LifeCycle extends Component {
  static defaultProps = {
      name:'counter'
  }
  constructor(props){
    // super() will calls the constructor of its parent class
    // need to pass props parameter if we want to use props
    super(props);
    this.state = {number:0,users:[]};
    console.log('1. constructor initial props and state');
  }  
  
  // maybe executed multiple times
  componentWillMount(){
    console.log('2. componentWillMount component will be mounted');
  }

  // only executed once, has side effects
  componentDidMount(){
    console.log('4. componentDidMount component already mounted');
    fetch('https://api.github.com/users').then(res=>res.json()).then(users=>{
        this.setState({users});
    });
  }

  // compare current props/state with incomingProps/state
  shouldComponentUpdate(nextProps,nextState){
    console.log('5. shouldComponentUpdate will component be render? true:false');
    return true;
  }
  componentWillUpdate(nextProps, nextState){
    console.log('6. componentWillUpdate before render');
  }
  componentDidUpdate(prevProps, prevState)){
    console.log('8. componentDidUpdate component alraeady Update');
  }
  add = () =>{
      this.setState({number:this.state.number});
  };
  render() {
    console.log('3|7.render')
    return (
      <div>
        <p>{this.props.name}:{this.state.number}</p>
        <button onClick={this.add}>+</button>
        <ul>
            {
                this.state.users.map(user=>(<li>{user.login}</li>))
            }
        </ul>
        {this.state.number%2==0&&<SubCounter number={this.state.number}/>}
      </div>
    )
  }
}
class SubCounter extends Component{
    constructor(props){
        super(props);
        this.state = {number:0};
    }

    // removeEventListener/ clear setTimeout,setInterval
    componentWillUnmount(){
        console.log('SubCounter componentWillUnmount');
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('SubCounter',nextProps,nextState);
        if(nextProps.number%3==0){
            return true;
        }else{
            return false;
        }
    }
    //componentWillReceiveProp update the state values with new props values
    componentWillReceiveProps(nextProps){
      console.log('SubCounter 1.componentWillReceiveProps will get called whenever any change happens to props values.')
    }
    render(){
        console.log('SubCounter 2.render')
        return(
            <div>
                <p>{this.props.number}</p>
            </div>
        )
    }
}

```



#### New
<img src="https://pic4.zhimg.com/v2-610ad32e1ed334b3b12026a845e83399_1440w.jpg?source=172ae18b" alt="react-life-cycle" align=center />

##### <u>Mounting period getDerivedStateFromProps(nextProps,prevState)</u>

- _**Abandon ComponentWillMount()**_
- _**How it works?**_
    - receive props form parent component and return/refresh state or null
    - return state? "props change": "props null"
    - get props via *this.state.xxx* rather than *this.props.xxx*



##### <u>Updating period getSnapshotBeforeUpdate(prevProps, prevState)</u>
- _**Abandon ComponentDidUpdate()**_
- _**How it works?**_
    - be called after render, before update dom and refs
    - return value will be catched by *componentDidUpdate()*

    ```js
  // handle scrollbar position
  getSnapshotBeforeUpdate() {
    // return content height after update
    return this.wrapper.current.scrollHeight;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // get current height
    this.wrapper.current.scrollTop =
      this.wrapper.current.scrollTop +
      (this.wrapper.current.scrollHeight - snapshot);
  }

    ```
    

