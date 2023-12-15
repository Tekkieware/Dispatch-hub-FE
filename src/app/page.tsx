import { Fragment } from "react";
import {
  AboutUsSection,
  DispatchHubSection,
  DownloadSection,
  FaqsSection,
  Footer,
  HeroSection,
  Navbar,
  ServicesSection,
} from "./features";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <HeroSection />

      <DispatchHubSection />

      <ServicesSection />

      <AboutUsSection />

      <DownloadSection />

      <FaqsSection items={items} />

      <Footer />
    </Fragment>
  );
}

const items = [
  {
    title: "How does your delivery service work?",
    description:
      "delivery service allows customers to book a dispatch rider for seamless delivery of their goods. You can request a rider, track the delivery process in real time, and even choose between a cab or a bike based on the size of your goods",
  },
  {
    title: "What areas do you serve?",
    description:
      "We currently serve a wide range of areas, ensuring that our delivery platform caters to customers across various locations",
  },
  {
    title: "What types of goods/services do you deliver?",
    description:
      "Our platform delivers a diverse range of goods and services, offering flexibility to accommodate various customer needs",
  },
  {
    title: "How much does delivery cost?",
    description:
      "The delivery cost depends on factors such as distance and the type of service selected. You can find detailed pricing information on our platform",
  },
  {
    title: "Can I track my delivery in real-time?",
    description:
      "Yes, you can track your delivery in real time, providing you with live updates on the current location of your dispatch rider",
  },
  {
    title: "What are your delivery hours?",
    description:
      "Our delivery hours are designed to be convenient for our customers, with service availability during specified hours. Check our platform for the most accurate and up-to-date information",
  },
  {
    title: "How can I place an order?",
    description:
      "Booking a ride is simple. Just log in to our platform, select your pick-up and delivery locations, choose the type of service, and confirm your order. It's a hassle-free process",
  },
  {
    title: "What payment methods do you accept?",
    description:
      "We accept various payment methods, including wallet payments for added convenience. Choose the option that suits you best, ensuring a smooth and secure transaction experience",
  },
];
