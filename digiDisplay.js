var digiDisplay = {};
digiDisplay.menu = (title, status) => {
    iimDisplay(`DIGITALIZY\x0A${title}\x0A\x0A${status}`);
}
digiDisplay.quit = () => {
    iimDisplay('DIGITALIZY\x0ASemua aktivitas sudah selesai\x0A\x0ATerima kasih');
}
