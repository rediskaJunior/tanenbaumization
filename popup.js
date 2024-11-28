document.getElementById("apply").addEventListener("click", () => {
    const imageUrl = document.getElementById("image-url").value;
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "updateImage", url: imageUrl });
    });
  });
  