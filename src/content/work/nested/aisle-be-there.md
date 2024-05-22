---
title: Aisle Be There
publishDate: 2024-04-01 00:00:00
img: /assets/aisle-be-there-home-image.png
img_alt: Image of Aisle Be There homepage with site description
description: |
  We developed a client-side smart shopping app that uses an algorithm to sort items by how frequently the user needs them.
tags:
  - React
  - JavaScript
  - HTML/CSS
  - Firebase
---

During my internship at [The Collab Lab](https://the-collab-lab.codes/), I built [Aisle Be There](https://tcl-69-smart-shopping-list.web.app/) a “smart” shopping list app that learns your buying habits and helps you remember what you’re likely to need to buy on your next shopping trip. The app was built [collaboratively](https://github.com/amalyam/aisle-be-there/blob/main/CONTRIBUTORS.md) with a fully-distributed team of 4 devs and 3 mentors, using Firebase, React, JavaScript, NodeJS, HTML, and CSS. Firebase was used for authentication and storage. The app was buit with an emphasis on accessibility, and we followed Agile methodologies. Over the course of this experience, I contributed to 14 merged pull requests and averaged 5-6 hours of pair programming per week.

Check out the code [here](https://github.com/amalyam/aisle-be-there/tree/main)

##### How does it work?

As a user, you can create new lists and enter items (e.g., “Greek yogurt” or “Paper towels”) into your lists. Each time you buy an item, you mark it as purchased. Over time, the app comes to understand the intervals at which you buy different items. If an item is likely to be due to be bought soon, it rises to the top of the shopping list. [Explore](https://tcl-69-smart-shopping-list.web.app/) it yourself.

##### Features:

<div class="ml-5">
  <li>create and delete lists</li>
  <li>add and delete items from lists</li>
  <li>share lists with other users</li>
  <li>mark items by how soon they will be needed</li>
  <li>mark items as purchased</li>
  <li>have items sorted by an algorithm based on how frequently they will be needed</li>
</div>

##### Future enhancements

<div class="ml-5">
<li>caching users' lists for performance</li>
<li>provide a way for users to see who a list is currently shared with by adding a flag to mark lists that have been shared (such as with a chip noting the other user’s name next to the list name) or clicking a button to see all users who the list has been shared to</li>
<li>reformatting the items list page for better clarity, such as placing item urgency alongside each item rather than having separated categories</li>
<li>add the ability to uncheck an item (modify the function to check off an item to first save the item's date info in Firebase so that the data can be reverted)</li>
<li>adding dark/light mode toggle</li>
</div>
