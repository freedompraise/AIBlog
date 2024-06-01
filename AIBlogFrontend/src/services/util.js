export const getFooterHeight = () => {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      return footerElement.offsetHeight;
    } else {
      return 0; 
    }
  };

  
  
export const FormattedText = ({ text }) => {
  const formattedText = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
    .replace(/=(.*?)=/g, '<mark>$1</mark>') // Highlighted
    .replace(/`(.*?)`/g, '<code>$1</code>') // Monospace
    .replace(/\^(.*?)\^/g, '<sup>$1</sup>') // Superscript
    .replace(/~(.*?)~/g, '<sub>$1</sub>') // Subscript
    .replace(/<(.*?)>/g, '“$1”') // Inline quotes
    .replace(/<small>(.*?)<\/small>/g, '<small-caps>$1</small-caps>') // Small caps
    .replace(/\n/g, '<br />'); // Line breaks

  return <div dangerouslySetInnerHTML={{ __html: formattedText }} />;
};

