/**
 * Audio Engine: Serene Eastern Acoustic Oud & Ambient Drone Synthesizer
 * Built entirely with Web Audio API for zero external network dependency,
 * instant loading, and smooth 2-second fades.
 */

class WeddingAudioManager {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private loopInterval: number | null = null;
  private listeners: Set<(playing: boolean) => void> = new Set();

  constructor() {
    // Check saved state
    const saved = localStorage.getItem('wedding_music_enabled');
    if (saved === 'false') {
      this.isPlaying = false;
    }
  }

  public subscribe(cb: (playing: boolean) => void) {
    this.listeners.add(cb);
    cb(this.isPlaying);
    return () => {
      this.listeners.delete(cb);
    };
  }

  private notify() {
    this.listeners.forEach((cb) => cb(this.isPlaying));
  }

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /**
   * Play a gentle acoustic oud / string pluck in the Hijaz/Bayati scale (D, Eb, F#, G, A, Bb, C, D)
   */
  private playPluck(freq: number, delay: number = 0, duration: number = 2.4) {
    if (!this.ctx || !this.masterGain || !this.isPlaying) return;

    const startTime = this.ctx.currentTime + delay;

    // Dual oscillator: triangle + soft saw for rich wooden resonance
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const noteGain = this.ctx.createGain();

    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(freq, startTime);

    osc2.type = 'sawtooth';
    osc2.frequency.setValueAtTime(freq * 1.002, startTime); // slight chorus detune

    // Warm wooden low-pass filter
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, startTime);
    filter.frequency.exponentialRampToValueAtTime(320, startTime + duration);

    // Envelope
    noteGain.gain.setValueAtTime(0.001, startTime);
    noteGain.gain.linearRampToValueAtTime(0.08, startTime + 0.04);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc1.start(startTime);
    osc2.start(startTime);
    osc1.stop(startTime + duration + 0.1);
    osc2.stop(startTime + duration + 0.1);
  }

  /**
   * Continuous warm ambient drone chord (D minor / modal drone)
   */
  private startAmbientDrone() {
    if (!this.ctx || !this.masterGain) return;

    const droneNotes = [146.83, 220.0, 293.66]; // D3, A3, D4
    droneNotes.forEach((freq) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.02, this.ctx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
    });
  }

  private startMelodicCycle() {
    // Hijaz modal acoustic melody notes (frequencies in Hz)
    // D4, Eb4, F#4, G4, A4, Bb4, C5, D5
    const melody = [
      { f: 293.66, d: 0.0 },  // D4
      { f: 311.13, d: 1.2 },  // Eb4
      { f: 369.99, d: 2.2 },  // F#4
      { f: 392.00, d: 3.4 },  // G4
      { f: 440.00, d: 5.0 },  // A4
      { f: 392.00, d: 6.8 },  // G4
      { f: 369.99, d: 8.0 },  // F#4
      { f: 311.13, d: 9.4 },  // Eb4
      { f: 293.66, d: 11.0 }, // D4
      { f: 220.00, d: 13.0 }, // A3 low resolution
    ];

    const playCycle = () => {
      if (!this.isPlaying) return;
      melody.forEach((note) => {
        this.playPluck(note.f, note.d, 3.2);
      });
    };

    playCycle();
    this.loopInterval = window.setInterval(playCycle, 16000);
  }

  public playSealCrackSound() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      // 1. Crisp wax break crackle
      const bufferSize = this.ctx.sampleRate * 0.08; // 80ms
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1800, now);
      filter.Q.setValueAtTime(3, now);
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(now);

      // 2. Soft golden harmonic chime (unveiling shimmer)
      [587.33, 880.0, 1174.66].forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.04);

        oscGain.gain.setValueAtTime(0.001, now + idx * 0.04);
        oscGain.gain.linearRampToValueAtTime(0.06, now + idx * 0.04 + 0.02);
        oscGain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.04 + 0.8);

        osc.connect(oscGain);
        oscGain.connect(this.ctx.destination);
        osc.start(now + idx * 0.04);
        osc.stop(now + idx * 0.04 + 0.85);
      });
    } catch {
      // Audio fallback
    }
  }

  public async startAudio(): Promise<boolean> {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return false;

      this.isPlaying = true;
      localStorage.setItem('wedding_music_enabled', 'true');

      // 2-second smooth fade in
      const now = this.ctx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.linearRampToValueAtTime(0.65, now + 2.0);

      this.startAmbientDrone();
      this.startMelodicCycle();
      this.notify();
      return true;
    } catch {
      return false;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.startAudio();
    }
    return this.isPlaying;
  }

  public pause() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    // 2-second smooth fade out
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 1.8);

    setTimeout(() => {
      this.isPlaying = false;
      localStorage.setItem('wedding_music_enabled', 'false');
      if (this.loopInterval) {
        clearInterval(this.loopInterval);
        this.loopInterval = null;
      }
      this.notify();
    }, 1850);
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const weddingAudio = new WeddingAudioManager();
