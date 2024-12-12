function createHero() {
    const hero = document.createElement('div');
    hero.className = 'hero';

    // Announcement Banner
    const announcementBanner = document.createElement('div');
    announcementBanner.className = 'announcement-banner';

    const announcementText = document.createElement('span');

    announcementBanner.appendChild(announcementText);

    // Hero Content
    const heroContent = document.createElement('div');
    heroContent.className = 'hero-content';

    const heroTitle = document.createElement('h1');
    heroTitle.className = 'hero-title';
    heroTitle.textContent = 'Data to enrich your online business';

    const heroDescription = document.createElement('p');
    heroDescription.className = 'hero-description';
    heroDescription.textContent = `
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem 
        cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
    `;

    const ctaButtons = document.createElement('div');
    ctaButtons.className = 'cta-buttons';

    const primaryButton = document.createElement('a');
    primaryButton.href = '#';
    primaryButton.className = 'button button-primary';
    primaryButton.textContent = 'Get started';

    const secondaryButton = document.createElement('a');
    secondaryButton.href = '#';
    secondaryButton.className = 'button button-secondary';
    secondaryButton.textContent = 'Learn more →';

    ctaButtons.appendChild(primaryButton);
    ctaButtons.appendChild(secondaryButton);

    heroContent.appendChild(heroTitle);
    heroContent.appendChild(heroDescription);
    heroContent.appendChild(ctaButtons);

    // Background Gradient
    const backgroundGradientTop = document.createElement('div');
    backgroundGradientTop.className = 'background-gradient top';

    const backgroundGradientBottom = document.createElement('div');
    backgroundGradientBottom.className = 'background-gradient bottom';

    // Assemble Hero
    hero.appendChild(announcementBanner);
    hero.appendChild(heroContent);
    hero.appendChild(backgroundGradientTop);
    hero.appendChild(backgroundGradientBottom);

    return hero;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.id = 'main-footer';
    footer.textContent = 'Footer Content Here';
    return footer;
}

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // Add Hero Section
    body.insertBefore(createHero(), document.getElementById('main-nav').nextSibling);

    // Add Footer Section
    body.appendChild(createFooter());
});
