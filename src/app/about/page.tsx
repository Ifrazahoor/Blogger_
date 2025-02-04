import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>BloGGer</title>
        <meta name="description" content="Discover the perfect blend of Education, Fashion, and AI at Your Blog Name." />
      </Head>
      <div className="min-h-screen bg-gray-50 text-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold text-blue-600 mb-6">About Us</h1>
          <div className="flex justify-center my-8">
            <Image src="/w.webp" alt="About Us" width={800} height={400} className="rounded-xl shadow-xl" />
          </div>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Welcome to <span className="font-semibold">Your Blog Name</span>, a platform where passion meets knowledge. 
            We bring you the latest insights on <span className="text-blue-500 font-semibold">Education</span>, 
            <span className="text-pink-500 font-semibold">Fashion</span>, and 
            <span className="text-green-500 font-semibold">Artificial Intelligence</span>.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Education Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
              <Image src="/hb.jpg" alt="Education" width={80} height={80} />
              <h2 className="text-2xl font-bold text-blue-500 mt-4">Education</h2>
              <p className="mt-3 text-gray-600 text-center">
                Expand your knowledge with expert advice, study resources, and career guidance.
              </p>
            </div>

            {/* Fashion Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
              <Image src="/b.jpg" alt="Fashion" width={80} height={80} />
              <h2 className="text-2xl font-bold text-pink-500 mt-4">Fashion</h2>
              <p className="mt-3 text-gray-600 text-center">
                Stay ahead in style with the latest fashion trends, styling tips, and industry updates.
              </p>
            </div>

            {/* AI Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center ">
              <Image src="/g.jpg" alt="Artificial Intelligence" width={80} height={80} />
              <h2 className="text-2xl font-bold text-green-500 mt-4">Artificial Intelligence</h2>
              <p className="mt-3 text-gray-600 text-center">
                Explore AI innovations, cutting-edge trends, and their impact on modern society.
              </p>
            </div>
          </div>

          <p className="mt-12 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            At <span className="font-semibold">Your Blog Name</span>, we believe in <strong>empowering minds, embracing creativity, and revolutionizing technology</strong>. 
            Join us and be a part of this ever-evolving journey of learning and innovation.
         
          <button>Welcome My Web</button>
          </p>
        </div>

      </div>
    </>
  );
}
