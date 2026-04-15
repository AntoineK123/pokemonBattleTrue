// 🔊 Fonction utilitaire pour gérer la musique d’ambiance du menu principal
export let currentAudio: HTMLAudioElement | null = null;

export function playSong(trackPath: string) {
  // Si une chanson est déjà en cours, on la stoppe
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // Nouvelle instance
  const audio = new Audio(trackPath);
  audio.loop = true;
  audio.volume = 0.1;
  audio.play().catch(() => {
    console.warn("Lecture bloquée jusqu’à une interaction utilisateur 👀");
  });

  currentAudio = audio;
}

export function toggleVolume() {
  console.log("im toggling volume")
  if (!currentAudio) return;
  currentAudio.volume = currentAudio.volume > 0 ? 0 : 0.1;
}

export function stopSong() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}