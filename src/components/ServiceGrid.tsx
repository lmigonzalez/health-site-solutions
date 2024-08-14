import React from "react";
import Link from "next/link";
export default function ServiceGrid() {
  const services = [
    {
      url: "design",
      title: "Unique and Modern Design",
      description:
        "Our team crafts designs that are not only visually stunning but also reflect your brand’s identity. Each design is unique, ensuring your website stands out from the competition.",
    },

    {
      url: "responsive-layout",
      title: "Responsive Layout",
      description:
        "We ensure your website looks great on any device, whether it's a smartphone, tablet, or desktop computer. This means your customers will have a seamless experience, no matter how they access your site.",
    },
    {
      url: "speed-optimization",
      title: "Speed Optimization",
      description:
        "A fast website keeps visitors happy and improves your ranking in search engines. We optimize your website’s speed, so pages load quickly, keeping users engaged and reducing bounce rates.",
    },
    {
      url: "secure-website",
      title: "Secure Website",
      description:
        "Security is a top priority. We implement the latest security measures to protect your site from threats, ensuring your data and your customers’ information are safe.",
    },
    {
      url: "seo",
      title: "SEO",
      description:
        "Search Engine Optimization (SEO) helps your website rank higher in search engine results, making it easier for potential customers to find you. We use proven strategies to boost your visibility online.",
    },
    {
      url: "expert-copywriting",
      title: "Expert Copywriting",
      description:
        "The right words can make a big difference. Our copywriting service ensures your website’s content is clear, compelling, and tailored to your audience, helping you communicate your message effectively.",
    },
    {
      url: "logo-design",
      title: "Logo Design Included",
      description:
        "If you don’t have a logo or need a refresh, we’ve got you covered. We create or integrate a logo that perfectly represents your brand and fits seamlessly with your website’s design.",
    },
    {
      url: "scheduling-integration",
      title: "Scheduling Integration",
      description:
        "Make it easy for your customers to book appointments directly through your website. We integrate user-friendly scheduling tools that sync with your calendar, simplifying the booking process.",
    },
    {
      url: "live-chat",
      title: "Live Chat",
      description:
        "Engage with your website visitors instantly with our live chat feature. Answer questions in real time, provide support, and guide potential customers, improving their experience and increasing conversions.",
    },
    {
      url: "hosting-maintenance",
      title: "Hosting and Maintenance",
      description:
        "We handle all the technical aspects, including hosting your website and keeping it updated. This means your website stays live and runs smoothly, with no hassle for you.",
    },
    {
      url: "social-media",
      title: "Social Media Management",
      description:
        "We help you stay active on social media by managing your profiles, posting regular updates, and engaging with your audience. This keeps your brand in the spotlight and connected with your customers.",
    },
    {
      url: "analytics",
      title: "Analytics and Reporting",
      description:
        "Understand how your website is performing with our detailed yet easy-to-read reports. We track important metrics like visitor numbers, page views, and conversion rates, so you can see what’s working and where to improve.",
    },
  ];
  return (
    <div className="custom-space grid w-full gap-5 px-6 md:grid-cols-2 md:px-0">
      {services.map((item, index) => {
        return (
          <Link href={`/services/${item.url}`} key={index}>
            <div className="group relative min-h-[150px] cursor-pointer rounded border-x-2 border-sky-500 bg-white p-4 transition-all hover:shadow-xl">
              <div className="flex flex-col items-start justify-start text-start">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-base font-normal">{item.description}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
