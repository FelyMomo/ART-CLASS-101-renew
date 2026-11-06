
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


// SMOOTH SCROLL TO SECTION
// Including About Us & Contacts

function scrollToSection(sectionId) {

    // Highlight active navigation button
    const pageKey = sectionId
        .replace('-section', '')
        .replace('-footer', '');

    document.querySelectorAll('.nav-btn').forEach(btn => {

        if (btn.getAttribute('data-page') === pageKey) {
            btn.classList.add('text-brand-green', 'font-bold');
        } else {
            btn.classList.remove('text-brand-green', 'font-bold');
        }

    });

    const currentHome = document.getElementById('page-home');

    if (!currentHome) return;

    if (currentHome.classList.contains('hidden')) {

        navigateTo('home');

        setTimeout(() => {

            const elem = document.getElementById(sectionId);

            if (elem) {
                elem.scrollIntoView({
                    behavior: 'smooth'
                });
            }

        }, 100);

    } else {

        const elem = document.getElementById(sectionId);

        if (elem) {
            elem.scrollIntoView({
                behavior: 'smooth'
            });
        }

    }
}


// MOBILE MENU TOGGLE

const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

function toggleMobileMenu() {

    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }

}

if (mobileBtn) {
    mobileBtn.addEventListener('click', toggleMobileMenu);
}


// MODAL HANDLERS

function openModal(title) {

    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const customModal = document.getElementById('custom-modal');

    if (modalTitle) {
        modalTitle.innerText = title;
    }

    if (modalDesc) {
        modalDesc.innerText =
            `Start watching "${title}" with Art Class 101. Join over 100+ active students today!`;
    }

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

    alert('Thank you! You have successfully registered interest for this course video module.');

    closeModal();

}


// INITIAL SETUP

window.addEventListener('DOMContentLoaded', function () {

    navigateTo('home');

});
