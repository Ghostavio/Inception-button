function parp() {
  const background = chrome.extension.getURL('x-files.mp3');
  const audio = new Audio(background);

  audio.play();
  return audio;
}

chrome.browserAction.onClicked.addListener(parp);
