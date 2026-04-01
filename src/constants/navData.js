/**
 * navData.js
 * Liam Hilton Designs — Navigation Data
 *
 * WHY THIS FILE EXISTS:
 * Keeping data separate from the component is one of the most
 * important habits in React. It means:
 *   - You can reuse <Navbar /> in any project by swapping this file
 *   - Copy editors can update links without touching component logic
 *   - If you connect a CMS later, you replace this file with an API
 *     call — the Navbar component never changes
 *
 * STRUCTURE:
 * Each link has an 'id' (unique key for React), 'label' (what the
 * user sees), and 'href' (where it goes). This matches react-router-dom's
 * <NavLink to={href}> — so no changes needed when you add routing.
 */

export const navLinks = [
    { id: 'services',  label: 'Services',       href: '/services'  },
    { id: 'work',      label: 'Work',            href: '/work'      },
    { id: 'about',     label: 'About',           href: '/about'     },
    { id: 'contact',   label: 'Contact',         href: '/contact'   },
  ]
  
  export const navCTA = {
    label: 'Get in touch',
    href: '/contact',
    ariaLabel: 'Get in touch with Liam Hilton Designs',
  }
  
  export const navBrand = {
    name: 'Liam Hilton',
    suffix: 'Designs',       // Lets us style each word separately in JSX
    href: '/',
    ariaLabel: 'Liam Hilton Designs — return to homepage',
  }