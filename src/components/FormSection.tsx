import { useState } from "react";
import axios from "axios";

type FormField = {
  name: keyof FormState;
  type: "text" | "email" | "tel" | "textarea" | "select" | "file";
  placeholder?: string;
  options?: string[];
};

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  projectLocation: string;
  projectType: string;
  message: string;
  file: File | null;
};

type FormDataProps = {
  fields: FormField[];
  submitButton: string;
};

interface FormSectionProps {
  formData: FormDataProps;
}

export default function FormSection({ formData }: FormSectionProps) {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    projectLocation: "",
    projectType: "",
    message: "",
    file: null,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, files } = target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const dataToSend = new FormData();
      (Object.keys(form) as (keyof FormState)[]).forEach((key) => {
        const value = form[key];
        if (value !== null) {
          dataToSend.append(
            key,
            value instanceof File ? value : value.toString()
          );
        }
      });

      const res = await axios.post(
        "http://localhost:3000/api/contacts",
        dataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert(res.data.message);
      setForm({
        fullName: "",
        email: "",
        phone: "",
        projectLocation: "",
        projectType: "",
        message: "",
        file: null,
      });
    } catch (err) {
      console.error(err);
      alert("Error submitting enquiry");
    }
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-20 py-12 lg:py-16">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              encType="multipart/form-data"
            >
              {formData.fields.map((field, idx) => {
                if (field.type === "textarea") {
                  return (
                    <textarea
                      key={idx}
                      name={field.name}
                      value={form[field.name] as string}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      rows={4}
                      className="w-full bg-[#f2efe9] border border-[#e0dcd3] rounded-xl px-4 py-3 font-['Manrope'] text-sm sm:text-base text-[#6c6c6c] focus:outline-none focus:border-[#746b5f] transition-colors resize-vertical"
                    />
                  );
                } else if (field.type === "select") {
                  return (
                    <div key={idx} className="relative">
                      <select
                        name={field.name}
                        value={form[field.name] as string}
                        onChange={handleChange}
                        className="w-full h-12 lg:h-[51px] bg-[#f2efe9] border border-[#e0dcd3] rounded-xl px-4 py-3 font-['Manrope'] text-sm sm:text-base text-[#6c6c6c] focus:outline-none focus:border-[#746b5f] transition-colors appearance-none"
                      >
                        <option value="">{field.placeholder}</option>
                        {field.options?.map((opt, i) => (
                          <option key={i} value={opt.toLowerCase()}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                } else if (field.type === "file") {
                  return (
                    <input
                      key={idx}
                      type="file"
                      name="file" // <-- make sure this is exactly "file" for multer
                      onChange={handleChange}
                      className="w-full bg-[#f2efe9] border border-[#e0dcd3] rounded-xl px-4 py-3"
                    />
                  );
                } else {
                  return (
                    <input
                      key={idx}
                      type={field.type}
                      name={field.name}
                      value={form[field.name] as string}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full h-12 lg:h-[51px] bg-[#f2efe9] border border-[#e0dcd3] rounded-xl px-4 py-3 font-['Manrope'] text-sm sm:text-base text-[#6c6c6c] focus:outline-none focus:border-[#746b5f] transition-colors"
                    />
                  );
                }
              })}

              <button
                type="submit"
                className="w-full flex items-center justify-center px-4 py-3 bg-[#746b5f] border border-[#858585] hover:bg-[#5d5449] transition-colors shadow-[0_5px_10px_0_rgba(255,255,255,0.1)]"
              >
                <span className="font-['Cormorant_Garamond'] text-sm sm:text-base font-semibold text-white uppercase">
                  {formData.submitButton}
                </span>
              </button>
            </form>
           
          </div>

          {/* Studio Visit Card */}
          <div className="lg:col-span-1">
            <div className="bg-[#746b5f] p-6 lg:p-8 h-fit">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/PhFZ00u660.png)] bg-cover bg-no-repeat"></div>
                <h3 className="font-['Cormorant_Garamond'] text-xl sm:text-2xl font-bold text-white">
                  Schedule a Studio Visit
                </h3>
              </div>
              <p className="font-['Manrope'] text-sm sm:text-base font-normal text-[rgba(255,255,255,0.8)] mb-6 sm:mb-8 leading-relaxed">
                We welcome you to visit our studio to discuss your project in
                person. Please schedule an appointment.
              </p>
              <button className="flex items-center justify-center w-full px-4 py-3 border border-white hover:bg-white hover:text-[#746b5f] transition-colors">
                <span className="font-['Cormorant_Garamond'] text-sm sm:text-base font-semibold text-white hover:text-[#746b5f] uppercase mr-2">
                  Book an Appointment
                </span>
                <div className="w-6 h-6 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-08-18/O245o0fyUv.png)] bg-cover bg-no-repeat"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
