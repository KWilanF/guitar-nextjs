'use client';

import Header from '../../components/Header';
import { useState } from 'react';

export default function Chords() {
  const [selectedCategory, setSelectedCategory] = useState('Basic');
  const [selectedChord, setSelectedChord] = useState(null);

  const chordCategories = ['Basic', 'Barre', 'Seventh', 'Minor', 'Advanced'];

  const chords: {
    [key: string]: {
      name: string;
      fullName: string;
      difficulty: string;
      fingers: string;
    }[];
  } = {
    Basic: [
      { name: 'G', fullName: 'G Major', difficulty: 'Easy', fingers: '3-2-0-0-3-3' },
      { name: 'C', fullName: 'C Major', difficulty: 'Easy', fingers: '0-1-0-2-3-0' },
      { name: 'D', fullName: 'D Major', difficulty: 'Easy', fingers: 'x-x-0-2-3-2' },
      { name: 'Em', fullName: 'E Minor', difficulty: 'Easy', fingers: '0-2-2-0-0-0' },
      { name: 'Am', fullName: 'A Minor', difficulty: 'Easy', fingers: '0-0-2-2-1-0' },
      { name: 'E', fullName: 'E Major', difficulty: 'Easy', fingers: '0-2-2-1-0-0' }
    ],
    Barre: [
      { name: 'F', fullName: 'F Major', difficulty: 'Hard', fingers: '1-3-3-2-1-1' },
      { name: 'Bm', fullName: 'B Minor', difficulty: 'Hard', fingers: '2-2-4-4-3-2' },
      { name: 'B', fullName: 'B Major', difficulty: 'Hard', fingers: '2-2-4-4-4-2' },
      { name: 'Fm', fullName: 'F Minor', difficulty: 'Hard', fingers: '1-3-3-1-1-1' },
      { name: 'Cm', fullName: 'C Minor', difficulty: 'Medium', fingers: '3-3-5-5-4-3' },
      { name: 'Gm', fullName: 'G Minor', difficulty: 'Medium', fingers: '3-5-5-3-3-3' }
    ],
    Seventh: [
      { name: 'G7', fullName: 'G Dominant 7th', difficulty: 'Medium', fingers: '3-2-0-0-0-1' },
      { name: 'C7', fullName: 'C Dominant 7th', difficulty: 'Medium', fingers: '0-3-2-3-1-0' },
      { name: 'D7', fullName: 'D Dominant 7th', difficulty: 'Medium', fingers: 'x-x-0-2-1-2' },
      { name: 'E7', fullName: 'E Dominant 7th', difficulty: 'Easy', fingers: '0-2-0-1-0-0' },
      { name: 'A7', fullName: 'A Dominant 7th', difficulty: 'Easy', fingers: '0-0-2-0-2-0' },
      { name: 'B7', fullName: 'B Dominant 7th', difficulty: 'Medium', fingers: '2-2-1-2-0-2' }
    ],
    Minor: [
      { name: 'Am', fullName: 'A Minor', difficulty: 'Easy', fingers: '0-0-2-2-1-0' },
      { name: 'Em', fullName: 'E Minor', difficulty: 'Easy', fingers: '0-2-2-0-0-0' },
      { name: 'Dm', fullName: 'D Minor', difficulty: 'Easy', fingers: 'x-x-0-2-3-1' },
      { name: 'Fm', fullName: 'F Minor', difficulty: 'Hard', fingers: '1-3-3-1-1-1' },
      { name: 'Cm', fullName: 'C Minor', difficulty: 'Medium', fingers: '3-3-5-5-4-3' },
      { name: 'Gm', fullName: 'G Minor', difficulty: 'Medium', fingers: '3-5-5-3-3-3' }
    ],
    Advanced: [
      { name: 'Cadd9', fullName: 'C add 9', difficulty: 'Medium', fingers: '0-3-2-0-3-0' },
      { name: 'Gsus4', fullName: 'G suspended 4th', difficulty: 'Medium', fingers: '3-3-0-0-3-3' },
      { name: 'Am7', fullName: 'A Minor 7th', difficulty: 'Easy', fingers: '0-0-2-0-1-0' },
      { name: 'Fmaj7', fullName: 'F Major 7th', difficulty: 'Hard', fingers: '1-0-3-2-1-0' },
      { name: 'Cmaj7', fullName: 'C Major 7th', difficulty: 'Medium', fingers: '0-3-2-0-0-0' },
      { name: 'Dm7', fullName: 'D Minor 7th', difficulty: 'Easy', fingers: 'x-x-0-2-1-1' }
    ]
  };


const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Guitar Chord Library
            </h1>
            <p className="text-xl text-gray-600">
              Learn and master essential guitar chords with finger position guides
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {chordCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-50'
                }`}
              >
                {category} Chords
              </button>
            ))}
          </div>

          {/* Chord Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {chords[selectedCategory]?.map((chord, index) => (
              <div 
                key={index}
                onClick={() => setSelectedChord(chord)}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {chord.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(chord.difficulty)}`}>
                    {chord.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{chord.fullName}</p>
                
                {/* Chord Diagram Placeholder */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="text-center text-gray-500 text-sm mb-2">Finger Position</div>
                  <div className="font-mono text-center text-lg">{chord.fingers}</div>
                </div>
                
                <button className="w-full bg-blue-100 hover:bg-blue-200 text-blue-600 py-2 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                  Practice This Chord
                </button>
              </div>
            ))}
          </div>

          {/* Chord Detail Modal */}
          {selectedChord && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedChord(null)}>
              <div className="bg-white rounded-2xl p-8 max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold text-gray-800">
                    {selectedChord.name}
                  </h3>
                  <button 
                    onClick={() => setSelectedChord(null)}
                    className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Full Name</label>
                    <p className="text-lg text-gray-800">{selectedChord.fullName}</p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-500">Difficulty</label>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(selectedChord.difficulty)}`}>
                      {selectedChord.difficulty}
                    </span>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-500">Finger Position</label>
                    <div className="bg-gray-50 rounded-lg p-4 mt-2">
                      <div className="font-mono text-lg text-center">{selectedChord.fingers}</div>
                      <div className="text-sm text-gray-500 text-center mt-2">
                        (String 6 to 1: Low E, A, D, G, B, High E)
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                      Start Practice
                    </button>
                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                      Add to Favorites
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Practice Tips */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Chord Practice Tips
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded-full mt-1">
                    <i className="ri-hand-heart-line text-blue-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Finger Placement</h4>
                    <p className="text-gray-600 text-sm">
                      Press strings firmly just behind the frets, not on top of them
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-green-100 rounded-full mt-1">
                    <i className="ri-time-line text-green-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Practice Slowly</h4>
                    <p className="text-gray-600 text-sm">
                      Start slow and focus on clean chord changes before increasing speed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-yellow-100 rounded-full mt-1">
                    <i className="ri-repeat-line text-yellow-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Repetition</h4>
                    <p className="text-gray-600 text-sm">
                      Practice chord transitions repeatedly until they become muscle memory
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full mt-1">
                    <i className="ri-volume-up-line text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Listen</h4>
                    <p className="text-gray-600 text-sm">
                      Make sure each string rings clearly without buzzing or muting
                    </p>
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
