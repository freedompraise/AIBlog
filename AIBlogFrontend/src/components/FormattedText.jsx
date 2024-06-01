const FormattedText = ({ text }) => {
    const formattedText = text
      .replace(/\*(.*?)\*/g, '<strong>$1</strong>') // Bold
      .replace(/=(.*?)=/g, '<mark>$1</mark>') // Highlighted
      .replace(/_(.*?)_/g, '<em>$1</em>') // Italic
      .replace(/`(.*?)`/g, '<code>$1</code>') // Monospace
      .replace(/\^(.*?)\^/g, '<sup>$1</sup>') // Superscript
      .replace(/~(.*?)~/g, '<sub>$1</sub>') // Subscript
      .replace(/\n/g, '<br />'); // Line breaks
  
    return <div dangerouslySetInnerHTML={{ __html: formattedText }} />;

}

export default FormattedText;