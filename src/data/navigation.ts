// Top navigation. Organization submenu is derived from the data provider
// at build time (see Nav.astro) so it stays in sync with the org list.

export interface NavItem {
  text: string;
  url: string;
  submenu?: NavItem[];
}

export const topNav: NavItem[] = [
  {
    text: 'Organizations',
    url: '/organizations/',
    // submenu injected at build time from provider
  },
  {
    text: 'Contributions',
    url: '/contributions/',
    submenu: [
      { text: 'How To Contribute', url: '/contributions/how-to-contribute/' },
      { text: 'Add Event', url: '/contributions/add-event/' },
      { text: 'Add Organization', url: '/contributions/add-organization/' },
      { text: 'Contributors', url: '/contributions/contributors/' },
    ],
  },
  { text: 'Resources', url: '/community-resources/' },
  { text: 'FAQ', url: '/faq/' },
  { text: 'Contact Us', url: '/contact/' },
];
