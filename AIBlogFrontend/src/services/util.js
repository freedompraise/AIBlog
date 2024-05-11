export const getFooterHeight = () => {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      return footerElement.offsetHeight;
    } else {
      return 0; 
    }
  };

  