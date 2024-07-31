import React from "react";

export default function ServiceGrid() {
  const services = [
    {
      title: "Unique Web Design",
      description:
        "We create customized websites designed to meet the unique needs of healthcare providers. Our team works closely with you to ensure your website reflects your brand, engages your audience, and provides a seamless user experience.",
      content: [
        {
          bold: "Custom Design:",
          text: "Unique designs customized to your brand and services.",
        },
        {
          bold: "User-Friendly Interface:",
          text: "Easy navigation to enhance user experience.",
        },
        {
          bold: "Brand Consistency:",
          text: "Ensuring your site reflects your practice’s identity.",
        },
        {
          bold: "Advanced Features:",
          text: "Integration of appointment booking, patient portals, and more.",
        },
      ],
    },
    {
      title: "Mobile-Friendly, Responsive Design",
      description:
        "In today’s digital age, a mobile-friendly website is essential. Our designs are fully responsive, ensuring your site looks and functions perfectly on any device, from desktops to smartphones.",
      content: [
        {
          bold: "Cross-Device Compatibility:",
          text: "Ensures your site works on all devices.",
        },
        {
          bold: "User Experience:",
          text: "Enhanced navigation and usability on mobile devices.",
        },
        {
          bold: "SEO Benefits:",
          text: "Improved rankings in mobile search results.",
        },
        {
          bold: "Future-Proof:",
          text: "Designs that adapt to new devices and screen sizes.",
        },
      ],
    },
    {
      title: "Expert SEO Services",
      description:
        "Get found by patients and clients with our expert SEO services. We use the latest techniques to improve your search engine rankings, driving more organic traffic to your site and increasing your visibility.",
      content: [
        {
          bold: "Keyword Optimization:",
          text: "Targeting relevant keywords for your services.",
        },
        {
          bold: "On-Page SEO:",
          text: "Optimizing content, meta tags, and headers.",
        },
        {
          bold: "Off-Page SEO:",
          text: "Building quality backlinks and improving domain authority.",
        },
        {
          bold: "Local SEO:",
          text: "Enhancing your visibility in local searches.",
        },
      ],
    },
    {
      title: "Medical Copywriting",
      description:
        "Quality content is crucial for engaging your audience and building trust. Our team of professional medical copywriters creates informative, accurate, and compelling content tailored to your audience.",
      content: [
        {
          bold: "Engaging Content:",
          text: "Articles, blogs, and website content.",
        },
        {
          bold: "Accuracy:",
          text: "Ensuring medical information is precise and reliable.",
        },
        {
          bold: "SEO-Friendly:",
          text: "Optimized content to improve search engine rankings.",
        },
        {
          bold: "Patient Education:",
          text: "Informative content that educates and engages.",
        },
      ],
    },
    {
      title: "Logo Design",
      description:
        "Your logo is the face of your brand. We design memorable and professional logos that capture the essence of your healthcare practice and make a lasting impression.",
      content: [
        {
          bold: "Unique Designs:",
          text: "Custom logos tailored to your brand.",
        },
        {
          bold: "Professional Quality:",
          text: "High-resolution designs for all uses.",
        },
        {
          bold: "Brand Identity:",
          text: "Logos that reflect your practice’s values and services.",
        },
        {
          bold: "Versatility:",
          text: "Suitable for websites, print materials, and more.",
        },
      ],
    },
    {
      title: "Hosting and Maintenance",
      description:
        "Focus on your patients while we take care of your website. Our hosting and maintenance services ensure your site is fast, secure, and always up-to-date.",
      content: [
        {
          bold: "Reliable Hosting:",
          text: "Secure and fast hosting solutions.",
        },
        {
          bold: "Regular Updates:",
          text: "Keeping your site updated with the latest features.",
        },
        { bold: "Security:", text: "Implementing robust security measures." },
        { bold: "Support:", text: "24/7 technical support for any issues." },
      ],
    },
    {
      title: "Social Media Management",
      description:
        "Engage with your community and grow your online presence with our social media management services. We create and manage content that resonates with your audience and boosts your brand.",
      content: [
        { bold: "Content Creation:", text: "Engaging posts and updates." },
        {
          bold: "Account Management:",
          text: "Handling multiple social media platforms.",
        },
        {
          bold: "Audience Engagement:",
          text: "Interacting with followers and responding to queries.",
        },
        {
          bold: "Analytics:",
          text: "Monitoring and reporting social media performance.",
        },
      ],
    },
    {
      title: "Speed Optimization",
      description:
        "A fast website improves user experience and boosts your search engine ranking. We optimize your site’s speed, ensuring it loads quickly and efficiently.",
      content: [
        {
          bold: "Performance Analysis:",
          text: "Identifying and fixing speed issues.",
        },
        {
          bold: "Code Optimization:",
          text: "Cleaning and optimizing your website’s code.",
        },
        {
          bold: "Image Compression:",
          text: "Reducing image sizes without compromising quality.",
        },
        {
          bold: "Caching Solutions:",
          text: "Implementing effective caching strategies.",
        },
      ],
    },
    {
      title: "Analytics and Reporting",
      description:
        "Understand your website’s performance with our comprehensive analytics and reporting services. We provide detailed insights into your site’s traffic, user behavior, and more, helping you make informed decisions.",
      content: [
        {
          bold: "Traffic Analysis:",
          text: "Monitoring visitor numbers and sources.",
        },
        {
          bold: "User Behavior:",
          text: "Analyzing how visitors interact with your site.",
        },
        {
          bold: "Performance Metrics:",
          text: "Tracking key performance indicators (KPIs).",
        },
        {
          bold: "Regular Reports:",
          text: "Detailed reports to guide your strategy.",
        },
      ],
    },
    {
      title: "E-commerce Solutions",
      description:
        "Expand your services online with our e-commerce solutions. We build secure, user-friendly online stores tailored to healthcare providers, making it easy for patients to purchase products and services.",
      content: [
        {
          bold: "Custom Online Stores:",
          text: "E-commerce sites tailored to your needs.",
        },
        {
          bold: "Secure Transactions:",
          text: "Implementing robust payment gateways.",
        },
        {
          bold: "User-Friendly Design:",
          text: "Easy navigation and checkout process.",
        },
        {
          bold: "Inventory Management:",
          text: "Real-time tracking and management.",
        },
      ],
    },
    {
      title: "Appointment Scheduling Systems",
      description:
        "Streamline your booking process with our integrated appointment scheduling systems. We develop easy-to-use platforms that allow patients to book appointments online, reducing administrative burden and improving patient satisfaction.",
      content: [
        {
          bold: "Online Booking:",
          text: "Convenient and accessible for patients.",
        },
        {
          bold: "Automated Reminders:",
          text: "Reducing no-shows with automated notifications.",
        },
        {
          bold: "Calendar Integration:",
          text: "Syncing with your existing calendar systems.",
        },
        {
          bold: "Custom Features:",
          text: "Tailored to your specific scheduling needs.",
        },
      ],
    },
    {
      title: "Patient Portal Development",
      description:
        "Enhance patient engagement and satisfaction with custom patient portals. We create secure, user-friendly portals that allow patients to access their health information, communicate with providers, and manage their appointments.",
      content: [
        {
          bold: "Secure Access:",
          text: "Protecting patient data with robust security measures.",
        },
        {
          bold: "User-Friendly Interface:",
          text: "Easy for patients to navigate and use.",
        },
        {
          bold: "Comprehensive Features:",
          text: "Access to health records, appointment scheduling, and more.",
        },
        {
          bold: "Customization:",
          text: "Tailored to your practice’s needs and branding.",
        },
      ],
    },
  ];
  return (
    <div className="grid w-full gap-5 md:grid-cols-2">
      {services.map((item, index) => {
        return (
          <div
            key={index}
            className="group relative min-h-[150px] cursor-pointer rounded border-x-2 border-sky-500 bg-white p-4"
          >
            <div className="flex flex-col items-start justify-start text-start">
              <h3>{item.title}</h3>
              <p className="text-base font-normal">{item.description}</p>
            </div>
            <div className="absolute left-0 top-0 z-10 flex h-full w-0 items-center justify-start overflow-hidden bg-sky-500 text-white transition-all duration-300 group-hover:w-full">
              <ul className="ml-2 text-transparent transition-all delay-200 group-hover:text-current">
                {item.content.map((item, index) => {
                  return (
                    <li key={index}>
                      <strong>{item.bold}</strong> {item.text}{" "}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
