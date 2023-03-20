# Sass Web-Dev Template

This repository contains a web development template built using the `Sass CSS preprocessor`. 
It provides a starting point for building **responsive web pages** and includes a directory structure and some pre-built CSS styles that can be used as a foundation for a new project.

## Components

### **Form** component

#### How to use:
1. Create `<form>` element with `class="form"` and `id="form">`
2. Inside create a container (e.g. `<div`> with `class="form__element"`)
    * optionally, you can add `class="form__element--required"` to mark this element as required
3. In this container, place: 
    1. `<label>` (optional)
    2. one element of the form (like `<input>` or `<textarea>`)
        * it is **important** that you give it a **unique id**
        * if you use `<label>`, remember to place it **before** this element
        * there is optional `class="form__input-email"` that you can add to `<input type="text">` in order to make it behave like `<input type="email">` but with custom validation function. **(!)** *This class is used by JavaScript.*
    3. `<span>` element with `class="form__error-msg"` **(!)** *This class is used by JavaScript.*
        * this must be placed **immediately after** the previous element
        * it does not matter if you put any text in this `<span>` element. It will be replaced anyway.
4. Add `<button>` for submitting the form

Note that this component needs to have access to the `form.js` scripts.

#### Example

```html
<form class="form" id="form">
        
    <div class="form__element form__element--required">
        <label for="username">username</label>
        <input type="text" name="username" id="username">
        <span class="form__error-msg">error message</span>
    </div>

    <div class="form__element form__element--required">
        <label for="email">email</label>
        <input class="form__input-email" type="text" name="email" id="email">
        <span class="form__error-msg">error message</span>
    </div>

    <div class="form__element form__element--required">
        <label for="password-1">password</label>
        <input type="password" name="password-1" id="password-1">
        <span class="form__error-msg">error message</span>
    </div>

    <div class="form__element form__element--required">
        <label for="password-2">confirm password</label>
        <input type="password" name="password-2" id="password-2">
        <span class="form__error-msg">error message</span>
    </div>

    <div class="form__element">
        <label for="short-message">short message</label>
        <textarea name="short-message" id="short-message"></textarea>
        <span class="form__error-msg">error message</span>
    </div>
    <span>Fields with * are required</span>
    <button class="btn" type="submit">Submit</button>

</form>
```

### **Alert** component
description will be added soon(ish) :)
