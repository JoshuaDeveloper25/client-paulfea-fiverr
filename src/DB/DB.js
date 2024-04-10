import { v4 as uuidv4 } from "uuid";

export const pricingCards = [
  {
    pricingTitle: `Individual`,
    pricingDetails: [`5 Checks`],
    pricingButton: `Get Started`,
    pricingHighStatus: false,
    id: uuidv4(),
  },

  {
    pricingTitle: `Organization`,
    pricingDetails: [`10 Checks`],
    pricingButton: `Get Started`,
    pricingHighStatus: true,
    id: uuidv4(),
  },

  {
    pricingTitle: `Company`,
    pricingDetails: ["25 Checks"],
    pricingButton: `Get Started`,
    pricingHighStatus: false,
    id: uuidv4(),
  },
];

export const faqs = [
  {
    faqTitle: `Accordion Item #1`,
    faqParagraph: `Let the success make the noise!`,
    faqId: uuidv4(),
  },

  {
    faqTitle: `Accordion Item #2`,
    faqParagraph: `Don't give up, keep pushing to your dreams!`,
    faqId: uuidv4(),
  },

  {
    faqTitle: `Accordion Item #3`,
    faqParagraph: `Sky is the limit!`,
    faqId: uuidv4(),
  },

  {
    faqTitle: `Accordion Item #4`,
    faqParagraph: `Because of the pingeable principles child's play!`,
    faqId: uuidv4(),
  },
];
