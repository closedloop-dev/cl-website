const TicketPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#1e293b] via-[#0f172a] to-[#1e293b] px-4">
      {/* Removed infinity symbol as cursor */}
      <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-blue-400 bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#60A5FA] animate-shimmer">
        Coming Soon...
      </h1>
      <p className="text-xl md:text-2xl max-w-xl text-center text-white/80 mb-8">
        We're working hard to bring you an amazing ticketing experience. Stay tuned for updates!
      </p>
      <a
        href="/"
        className="inline-block px-8 py-4 bg-gradient-to-r from-[#60A5FA] via-[#3B82F6] to-[#60A5FA] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        Back to Home
      </a>
    </div>
  );
};

export default TicketPage;
