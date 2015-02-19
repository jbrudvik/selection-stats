
(function(window, undefined) {

  /**
   * Utilities for calculating statistics about selections
   */
  var selectionStats = {};
  window.selectionStats = selectionStats;

  /**
   * Return the number of words in a selection
   *
   * @param {Selection} selection
   */
  selectionStats.wordCount = function (selection) {
    var text = selection.toString();
    return stringStats.wordCount(text);
  };

  /**
   * Return the number of characters in a selection
   *
   * @param {Selection} selection
   */
  selectionStats.characterCount = function (selection) {
    var text = selection.toString();
    var count = stringStats.characterCount(text);

    // Fix naive count in corner cases

    var anchorNode = selection.anchorNode; // node containing start of selection
    var focusNode = selection.focusNode; // node containing end of selection

    // If focus node is a text node, considerly slightly more accurate counting approaches
    if (focusNode.nodeType === Node.TEXT_NODE) {

      // If the anchor node and the focus node are the same, the count of words
      // selected is the absolute difference of the anchor and focus offsets
      if (anchorNode === focusNode) {
        return Math.abs(selection.focusOffset - selection.anchorOffset);
      }

      // If focus node follows anchor node, selection.toString() sometimes includes
      // trailing whitespace even if it isn't selected. Decrease count by one if there
      // is a discrepancy with focusOffset.
      if (anchorNode.compareDocumentPosition(focusNode) & Node.DOCUMENT_POSITION_FOLLOWING) {
        if (focusNode.data[selection.focusOffset - 1] !== text[text.length - 1]) {
          return count - 1;
        }
      }

      // If focus node trails anchor node, selection.toString() sometimes fails
      // to include leading whitespace, even if it selected. Increase count by
      // one if there is a discrepancy with focusOffset.
      if (focusNode.compareDocumentPosition(anchorNode) & Node.DOCUMENT_POSITION_FOLLOWING) {
        var leadingCharacter = focusNode.data[selection.focusOffset];
        if (leadingCharacter && leadingCharacter !== text[0] && leadingCharacter === ' ') {
            return count + 1;
        }
      }
    }

    return count;
  };

})(this);
