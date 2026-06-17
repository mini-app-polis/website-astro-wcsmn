import type { Organization } from '../../lib/types';

const org: Organization = {
  slug: 'mn-wcs-dance-club',
  name: 'MN WCS Dance Club',
  blurb:
    'The oldest WCS organization in Minnesota (formed March 21, 1982). Two dances each month on the 2nd and 4th Fridays, with a social lesson followed by a variety dance. All skill levels welcome and a partner is never necessary.',
  links: [
    { label: 'Website', url: 'https://mwcsdc.com/' },
    { label: 'Facebook', url: 'https://www.facebook.com/mwcsdc' },
    { label: 'Instagram', url: 'https://www.instagram.com/mwcsdc/' },
  ],
  calendarId: 'mwcsdc@gmail.com',
  calendarColor: '#4467dd',
  logo: null,
  bodyHtml: `
<p>The mission of the Minnesota West Coast Swing Dance Club is to foster an inclusive, welcoming community where dancers of all levels can connect, grow, and celebrate the art of West Coast Swing through quality education and social dance opportunities. The Minnesota West Coast Swing Dance Club (MWCSDC) was formed on March 21, 1982 &mdash; making it the oldest WCS organization in the state of Minnesota. MWCSDC holds two dances each month, on the 2nd and 4th Fridays, beginning with a social dance lesson taught by local instructors, and a social variety dance with music provided by various DJs. In addition to regularly scheduled dances, we host a member appreciation dance each January, our anniversary dance in May, and a holiday dance in December. All skill levels are always welcome and a partner is never necessary!</p>
<p><strong>2nd &amp; 4th Friday Dances are held at the B-Dale Club:</strong><br>
2100 Dale Street N, Roseville, MN 55113</p>
`.trim(),
};

export default org;
