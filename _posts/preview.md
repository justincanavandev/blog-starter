---
title: "Preview Mode for Static Generation"
excerpt: "In this article, we will discuss how to implement preview mode in Next.js to allow content creators to see changes before they are published."
coverImage: "/assets/blog/preview/cover.jpg"
date: "2020-03-16T05:35:07.322Z"
author:
  name: Joe Haddad
  picture: "/assets/blog/authors/joe.jpeg"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

In this article, we will discuss how to implement preview mode in Next.js to allow content creators to see changes before they are published. Preview mode is a powerful feature that enables you to view draft content directly on your site without affecting the live version.

When using static generation, the content is generated at build time. However, with preview mode, you can bypass this and fetch draft content from your CMS or data source. This is particularly useful for content-heavy applications where changes are frequent.

## How Preview Mode Works

To enable preview mode in Next.js, you typically set up an API route that activates preview mode. This route will set a cookie in the user's browser, allowing the application to fetch draft content instead of the static content.

Here’s a simple example of how to implement preview mode:
