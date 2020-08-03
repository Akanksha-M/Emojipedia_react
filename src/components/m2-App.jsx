import React from "react";
import Entry from "./Entry";
import Emoji from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {Emoji.map(emojipedia => (
          <Entry
            key={emojipedia.id}
            icon={emojipedia.emoji}
            name={emojipedia.name}
            meaning={emojipedia.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
