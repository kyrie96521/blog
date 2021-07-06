---
title: Performace Optimise
date: "2021-06-28"
draft: false
path: "/blog/vue-basic-review"
---

### Cache
##### <u>Advantages Of Caching</u>

- _**Obtain faster reading and writing capabilities**_
- _**Reduce database pressure**_
    - receive props form parent component and return/refresh state or null
    - return state? "props change": "props null"
    - get props via *this.state.xxx* rather than *this.props.xxx*
- _**Reduce redundant data transmission**_
- _**Save traffic**_
- _**Reduce latency**_

##### <u>Types Of Caching</u>

- _**CDN**_
    - reduce request time by deploying on multiple node
- _**Database Caching**_
    - put some frequently accessed resources directly into the memory
    - When the data has not changed, we will not directly read and write the database. 
    - Only when the data changes, we will operate the database
- _**Browser Caching**_
    - LocalStorage、SessionStorage、Cookie、IndexDB
    - IndexDB is mainly used for front-end pages with large storage requirements

##### <u>Local caching</u>

- _**localStorage**
    - 5MB; persistent storage; store locally
    - same origin policy restrict; synchronous (will block rendering)
- _**SessionStorage**_
    - only works under the current session, once we close the current Tab, SessionStorage is also disabled
    - store locally ; same origin policy restrict
   
- _**Cookie**_
    - 4KB ; limited amount of one tab (around 20); same origin policy restrict;
    - ensure cookies will not be leaked: httpOnly(avoid xss), set a reasonable expiration time






