export const getRandomMessage = () => {
  const messages = [
  "🔥 Mind-blowing movie!",
  "The cinematography was amazing!",
  "That climax twist 🤯",
  "Best movie I've watched this year!",
  "The acting was top notch 👏",
  "Background music was perfect.",
  "Storyline was very engaging.",
  "Not what I expected but still good.",
  "The villain role was outstanding.",
  "Loved every minute of this film ❤️",
  "Could watch this again and again!",
  "The screenplay was brilliant.",
  "Some scenes gave me goosebumps.",
  "The director did a fantastic job.",
  "This deserves an award 🏆",
];
  return messages[Math.floor(Math.random() * messages.length)];
};