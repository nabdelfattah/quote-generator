import React, { useEffect } from "react";
export default function SharePost(props) {
  const { icon, type, text } = props;

  function sharePost() {
    let url = "";
    switch (type) {
      case "x":
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          text
        )}`;
        break;
      case "Telegram":
        url = `https://t.me/share/url?url=${encodeURIComponent(text)}`;
        break;
      case "Whatsapp":
        url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
        break;
      default:
        return;
    }
    if (url) window.open(url, "_blank");
  }
  return (
    <button className="socialBtn" aria-label={type} onClick={sharePost}>
      <img className="icon" src={icon} alt={`icon of ${type}`} />
    </button>
  );
}
