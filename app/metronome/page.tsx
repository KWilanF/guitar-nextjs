
'use client';

import Header from '../../components/Header';
import { useState, useEffect, useRef } from 'react';

export default function Metronome() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(120);
  const [timeSignature, setTimeSignature] = useState('4/4');
  const [currentBeat, setCurrentBeat] = useState(0);
  const [volume, setVolume] = useState(50);
  const intervalRef = useRef(null);

  const timeSignatures = ['4/4', '3/4', '2/4', '6/8'];
  const commonBPMs = [
    { name: 'Largo', range: '40-60', bpm: 50 },
    { name: 'Adagio', range: '66-76', bpm: 70 },
    { name: 'Andante', range: '76-108', bpm: 90 },
    { name: 'Moderato', range: '108-120', bpm: 114 },
    { name: 'Allegro', range: '120-168', bpm: 144 },
    { name: 'Presto', range: '168-200', bpm: 180 }
  ];

  const startMetronome = () => {
    if (!isPlaying) {
      const interval = 60000 / bpm;
      intervalRef.current = setInterval(() => {
        setCurrentBeat(prev => {
          const beatsPerMeasure = parseInt(timeSignature.split('/')[0]);
          return (prev + 1) % beatsPerMeasure;
        });
      }, interval);
      setIsPlaying(true);
    } else {
      clearInterval(intervalRef.current);
      setIsPlaying(false);
      setCurrentBeat(0);
    }
  };

  const changeBPM = (newBPM) => {
    setBpm(Math.max(40, Math.min(200, newBPM)));
    if (isPlaying) {
      clearInterval(intervalRef.current);
      const interval = 60000 / newBPM;
      intervalRef.current = setInterval(() => {
        setCurrentBeat(prev => {
          const beatsPerMeasure = parseInt(timeSignature.split('/')[0]);
          return (prev + 1) % beatsPerMeasure;
        });
      }, interval);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const getBeatsArray = () => {
    const beatsPerMeasure = parseInt(timeSignature.split('/')[0]);
    return Array.from({ length: beatsPerMeasure }, (_, i) => i);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Metronome
            </h1>
            <p className="text-xl text-gray-600">
              Practice with perfect timing and develop your rhythm
            </p>
          </div>

          {/* Main Metronome Display */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <div className="text-center mb-8">
              <div className="text-6xl font-bold text-gray-800 mb-4">
                {bpm}
              </div>
              <div className="text-xl text-gray-600 mb-6">BPM</div>
              
              {/* Beat Indicator */}
              <div className="flex justify-center space-x-4 mb-8">
                {getBeatsArray().map((beat) => (
                  <div
                    key={beat}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-150 ${
                      currentBeat === beat && isPlaying
                        ? 'bg-blue-600 text-white scale-110'
                        : beat === 0
                        ? 'bg-red-100 text-red-600'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {beat + 1}
                  </div>
                ))}
              </div>

              <button
                onClick={startMetronome}
                className={`px-8 py-4 rounded-full font-semibold text-lg transition-all cursor-pointer whitespace-nowrap ${
                  isPlaying
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <i className={`${isPlaying ? 'ri-pause-line' : 'ri-play-line'} text-xl`}></i>
                  <span>{isPlaying ? 'Stop' : 'Start'}</span>
                </div>
              </button>
            </div>
          </div>

          {/* BPM Controls */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Tempo Control</h3>
            
            <div className="space-y-6">
              {/* BPM Slider */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={() => changeBPM(bpm - 1)}
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
                  >
                    <i className="ri-subtract-line"></i>
                  </button>
                  
                  <div className="flex-1 mx-6">
                    <input
                      type="range"
                      min="40"
                      max="200"
                      value={bpm}
                      onChange={(e) => changeBPM(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  
                  <button
                    onClick={() => changeBPM(bpm + 1)}
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
                  >
                    <i className="ri-add-line"></i>
                  </button>
                </div>
              </div>

              {/* Quick BPM Buttons */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {commonBPMs.map((tempo) => (
                  <button
                    key={tempo.name}
                    onClick={() => changeBPM(tempo.bpm)}
                    className={`p-3 rounded-lg text-center transition-colors cursor-pointer whitespace-nowrap ${
                      bpm === tempo.bpm
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <div className="font-semibold">{tempo.name}</div>
                    <div className="text-sm opacity-80">{tempo.range}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Time Signature & Settings */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Time Signature</h3>
              <div className="grid grid-cols-2 gap-3">
                {timeSignatures.map((sig) => (
                  <button
                    key={sig}
                    onClick={() => setTimeSignature(sig)}
                    className={`p-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                      timeSignature === sig
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    {sig}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Volume</h3>
              <div className="flex items-center space-x-4">
                <i className="ri-volume-down-line text-gray-600"></i>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(parseInt(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <i className="ri-volume-up-line text-gray-600"></i>
                <span className="text-sm font-medium text-gray-600 w-12">
                  {volume}%
                </span>
              </div>
            </div>
          </div>

          {/* Practice Tips */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Practice Tips</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full mt-1">
                    <i className="ri-speed-line text-blue-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Start Slow</h4>
                    <p className="text-gray-600 text-sm">Begin at a comfortable tempo and gradually increase speed</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-green-100 rounded-full mt-1">
                    <i className="ri-focus-3-line text-green-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Stay Focused</h4>
                    <p className="text-gray-600 text-sm">Concentrate on playing exactly with the beat</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-yellow-100 rounded-full mt-1">
                    <i className="ri-time-line text-yellow-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Practice Regularly</h4>
                    <p className="text-gray-600 text-sm">Use the metronome in every practice session</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 flex items-center justify-center bg-purple-100 rounded-full mt-1">
                    <i className="ri-headphone-line text-purple-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Use Headphones</h4>
                    <p className="text-gray-600 text-sm">Clear audio helps you stay in time better</p>
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
