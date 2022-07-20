const arr = [
  {
    modalHeader: {
      img: './img/icons/close_white_48dp.svg',
      imgAlt: 'close_btn',
      txt: 'Html Linters',
    },
    modalBody: {
      img: './img/linting_tools.webp',
      imgAlt: 'linters_img',
      description:
        'Linters help to correct common errors that are hard to detect on the code base. It helps to enforce some level of professionality and code standard for better optimization and readability',
    },
    modalStacks: ['html', 'css', 'github'],
    buttonRef: {
      live: 'https://github.com/aceDavon/html-css-linters',
      github: 'https://github.com/aceDavon/html-css-linters',
    },
  },
  {
    modalHeader: {
      img: './img/icons/close_white_48dp.svg',
      imgAlt: 'close_btn',
      txt: 'A personal portfolio project',
    },
    modalBody: {
      img: './img/html_css_logo.jpg',
      imgAlt: 'html_css_logo',
      description:
        'Professional portfolio site built with HTML/CSS with standard githubflow. Built to satisfy professional standards of designs and adaptability.',
    },
    modalStacks: ['html', 'css', 'github'],
    buttonRef: {
      live: 'https://acedavon.github.io/Portfolio-project/',
      github: 'https://github.com/aceDavon/portfolio-project',
    },
  },
];
const modal = document.getElementById('modal');
const btns = document.querySelectorAll('.btn');
const btn = Array.from(btns);

btn.forEach((el, i) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    let data = '';
    const x = arr[i];
    data = `
   <section class="modal-header">
        <h1 class="modal-header-txt">${x.modalHeader.txt}</h1>
        <img
          id="modalClose"
          class="modal-close"
          src=${x.modalHeader.img}
          alt=${x.modalHeader.imgAlt}
        />
      </section>
      <section class="modal-body">
        <div class="modal-body-img">
          <img src=${x.modalBody.img} alt=${x.modalBody.imgAlt} />
        </div>
        <div class="modal-body-txt">${x.modalBody.description}
        </div>
        <ul class="modal-stacks">
          <li>|</li>
          <li><a href="#">html</a></li>
          <li>|</li>
          <li><a href="#">css</a></li>
          <li>|</li>
          <li><a href="#">github</a></li>
          <li>|</li>
        </ul>
      </section>
      <section class="modal-footer">
        <button class="modal-footer-btn btn" onClick='window.location.href="${x.buttonRef.live}";'>
          <span>see live</span>
          <img src="./img/icons/Ellipse.png" alt="link" />
        </button>
        <button class="modal-footer-btn btn" onClick='window.location.href="${x.buttonRef.github}";'>
          <span>see source</span>
          <img src="./img/icons/github.svg" alt="git-icon" />
        </button>
      </section>
  `;
    modal.innerHTML = data;
    modal.classList.toggle('showModal');
  });
});

modal.addEventListener('click', () => {
  modal.classList.toggle('showModal');
});
