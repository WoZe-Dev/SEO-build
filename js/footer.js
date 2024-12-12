function createFooter() {
    const footer = document.createElement('footer');
    footer.className = 'footer';

    const container = document.createElement('div');
    container.className = 'footer-container';

    // Footer Grid
    const grid = document.createElement('div');
    grid.className = 'footer-grid';

    // Company Section
    const companySection = document.createElement('div');
    companySection.className = 'footer-section';
    companySection.innerHTML = `
        <h3>à remplir</h3>
        <p>à remplir </p>
    `;

    // Products Section
    const productsSection = document.createElement('div');
    productsSection.className = 'footer-section';
    productsSection.innerHTML = `
        <h3>à remplir</h3>
        <ul class="footer-links">
            <li><a href="#templates">à remplir</a></li>
            <li><a href="#components">à remplir</a></li>
            <li><a href="#pricing">à remplir</a></li>
            <li><a href="#documentation">à remplir</a></li>
        </ul>
    `;

    // Resources Section
    const resourcesSection = document.createElement('div');
    resourcesSection.className = 'footer-section';
    resourcesSection.innerHTML = `
        <h3>à remplir</h3>
        <ul class="footer-links">
            <li><a href="#blog">à remplir</a></li>
            <li><a href="#guides">à remplir</a></li>
            <li><a href="#support">à remplir</a></li>
            <li><a href="#faq">à remplir</a></li>
        </ul>
    `;

    // Legal Section
    const legalSection = document.createElement('div');
    legalSection.className = 'footer-section';
    legalSection.innerHTML = `
        <h3>à remplir</h3>
        <ul class="footer-links">
            <li><a href="#privacy">à remplir</a></li>
            <li><a href="#terms">à remplir</a></li>
            <li><a href="#cookies">à remplir</a></li>
        </ul>
    `;

    grid.appendChild(companySection);
    grid.appendChild(productsSection);
    grid.appendChild(resourcesSection);
    grid.appendChild(legalSection);

    // Footer Bottom
    const bottom = document.createElement('div');
    bottom.className = 'footer-bottom';

    const bottomLeft = document.createElement('div');
    bottomLeft.className = 'footer-bottom-left';
    bottomLeft.textContent = '© 2024 Templates. All rights reserved.';

    const social = document.createElement('div');
    social.className = 'footer-social';

    bottom.appendChild(bottomLeft);
    bottom.appendChild(social);

    container.appendChild(grid);
    container.appendChild(bottom);
    footer.appendChild(container);

    return footer;
}

document.addEventListener('DOMContentLoaded', () => {
    const footerContainer = document.getElementById('main-footer');
});