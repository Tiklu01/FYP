import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Your AI companion for{" "}
            <span className="text-sky-700">mental wellness</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-md">
            AIMind helps you track your mood, talk to our AI therapist, join
            caring communities, and connect with certified doctors — all in one
            safe space.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/(auth)/signup"
              className="px-6 py-3 rounded-lg bg-sky-600 text-white font-medium shadow hover:bg-sky-700"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="px-6 py-3 rounded-lg border border-sky-200 text-sky-700 font-medium hover:bg-sky-50"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <Image
            src="/hero-illustration.png"
            alt="Mental wellness illustration"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-sky-50 to-transparent"></div>
    </section>
  );
}
