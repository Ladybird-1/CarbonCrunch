import Link from "next/link"
import './styles.css'; 

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 bg-gradient-to-b from-[#f5f6fa] to-[#afdfaa] p-4 rounded-md h-screen">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 left-20 w-16 h-16 bg-green-300 opacity-70 square"></div>
          <div className="absolute top-32 left-44 w-12 h-12 bg-green-300 opacity-70 square"></div>
          <div className="absolute top-56 left-64 w-10 h-10 bg-green-300 opacity-70 square"></div>
          <div className="absolute top-20 right-20 w-14 h-14 bg-green-300 opacity-70 square"></div>
          <div className="absolute top-56 right-44 w-12 h-12 bg-green-300 opacity-70 square"></div>
          <div className="absolute bottom-32 left-16 w-16 h-16 bg-green-300 opacity-70 square"></div>
          <div className="absolute bottom-64 right-20 w-14 h-14 bg-green-300 opacity-70 square"></div>
        </div>
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-2">
              <span className="text-green-600 text-xl">🌍</span>
            </div>
            <span className="font-medium text-gray-800">Carboncrunch</span>
          </div>

          <div className="hidden md:flex space-x-8 bg-white p-3 rounded-md">
            <Link href="#" className="text-gray-800 hover:text-green-600">
              Home
            </Link>
            <Link href="#" className="text-gray-800 hover:text-green-600">
              Services
            </Link>
            <Link href="#" className="text-gray-800 hover:text-green-600">
              Blog
            </Link>
            <Link href="#" className="text-gray-800 hover:text-green-600">
              About Us
            </Link>
            <Link href="#" className="text-gray-800 hover:text-green-600">
              Contact
            </Link>
          </div>

          <div className="flex space-x-4">
            <Link
              href="#"
              className="bg-green-300 hover:bg-green-300 px-8 py-3 rounded-md text-green-600 font-medium button-hover"
            >
              Login
            </Link>
            <Link href="#" className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-md text-black button-hover">
              Book Demo
            </Link>
          </div>
        </nav>
        <section className="container mx-auto px-4 py-16 md:py-24 text-center hero-content">
          <div className="inline-block bg-black text-white px-4 py-2 rounded-full mb-6">
            <span className="flex items-center">👋 Let's Save our Environment</span>
          </div>

          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 max-w-4xl mx-auto">
            Streamline Your Sustainability Reporting With <span className="text-green-500">CARBON CRUNCH</span>
          </h3>

          <p className="text-lg text-gray-700 mb-8">95% Accurate Carbon Calculations Trusted by Industry Leaders</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#"
              className="bg-white hover:bg-gray-100 shadow-[2px_2px_0px_#dfd29d] px-8 py-3 rounded-md text-gray-800 font-medium button-hover"
            >
              Free Calculator
            </Link>
            <Link href="#" className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-md text-white font-medium">
              Book Demo
            </Link>
          </div>
        </section>
      </div>

      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="relative max-w-5xl mx-auto h-[500px]">
            <div className="absolute left-0 top-0 bottom-10 w-[45%] bg-[#c4c4c4] h-[550px]"></div>
            <div className="absolute left-[20%] bottom-0 bg-white p-6 rounded-lg w-[350px]">
              <h2 className="text-6xl font-bold text-green-500">37%</h2>
              <p className="text-green-500 font-medium">
                Of The World's Largest Companies Have A Public Net Zero Target.
              </p>
              <p className="text-green-500 font-medium">Nearly All Are Off Track</p>
            </div>
            <div className="absolute right-[8%] top-[48%] bg-[#2d2d2d] p-6 rounded-lg w-[400px]">
              <h2 className="text-6xl font-bold text-white">18%</h2>
              <p className="text-white text-xl mt-2">
                Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By 2050
              </p>
            </div>
            <div className="absolute left-[30%] top-[20%] bg-[#3a3a3a] p-6 rounded-lg w-[400px]">
              <h2 className="text-6xl font-bold text-white">98%</h2>
              <p className="text-white text-xl mt-2">Of CEOs Agree Sustainability Is Their Responsibility</p>
            </div>
            <div className="absolute right-[10%] bg-[#28b30e] p-6 rounded-lg w-[300px]">
              <h2 className="text-6xl font-bold text-black">3X</h2>
              <p className="text-black text-xl mt-2">ESG High Performers Deliver A Higher Total Shareholder Return</p>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  )
}
