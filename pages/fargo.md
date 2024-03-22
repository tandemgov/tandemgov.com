---
layout: layouts/base.njk
title: Fargo
slug: fargo
seo_description: Fargo - a bot that loves federal procurement
tags: footer
permalink: /fargo.html
footerLabel: Fargo
sectionColor: white
preview_image: TandemGov-Fargo-Preview.png
---
<header class="content-header grid-row">
    <div class="grid-col-auto">
        <img src="/assets/images/fargo-bot.png" class="fargo-avatar">
    </div>
    <div class="grid-col">
        <h1 class="fargo-header">Fargo</h1>
    </div>
</header>

## What is Fargo?

_Fargo is a bot that loves federal procurement_

Fargo is a Slack app designed to help government contractors easily find and research information related to working with the U.S. federal government.

## Artificial Intelligence / Machine Learning Usage Disclosure

We use large-language models for two fargo commands: (1) `far`; and (2) `opps`.

With `far`, we rely on a customized prompt and use ChatGPT to summarize the FAR provisions. Although we have found that this summary is fairly effective for internal daily use, it is not a substitute for experienced judgment of acquisition professionals and is not legal advice.

With `opps`, we rely on [embeddings](https://simonwillison.net/2023/Oct/23/embeddings/) to help identify semantically similar opportunities. We are still evaluating the effectiveness of using "hybrid search" (a combination of keywords and semantic similarity) for searching opportunities. We don't know if they work well, or better or worse than any alternatives, but they have so far proven interesting.

