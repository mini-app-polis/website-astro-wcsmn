import type { Organization } from '../lib/types';

// ─────────────────────────────────────────────────────────────
// In-repo seed data — the local implementation of "the backend".
//
// Calendar IDs and colors were decoded from the original wcsmn.com
// Google Calendar embeds. When a real backend exists, this data moves
// there and src/lib/data.ts swaps its implementation; this file is the
// only thing that goes away.
//
// Ordering here is the display order for the Organizations index.
// ─────────────────────────────────────────────────────────────

export const organizations: Organization[] = [
  {
    slug: 'mn-swing-safety',
    name: 'MN Swing Safety',
    blurb:
      'Building a safe, just culture within the Minnesota West Coast Swing community through education, conversation, and trauma-informed intervention.',
    links: [
      { label: 'Linktree Resources', url: 'https://linktr.ee/MNSwingSafety' },
      { label: 'Incident Reporting', url: 'https://forms.gle/Ukbo3evZ2NbtCA358' },
      { label: 'Email', url: 'mailto:MNSwingSafety@gmail.com' },
    ],
    calendarId: 'mnswingsafety@gmail.com',
    calendarColor: '#c0ca33',
    logo: null,
    bodyHtml: `
<h2>Leadership Team</h2>

<h3>Isabella Armour (they/them)</h3>
<p>Isabella has been a member of the MN WCS scene since August 2017 and founded the MN Swing Safety System in Summer 2024. Isabella has a background in teaching and community organization within the local ballroom dance and west coast swing communities. They are a certified, trauma-informed life coach and are passionate about creating space for all members of the dance community to feel heard and supported. Fun fact: Isabella plays the clarinet!</p>

<h3>Jess Skjonsby, MPH (she/her)</h3>
<p>Jess has been involved in the MN WCS scene since February 2023, joining the MN Swing Safety Leadership team in Fall 2024. She has a background in conflict resolution, crisis response, and de-escalation practices through her previous experience serving as an Area Coordinator in the Residence Life department at St. Catherine University. Jess is passionate about developing ways to grow the MN WCS community, as well as share resources with others looking to create safety systems within their own communities. Fun Fact: Jess has never eaten at Taco Bell!</p>

<h3>Sam Robertson (they/them)</h3>
<p>Sam has been a member of the MN WCS community since February 2024, and a member of the MN Swing Safety Leadership team since Fall 2024. Sam brings their background in resource connection, safety planning, de-escalation, and interpersonal communication (developed through their work with domestic violence victim-survivors in the metro area and doing street outreach in St Paul) to the table. It&rsquo;s important to Sam to make the west coast swing dance community as safe a space as possible, because we can&rsquo;t have a good time together if we don&rsquo;t feel safe together. Fun fact: Sam has been an avid crocheter for 16 years (since 2009ish) and picked up knitting in 2024!</p>

<h3>Taylor Daiello BSN, RN, RAC-CT (she/her)</h3>
<p>Taylor has been a member of the MN WCS community since October 2024 and has been part of the MN Swing Safety Leadership team since Spring 2025. She is passionate about building a community that is welcoming and safe to everybody, and believes that in order to build a restorative and just culture we must first acknowledge the power and privilege afforded (or not) to each of us by patriarchal white supremacy. Her background in Emergency nursing and Nursing Education (2013-2024), co-creating and delivering anti-racism education (Minnesota Nurses Association Racial Diversity Committee, 2022-2023), and community/union organizing (various, 2017-present) have given her a wealth of knowledge and experience with conflict resolution, de-escalation, advocacy, large incident response, and training/education facilitation. Beyond all the fancy words, she wants to build a community where every person is seen for and accepted as who they are, and can joyfully move their body in a safe space.</p>
<p>Fun Fact: Taylor once helped get a live bug out of somebody&rsquo;s ear!</p>

<h2>Safety Volunteers</h2>
<p>
Ali Daniels (she/they)<br>
Bridee Lock (they/them)<br>
Christopher Bernard (he/him)<br>
Danielle Wipperfurth (she/her)<br>
Danya Ayres (she/her)<br>
Glydewell Burdick (he/him)<br>
Jane Been (she/they)<br>
Kelson Bain (all pronouns)<br>
Laura Anderson (she/her)<br>
Mike Anderson (he/him)<br>
Rick Baustian (he/him)<br>
River Fiocco (they/them)<br>
Sam Stromwall (he/him)<br>
Scott Jennen (he/him)<br>
Talia Tan (she/her)<br>
Taylor Jaquith (he/him)<br>
Ted Peters (he/him)<br>
Zach Gruenberg (he/him)
</p>
`.trim(),
  },

  {
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
  },

  {
    slug: 'swing-in-the-north',
    name: 'Swing in the North',
    blurb:
      'Weekly practices, classes, the monthly Brunch Dance, and special events.',
    links: [{ label: 'Website', url: 'https://swinginthenorth.org/' }],
    calendarId:
      'c_aff60838342f2d9548dea170936192d09daa9fd385f382558a92133a58043ae8@group.calendar.google.com',
    calendarColor: '#8e24aa',
    logo: null,
    bodyHtml: null,
  },

  {
    slug: 'swingesota',
    name: 'SWINGesota',
    blurb:
      'Weekly dances every Wednesday, plus annual Winter and Summer events.',
    links: [{ label: 'Website', url: 'https://www.swingesota.com/' }],
    calendarId:
      '390a4ad3473880c9ffeee84e88662a4a4ec84de6e52fcd1e240c785ca0622b3b@group.calendar.google.com',
    calendarColor: '#f09300',
    logo: null,
    bodyHtml: null,
  },

  {
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
  },

  {
    slug: 'west-cone-swing',
    name: 'West Cone Swing',
    blurb:
      'Quarterly West Coast Swing dances with ice cream socials.',
    links: [
      {
        label: 'Facebook',
        url: 'https://www.facebook.com/p/West-Cone-Swing-61565239200861/',
      },
      { label: 'Instagram', url: 'https://www.instagram.com/westconeswing/' },
    ],
    calendarId:
      '2ee55945aa4a4d706d8e209402a7dffce97ffd8eb08e3b87b8f07b1b67dc09fe@group.calendar.google.com',
    calendarColor: '#ad1457',
    logo: null,
    bodyHtml: null,
  },
];
