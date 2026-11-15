// 1. Memblokir klik kanan
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// 2. Memblokir tombol shortcut keyboard
document.addEventListener('keydown', function (e) {
  // Memblokir tombol F12 (Inspect Element)
  if (e.key === 'F12' || e.keyCode === 123) {
    e.preventDefault();
    return false;
  }

  // Memblokir kombinasi Ctrl + Shift + I / J / C (DevTools)
  if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) {
    e.preventDefault();
    return false;
  }

  // Memblokir Ctrl + U (View Source) dan Ctrl + S (Save Page)
  if (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.key === 'S' || e.key === 's')) {
    e.preventDefault();
    return false;
  }

  // Memblokir kombinasi tombol untuk pengguna Mac (Cmd + Option + I / J / C / U)
  if (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c' || e.key === 'U' || e.key === 'u')) {
    e.preventDefault();
    return false;
  }
});
