const contact = {
  email: "aaronaabril@gmail.com",
  whatsappNumber: "573242439723",
  whatsappMessage: "Hola, quiero agendar una asesoría gratuita para mi negocio.",
};

export function buildWhatsappLink(message) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappLink = buildWhatsappLink(contact.whatsappMessage);

export const mailtoLink = `mailto:${contact.email}`;

export default contact;
