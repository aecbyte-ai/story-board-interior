import Hero from "../components/ContactHero";
import FormSection from "../components/FormSection";
import { useEffect, useState } from "react";
import axios from "axios";

const formConfig = {
  fields: [
    { name: "fullName", type: "text", placeholder: "Your Full Name" },
    { name: "email", type: "email", placeholder: "Your Email" },
    { name: "phone", type: "tel", placeholder: "Your Phone Number" },
    { name: "projectLocation", type: "text", placeholder: "Project Location" },
    {
      name: "projectType",
      type: "select",
      placeholder: "Select Project Type",
      options: ["Residential", "Commercial"],
    },
    { name: "message", type: "textarea", placeholder: "Your Message" },
    { name: "file", type: "file" },
  ],
  submitButton: "Send Enquiry",
};

interface StudioType {
  name: string;
  imageUrl: string;
  location: string;
}
export default function Main() {
  const [data, setData] = useState<any>(null);
  const [studio, setStudio] = useState<StudioType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudio = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/contacts/studios"
        );

        setStudio(res.data[0]);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchStudio();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/contacts");
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;
  return (
    <div className="main-container w-full min-h-screen bg-[#fff] relative overflow-hidden">
      {/* Hero Section */}
      <Hero />
      <FormSection formData={data?.form || formConfig} />

      <section className="w-full px-4 sm:px-6 lg:px-20 py-12">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#746b5f] mb-6">
            Find Our Studio
          </h2>
          <div
            className="w-full h-[250px] sm:h-[300px] lg:h-[377px] bg-cover bg-center bg-no-repeat rounded-lg"
            style={{ backgroundImage: `url(${studio?.imageUrl})` }}
          ></div>
          <p className="mt-4 text-[#746b5f] font-medium">{studio?.location}</p>
        </div>
      </section>
    </div>
  );
}
