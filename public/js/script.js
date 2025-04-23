
window.onload = init;

function init() {
    console.log("window has loaded");
}

let spanHolder;

function rainKeyword(word) {

    setInterval(() => {

      span = document.createElement('span');

      span.className = 'drop';
      span.textContent = word;

      const fontSize = Math.random() * 20 + 12;
      span.style.fontSize = `${fontSize}px`;

      const duration = Math.random() * 5 + 3;
      span.style.animationDuration = `${duration}s`;

      const left = Math.random() * window.innerWidth;
      span.style.left = `${left}px`;

      document.body.appendChild(span);
      spanHolder = span;

      // Clean up after animation
      setTimeout(() => span.remove(), duration * 1000);
    }, 500);
  }

function clearOldDrops() {
  const drops = document.querySelectorAll('.drop');
  drops.forEach(drop => drop.remove());

  if (spanHolder != null){
   (spanHolder.remove());
  }
}