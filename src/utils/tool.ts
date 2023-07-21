export const randomColor = () => {
  return `rgba(${Math.floor(Math.random() * (255 - 225)) + 225},
   ${Math.floor(Math.random() * (255 - 225)) + 225}, 
   ${Math.floor(Math.random() * (255 - 225)) + 225}, 0.9)`;
};

export const gradientColor = () => {
  return `linear-gradient(60deg, ${randomColor()} 0%,${randomColor()} 25%, ${randomColor()} 50%,${randomColor()} 75%,${randomColor()} 100%)`;
};
