import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

import { submitAdmissionEnquiry } from "../../api/admissions";

function EnrollmentForm() {
  const [form, setForm] = useState({
    parentName: "",
    email: "",
    phone: "",
    learnerName: "",
    classLevel: "",
    previousSchool: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {
      await submitAdmissionEnquiry(form);

      setSuccess(true);

      setForm({
        parentName: "",
        email: "",
        phone: "",
        learnerName: "",
        classLevel: "",
        previousSchool: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to submit enquiry:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">

      <div className="max-w-5xl mx-auto px-6">

        <div className="rounded-3xl bg-white dark:bg-gray-950 shadow-xl border border-purple-100 dark:border-gray-800 p-10">

          <div className="text-center">

            <h2 className="text-4xl font-black dark:text-white">

              Admission Enquiry

            </h2>

            <p className="mt-5 text-gray-600 dark:text-gray-400">

              Complete the form below and our admissions office will contact you.

            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-12 grid md:grid-cols-2 gap-6"
          >

            <input
              name="parentName"
              value={form.parentName}
              onChange={handleChange}
              type="text"
              placeholder="Parent / Guardian Name"
              required
              className="rounded-xl border p-4 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Email Address"
              required
              className="rounded-xl border p-4 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Phone Number"
              required
              className="rounded-xl border p-4 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
            />

            <input
              name="learnerName"
              value={form.learnerName}
              onChange={handleChange}
              type="text"
              placeholder="Learner's Name"
              required
              className="rounded-xl border p-4 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
            />

            <select
              name="classLevel"
              value={form.classLevel}
              onChange={handleChange}
              required
              className="rounded-xl border p-4 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
            >
              <option value="">Select Class</option>
              <option>Playgroup</option>
              <option>PP1</option>
              <option>PP2</option>
              <option>Grade 1</option>
              <option>Grade 2</option>
              <option>Grade 3</option>
              <option>Grade 4</option>
              <option>Grade 5</option>
              <option>Grade 6</option>
              <option>Grade 7</option>
            </select>

            <input
              name="previousSchool"
              value={form.previousSchool}
              onChange={handleChange}
              type="text"
              placeholder="Previous School"
              className="rounded-xl border p-4 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Additional Information"
              className="md:col-span-2 rounded-xl border p-4 dark:bg-gray-900 dark:border-gray-700 dark:text-white"
            />

            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 rounded-xl bg-purple-700 hover:bg-purple-800 disabled:opacity-60 text-white py-4 font-semibold flex items-center justify-center gap-2 transition"
            >

              {loading ? "Submitting..." : "Submit Enquiry"}

              <Send size={18} />

            </button>

            {success && (

              <div className="md:col-span-2 flex justify-center">

                <div className="flex items-center gap-2 rounded-xl bg-green-600 text-white px-6 py-4">

                  <CheckCircle size={20} />

                  Your admission enquiry has been submitted successfully.

                </div>

              </div>

            )}

          </form>

        </div>

      </div>

    </section>
  );
}

export default EnrollmentForm;