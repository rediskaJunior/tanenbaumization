const replacementImageURL = chrome.runtime.getURL("photo.jpg");

function replaceImages(node = document) {
    const images = node.querySelectorAll("img");
    images.forEach(img => {
      img.src = replacementImageURL;
      img.srcset = ""; 
    });
  }
    replaceImages();
    const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeName === "IMG") {
          node.src = replacementImageURL;
          node.srcset = "";
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          replaceImages(node);
        }
      });
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });