import { v4 as uuidv4 } from "uuid";

export const pricingCards = [
  {
    pricingTitle: `Individual`,
    pricingDesc: `Ideal for businesses looking for essential tools to streamline their operations`,
    pricingChecks: `5 checks`,
    pricingDetails: [
      `Standard AML screening`,
      `Extensive AML screening`,
      `Document check`,
      `Identity & liveness check`,
      `Enhanced identity check`,
      `Multi-bureau check (Global)`,
      `Proof of address check`,
      `Age estimation check`,
      `Log of Checks`,
    ],
    pricingButton: `Start Now`,
    pricingLargeText: `€15`,
    pricingSmallText: `€3/per check`,
    pricingHighStatus: false,
    id: uuidv4(),
  },

  {
    pricingTitle: `Startup`,
    pricingDesc: `For businesses who want more checks`,
    pricingChecks: `25 checks`,
    pricingDetails: [
      `Standard AML screening`,
      `Extensive AML screening`,
      `Document check`,
      `Identity & liveness check`,
      `Enhanced identity check`,
      `Multi-bureau check (Global)`,
      `Proof of address check`,
      `Age estimation check`,
      `Log of Saved Checks`,
    ],
    pricingButton: `Start Now`,
    pricingLargeText: `€60`,
    pricingSmallText: `€2.40/per check`,
    pricingHighStatus: true,
    id: uuidv4(),
  },

  {
    pricingTitle: `Enterprise`,
    pricingDesc: `For growing businesses with higher volume of checks`,
    pricingChecks: `100 checks`,
    pricingDetails: [
      `Standard AML screening`,
      `Extensive AML screening`,
      `Document check`,
      `Identity & liveness check`,
      `Enhanced identity check`,
      `Multi-bureau check (Global)`,
      `Proof of address check`,
      `Age estimation check`,
      `Log of Saved Checks`,
    ],
    pricingButton: `Start Now`,
    pricingLargeText: `€175`,
    pricingSmallText: `€1.75/per check`,
    pricingHighStatus: false,
    id: uuidv4(),
  },
];

export const faqs = [
  {
    faqTitle: `Is the check reliable?`,
    faqParagraph: `Our integration with Complycube ensure that your check is processed in a reliable & trusthworthy procedure. Find out more about Complycube & our integration with them on our About Us page.`,
    faqId: uuidv4(),
  },

  {
    faqTitle: `Can I purchase more checks?`,
    faqParagraph: `Yes! Once you run out of checks simply just go to our Pricing page and purchase a new package. Don't worry, your previous package checks will be saved onto your profile!`,
    faqId: uuidv4(),
  },

  {
    faqTitle: `Will I be charged if check failed?`,
    faqParagraph: `Yes, if the individual or entity you are running a check on fail, then you will lose/be charged for one check.`,
    faqId: uuidv4(),
  },

  {
    faqTitle: `What payment methods do you accept?`,
    faqParagraph: `We accept bank cards for all plans. For higher-volume options please do Contact us and this could be done via bank transfer.`,
    faqId: uuidv4(),
  },
];

export const categoryOptions = [
  {
    text: `General Inquiry`,
    value: `general inquiry`,
    id: uuidv4(),
  },

  {
    text: `Verification Request`,
    value: `verification request`,
    id: uuidv4(),
  },

  {
    text: `High-Volume Requests`,
    value: `high-volume request`,
    id: uuidv4(),
  },

  {
    text: `Technical Support`,
    value: `technical support`,
    id: uuidv4(),
  },

  {
    text: `Billing & Payment Assistance`,
    value: `billing & payment assistance`,
    id: uuidv4(),
  },
];
