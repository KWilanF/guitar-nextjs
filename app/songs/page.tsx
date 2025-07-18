
'use client';

import Header from '../../components/Header';
import { useState } from 'react';

export default function Songs() {
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  
  const songs = [
    {
      title: 'Wonderwall',
      artist: 'Oasis',
      difficulty: 'Beginner',
      chords: ['G', 'D', 'Em', 'C'],
      key: 'G Major',
      capo: 2,
      strumming: 'D-D-U-U-D-U',
      bpm: 87
    },
    {
      title: 'Horse with No Name',
      artist: 'America',
      difficulty: 'Beginner',
      chords: ['Em', 'D'],
      key: 'E Minor',
      capo: 0,
      strumming: 'D-D-U-D-U',
      bpm: 120
    },
    {
      title: 'Blackbird',
      artist: 'The Beatles',
      difficulty: 'Intermediate',
      chords: ['G', 'Am', 'C', 'D', 'F'],
      key: 'G Major',
      capo: 0,
      strumming: 'Fingerpicking',
      bpm: 96
    },
    {
      title: 'Tears in Heaven',
      artist: 'Eric Clapton',
      difficulty: 'Intermediate',
      chords: ['A', 'E', 'F#m', 'D', 'Bm'],
      key: 'A Major',
      capo: 0,
      strumming: 'D-U-X-U-D-U',
      bpm: 80
    },
    {
      title: 'Stairway to Heaven',
      artist: 'Led Zeppelin',
      difficulty: 'Advanced',
      chords: ['Am', 'C', 'D', 'F', 'G', 'Em'],
      key: 'A Minor',
      capo: 0,
      strumming: 'Multiple patterns',
      bpm: 82
    },
    {
      title: 'Hotel California',
      artist: 'Eagles',
      difficulty: 'Advanced',
      chords: ['Bm', 'F#', 'A', 'E', 'G', 'D'],
      key: 'B Minor',
      capo: 0,
      strumming: 'D-U-D-U-D-U',
      bpm: 75
    },
    {
      title: 'Wish You Were Here',
      artist: 'Pink Floyd',
      difficulty: 'Intermediate',
      chords: ['Em', 'G', 'C', 'D', 'Am'],
      key: 'G Major',
      capo: 0,
      strumming: 'D-D-U-U-D-U',
      bpm: 63
    },
    {
      title: 'Mad World',
      artist: 'Gary Jules',
      difficulty: 'Beginner',
      chords: ['Em', 'C', 'G', 'D'],
      key: 'E Minor',
      capo: 0,
      strumming: 'D-U-D-U',
      bpm: 84
    }
  ];

  const filteredSongs = selectedDifficulty === 'All' 
    ? songs 
    : songs.filter(song => song.difficulty === selectedDifficulty);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
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
              Song Library
            </h1>
            <p className="text-xl text-gray-600">
              Learn popular songs with chord progressions and playing guides
            </p>
          </div>

          {/* Difficulty Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`px-6 py-3 rounded-full font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedDifficulty === difficulty
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-50'
                }`}
              >
                {difficulty}
              </button>
            ))}
          </div>

          {/* Songs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSongs.map((song, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{song.title}</h3>
                    <p className="text-gray-600">{song.artist}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(song.difficulty)}`}>
                    {song.difficulty}
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Key:</span>
                    <span className="font-medium text-gray-800">{song.key}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Capo:</span>
                    <span className="font-medium text-gray-800">{song.capo === 0 ? 'None' : `Fret ${song.capo}`}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">BPM:</span>
                    <span className="font-medium text-gray-800">{song.bpm}</span>
                  </div>
                  
                  <div className="text-sm">
                    <span className="text-gray-500">Strumming:</span>
                    <div className="font-mono text-gray-800 mt-1">{song.strumming}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-2">Chords used:</div>
                  <div className="flex flex-wrap gap-2">
                    {song.chords.map((chord, chordIndex) => (
                      <span
                        key={chordIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium"
                      >
                        {chord}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                    Learn Song
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition-colors cursor-pointer">
                    <i className="ri-heart-line"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Learning Tips */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Song Learning Tips
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                  <i className="ri-hand-heart-line text-blue-600 text-xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Learn Chords First</h4>
                <p className="text-gray-600 text-sm">Master all the chords used in the song before attempting to play along</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                  <i className="ri-speed-line text-green-600 text-xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Start Slow</h4>
                <p className="text-gray-600 text-sm">Practice at half speed first, then gradually increase to full tempo</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full mx-auto mb-4">
                  <i className="ri-repeat-line text-yellow-600 text-xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Practice Transitions</h4>
                <p className="text-gray-600 text-sm">Focus on smooth chord changes between different sections</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-4">
                  <i className="ri-headphone-line text-purple-600 text-xl"></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Play Along</h4>
                <p className="text-gray-600 text-sm">Use the original recording to practice timing and rhythm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
