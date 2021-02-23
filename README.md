# Sorting Algorithm Visualizer

## Table of Contents

- [Contributors](#contributors)
- [Installation](#installation)
- [Deployed Link](#deployed-link)
- [Summary](#summary)
  - [Setting Up the Sort](#setting-up-the-sort)
  - [Sort!](#sort!)
  - [Example Algorithms](#example-algorithms)
  - [Info Page](#info-page)

## Contributors

<a href="https://github.com/dyson1602" >Christopher Michael Clark</a> & <a href="https://github.com/mkoenke" >Mary Rachael Koenke</a>

## Installation

If you wish to install on your local machine, first fork and clone the repo.
After you have completed cloning, simply run the following `npm` commands to get
it running on a local server:

npm

```
$ cd <app's main directory>
$ npm install
$ npm start
```

## Deployed Link

Click <a href="https://dyson1602.github.io/sorting-visualizer/" >here</a> to vist our app in your browser and play around with
it before installation.

## Summary

### Setting Up the Sort

<img src="./src/images/SetUp.gif" />

When the user first lands on Sorting Algorithm Visualizer they are met with a
series of options. There is a **_sliding bar_** that allows the user to change the
amount of elements in the array. The **_toggle_** next to the slide changes the visual
style from a **_bar-style_** to a **_gradient style_**. The bar length and gradient shade
are randomly generated every time the user changes the array size or clicks
`Generate New Array`.
<br/>

### Sort!

<img src="./src/images/InsertionSortRM.gif" />

The user can then select a sorting algorithm method from the choices in the tool bar.
Once a selection has been made a `Sort!` button will appear next to the `Generate New Array`
button. Upon clicking it the algorithm will begin to go to work. During this time
all other options are muted except for the **_style toggle_**, the Algorithm Info link,
and the <a href="https://mkoenke.github.io/pathfinding-visualizer/">Pathfinding Algorithm Visualizer</a> link.
<br/>

### Example Algorithms

#### Merge Sort

<img src="./src/images/MergeSortRM.gif" />

#### Radix Sort

<img src="./src/images/RadixSort.gif" />

### Info Page

<img src="./src/images/InfoPage.gif" />

When the user clicks **_Algorithm Info_** they are directed to a separate page.
This page has a series of cards that the user can click on to display information
about each algorithm. The information includes time complexity, space complexity, and psuedocode desciptions as to how the algorithm functions.
