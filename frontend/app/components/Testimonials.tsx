export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900">
          What our users say
        </h2>
        <p className="mt-3 text-slate-600">
          Real stories from real people on their journey to healing.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "AIMind helped me understand my emotions better and gave me tools to manage anxiety.",
              name: "Riya S.",
              role: "Student",
            },
            {
              quote:
                "The AI chatbot feels genuinely supportive — it's like having a safe space anytime.",
              name: "Aarav K.",
              role: "Working Professional",
            },
            {
              quote:
                "Video consultations are seamless and professional. It made therapy accessible.",
              name: "Dr. Neha M.",
              role: "Therapist",
            },
          ].map((t) => (
            <div
              key={t.name}
              className="bg-sky-50 p-6 rounded-2xl shadow-sm border border-sky-100"
            >
              <p className="text-slate-700 italic mb-4">“{t.quote}”</p>
              <p className="font-semibold text-slate-900">{t.name}</p>
              <p className="text-sm text-slate-600">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
