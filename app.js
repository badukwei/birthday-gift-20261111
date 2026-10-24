const memories = window.MEMORIES;
const interaction = document.querySelector('#interaction');
const progress = document.querySelector('.progress');
const portrait = document.querySelector('.quokka');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let current = 0;
let revealed = false;
let typingTimer;
let animationTimer;

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function renderProgress() {
  progress.querySelectorAll('.step').forEach(node => node.remove());
  memories.forEach((_, i) => {
    const step = element('span', `step ${i < current || (i === current && revealed) ? 'complete' : ''} ${i === current ? 'current' : ''}`, i < current || (i === current && revealed) ? '♥' : String(i + 1).padStart(2, '0'));
    step.setAttribute('aria-label', `第 ${i + 1} 個回憶${i === current ? '，目前進度' : ''}`);
    if (i === current) step.setAttribute('aria-current', 'step');
    progress.append(step);
  });
}

function typeText(node, text) {
  clearInterval(typingTimer);
  node.setAttribute('aria-label', text);
  const visible = element('span');
  visible.setAttribute('aria-hidden', 'true');
  node.append(visible);
  if (reducedMotion.matches) {
    visible.textContent = text;
    return;
  }
  const characters = Array.from(text);
  let index = 0;
  typingTimer = setInterval(() => {
    visible.textContent = characters.slice(0, ++index).join('');
    if (index >= characters.length) clearInterval(typingTimer);
  }, 38);
}

function bubble(text) {
  const box = element('div', 'bubble');
  box.append(element('span', 'speaker', 'QUOKKA 說'));
  const heading = element('h2', 'dialogue');
  heading.tabIndex = -1;
  box.append(heading);
  typeText(heading, text);
  return box;
}

function renderQuestion(focus = false) {
  revealed = false;
  document.body.classList.remove('is-revealed');
  interaction.replaceChildren();
  const memory = memories[current];
  interaction.append(bubble(memory.question));
  const answers = element('div', 'answers');
  memory.answers.forEach((answer, i) => {
    const button = element('button', 'answer');
    button.type = 'button';
    button.append(element('span', 'answer-index', String.fromCharCode(65 + i)), element('span', '', answer), element('span', 'answer-arrow', '↗'));
    button.addEventListener('click', () => reveal(answer), { once: true });
    answers.append(button);
  });
  interaction.append(answers, element('p', 'hint', '沒有標準答案，只有屬於我們的回憶 ♡'));
  renderProgress();
  if (focus) interaction.querySelector('h2').focus({ preventScroll: true });
}

function reveal(answer) {
  if (revealed) return;
  revealed = true;
  clearInterval(typingTimer);
  document.body.classList.add('is-revealed');
  interaction.replaceChildren();
  const memory = memories[current];
  interaction.append(bubble(memory.reply));
  const choice = element('p', 'chosen-answer', `妳說：「${answer}」`);
  interaction.append(choice);
  const card = element('figure', 'polaroid');
  const tape = element('span', 'tape');
  tape.setAttribute('aria-hidden', 'true');
  const photo = element('img', 'memory-photo');
  photo.alt = memory.title;
  photo.src = memory.photo;
  photo.addEventListener('error', () => {
    const placeholder = element('div', `photo-placeholder placeholder-${current}`);
    placeholder.append(element('span', 'placeholder-flower', '✳'), element('span', 'placeholder-label', '這裡，留給我們的照片'), element('span', 'placeholder-number', `MEMORY No. ${String(current + 1).padStart(2, '0')}`));
    photo.replaceWith(placeholder);
  }, { once: true });
  const caption = element('figcaption');
  caption.append(element('span', 'photo-number', `0${current + 1} / OUR LITTLE MOMENTS`), element('h3', '', memory.title), element('p', '', memory.caption));
  card.append(tape, photo, caption);
  interaction.append(card);
  const last = current === memories.length - 1;
  const next = element('button', 'next-button', last ? '再回味一次 ↺' : '下一個小回憶 →');
  next.type = 'button';
  next.addEventListener('click', () => {
    current = last ? 0 : current + 1;
    renderQuestion(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, { once: true });
  interaction.append(next);
  if (last) interaction.append(element('p', 'hint', '五個小回憶，還有好多個明天。♡'));
  renderProgress();
  interaction.querySelector('h2').focus({ preventScroll: true });
}

// Play the image frames embedded in the official character animation.
const frames = Array.from({ length: 12 }, (_, i) => `./assets/quokka-${11 - i}.webp`);
frames.forEach(src => { const img = new Image(); img.src = src; });
function animateCharacter() {
  clearInterval(animationTimer);
  if (reducedMotion.matches || document.hidden) return;
  let frame = 0;
  animationTimer = setInterval(() => { portrait.src = frames[frame++ % frames.length]; }, 120);
}
document.addEventListener('visibilitychange', animateCharacter);
reducedMotion.addEventListener('change', animateCharacter);
renderQuestion();
animateCharacter();
