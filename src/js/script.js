// document.querySelectorAll('.faq details').forEach((item) =&gt; {
//   item.addEventListener('toggle', (event) =&gt; {
//     if (event.target.open) {
//       document.querySelectorAll('.faq details').forEach((otherItem) =&gt; {
//         if (otherItem !== event.target) {
//           otherItem.removeAttribute('open');
//         }
//       });
//     }
//   });
// });

// const dialog = document.getElementById('myDialog')
// const dialogOpener = document.querySelector('.openDialogBtn')
// const dialogCloser = dialog.querySelector('.closeDialogBtn')

// function openModalAndLockScroll() {
//   dialog.showModal()
//   document.body.classList.add('scroll-lock')
// }

// function returnScroll() {
//   document.body.classList.remove('scroll-lock')
// }

// function close() {
//   dialog.close()
//   returnScroll()
// }

// dialogOpener.addEventListener('click', openModalAndLockScroll)
// dialogCloser.addEventListener('click', (event) => {
//   event.stopPropagation()
//   close()
// })

// function closeOnBackDropClick({ currentTarget, target }) {
//   const dialog = currentTarget
//   const isClickedOnBackDrop = target === dialog
//   if (isClickedOnBackDrop) {
//     close()
//   }
// }

// dialog.addEventListener('click', closeOnBackDropClick)
// dialog.addEventListener('cancel', (event) => {
//   returnScroll()
// });