import whisper from '../../../src/index';

const whisperTrigger = document.getElementById('whisper-trigger');

whisperTrigger?.addEventListener('click', () => {
  whisper.success('This is a successful whisper');
});
