function shareLink(title, text, url){
  navigator.share({
    title: title,
    text: text,
    url: url,
  });
}