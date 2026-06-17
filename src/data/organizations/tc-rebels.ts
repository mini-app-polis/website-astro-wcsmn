import type { Organization } from '../../lib/types';

const org: Organization = {
  slug: 'tc-rebels',
  name: 'TC Rebels',
  blurb:
    'The Twin Cities Rebels is a not-for-profit swing dance organization based in St. Paul, MN. Regular dances on the 1st and 3rd Fridays, plus lessons and special weekend events.',
  links: [
    { label: 'Website', url: 'https://tcrebels.com/' },
    { label: 'Facebook', url: 'https://www.facebook.com/tcrebels' },
    { label: 'Email List', url: 'https://www.tcrebels.com/#email-list01' },
    { label: 'Email', url: 'mailto:twincities.rebels@yahoo.com' },
  ],
  calendarId: 'twincities.rebels2@gmail.com',
  calendarColor: '#cc0000',
  logo: null,
  bodyHtml: `
<h3>Schedule &amp; Events</h3>
<p><strong>Join us on the dance floor!</strong> Whether you&rsquo;re brand new to dancing, want to unlock west coast swing as your next dance, are returning to the floor after a break, or are an experienced social dancer, we have something for you! We hold regular dances and classes, as well as special weekend events where we bring in national and international stars for workshops &amp; private lessons.</p>
<p>Our regular dances are held on the <strong>1st and 3rd Fridays of the month</strong> from 8:00 PM to 11:00 PM. They begin with an all-levels lesson from 8&ndash;8:30pm, with social dancing immediately following until 11pm. The lesson is included with admission, and only requires knowledge of the basic west coast swing patterns.</p>
<p>We offer lessons on Sundays 3 times a month from 5:00 PM to 7:00 PM (except August). These usually are a progressive series focusing on foundational aspects &amp; patterns of West Coast Swing, but sometimes cover more advanced topics or other dances. See our website for all the details.</p>

<h3>Location</h3>
<p>We hold our dances, lessons and events at:</p>
<p><strong>Triune Masonic Temple</strong><br>
1898 Iglehart Ave. S.<br>
St. Paul, MN 55104</p>

<h3>About Us</h3>
<p>The Twin Cities Rebels is a not-for-profit swing dance organization. Our mission is to provide a fun, friendly, energetic, and supportive community where members and guests can share a love for dance, with a primary focus on West Coast Swing.</p>

<h3>Leadership</h3>
<p>The TC Rebels are entirely volunteer-run by our dedicated Board of Directors.</p>
<ul>
  <li><strong>President:</strong> Liz Hanson</li>
  <li><strong>Vice President:</strong> Glydewell Burdick &mdash; <a href="mailto:glydewellb@gmail.com">Email Glydewell</a></li>
</ul>
<p>We look forward to dancing with you soon!</p>
`.trim(),
};

export default org;
