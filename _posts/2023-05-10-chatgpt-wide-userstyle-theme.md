---
layout: post
title: "Snippet: Wider ChatGPT conversation window"
excerpt: "Your ticket to an ~~immersive~~ sensible ChatGPT experience."
thumbtext: "WideGPT"
image: assets/img-min/social/qLkLRF7xdt4.webp
categories: []
tags: [chatgpt]
author: apkd
series: false
featured: false
hidden: false
license: cc-by
contributors: []
---

It's a quick, simple, no-nonsense browser UserScript that makes your ChatGPT conversation wider.
I can't be the only one who needed this.

# Looks like this

![Unity label selection dropdown](/assets/img/posts/widegpt.png)

# Source

<code data-gist-hide-footer="false" data-gist-id="3c3372cffb0076a014a2ec0acdd23bbb"></code>
<noscript><a href="https://gist.github.com/apkd/3c3372cffb0076a014a2ec0acdd23bbb#file-comment-cs">View source on gist.github.com</a></noscript>

# Installation

## Stylus (and other UserStyle managers)

Copy the `.css` snippet and paste it into [Stylus](https://add0n.com/stylus.html) or some other UserStyle manager of choice.
You can also install it directly from [userstyles.world](https://userstyles.world/style/9802/widegpt).

## TamperMonkey (and other UserScript managers)
To install via [TamperMonkey](https://tampermonkey.net/), simply [click here](https://gist.githubusercontent.com/apkd/3c3372cffb0076a014a2ec0acdd23bbb/raw/widegpt.user.js).
Otherwise, you can paste the `.user.js` snippet above into a new script in your favorite UserScript manager.

# Other tips

- The *Enable chat history* button is **pretty much purposefully designed to trick you into accidentally clicking it**. To hide it, append this to the injected stylesheet: `.w-full.mt-4.btn-primary.relative.btn:has(svg) { display: none; }`{{site.code.css}}
- You can install the website "as an app" in browsers such as [Edge](https://support.microsoft.com/en-us/topic/install-manage-or-uninstall-apps-in-microsoft-edge-0c156575-a94a-45e4-a54f-3a84846f6113), [Chrome](https://support.google.com/chrome_webstore/answer/3060053) and [Brave](https://community.brave.com/t/install-site-as-an-app/155891/2). This will let you easily access it from your system menu and run it separately from your browser.
- I'll try to keep this code updated as the site layout changes.

Enjoy!
