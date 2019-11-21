function largestWord(phrase) {
  // We setup a negated regex to filter out special characters
  const regex = /([^A-Za-z\s])*/g;
  const filteredPhrase = phrase.replace(regex, "");

  const words = filteredPhrase.split(" ");
  if (words.length > 0) {
    // Order words by length, descending order
    words.sort((a, b) => b.length - a.length);

    return words[0];
  }
  return null;
}

console.log(largestWord("The quick brown fox!!!$$"));
