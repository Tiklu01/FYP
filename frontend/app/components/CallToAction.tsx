export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-sky-600 to-sky-500 text-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold">
          Ready to take the first step toward a healthier mind?
        </h2>
        <p className="mt-4 text-sky-100">
          Join AIMind and start your journey to emotional balance and growth.
        </p>
        <div className="mt-8">
          <a
            href="/(auth)/signup"
            className="px-8 py-3 rounded-lg bg-white text-sky-700 font-semibold hover:bg-sky-50 transition"
          >
            Get Started Free
          </a>
        </div>
      </div>
    </section>
  );
}
