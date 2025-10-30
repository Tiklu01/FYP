import {
  MessageSquare,
  HeartPulse,
  Video,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <HeartPulse className="w-7 h-7 text-sky-600" />,
    title: "Mood Meter",
    desc: "Understand your emotions through daily reflections and AI-guided insights.",
  },
  {
    icon: <MessageSquare className="w-7 h-7 text-sky-600" />,
    title: "AI Chatbot",
    desc: "24/7 empathetic conversations that support your mental wellbeing.",
  },
  {
    icon: <Video className="w-7 h-7 text-sky-600" />,
    title: "Video Consultations",
    desc: "Book confidential sessions with certified mental health professionals.",
  },
  {
    icon: <Users className="w-7 h-7 text-sky-600" />,
    title: "Community Support",
    desc: "Share experiences and connect with people who understand you.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-sky-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
          Everything you need for better mental health
        </h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          From mood tracking to professional consultations, AIMind integrates
          all tools you need into a single platform.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition"
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {f.title}
              </h3>
              <p className="text-slate-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
