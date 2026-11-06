// =================================
// ART CLASS 101 - JAVASCRIPT
// =================================


// PAGE NAVIGATION CONTROLLER

function navigateTo(pageId) {

    // Hide all pages
    const pages = document.querySelectorAll('.page-view');

    pages.forEach(page => {
        page.classList.add('hidden');
    });

    // Show selected page
    const targetPage = document.getElementById(`page-${pageId}`);

    if (targetPage) {
        targetPage.classList.remove('hidden');
    } else {
        console.warn(`Page not found: page-${pageId}`);
        return;
    }

    // Close mobile menu when navigating
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenu) {
        mobileMenu.classList.remove('active');
        mobileMenu.classList.add('hidden');
    }

    const mobileBtn = document.getElementById('mobile-menu-btn');

    if (mobileBtn) {
        mobileBtn.setAttribute('aria-expanded', 'false');
        mobileBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // Update navigation highlight
    document.querySelectorAll('.nav-btn').forEach(btn => {

        if (btn.getAttribute('data-page') === pageId) {
            btn.classList.add('text-brand-green', 'font-bold');
        } else {
            btn.classList.remove('text-brand-green', 'font-bold');
        }

    });
}


// SMOOTH SCROLL TO A SECTION ON THE HOMEPAGE

function scrollToSection(sectionId) {

    const currentHome = document.getElementById('page-home');

    if (!currentHome) return;

    const scrollAndHighlight = () => {

        const elem = document.getElementById(sectionId);

        if (!elem) {
            console.warn(`Section not found: ${sectionId}`);
            return;
        }

        elem.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        document.querySelectorAll('.nav-btn').forEach(btn => {

            if (btn.getAttribute('data-page') === 'about') {
                btn.classList.add('text-brand-green', 'font-bold');
            } else {
                btn.classList.remove('text-brand-green', 'font-bold');
            }

        });
    };

    if (currentHome.classList.contains('hidden')) {

        navigateTo('home');

        setTimeout(scrollAndHighlight, 300);

    } else {

        scrollAndHighlight();

    }
}


// MOBILE MENU TOGGLE

function toggleMobileMenu() {

    const menu = document.getElementById('mobile-menu');
    const button = document.getElementById('mobile-menu-btn');

    if (!menu || !button) return;

    menu.classList.toggle('active');
    menu.classList.toggle('hidden');

    const isOpen = menu.classList.contains('active');

    button.setAttribute('aria-expanded', isOpen);

    button.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
}


// MODAL HANDLERS

function openModal(title) {

    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const customModal = document.getElementById('custom-modal');

    // Update modal title
    if (modalTitle) {
        modalTitle.innerText = title;
    }

    // Update modal description
    if (modalDesc) {
        modalDesc.innerText =
            "Every artist starts as a beginner. Let's create something meaningful together with Art Class 101. Your creative journey starts here!";
    }

    // Show modal
    if (customModal) {
        customModal.classList.remove('hidden');
    }
}


// CLOSE MODAL

function closeModal() {

    const customModal = document.getElementById('custom-modal');

    if (customModal) {
        customModal.classList.add('hidden');
    }

}


// FORM SUBMISSION

function handleModalSubmit(e) {

    e.preventDefault();

    alert('Thank you! You have successfully registered interest for this course module.');

    closeModal();

}

// =================================
// INITIAL SETUP
// =================================

window.addEventListener('DOMContentLoaded', function () {

    navigateTo('home');

});
