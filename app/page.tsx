
'use client';

import Header from '../components/Header';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      icon: 'ri-music-2-line',
      title: 'Interactive Lessons',
      description: 'Step-by-step guitar lessons from beginner to advanced levels',
      href: '/lessons'
    },
    {
      icon: 'ri-hand-heart-line',
      title: 'Chord Library',
      description: 'Comprehensive collection of guitar chords with finger positions',
      href: '/chords'
    },
    {
      icon: 'ri-equalizer-line',
      title: 'Guitar Tuner',
      description: 'Professional tuner to keep your guitar perfectly tuned',
      href: '/tuner'
    },
    {
      icon: 'ri-timer-line',
      title: 'Metronome',
      description: 'Practice with perfect timing using our built-in metronome',
      href: '/metronome'
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Progress Tracking',
      description: 'Monitor your learning journey and celebrate achievements',
      href: '/progress'
    },
    {
      icon: 'ri-book-open-line',
      title: 'Song Library',
      description: 'Learn popular songs with tabs and chord progressions',
      href: '/songs'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 px-6 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Professional%20acoustic%20guitar%20on%20wooden%20table%20with%20music%20sheets%20and%20golden%20warm%20lighting%2C%20studio%20photography%2C%20warm%20tones%2C%20elegant%20musical%20atmosphere%2C%20shallow%20depth%20of%20field%2C%20modern%20interior%20background&width=1200&height=600&seq=hero-guitar&orientation=landscape')`
        }}
      >
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Master the Guitar
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Your complete guitar learning companion with interactive lessons, tools, and progress tracking
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/lessons"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              Start Learning
            </Link>
            <Link 
              href="/tuner"
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap backdrop-blur-sm"
            >
              Quick Tune
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Everything You Need to Learn Guitar
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive tools and lessons designed for guitar players of all levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link 
                key={index}
                href={feature.href}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl mb-6 group-hover:bg-blue-200 transition-colors">
                  <i className={`${feature.icon} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Your Guitar Learning Journey
            </h2>
            <p className="text-xl text-gray-600">
              Follow our structured path from complete beginner to confident player
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6">
                <i className="ri-seedling-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Beginner</h3>
              <p className="text-gray-600 mb-6">
                Learn basic chords, strumming patterns, and simple songs to build your foundation
              </p>
              <div className="text-sm text-gray-500 space-y-2">
                <div>• Basic open chords</div>
                <div>• Strumming techniques</div>
                <div>• First songs</div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-6">
                <i className="ri-plant-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Intermediate</h3>
              <p className="text-gray-600 mb-6">
                Master barre chords, fingerpicking, and more complex song structures
              </p>
              <div className="text-sm text-gray-500 space-y-2">
                <div>• Barre chords</div>
                <div>• Fingerpicking patterns</div>
                <div>• Music theory basics</div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mx-auto mb-6">
                <i className="ri-trophy-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Advanced</h3>
              <p className="text-gray-600 mb-6">
                Explore advanced techniques, improvisation, and performance skills
              </p>
              <div className="text-sm text-gray-500 space-y-2">
                <div>• Lead guitar techniques</div>
                <div>• Improvisation</div>
                <div>• Performance skills</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tools Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Quick Access Tools
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Essential tools you'll use every practice session
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              href="/tuner"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-lg mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <i className="ri-equalizer-line text-2xl text-red-600"></i>
              </div>
              <h3 className="font-bold text-gray-800">Tuner</h3>
            </Link>

            <Link 
              href="/metronome"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <i className="ri-timer-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="font-bold text-gray-800">Metronome</h3>
            </Link>

            <Link 
              href="/chords"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <i className="ri-hand-heart-line text-2xl text-green-600"></i>
              </div>
              <h3 className="font-bold text-gray-800">Chords</h3>
            </Link>

            <Link 
              href="/progress"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-lg mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <i className="ri-line-chart-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="font-bold text-gray-800">Progress</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
