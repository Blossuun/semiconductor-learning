// 발음 버튼 공용 동작.
// 버튼: data-speak(글자), data-speak-lang(언어), data-audio(미리 만든 mp3 주소, 선택).
// mp3가 있으면 그것을 재생하고, 없거나 재생에 실패하면 기기 음성으로 읽는다.

const synth = 'speechSynthesis' in window ? window.speechSynthesis : null;
let player: HTMLAudioElement | null = null;

const normalize = (tag: string) => tag.replace('_', '-').toLowerCase();

function hasVoice(voices: SpeechSynthesisVoice[], lang: string): boolean {
	const target = normalize(lang);
	const base = target.split('-')[0];
	return voices.some((v) => {
		const voice = normalize(v.lang);
		return voice === target || voice === base || (base !== 'zh' && voice.startsWith(`${base}-`));
	});
}

// mp3도 기기 음성도 없는 버튼은 숨기고, 그 행의 읽기 표기를 강조한다.
function applyVoices() {
	const voices = synth ? synth.getVoices() : [];
	document.querySelectorAll<HTMLButtonElement>('[data-speak]').forEach((button) => {
		const available = Boolean(button.dataset.audio) || hasVoice(voices, button.dataset.speakLang ?? '');
		button.hidden = !available;
		button.closest<HTMLElement>('.row')?.toggleAttribute('data-no-voice', !available);
	});
}

function speakWithDevice(button: HTMLElement) {
	if (!synth || !button.dataset.speak) return;
	const utterance = new SpeechSynthesisUtterance(button.dataset.speak);
	utterance.lang = button.dataset.speakLang ?? 'ko-KR';
	synth.cancel();
	synth.speak(utterance);
}

function stop() {
	synth?.cancel();
	if (player) {
		player.pause();
		player = null;
	}
}

document.addEventListener('click', (event) => {
	const button = (event.target as Element | null)?.closest<HTMLElement>('[data-speak]');
	if (!button) return;
	stop();
	const src = button.dataset.audio;
	if (!src) {
		speakWithDevice(button);
		return;
	}
	const audio = new Audio(src);
	player = audio;
	audio.play().catch(() => {
		if (player === audio) speakWithDevice(button);
	});
});

synth?.addEventListener('voiceschanged', applyVoices);
applyVoices();
