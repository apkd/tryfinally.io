---
layout: post
title: "Snippet: C# version of `SquirrelNoise5`"
excerpt: "High-performance stateless noise/hash functions written by Squirrel Eiserloh. Useful for procedural generation and noise generation."
thumbtext: "SquirrelNoise5.cs"
image: assets/img-min/social/NDUjrvZKMeE.webp
categories: []
tags: [unity, csharp]
author: apkd
series: false
featured: false
hidden: false
contributors: [SquirrelEiserloh]
---

Originally published [here by Squirrel Eiserloh](https://twitter.com/SquirrelTweets/status/1421251894274625536).

In short, these functions return random-looking numbers based on an integer position and seed. And they're super fast.
You can use these for procedural generation, or for anything else that needs a bit of (stateless and reproducible) randomness.

I changed the API a little, grouping the functions by return type - hope you don't mind.

Recommended talks by the author:
- [Math for Game Programmers: Noise-Based RNG](https://youtu.be/LWFzPP8ZbdU)
- [Math for Game Programmers: Fast and Funky 1D Nonlinear Transformations](https://youtu.be/mr5xkf6zSzk)
- [Math for Game Programmers: Juicing Your Cameras With Math](https://youtu.be/tu-Qe66AvtY)
- [Math for Game Programmers: Randomness in Games](https://www.gdcvault.com/play/1020648/Math-for-Game-Programmers-Random)

# Source

<code data-gist-hide-footer="false" data-gist-id="eb733523bee790c3b15e9aac39713ef8"></code>
<noscript><a href="https://gist.github.com/apkd/eb733523bee790c3b15e9aac39713ef8#file-comment-cs">View source on gist.github.com</a></noscript>
