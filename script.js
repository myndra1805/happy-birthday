window.addEventListener('load', () => {
  Swal.fire({
    title: 'Konfirmasi',
    text: "Kamu ingin memutar musik di background?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes',
    cancelButtonText: 'No',
  }).then((result) => {
    if (result.isConfirmed) {
      document.querySelector('.song').play();
      animationTimeline();
    } else {
      animationTimeline();
    }
  });
});

const animationTimeline = () => {
  const timeLine = gsap.timeline({
    onComplete: () => {
      const fireWorks = [...document.querySelectorAll(".fire-box")]
      for (let i = 0; i < fireWorks.length; i++) {
        const fireWork = fireWorks[i];
        fireWork.classList.add("firework")
      }
      document.querySelector("#box-detail").classList.add("detail")
    },
    onStart: () => {
      const items = [...document.querySelectorAll(".box-text")]
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        item.style.display = 'block'
      }
    }
  });

  timeLine
    .from(".box-1", { duration: 1, y: 200, opacity: 0 }).to(".box-1", { duration: 1, scale: 1, opacity: 0, delay: 3 })
    .from(".box-2", { duration: 1, scale: 1, opacity: 0 }).to(".box-2", { duration: 1, scale: 1, opacity: 0, delay: 3 })
    .from(".text-1-box-3", { duration: 1, scale: 1, opacity: 0 })
    .from(".text-2-box-3", { duration: 1, scale: 1, opacity: 0, delay: 2 })
    .to(".box-3", { duration: 1, scale: 1, opacity: 0, delay: 3 })
    .from(".text-1-box-4", { duration: 1, scale: 1, opacity: 0 })
    .from(".text-2-box-4", { duration: 1, scale: 1, opacity: 0 })
    .to(".box-4", { duration: 1, scale: 1, opacity: 0, delay: 3 })
    .from(".text-1-box-5", { duration: 1, scale: 1, opacity: 0 })
    .from(".text-2-box-5", { duration: 1, scale: 1, opacity: 0, delay: 2 })
    .to(".box-5", { duration: 1, scale: 1, opacity: 0, delay: 3 })
    .from(".box-6", { duration: 1, scale: 1, opacity: 0 }).to(".box-6", { duration: 1, scale: 1, opacity: 0, delay: 3 })

}