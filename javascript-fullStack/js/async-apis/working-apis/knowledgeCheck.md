# Knowledge Check

## What is an API?

**Servers that are created for serving data for external use such as websites or apps are referred to as APIs (Application Programming Interface).**

## How is access to an API restricted?

**A restriction exists to track abuse of the systems and data being fetched and served. It's also a way for those services to mitigate and recuperate operating costs.**

**Many services require a unique API key so they can correlate your API key to the requests of their data, including how much and how often you are requesting it.**

## How do you fetch and extract data from an API?

```javascript
fetch('url.url.com/api', {mode: 'cors'})
.then((response) => {
    return response.json();
})
.then((response) => {
    console.log(response.data.users)
});
```

## Why might your API request be blocked by the browser, and how might you fix this?

**For security reasons, by default, browsers restrict HTTP requests to outside sources. This is known as CORS (Cross Origin Resource Sharing).**

**This can be fixed by adding an option within the object of the second argument of a fetch method.**

```javascript
fetch('url.url.com/api', {
  mode: 'cors'
});
```
