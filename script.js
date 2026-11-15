// NEXORA DIGITAL — navigation, reveal effects and demo enquiry form
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });

  document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Subtle reveal-on-scroll animation, with a fallback for older browsers.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

// Current year in footer.
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// CONTACT CONFIGURATION
// IMPORTANT: Replace this with your WhatsApp number in international format.
// India example: 919876543210 (country code 91 + 10-digit mobile number).
// Do not include +, spaces, brackets or hyphens.
const WHATSAPP_NUMBER = "919669219030";

// Create a WhatsApp click-to-chat URL with a pre-filled message.
function getWhatsAppUrl(message) {
  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
  if (!cleanNumber || cleanNumber.includes("X") || cleanNumber.length < 10) {
    return null;
  }
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

// Floating WhatsApp shortcut.
const whatsappFloat = document.querySelector("#whatsappFloat");
if (whatsappFloat) {
  const quickMessage = "Hi NEXORA DIGITAL! I'd like to discuss a project.";
  const quickUrl = getWhatsAppUrl(quickMessage);
  if (quickUrl) {
    whatsappFloat.href = quickUrl;
  } else {
    whatsappFloat.addEventListener("click", (event) => {
      event.preventDefault();
      alert("WhatsApp contact is not configured. Please contact us through Instagram.");
    });
  }
}

// The form validates the enquiry and opens WhatsApp with all details pre-filled.
// This avoids a paid backend. The visitor must press Send inside WhatsApp.
const contactForm = document.querySelector("#contactForm");
const formNote = document.querySelector("#formNote");

if (contactForm && formNote) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const enquiry = [
      "Hello NEXORA DIGITAL!",
      "",
      "I'd like to enquire about a project.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Service: ${service}`,
      `Project details: ${message}`,
      "",
      "Please let me know the next steps. Thank you!"
    ].join("\\n");

    const whatsappUrl = getWhatsAppUrl(enquiry);

    if (!whatsappUrl) {
      formNote.textContent = "WhatsApp could not be opened. Please contact us on Instagram instead.";
      formNote.classList.remove("form-success");
      formNote.classList.add("form-error");
      return;
    }

    formNote.textContent = "Opening WhatsApp with your enquiry. Review the message and press Send in WhatsApp to submit it.";
    formNote.classList.remove("form-error");
    formNote.classList.add("form-success");
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}
