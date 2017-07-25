---
title: How to create crooked shadow
tags:
  - css
  - box-shadow
comment: true
categories:
  - Blog
thumbnail: //res.cloudinary.com/starbist/image/upload/v1500993339/How_to_create_crooked_shadow_bn2afp.jpg
date: 2017-07-25 16:10:31
---


Recently I was working on a very interesting and challenging project. I was told to use CSS wherever possible. That was actually the first time I've heard someone says those words and my heart was full of joy. One of the most challenging features to build was to add a shadow on a crooked border. I know it doesn't sound either glamorous or complicated, but it kinda is.

<!-- more -->

## Crooked border

Here's the desired design for the hero section with crooked border (notice the crooked shadow at the bottom):

![crooked background](//res.cloudinary.com/starbist/image/upload/v1500989561/crooked-shadow_rozyr7.jpg)

Let's break this into smaller modules:
- hero block
- hero title
- hero icon
- crooked border
- inner shadow

First three are easy to create, especially if using flexbox to center the content.

```html
<a class="hero" href="//www.silvestarbistrovic.from.hr" target="_blank">
  <div class="hero__content">
    <h1 class="hero__text">
      Star Bist
    </h1>
    <div class="hero__icon">
      <svg>...</svg>
    </div>
  </div>
</a>
```

```css
.hero {
  position: relative;
  overflow: hidden;
}
.hero__content {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
```

To create the crooked border, we will use CSS triangle. It's pretty old technique and it's used all over the place. To understand CSS triangles, look at this short animation made by Chris Coyier:

{% codepen chriscoyier lotjh dark result %}

In our case, we'll use `:after` pseudo element to create a crooked solid bottom border. Here's the code:

```css
.hero:after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  border-bottom: 10em solid white;
  border-left: 100vw solid transparent;
}
```

That wasn't so hard, now let's get to the real problem.

## Crooked shadow

To create an inset shadow, we usually use a `box-shadow` property. Every box could have a shadow, including our `:after` pseudo element. But we cannot apply `box-shadow` here because we have a box, although it looks like a triangle and shadow is not crooked.

To solve this problem, I've even tried to rotate another pseudo element with a shadow and place it under an existing triangle. It worked, but not at every viewport size. I wasn't happy with that solution.

Then it hit me - I should use a crooked transparent gradient on a box that is as tall as `:after` pseudo element. Wait, what? I'll try to explain this step by step.

First, we should create an element that is as tall as `:after` pseudo element. We could use `:before` pseudo element for this purpose. Then we should add linear gradient at the correct angle and percentage. In our case, linear gradient should go to the top left corner until 50%. Finally, we should scale and translate element to make it visible.

```css
.hero:before {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 10em;
  background-image: linear-gradient(to top left, #111 45%, transparent 50%);
  transform-origin: center center;
  transform: scale(1.25) translateY(-.5em);
}
```

_In order to make this work, don't forget to add `position: relative` and `overflow: hidden` on `.hero` element._

And here's the final solution:

{% codepen CiTA WjRJWN dark result 340 %}

## Final thoughts

I really enjoyed solving this problem and I'm quite happy with the solution. And it is a fully responsive solution, which is great. 

If you like this article or you have a different solution, let me know in the comments or on [twitter](//twitter.com/malimirkeccita).  