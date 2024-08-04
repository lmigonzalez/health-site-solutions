import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export default function FAQ() {
  const data = [
    {
      title: "How long does it take to develop a website?",
      description:
        "The timeline for developing a website can vary depending on the complexity and specific requirements of your project. On average, a basic website can take 4-6 weeks, while more complex projects may take 8-12 weeks. We work closely with our clients to establish a realistic timeline that meets their needs.",
    },
    {
      title: "What is included in the Basic Plan?",
      description:
        "Our Basic Plan includes a fully responsive website, speed optimization, on-page SEO, up to 5 pages, and hosting. This plan is ideal for small practices or startups looking to establish a professional online presence.",
    },
    {
      title: "Can I upgrade my plan later?",
      description:
        "Yes, you can upgrade your plan at any time. Whether you need more pages, additional features, or enhanced services, we offer flexible options to scale your website as your practice grows.",
    },
    {
      title: "Do you provide content creation services?",
      description:
        "Yes, we offer professional medical copywriting services as part of our plans. Our team of experienced writers can create engaging and informative content tailored to your target audience, ensuring your website effectively communicates your message.",
    },
    {
      title: "How do you ensure my website is secure?",
      description:
        "We prioritize security by implementing robust measures, including regular security updates, performance monitoring, and secure hosting solutions. Our maintenance and hosting plan also includes continuous monitoring and regular backups to protect your website from threats.",
    },
    {
      title: "What is SEO and why is it important for my website?",
      description:
        "SEO (Search Engine Optimization) is the practice of optimizing your website to rank higher in search engine results. This is important because it increases your visibility, drives more organic traffic to your site, and helps attract new patients. Our expert SEO services include both on-page and off-page optimization to improve your website’s search engine rankings.",
    },
    {
      title: "What kind of support do you offer after the website is launched?",
      description:
        "We provide ongoing support and maintenance to ensure your website continues to perform optimally. Our services include regular updates, technical support, performance monitoring, and content updates. You can rely on us to keep your website running smoothly and efficiently.",
    },
    {
      title:
        "Can you integrate appointment scheduling and patient portals into my website?",
      description:
        "Yes, we specialize in integrating various features such as appointment scheduling systems and patient portals. These tools streamline the booking process and enhance patient engagement by providing secure access to health information and communication tools.",
    },
    {
      title:
        "What if I need a custom solution not covered in your standard plans?",
      description:
        "We offer custom plans tailored to meet your unique needs. If our standard plans do not cover your specific requirements, please contact us to discuss a custom solution. We can create a plan that addresses your unique challenges and goals.",
    },
    {
      title: "How do I get started with Health Web Experts?",
      description:
        "Getting started is easy. Simply contact us to schedule an initial consultation. We’ll discuss your needs, goals, and challenges, and develop a tailored plan to enhance your online presence. We look forward to partnering with you to create a powerful and effective website for your healthcare practice.",
    },
  ];
  return (
    <div className="page-w custom-space px-6">
      <div className="mb-5 text-center">
        <h2 className="text-3xl font-bold">
          Frequently Asked Questions (FAQs)
        </h2>
        <h3 className="text-lg font-semibold">
          Answers to Common Inquiries About Our Services
        </h3>
      </div>

      <Accordion type="single" collapsible>
        {data.map((item, index) => {
          return (
            <AccordionItem key={index} value={item.title}>
              <AccordionTrigger className="text-start">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-start">
                {item.description}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
