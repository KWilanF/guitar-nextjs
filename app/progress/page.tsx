
'use client';

import Header from '../../components/Header';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function Progress() {
  const practiceData = [
    { date: 'Mon', minutes: 25 },
    { date: 'Tue', minutes: 45 },
    { date: 'Wed', minutes: 30 },
    { date: 'Thu', minutes: 60 },
    { date: 'Fri', minutes: 35 },
    { date: 'Sat', minutes: 75 },
    { date: 'Sun', minutes: 50 }
  ];

  const skillData = [
    { name: 'Chords', value: 75, color: '#3B82F6' },
    { name: 'Strumming', value: 60, color: '#10B981' },
    { name: 'Fingerpicking', value: 40, color: '#F59E0B' },
    { name: 'Scales', value: 30, color: '#EF4444' }
  ];

  const achievements = [
    { title: 'First Chord Master', description: 'Learned your first 5 chords', icon: 'ri-trophy-line', earned: true, date: '2 weeks ago' },
    { title: 'Practice Streak', description: '7 days of consistent practice', icon: 'ri-fire-line', earned: true, date: '1 week ago' },
    { title: 'Song Completion', description: 'Played your first complete song', icon: 'ri-music-2-line', earned: true, date: '3 days ago' },
    { title: 'Rhythm Master', description: 'Mastered basic strumming patterns', icon: 'ri-pulse-line', earned: false, date: null },
    { title: 'Chord Wizard', description: 'Learn 20 different chords', icon: 'ri-magic-line', earned: false, date: null },
    { title: 'Speed Demon', description: 'Play at 120 BPM consistently', icon: 'ri-flashlight-line', earned: false, date: null }
  ];

  const recentLessons = [
    { title: 'Basic Strumming Pattern', completed: true, date: 'Yesterday' },
    { title: 'D Major Chord', completed: true, date: '2 days ago' },
    { title: 'Switching Between Chords', completed: true, date: '3 days ago' },
    { title: 'C Major Chord', completed: true, date: '1 week ago' },
    { title: 'Your First Chord - G Major', completed: true, date: '2 weeks ago' }
  ];

  const stats = [
    { label: 'Total Practice Time', value: '45 hours', icon: 'ri-time-line', color: 'bg-blue-100 text-blue-600' },
    { label: 'Lessons Completed', value: '12', icon: 'ri-book-open-line', color: 'bg-green-100 text-green-600' },
    { label: 'Chords Learned', value: '8', icon: 'ri-hand-heart-line', color: 'bg-purple-100 text-purple-600' },
    { label: 'Songs Mastered', value: '3', icon: 'ri-music-2-line', color: 'bg-yellow-100 text-yellow-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Your Progress
            </h1>
            <p className="text-xl text-gray-600">
              Track your guitar learning journey and celebrate your achievements
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className={`w-12 h-12 flex items-center justify-center ${stat.color} rounded-xl mb-4`}>
                  <i className={`${stat.icon} text-xl`}></i>
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Practice Chart */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">This Week's Practice</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={practiceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="minutes" stroke="#3B82F6" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center mt-4">
              <span className="text-gray-600">Total this week: </span>
              <span className="font-bold text-gray-800">
                {practiceData.reduce((sum, day) => sum + day.minutes, 0)} minutes
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Skill Progress */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Skill Progress</h3>
              <div className="space-y-4">
                {skillData.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.value}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all duration-300"
                        style={{ 
                          width: `${skill.value}%`,
                          backgroundColor: skill.color
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Lessons */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Recent Lessons</h3>
              <div className="space-y-4">
                {recentLessons.map((lesson, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full">
                      <i className="ri-check-line text-green-600"></i>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">{lesson.title}</div>
                      <div className="text-sm text-gray-500">{lesson.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Achievements</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    achievement.earned
                      ? 'border-yellow-200 bg-yellow-50'
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-full ${
                      achievement.earned
                        ? 'bg-yellow-100 text-yellow-600'
                        : 'bg-gray-100 text-gray-400'
                    }`}>
                      <i className={`${achievement.icon} text-xl`}></i>
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold ${
                        achievement.earned ? 'text-yellow-800' : 'text-gray-600'
                      }`}>
                        {achievement.title}
                      </h4>
                      {achievement.earned && (
                        <div className="text-xs text-yellow-600 font-medium">
                          Earned {achievement.date}
                        </div>
                      )}
                    </div>
                    {achievement.earned && (
                      <div className="w-6 h-6 flex items-center justify-center bg-yellow-500 rounded-full">
                        <i className="ri-check-line text-white text-sm"></i>
                      </div>
                    )}
                  </div>
                  <p className={`text-sm ${
                    achievement.earned ? 'text-yellow-700' : 'text-gray-500'
                  }`}>
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Next Goals */}
          <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Next Goals</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full">
                    <i className="ri-target-line text-blue-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Master F Major Chord</div>
                    <div className="text-sm text-gray-600">Complete the barre chord lesson</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                  <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full">
                    <i className="ri-music-line text-green-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Learn "Wonderwall"</div>
                    <div className="text-sm text-gray-600">Practice chord transitions for this song</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full">
                    <i className="ri-timer-line text-purple-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">30 Minutes Daily</div>
                    <div className="text-sm text-gray-600">Maintain consistent practice schedule</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg">
                  <div className="w-8 h-8 flex items-center justify-center bg-yellow-100 rounded-full">
                    <i className="ri-flashlight-line text-yellow-600"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Fingerpicking Basics</div>
                    <div className="text-sm text-gray-600">Start learning fingerpicking technique</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
