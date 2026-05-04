export const generateWhatsAppLink = (carName: string) => {
  const phone = "+212689073517"; 
  const message = `Hello, I want to book the ${carName}.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};