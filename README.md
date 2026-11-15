# NEXORA DIGITAL — Landing Page Demo

A responsive premium-dark digital marketing agency landing page built with plain HTML, CSS and JavaScript.

## Files
- `index.html` — page structure and content
- `style.css` — layout, responsive styles, colours and animations
- `script.js` — mobile navigation, reveal-on-scroll and WhatsApp enquiry flow

## Run locally
1. Extract the ZIP.
2. Open the folder in VS Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.
4. Resize the browser or use DevTools device mode to test mobile layouts.

No build tools or package installation are required.

## Enable WhatsApp enquiries
1. Open `script.js`.
2. Find `const WHATSAPP_NUMBER = "919669219030";`
3. Replace it with your WhatsApp number in international format, digits only.
   - India example: `919876543210`
   - Do not include `+`, spaces, brackets or hyphens.
4. Save and refresh the website.
5. Submit the form with test details. It should open WhatsApp with the enquiry pre-filled.
6. Check the message and press **Send** inside WhatsApp.

The floating WhatsApp button uses the same configured number.

## Important form behaviour
This version uses WhatsApp click-to-chat instead of a paid form backend. It does not silently send messages: the visitor must review and press Send in WhatsApp. This is a practical no-monthly-fee option for a beginner freelancer.

If you need enquiries submitted without opening WhatsApp, connect a form service such as FormSubmit, Formspree, Netlify Forms or your own backend. Check each provider's current limits and privacy terms.

## Before using this as a real client project
- Replace the fictional NEXORA name, logo, copy and demo work with the client's approved brand information if adapting this concept for a different client.
- The portfolio cards are illustrative concept projects, not completed client work or testimonials.
- The contact details are configured for Arish Shah: WhatsApp +91 96692 19030 and Instagram @thedeveloper_arish._. Confirm these are the intended public business contact details before sharing the live link.
- Add real privacy, cookie and legal information if the deployed site collects personal data.
- Google Fonts requires an internet connection; system sans-serif fallbacks are included.

## Suggested customisation
Search `index.html` for:
- `NEXORA`
- `hello@example.com`
- `@yourbrand`
- Service descriptions and package copy

Edit colour variables at the top of `style.css` under `:root`.
