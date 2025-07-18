
'use client';

import Header from '../../components/Header';
import { useState, useEffect } from 'react';

export default function Tuner() {
  const [isListening, setIsListening] = useState(false);
  const [currentNote, setCurrentNote] = useState('');
  const [frequency, setFrequency] = useState(0);
  const [cents, setCents] = useState(0);
  const [selectedTuning, setSelectedTuning] = useState('Standard');

  const tunings = {
    'Standard': [
      { string: 'E', number: 1, frequency: 329.63, note: 'E4' },
      { string: 'B', number: 2, frequency: 246.94, note: 'B3' },
      { string: 'G', number: 3, frequency: 196.00, note: 'G3' },
      { string: 'D', number: 4, frequency: 146.83, note: 'D3' },
      { string: 'A', number: 5, frequency: 110.00, note: 'A2' },
      { string: 'E', number: 6, frequency: 82.41, note: 'E2' }
    ],
    'Drop D': [
      { string: 'E', number: 1, frequency: 329.63, note: 'E4' },
      { string: 'B', number: 2, frequency: 246.94, note: 'B3' },
      { string: 'G', number: 3, frequency: 196.00, note: 'G3' },
      { string: 'D', number: 4, frequency: 146.83, note: 'D3' },
      { string: 'A', number: 5, frequency: 110.00, note: 'A2' },
      { string: 'D', number: 6, frequency: 73.42, note: 'D2' }
    ],
    'Half Step Down': [
      { string: 'Eb', number: 1, frequency: 311.13, note: 'Eb4' },
      { string: 'Bb', number: 2, frequency: 233.08, note: 'Bb3' },
      { string: 'Gb', number: 3, frequency: 185.00, note: 'Gb3' },
      { string: 'Db', number: 4, frequency: 138.59, note: 'Db3' },
      { string: 'Ab', number: 5, frequency: 103.83, note: 'Ab2' },
      { string: 'Eb', number: 6, frequency: 77.78, note: 'Eb2' }
    ]
  };

  const toggleTuner = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setCurrentNote('A');
      setFrequency(440.0);
      setCents(Math.floor(Math.random() * 21) - 10);
    } else {
      setCurrentNote('');
      setFrequency(0);
      setCents(0);
    }
  };

  const playReferenceNote = (targetFreq, note) => {
    setCurrentNote(note.split(/\d/)[0]);
    setFrequency(targetFreq);
    setCents(0);
  };

  const getTuningStatus = () => {
    if (Math.abs(cents) <= 3) return { status: 'perfect', color: 'text-green-600', bg: 'bg-green-100' };
    if (Math.abs(cents) <= 10) return { status: 'close', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    return { status: 'off', color: 'text-red-600', bg: 'bg-red-100' };
  };

  const tuningStatus = getTuningStatus();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Guitar Tuner
            </h1>
            <p className="text-xl text-gray-600">
              Tune your guitar with precision using our advanced tuner
            </p>
          </div>

          {/* Tuning Selection */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Select Tuning</h3>
            <div className="flex flex-wrap gap-3">
              {Object.keys(tunings).map((tuning) => (
                <button
                  key={tuning}
                  onClick={() => setSelectedTuning(tuning)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    selectedTuning === tuning
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tuning}
                </button>
              ))}
            </div>
          </div>

          {/* Main Tuner Display */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full ${tuningStatus.bg} mb-6`}>
                <span className={`text-4xl font-bold ${tuningStatus.color}`}>
                  {currentNote || '♪'}
                </span>
              </div>
              
              {isListening && (
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-gray-800">
                    {frequency.toFixed(1)} Hz
                  </div>
                  
                  {/* Cents Display */}
                  <div className="flex items-center justify-center space-x-4">
                    <span className="text-lg font-medium text-gray-600">
                      {cents > 0 ? `+${cents}` : cents} cents
                    </span>
                  </div>
                  
                  {/* Visual Tuning Indicator */}
                  <div className="relative w-64 h-4 bg-gray-200 rounded-full mx-auto">
                    <div 
                      className={`absolute w-4 h-4 rounded-full ${
                        tuningStatus.status === 'perfect' ? 'bg-green-500' :
                        tuningStatus.status === 'close' ? 'bg-yellow-500' : 'bg-red-500'
                      } transition-all duration-300`}
                      style={{ 
                        left: `${Math.max(0, Math.min(100, 50 + (cents / 50) * 40))}%`,
                        transform: 'translateX(-50%)'
                      }}
                    ></div>
                    <div className="absolute left-1/2 top-0 w-0.5 h-4 bg-gray-400 transform -translate-x-0.5"></div>
                  </div>
                  
                  <div className={`text-lg font-semibold ${tuningStatus.color}`}>
                    {tuningStatus.status === 'perfect' && '✓ Perfect!'}
                    {tuningStatus.status === 'close' && 'Almost there...'}
                    {tuningStatus.status === 'off' && (cents > 0 ? 'Tune down' : 'Tune up')}
                  </div>
                </div>
              )}
            </div>

            <div className="text-center">
              <button
                onClick={toggleTuner}
                className={`px-8 py-4 rounded-full font-semibold text-lg transition-all cursor-pointer whitespace-nowrap ${
                  isListening
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <i className={`${isListening ? 'ri-stop-circle-line' : 'ri-mic-line'} text-xl`}></i>
                  <span>{isListening ? 'Stop Tuner' : 'Start Tuner'}</span>
                </div>
              </button>
            </div>
          </div>

          {/* String Reference */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
              {selectedTuning} Tuning Reference
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {tunings[selectedTuning].map((string, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer"
                       onClick={() => playReferenceNote(string.frequency, string.note)}>
                    <div className="text-sm text-gray-500 mb-1">String {string.number}</div>
                    <div className="text-2xl font-bold text-gray-800 mb-2">{string.string}</div>
                    <div className="text-sm text-gray-600 mb-2">{string.note}</div>
                    <div className="text-xs text-gray-500">{string.frequency.toFixed(1)} Hz</div>
                    <button className="mt-3 w-8 h-8 flex items-center justify-center bg-blue-100 hover:bg-blue-200 rounded-full text-blue-600 transition-colors cursor-pointer mx-auto">
                      <i className="ri-volume-up-line"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tuning Tips */}
          <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Tuning Tips</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full mt-1">
                    <i className="ri-lightbulb-line text-blue-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Tune in a quiet environment</h4>
                    <p className="text-gray-600 text-sm">Background noise can interfere with tuning accuracy</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mt-1">
                    <i className="ri-arrow-up-down-line text-green-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Tune up to pitch</h4>
                    <p className="text-gray-600 text-sm">Always approach the target note from below for better stability</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-yellow-100 rounded-full mt-1">
                    <i className="ri-refresh-line text-yellow-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Check tuning regularly</h4>
                    <p className="text-gray-600 text-sm">Strings can go out of tune due to temperature and playing</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-purple-100 rounded-full mt-1">
                    <i className="ri-ear-line text-purple-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Train your ear</h4>
                    <p className="text-gray-600 text-sm">Use the reference tones to develop your pitch recognition</p>
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
