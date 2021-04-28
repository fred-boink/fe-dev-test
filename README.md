# Slushy Frontend Challenge

## Getting Started
Get an endpoint id from <a src="https://crudcrud.com/">CrudCrud</a> 
e.g https://crudcrud.com/api/f5b0a58341314c1da9bcd09b5f93225a

Where "f5b0a58341314c1da9bcd09b5f93225a" is your "crudcrudEndpoint"

```
    cd start-script && npm i
    cd start-script && node start-test.js {{crudcrudEndpoint}}
```

Should display you have an api at your endpoint
```
Complete and API at: https://crudcrud.com/api/f5b0a58341314c1da9bcd09b5f93225a/video

```

This endpoint will be used in the part of the project.

## Outline

1. Create a Next application with:
    1. One route with a list with video thumbnails
    2. A route for each video item that is autoplaying and looping (with start and end time from state, see below)
    3. A route to edit each video item
         1. Change the start and end time in inputs
         2. Have video loop between new start and end
         3. Save the new start and end time in some sort of state (redux, context, localstorage, or zustand)

## What we are looking for

1. Explain your thinking and your decisions!
2. Let us know where you cut corners for demonstration purposes and what you would do normally