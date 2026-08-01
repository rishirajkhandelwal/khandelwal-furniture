import { siteConfig } from "../constants/siteConfig";

export const getWhatsAppLink = (product) => {
const message = `Hi Khandelwal Furniture,

I'm interested in the *${product.name}*.

Could you please share:

• Latest Price
• Available Colours
• Delivery & Installation Details
• Estimated Delivery Time

Thank you!`;

  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    message
  )}`;
};