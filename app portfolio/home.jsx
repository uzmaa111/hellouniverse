import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Navbar />
      <header className="bg-gradient-to-br from-amber-700 to-amber-900 text-amber-50 text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Discover the best of my work in this curated portfolio</h1>
        <p className="text-xl">"Innovating Ideas Through Creativity and Technology"</p>
      </header>
      
      <section id="bio" className="py-20 bg-amber-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-amber-900">About Me</h2>
          <p className="text-lg text-amber-800 mb-4">
            Hi, I'm Uzma, a second-year Bachelor of Engineering student specializing in Computer Science and Engineering (IoT).
          </p>
          <p className="text-lg text-amber-800 mb-4">
            I am passionate about combining creativity and technology to solve real-world problems.
          </p>
          <p className="text-lg text-amber-800 mb-4">
            My goal is to build innovative solutions and share my journey through creative expression.
          </p>
          <p className="text-lg text-amber-800">
            I'm eager to learn, grow, and contribute to impactful projects.
          </p>
        </div>
      </section>

      <section id="skills" className="py-20 bg-amber-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-amber-900">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-amber-800">Programming Languages</h3>
              <ul className="list-disc list-inside text-amber-700">
                <li>Python</li>
                <li>C++</li>
                <li>HTML, CSS, JavaScript</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-amber-800">IoT Skills</h3>
              <ul className="list-disc list-inside text-amber-700">
                <li>Basic IoT protocols</li>
                <li>Sensor Integration</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-amber-800">Creative Skills</h3>
              <ul className="list-disc list-inside text-amber-700">
                <li>Graphic Design</li>
                <li>Video Editing</li>
                <li>Storytelling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 bg-amber-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-amber-900">Achievements</h2>
          <ul className="list-disc list-inside text-amber-800 space-y-4">
            <li>Competed in intercollegiate coding competitions and hackathons</li>
            <li>Participated in IoT-focused workshops and webinars</li>
            <li>Designed posters for college events using Photoshop and Canva</li>
            <li>Certified in Python Basics from Codecademy</li>
            <li>Certification in Adobe Photoshop</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="py-20 bg-amber-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-amber-900">Contact</h2>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-amber-800 mb-2">Name</label>
              <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-amber-800 mb-2">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-amber-800 mb-2">Subject</label>
              <input type="text" id="subject" name="subject" required className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-amber-800 mb-2">Message</label>
              <textarea id="message" name="message" required className="w-full px-3 py-2 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 h-32"></textarea>
            </div>
            <button type="submit" className="w-full bg-amber-700 text-amber-50 py-2 px-4 rounded-md hover:bg-amber-800 transition-colors duration-300">Send Message</button>
          </form>
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-4 text-amber-800">Connect with me</h3>
            <div className="space-x-4">
              <a href="https://linkedin.com" className="text-amber-700 hover:text-amber-900">LinkedIn</a>
              <a href="https://github.com" className="text-amber-700 hover:text-amber-900">GitHub</a>
              <a href="https://behance.net" className="text-amber-700 hover:text-amber-900">Behance</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-amber-900 text-amber-50 text-center py-4">
        <p>&copy; 2025 Uzma. Let's connect and collaborate!</p>
      </footer>
    </div>
  )
}

