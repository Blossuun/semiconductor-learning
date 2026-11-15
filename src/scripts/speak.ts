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
		showNote(button, !available);
	});
}

const LANG_NAMES: Record<string, string> = { en: '영어', ja: '일본어', zh: '중국어', ko: '한국어' };

// 재생할 수 없는 버튼 옆에 안내(.speak-unavailable)를 둔다. 재생 가능해지면 지운다.
function showNote(button: HTMLButtonElement, show: boolean) {
	const next = button.nextElementSibling;
	const existing = next?.classList.contains('speak-unavailable') ? next : null;
	if (!show) {
		existing?.remove();
		return;
	}
	if (existing) return;
	const base = normalize(button.dataset.speakLang ?? '').split('-')[0];
	const note = document.createElement('span');
	note.className = 'speak-unavailable';
	note.setAttribute('role', 'note');
	note.textContent = `이 기기에 ${LANG_NAMES[base] ?? '해당 언어'} 음성이 없어 들을 수 없습니다`;
	note.style.cssText =
		'font-size:12px;line-height:18px;font-weight:500;color:var(--text-muted);margin-inline-start:auto;text-align:end;';
	button.after(note);
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
