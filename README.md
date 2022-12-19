# magician

This is a password generator.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users are able to:

- Generate a password based on the selected inclusion options
- Copy the generated password to their clipboard
- See the strength rating for their password
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](.images/screenshot.png)

### Links

- Live Site URL: [Live Demo](https://alekzandriia.github.io/magician)
- Solution URL: [Source Code](https://github.com/alekzandriia/magician)

## My process

### Built with

- Semantic HTML5 markup
- CSS3
- Flexbox
- Google fonts
- JavaScript

### What I learned

How to use user inputs for search query
I tried using string concatenation for the search param but that didn't work so I went down a unproductive rabbit hole until I finally realized you just need to use backticks/ string interpolation... 🤦‍♀️

Once I realized that I quickly figured out that I also needed to scope the userQuery variable to the function so that it updates with the event listener and not beforehand.

### Continued development

I didn't hide my API key because I ran out of time... 😅 but in the future I'd hide the key using either Netlify functions or dotenv files and NodeJS. I'm not worried about this at the moment because it's a free API (with limited requests).

### Useful resources

Styling Checkbox Input
[MDN](https://developer.mozilla.org/en-US/docs/Learn/Forms/Advanced_form_styling)
[Modern CSS](https://moderncss.dev/pure-css-custom-checkbox-style/)

Styling Range Input
[Smashing Magazine](https://www.smashingmagazine.com/2021/12/create-custom-range-input-consistent-browsers/)

Scrolling Marquee Text Effect
[Ryan Mulligan](https://ryanmulligan.dev/blog/css-marquee/)

## Author

- Website - [Alekzandriia](https://www.alekz.dev)
- Frontend Mentor - [@alekzandriia](https://www.frontendmentor.io/profile/alekzandria)
- Twitter - [@alekzandriia](https://www.twitter.com/alekzandriia)
