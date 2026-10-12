import { CONFIG } from '../config';

/**
 * Audio Engine: Romantic Wedding Background Music
 * Plays genuine romantic wedding piano & acoustic instrumental melody
 * with smooth fade transitions and Web Audio tactile sound effects.
 */
class WeddingAudioManager {
  private audio: HTMLAudioElement | null = null;
  private isPlaying: boolean = false;
  private fadeInterval: number | null = null;
  private listeners: Set<(playing: boolean) => void> = new Set();
  private audioCtx: AudioContext | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('wedding_music_enabled');
      if (saved === 'false') {
        this.isPlaying = false;
      }
    }
  }

  private initAudioElement(): HTMLAudioElement {
    if (!this.audio) {
      this.audio = new Audio(CONFIG.audio.src);
      this.audio.loop = true;
      this.audio.preload = 'auto';
      this.audio.volume = 0;

      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audio.addEventListener('ended', () => {
        this.isPlaying = false;
        this.notify();
      });
    }
    return this.audio;
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

  private clearFade() {
    if (this.fadeInterval) {
      clearInterval(this.fadeInterval);
      this.fadeInterval = null;
    }
  }

  /**
   * Smoothly fade in to target volume
   */
  public async startAudio(): Promise<boolean> {
    try {
      const audio = this.initAudioElement();
      this.clearFade();

      localStorage.setItem('wedding_music_enabled', 'true');

      // Start playback
      await audio.play();
      this.isPlaying = true;
      this.notify();

      const targetVol = CONFIG.audio.targetVolume || 0.45;
      const step = 0.03;
      const intervalMs = 60; // ~1 second smooth ramp

      this.fadeInterval = window.setInterval(() => {
        if (!this.audio) {
          this.clearFade();
          return;
        }
        if (this.audio.volume + step >= targetVol) {
          this.audio.volume = targetVol;
          this.clearFade();
        } else {
          this.audio.volume += step;
        }
      }, intervalMs);

      return true;
    } catch {
      // Browser blocked autoplay without user interaction yet
      return false;
    }
  }

  /**
   * Smoothly fade out to 0 and pause
   */
  public pause() {
    if (!this.audio) return;
    this.clearFade();

    localStorage.setItem('wedding_music_enabled', 'false');

    const step = 0.05;
    const intervalMs = 60;

    this.fadeInterval = window.setInterval(() => {
      if (!this.audio) {
        this.clearFade();
        return;
      }
      if (this.audio.volume - step <= 0.01) {
        this.audio.volume = 0;
        this.audio.pause();
        this.isPlaying = false;
        this.notify();
        this.clearFade();
      } else {
        this.audio.volume -= step;
      }
    }, intervalMs);
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.startAudio();
    }
    return this.isPlaying;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  /**
   * Tactile wax crack and harmonic shimmer sound for the preloader seal
   */
  public playSealCrackSound() {
    try {
      if (!this.audioCtx) {
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        this.audioCtx = new AudioContextClass();
      }

      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const ctx = this.audioCtx;
      const now = ctx.currentTime;

      // 1. Crisp wax break crackle
      const bufferSize = ctx.sampleRate * 0.08; // 80ms
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1800, now);
      filter.Q.setValueAtTime(3, now);
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      noise.start(now);

      // 2. Soft golden harmonic chime (unveiling shimmer)
      [587.33, 880.0, 1174.66].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.04);

        oscGain.gain.setValueAtTime(0.001, now + idx * 0.04);
        oscGain.gain.linearRampToValueAtTime(0.05, now + idx * 0.04 + 0.02);
        oscGain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.04 + 0.8);

        osc.connect(oscGain);
        oscGain.connect(ctx.destination);
        osc.start(now + idx * 0.04);
        osc.stop(now + idx * 0.04 + 0.85);
      });
    } catch {
      // Audio fallback
    }
  }
}

export const weddingAudio = new WeddingAudioManager();
