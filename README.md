[![Build status](https://img.shields.io/travis/jbrudvik/selection-stats.svg)](https://travis-ci.org/jbrudvik/selection-stats)
[![Bower version](http://img.shields.io/bower/v/selection-stats.svg)](https://github.com/jbrudvik/selection-stats)

- [selectionStats](#selectionstats)
- [selectionStats.wordCount()](#selectionstatswordcountselectionselection)
- [selectionStats.characterCount()](#selectionstatscharactercountselectionselection)

## selectionStats

Utilities for calculating statistics about selections

## selectionStats.wordCount(selection:Selection)

Return the number of words in a selection

## selectionStats.characterCount(selection:Selection)

Return the number of characters in a selection

# Development

## Generate documentation

    $ npm install -g dox
    $ ./generate-docs > README.md

## Deploy

Where X.Y.Z is the new version number:

    $ git tag -a vX.Y.Z
    $ git push --tags
