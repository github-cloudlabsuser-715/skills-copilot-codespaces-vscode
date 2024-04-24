import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('type markdown here');

  return (
    <div>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );let data = [
  [{ name: 'John', age: 30 }],
  [{ name: 'Jane', age: 25 }],
  [{ name: 'Bob', age: 35 }],
];

let names = data.flatMap(subArray => subArray.map(item => item.name));

console.log(names); // ['John', 'Jane', 'Bob']
}
function reverseSentence(sentence) {
    let words = sentence.split(' ');
    let reversedWords = words.reverse();
    let reversedSentence = reversedWords.join(' ');
    let finalSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1).toLowerCase();
    return finalSentence;
  }
let data = [
  [{ name: 'John', age: 30 }],
  [{ name: 'Jane', age: 25 }],
  [{ name: 'Bob', age: 35 }],
];

let names = data.flatMap(subArray => subArray.map(item => item.name));

console.log(names); // ['John', 'Jane', 'Bob']