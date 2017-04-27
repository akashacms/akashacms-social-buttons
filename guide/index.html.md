---
layout: plugin-documentation.html.ejs
title: AskashaCMS Social Buttons plugin documentation
---

Most social media websites (Facebook, Twitter, etc) let website authors embed buttons enabling visitors to share their content onto social networks.  We're all chasing that viral content effect, aren't we?  

The `akashacms-social-buttons` makes it easy to add such buttons to your website.

# Installation

Add the following to `package.json`

```
"dependencies": {
    ...
    "akashacms-social-buttons": "akashacms/akashacms-social-buttons#akasharender",
    ...
}
```

The AkashaRender version of `akashacms-social-buttons` has not been published to `npm` yet, and therefore must be referenced this way.

Once added to `package.json` run: `npm install`

# Configuration

Add the following to `config.js`

```
config
    ...
    .use(require('akashacms-social-buttons'))
    ...
```

# Custom Tags


TODO - Have not written this yet.  Study the source code for clues.
