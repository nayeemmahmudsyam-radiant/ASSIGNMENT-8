
export default function Home() {
  
const featuredStudios = [
  {
    id: 1,
    title: "Creative Photography Studio",
    category: "Photo Studio",
    price: 45,
    rating: 4.9,
    location: "Dhaka, Bangladesh",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
  },
  {
    id: 2,
    title: "Professional Podcast Room",
    category: "Podcast Lounge",
    price: 35,
    rating: 4.8,
    location: "Gulshan, Dhaka",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800",
  },
  {
    id: 3,
    title: "Premium Music Studio",
    category: "Music Suite",
    price: 60,
    rating: 5.0,
    location: "Banani, Dhaka",
    image:
      "https://images.unsplash.com/photo-1593078166039-c9873b8c6a79?w=800",
  },
];

const bookingSteps = [
  {
    id: 1,
    number: "01",
    title: "Discover Spaces",
    description:
      "Explore amazing creative studios and find the perfect space for your project.",
    icon: "⌕",
  },
  {
    id: 2,
    number: "02",
    title: "Select Shoot Hours",
    description:
      "Choose your preferred date and the number of hours you need.",
    icon: "◷",
  },
  {
    id: 3,
    number: "03",
    title: "Book Instantly",
    description:
      "Reserve your favorite studio and get ready for your creative session.",
    icon: "✓",
  },
  {
    id: 4,
    number: "04",
    title: "Create & Produce",
    description:
      "Bring your ideas to life in your chosen creative workspace.",
    icon: "✦",
  },
];

      {/* How Booking Works Section */}
      <section
        id="how-it-works"
        className="bg-[#181818] px-8 py-24 md:px-16"
      >

        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}
          <div className="mx-auto mb-16 max-w-2xl text-center">

            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-500">
              Simple & Easy Process
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              How Booking Works
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Booking your dream creative space has never
              been easier. Follow these four simple steps.
            </p>

          </div>

          {/* Booking Steps */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {bookingSteps.map((step) => (

              <div
                key={step.id}
                className="rounded-2xl border border-white/10 bg-[#222222] p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-500/50"
              >

                <div className="flex items-center justify-between">

                  <span className="text-4xl font-bold text-orange-500">
                    {step.number}
                  </span>

                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-2xl text-orange-500">
                    {step.icon}
                  </span>

                </div>

                <h3 className="mt-8 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {step.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


  return (
    <main className="min-h-screen bg-[#101010] text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 md:px-16">
        <h1 className="text-2xl font-bold tracking-tight">
          Studio<span className="text-orange-500">Space.</span>
        </h1>

        <div className="hidden items-center gap-8 md:flex">
          <a href="/" className="text-orange-500">Home</a>
          <a href="/studios" className="hover:text-orange-500">Explore Studios</a>
          <a href="#how-it-works" className="hover:text-orange-500">How It Works</a>
          <a href="#about" className="hover:text-orange-500">About Us</a>
        </div>

        <div className="flex gap-3">
          <a href="/login" className="rounded-full border border-white/30 px-5 py-2">
            Login
          </a>
          <a href="/register" className="hidden rounded-full bg-orange-500 px-5 py-2 text-black sm:block">
            Register
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto flex min-h-[650px] max-w-7xl flex-col justify-center px-8 py-20 md:px-16">

        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          Your Creative Space Awaits
        </p>

        <h2 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
          Find Your Space.
          <br />
          <span className="text-orange-500">
            Create Your Vision.
          </span>
        </h2>

        <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
          Discover and book exceptional creative studios,
          photography spaces, podcast rooms and music suites
          for your next big project.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/studios"
            className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-black transition hover:bg-orange-400"
          >
            Explore Studios →
          </a>

          <a
            href="/register"
            className="rounded-full border border-white/30 px-8 py-4 font-semibold transition hover:bg-white hover:text-black"
          >
            Become a Host
          </a>
        </div>

        <div className="mt-20 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/20 pt-8">
          <div>
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="mt-2 text-sm text-gray-400">Creative Spaces</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">2K+</h3>
            <p className="mt-2 text-sm text-gray-400">Happy Creators</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="mt-2 text-sm text-gray-400">Cities</p>
          </div>
        </div>

      </section>
      
      {/* Featured Studios Section */}
      <section className="bg-[#181818] px-8 py-24 md:px-16">

        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-500">
                Explore Our Spaces
              </p>

              <h2 className="text-3xl font-bold md:text-5xl">
                Featured Studios
              </h2>

              <p className="mt-4 text-gray-400">
                Discover the perfect space for your next creation.
              </p>
            </div>

            <a
              href="/studios"
              className="rounded-full border border-white/30 px-6 py-3 transition hover:bg-orange-500 hover:text-black"
            >
              View All Studios →
            </a>

          </div>

          {/* Studio Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {featuredStudios.map((studio) => (

              <div
                key={studio.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#222222] transition duration-300 hover:-translate-y-2 hover:border-orange-500/50"
              >

                <img
                  src={studio.image}
                  alt={studio.title}
                  className="h-64 w-full object-cover"
                />

                <div className="p-6">

                  <div className="flex items-center justify-between">

                    <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-500">
                      {studio.category}
                    </span>

                    <span className="text-sm text-yellow-400">
                      ★ {studio.rating}
                    </span>

                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {studio.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    📍 {studio.location}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">

                    <p className="text-lg font-bold">
                      ${studio.price}
                      <span className="text-sm font-normal text-gray-400">
                        {" "}/ hour
                      </span>
                    </p>

                    <a
                      href="/studios"
                      className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-black transition hover:bg-orange-400"
                    >
                      View Details
                    </a>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
            
      {/* How Booking Works Section */}
      <section
        id="how-it-works"
        className="bg-[#181818] px-8 py-24 md:px-16"
      >

        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}
          <div className="mx-auto mb-16 max-w-2xl text-center">

            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-500">
              Simple & Easy Process
            </p>

            <h2 className="text-3xl font-bold md:text-5xl">
              How Booking Works
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Booking your dream creative space has never
              been easier. Follow these four simple steps.
            </p>

          </div>

          {/* Booking Steps */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {bookingSteps.map((step) => (

              <div
                key={step.id}
                className="rounded-2xl border border-white/10 bg-[#222222] p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-500/50"
              >

                <div className="flex items-center justify-between">

                  <span className="text-4xl font-bold text-orange-500">
                    {step.number}
                  </span>

                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-2xl text-orange-500">
                    {step.icon}
                  </span>

                </div>

                <h3 className="mt-8 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {step.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


    </main>
  );
}
