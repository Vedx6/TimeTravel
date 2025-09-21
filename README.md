# TimeWarp Commits

Time Change tool
---

## Overview

**TimeWarp Commits** is a Node.js script that generates multiple Git commits with timestamps set in the past. This allows you to visually demonstrate consistent activity on your GitHub profile over a custom time period.

The script uses `moment` for flexible date manipulation, `simple-git` for seamless Git operations, and `jsonfile` to update a data file with each commit.

---

## Why?

I wanted to learn how Git tracks commits and how to manipulate commit history for fun and learning.


## Features

- Create multiple backdated commits automatically.
- Customize the number of commits and the date range.
- Fully automated add, commit, and push process.
- Ideal for portfolio demonstration or learning Git internals.

  ## How it works

The script writes a JSON file and commits it multiple times with different dates, creating a consistent-looking GitHub contribution graph.

## Future Improvements

- Add more complex commit messages
- Create a GUI for easier use
- Support for different date ranges and patterns


---

## WARNING ⚠️

This script is purely for fun and learning. Don’t use it to fool recruiters or in professional settings. Time travel is not real (yet).  

---

*Project created by Vedx6, the Master of Time and Commits*  
[GitHub Profile](https://github.com/Vedx6) | vedanttt06@gmail.com

## Installation

```bash
git clone https://github.com/Vedx6/TimeChanger.git
cd TimeChanger
npm install

