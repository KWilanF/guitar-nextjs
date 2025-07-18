
'use client';

import Header from '../../components/Header';
import Link from 'next/link';

export default function Lessons() {
  const lessonCategories = [
    {
      title: 'Beginner Lessons',
      level: 'Beginner',
      color: 'from-green-400 to-green-600',
      lessons: [
        { id: 1, title: 'How to Hold a Guitar', duration: '8 min', completed: true },
        { id: 2, title: 'Your First Chord - G Major', duration: '12 min', completed: true },
        { id: 3, title: 'C Major Chord', duration: '10 min', completed: true },
        { id: 4, title: 'D Major Chord', duration: '10 min', completed: false },
        { id: 5, title: 'Switching Between Chords', duration: '15 min', completed: false },
        { id: 6, title: 'Basic Strumming Pattern', duration: '18 min', completed: false }
      ]
    },
    {
      title: 'Intermediate Lessons',
      level: 'Intermediate',
      color: 'from-yellow-400 to-orange-500',
      lessons: [
        { id: 7, title: 'Barre Chords Introduction', duration: '20 min', completed: false },
        { id: 8, title: 'F Major Barre Chord', duration: '15 min', completed: false },
        { id: 9, title: 'Power Chords', duration: '12 min', completed: false },
        { id: 10, title: 'Fingerpicking Basics', duration: '25 min', completed: false },
        { id: 11, title: 'Scales - Pentatonic', duration: '22 min', completed: false },
        { id: 12, title: 'Rhythm Patterns', duration: '18 min', completed: false }
      ]
    },
    {
      title: 'Advanced Lessons',
      level: 'Advanced',
      color: 'from-purple-500 to-purple-700',
      lessons: [
        { id: 13, title: 'Lead Guitar Techniques', duration: '30 min', completed: false },
        { id: 14, title: 'Advanced Chord Progressions', duration: '25 min', completed: false },
        { id: 15, title: 'Improvisation Basics', duration: '35 min', completed: false },
        { id: 16, title: 'Music Theory for Guitarists', duration: '40 min', completed: false },
        { id: 17, title: 'Advanced Fingerpicking', duration: '28 min', completed: false },
        { id: 18, title: 'Performance Techniques', duration: '32 min', completed: false }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Guitar Lessons
            </h1>
            <p className="text-xl text-gray-600">
              Master guitar with our structured lesson plan from beginner to advanced
            </p>
          </div>

          <div className="space-y-12">
            {lessonCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className={`bg-gradient-to-r ${category.color} p-6`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">
                        {category.title}
                      </h2>
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {category.level}
                      </span>
                    </div>
                    <div className="text-white/80 text-right">
                      <div className="text-sm">Progress</div>
                      <div className="text-2xl font-bold">
                        {Math.round((category.lessons.filter(l => l.completed).length / category.lessons.length) * 100)}%
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid gap-4">
                    {category.lessons.map((lesson, lessonIndex) => (
                      <div 
                        key={lesson.id}
                        className={`p-4 rounded-xl border-2 transition-all cursor-pointer hover:shadow-md ${
                          lesson.completed 
                            ? 'border-green-200 bg-green-50' 
                            : 'border-gray-200 bg-white hover:border-blue-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${
                              lesson.completed 
                                ? 'bg-green-500 text-white' 
                                : 'bg-gray-100 text-gray-600'
                            }`}>
                              {lesson.completed ? (
                                <i className="ri-check-line text-lg"></i>
                              ) : (
                                <i className="ri-play-circle-line text-lg"></i>
                              )}
                            </div>
                            <div>
                              <h3 className={`font-semibold ${
                                lesson.completed ? 'text-green-800' : 'text-gray-800'
                              }`}>
                                {lesson.title}
                              </h3>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <span>{lesson.duration}</span>
                                {lesson.completed && (
                                  <span className="text-green-600 font-medium">Completed</span>
                                )}
                              </div>
                            </div>
                          </div>
                          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                            <i className="ri-arrow-right-line"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-6">
                <i className="ri-trophy-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Begin with our beginner lessons and work your way up. Each lesson builds on the previous one, 
                ensuring you develop solid fundamentals and proper technique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors cursor-pointer whitespace-nowrap">
                  Start First Lesson
                </button>
                <Link 
                  href="/progress"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-semibold transition-colors cursor-pointer whitespace-nowrap"
                >
                  View Progress
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
