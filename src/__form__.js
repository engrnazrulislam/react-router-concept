/*
* 1. use form tag and onsubmit handler with event (e)
* From e access e.target.[name of the input field].value
* 
* 2. Controlled Element: use individual field state for each input field
* 3. Controlled Element: one object contain all input fields value
* 4. Uncontrolled Element: useRef to create a reference to the element and access value by using like: nameRef.current.value
*/