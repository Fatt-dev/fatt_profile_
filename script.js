function changeOrgTheme(themeName, element) {
    const orgSection = document.getElementById('organisasi');
    if (!orgSection) return;

    orgSection.classList.remove('theme-midnight', 'theme-emerald', 'theme-dusk');
    orgSection.classList.add('theme-' + themeName);

    const buttons = orgSection.querySelectorAll('.theme-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (element) {
        element.classList.add('active');
    }
}
