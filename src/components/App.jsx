import React from "react";
import Entry from "./Entry";
import Emoji from "../emojipedia";

function createCard(emojipedia) {
  return (
    <Entry
      key={emojipedia.id}
      icon={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{Emoji.map(createCard)}</dl>
    </div>
  );
}

export default App;
