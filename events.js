// utils: get readable object type
function getElementType(element) {
    if (element.tagName === 'IMG') return 'image';
    if (element.tagName === 'A' && element.href.endsWith('.pdf')) return 'pdf-link';
    if (element.tagName === 'A') return 'link';
    if (element.tagName === 'BUTTON') return 'button';
    if (element.tagName === 'P' || element.tagName === 'SPAN' || element.tagName === 'DIV') return 'text';
    if (element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'H3') return 'heading';
    if (element.tagName === 'LI' || element.tagName === 'UL' || element.tagName === 'OL') return 'list';
    return element.tagName.toLowerCase();
}

// Logs event to console
function logEvent(type, element) {
    const timestamp = new Date().toISOString();
    const objectType = getElementType(element);
    console.log(`${timestamp} | ${type} | ${objectType}`);
}

// Capture click events
document.addEventListener('click', event => {
    if (event.target) {
        logEvent('click', event.target);
    }
});

// Capture view events (on scroll into view)
const allElements = document.querySelectorAll('img, p, h1, h2, h3, a, li, ul, ol, button, .download-cv');

const viewObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            logEvent('view', entry.target);
            viewObserver.unobserve(entry.target); // avoid duplicate logs
        }
    });
}, {
    threshold: 0.25
});

allElements.forEach(el => viewObserver.observe(el));
