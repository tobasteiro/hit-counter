import React from "react";

import { readFile, writeFile } from "../helpers/file-helpers";

const DATABASE_PATH = "/src/database.json";

function Home() {
  const content = JSON.parse(readFile(DATABASE_PATH));
  content.hits += 1;
  writeFile(DATABASE_PATH, JSON.stringify(content));

  return (
    <main>
      <h1>Welcome!</h1>
      <p>You are visitor number {content.hits}.</p>
    </main>
  );
}

export default Home;
