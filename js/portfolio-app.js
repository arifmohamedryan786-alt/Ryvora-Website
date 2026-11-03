/**
 * RYVORA - Developer Portfolio Application
 * Founder: Arif Mohamed
 * Tagline: "Your Vision. Our Website."
 */

import { PROJECTS_DATA } from './projects.js';

export const WHATSAPP_PHONE_NUMBER = '918525039751';

/**
 * Escapes unsafe characters in a string to prevent XSS.
 * @param {string} str - Raw text string.
 * @returns {string} Escaped HTML string.
 */
function escapeHTML(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Validates and sanitizes external URLs.
 * @param {string} url - Raw URL string.
 * @returns {string} Sanitized URL or safe anchor fallback.
 */
function sanitizeUrl(url) {
  if (!url || typeof url !== 'string') return '#';
  const trimmed = url.trim();
  if (/^https?:\/\//i.test(trimmed)) {
    return encodeURI(trimmed);
  }
  return '#';
}

/**
 * Renders the project cards into the project grid container.
 */
function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  if (!Array.isArray(PROJECTS_DATA) || PROJECTS_DATA.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>No projects currently displayed. Please check back soon!</p>
      </div>
    `;
    return;
  }

  const cardsHTML = PROJECTS_DATA.map((project) => {
    const name = escapeHTML(project.name || 'Untitled Project');
    const description = escapeHTML(project.description || '');
    const status = escapeHTML(project.status || 'Live Project');
    const liveUrl = sanitizeUrl(project.liveUrl);
    const githubUrl = project.githubUrl ? sanitizeUrl(project.githubUrl) : null;

    const techTags = Array.isArray(project.technologies)
      ? project.technologies
          .map((tech) => `<li class="tech-tag">${escapeHTML(tech)}</li>`)
          .join('')
      : '';

    const githubButton = githubUrl
      ? `
        <a href="${githubUrl}"
           class="btn btn-secondary btn-sm"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="View source code of ${name} on GitHub">
          <svg class="btn-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span>GitHub</span>
        </a>
      `
      : '';

    return `
      <article class="project-card">
        <div class="project-card-header">
          <div class="status-badge" aria-label="Status: ${status}">
            <span class="status-dot" aria-hidden="true"></span>
            <span class="status-text">${status}</span>
          </div>
        </div>
        <div class="project-card-body">
          <h3 class="project-title">${name}</h3>
          <p class="project-description">${description}</p>
          <ul class="tech-tags-list" aria-label="Technologies used">
            ${techTags}
          </ul>
        </div>
        <div class="project-card-footer">
          <a href="${liveUrl}"
             class="btn btn-primary btn-sm"
             target="_blank"
             rel="noopener noreferrer"
             aria-label="View live demo of ${name}">
            <span>Live Demo</span>
            <svg class="btn-icon" viewBox="0 0 20 20" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h4a.75.75 0 010 1.5h-4z" clip-rule="evenodd" />
              <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06 1.06L15 6.06V10a.75.75 0 001.5 0V4.25A.75.75 0 0015.75 3.5H10a.75.75 0 000 1.5h3.94L6.194 12.753z" clip-rule="evenodd" />
            </svg>
          </a>
          ${githubButton}
        </div>
      </article>
    `;
  }).join('');

  container.innerHTML = cardsHTML;
}

/**
 * Initializes sticky header shadow on scroll.
 */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const updateHeaderState = () => {
    if (window.scrollY > 15) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', updateHeaderState, { passive: true });
  updateHeaderState();
}

/**
 * Initializes mobile navigation drawer and accessibility attributes.
 */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('drawer-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('drawer-overlay');
  const closeBtn = document.getElementById('drawer-close');
  const drawerLinks = drawer ? drawer.querySelectorAll('a') : [];

  if (!toggleBtn || !drawer || !overlay) return;

  const openDrawer = () => {
    drawer.classList.add('is-open');
    overlay.classList.add('is-open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('drawer-locked');

    // Focus close button for keyboard users
    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 100);
    }
  };

  const closeDrawer = () => {
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('drawer-locked');
    toggleBtn.focus();
  };

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }

  overlay.addEventListener('click', closeDrawer);

  drawerLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });
}

/**
 * Smooth scrolling with header offset for internal anchor links.
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  const header = document.querySelector('.site-header');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();

        const headerHeight = header ? header.offsetHeight : 72;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - headerHeight - 16;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Set focus to the target section for screen readers
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });

        // Update URL hash without causing a jump
        if (history.pushState) {
          history.pushState(null, '', href);
        }
      }
    });
  });
}

/**
 * Highlights active navigation link based on scroll position using IntersectionObserver.
 */
function initActiveNavObserver() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav a[href^="#"]');
  const mobileNavLinks = document.querySelectorAll('.mobile-drawer-nav a[href^="#"]');

  if (!('IntersectionObserver' in window) || sections.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        const targetHref = `#${id}`;

        const updateLinks = (links) => {
          links.forEach((link) => {
            if (link.getAttribute('href') === targetHref) {
              link.classList.add('active');
              link.setAttribute('aria-current', 'page');
            } else {
              link.classList.remove('active');
              link.removeAttribute('aria-current');
            }
          });
        };

        updateLinks(desktopNavLinks);
        updateLinks(mobileNavLinks);
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/**
 * Handles contact form validation and WhatsApp redirection.
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const messageInput = document.getElementById('contact-message');
  const nameError = document.getElementById('name-error');
  const messageError = document.getElementById('message-error');
  const formStatus = document.getElementById('form-status');

  if (!form || !nameInput || !messageInput) return;

  const clearErrors = () => {
    nameError.textContent = '';
    messageError.textContent = '';
    nameInput.removeAttribute('aria-invalid');
    messageInput.removeAttribute('aria-invalid');
    nameInput.classList.remove('input-error');
    messageInput.classList.remove('input-error');
    if (formStatus) {
      formStatus.textContent = '';
      formStatus.className = 'form-status';
    }
  };

  // Real-time input cleanup
  nameInput.addEventListener('input', () => {
    if (nameInput.value.trim().length > 0) {
      nameError.textContent = '';
      nameInput.removeAttribute('aria-invalid');
      nameInput.classList.remove('input-error');
    }
  });

  messageInput.addEventListener('input', () => {
    if (messageInput.value.trim().length > 0) {
      messageError.textContent = '';
      messageInput.removeAttribute('aria-invalid');
      messageInput.classList.remove('input-error');
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();

    let isValid = true;

    if (!name) {
      nameError.textContent = 'Please enter your name.';
      nameInput.setAttribute('aria-invalid', 'true');
      nameInput.classList.add('input-error');
      isValid = false;
    }

    if (!message) {
      messageError.textContent = 'Please enter a message.';
      messageInput.setAttribute('aria-invalid', 'true');
      messageInput.classList.add('input-error');
      isValid = false;
    }

    if (!isValid) {
      if (!name) {
        nameInput.focus();
      } else {
        messageInput.focus();
      }
      return;
    }

    // Construct formatted WhatsApp message
    const formattedMessage = `Hello Arif, my name is ${name}.\n\n${message}\n\n(Sent via RYVORA Portfolio)`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(formattedMessage)}`;

    if (formStatus) {
      formStatus.textContent = 'Opening WhatsApp to send your message...';
      formStatus.className = 'form-status form-status-success';
    }

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Reset form after successful submission
    form.reset();
  });
}

// Initialize components when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  initStickyHeader();
  initMobileDrawer();
  initSmoothScroll();
  initActiveNavObserver();
  initContactForm();
});

