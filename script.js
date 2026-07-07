const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const yearNodes = document.querySelectorAll('#year');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}

yearNodes.forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const classSelect = document.getElementById('class-select');
const subjectBoard = document.getElementById('subject-board');
const classChoiceItems = document.querySelectorAll('.class-choice-item');

const classSubjects = {
  playgroup: [
    'Mathematics',
    'English',
    'Kiswahili',
    'Science',
    'Dancing',
    'CRE',
    'Social Studies',
    'CBE learning activities'
  ],
  preprimary1: [
    'Mathematics',
    'English',
    'Kiswahili',
    'Science',
    'Dancing',
    'CRE',
    'Social Studies',
    'CBE learning activities'
  ],
  preprimary2: [
    'Mathematics',
    'English',
    'Kiswahili',
    'Science',
    'Dancing',
    'CRE',
    'Social Studies',
    'CBE learning activities'
  ],
  grade1: [
    'Mathematics',
    'English',
    'Kiswahili',
    'Science',
    'CRE',
    'Social Studies',
    'Physical education'
  ],
  grade2: [
    'Mathematics',
    'English',
    'Kiswahili',
    'Science',
    'CRE',
    'Social Studies',
    'Physical education'
  ],
  grade3: [
    'Mathematics',
    'English',
    'Kiswahili',
    'Science',
    'CRE',
    'Social Studies',
    'Physical education'
  ],
  grade4: [
    'Mathematics',
    'English',
    'Kiswahili',
    'Science',
    'CRE',
    'Social Studies',
    'Physical education'
  ],
  grade5: [
    'Mathematics',
    'English',
    'Kiswahili',
    'Science',
    'CRE',
    'Social Studies',
    'Physical education'
  ],
  grade6: [
    'Mathematics',
    'English',
    'Kiswahili',
    'Science',
    'CRE',
    'Social Studies',
    'Physical education'
  ],
  grade7: [
    'Mathematics',
    'English',
    'Kiswahili',
    'Science',
    'CRE',
    'Social Studies',
    'Physical education'
  ]
};

let currentClassKey = classSelect ? classSelect.value : 'playgroup';

function getClassTitle(classKey) {
  const option = classSelect.querySelector(`option[value="${classKey}"]`);
  return option ? option.text : 'Selected Class';
}

function renderSubjects(classKey) {
  const subjects = classSubjects[classKey] || [];
  const title = getClassTitle(classKey);
  const listItems = subjects.map(subject => `<li>${subject}</li>`).join('');
  if (subjectBoard) {
    subjectBoard.innerHTML = `
      <h4>Subjects for ${title}</h4>
      <ul>${listItems}</ul>
    `;
  }
}

function setActiveClassItem(classKey) {
  classChoiceItems.forEach((button) => {
    button.classList.toggle('active', button.dataset.class === classKey);
  });
}

function previewClass(classKey, commit = false) {
  renderSubjects(classKey);
  setActiveClassItem(classKey);
  if (commit && classSelect) {
    classSelect.value = classKey;
    currentClassKey = classKey;
  }
}

if (classSelect) {
  classSelect.addEventListener('change', (event) => {
    const selected = event.target.value;
    previewClass(selected, true);
  });
}

classChoiceItems.forEach((button) => {
  button.addEventListener('mouseenter', () => previewClass(button.dataset.class));
  button.addEventListener('focus', () => previewClass(button.dataset.class));
  button.addEventListener('click', () => previewClass(button.dataset.class, true));
});

const classChoiceGrid = document.querySelector('.class-choice-grid');
if (classChoiceGrid) {
  classChoiceGrid.addEventListener('mouseleave', () => previewClass(currentClassKey));
}
