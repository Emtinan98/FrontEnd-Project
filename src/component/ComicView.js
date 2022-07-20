import React from "react";
import ComicViewer from "react-comic-viewer";

function ComicView() {
  return (
    <ComicViewer pages={['https://cdn-icons-png.flaticon.com/128/8058/8058225.png','https://cdn-icons-png.flaticon.com/128/8058/8058222.png','https://cdn-icons-png.flaticon.com/128/8058/8058232.png']} />
  );
}

export default ComicView;