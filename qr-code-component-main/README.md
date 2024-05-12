# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview

### Screenshot

![](./screenshots/Screenshot%202024-05-10%20at%2010-10-11%20Frontend%20Mentor%20QR%20code%20component.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties

### What I learned

It's been a while since I created something really simple, so it took me a bit of time to figure out how to style this as close to the example screenshot as possible. Particularly, moving the card to the middle of the screen. I just had to use flexbox and making the height of the `body` as 100% of the viewport height.

```css
body{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    height: 100vh;
}
```

I referred to code from one of my old repositories as I remember doing this before, but it's been a while.