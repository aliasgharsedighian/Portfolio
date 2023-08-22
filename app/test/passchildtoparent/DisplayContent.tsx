import React from "react";

interface pageProps {
  search: string;
  greaterthan: number;
  lessthan: number;
}

function DisplayContent({ search, greaterthan, lessthan }: pageProps) {
  return (
    <div>
      <p>Display Content</p>
      <p>Search: {search}</p>
      <p>Greaterthan: {greaterthan}</p>
      <p>Lessthan: {lessthan}</p>
    </div>
  );
}

export default DisplayContent;
