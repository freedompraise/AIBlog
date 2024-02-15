// FormattedText.jsx
import React from 'react';

const FormattedText = ({ text }) => {
  const formattedText = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
    .replace(/_(.*?)_/g, '<em>$1</em>') // Italic
    .replace(/-(.*?)-/g, '<del>$1</del>') // Strikethrough
    .replace(/=(.*?)=/g, '<mark>$1</mark>') // Highlighted
    .replace(/`(.*?)`/g, '<code>$1</code>') // Monospace
    .replace(/\^(.*?)\^/g, '<sup>$1</sup>') // Superscript
    .replace(/~(.*?)~/g, '<sub>$1</sub>') // Subscript
    .replace(/<(.*?)>/g, '“$1”') // Inline quotes
    .replace(/<small>(.*?)<\/small>/g, '<small-caps>$1</small-caps>') // Small caps
    .replace(/\n/g, '<br />'); // Line breaks

  return <div dangerouslySetInnerHTML={{ __html: formattedText }} />;
};

export default FormattedText;
