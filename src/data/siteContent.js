import privacyPolicyBodyHtml from "./privacyPolicyBody.html?raw";

/**
 * Single source of copy for the public site. Replace with API/CMS data later;
 * `websiteContentService` is the integration point.
 */
export const siteContent = {
  privacyPolicy: {
    bodyHtml: privacyPolicyBodyHtml,
  },

  nav: {
    logo: "Taylor Jae Tattoo",
    links: [
      { path: "/", label: "Home" },
      { path: "/about", label: "About" },
      { path: "/gallery", label: "Gallery" },
      { path: "/events", label: "Events" },
      { path: "/contact", label: "Contact" },
      { path: "/faq", label: "FAQ" },
    ],
    bookAppointment: "Book me",
  },

  footer: {
    brandInitial: "T",
    brandName: "Taylor Jae Tattoo",
    tagline:
      "Dark, ornamental, sometimes unhinged—in a tasteful way. Custom work, flash when the mood hits, and the occasional cover-up rescue mission.",
    quickLinksTitle: "On this site",
    quickLinks: [
      { path: "/", label: "Home" },
      { path: "/about", label: "About" },
      { path: "/gallery", label: "Gallery" },
      { path: "/events", label: "Events" },
      { path: "/contact", label: "Contact" },
    ],
    servicesTitle: "What I do",
    services: ["Custom tattoos", "Flash", "Cover-ups", "Consults"],
    copyright: "© 2026 Taylor Jae Tattoo. All rights reserved.",
    privacyPolicy: "Privacy",
    termsAndConditions: "Terms",
  },

  home: {
    hero: {
      imageAlt: "Taylor Jae Tattoo",
      title: "Taylor Jae Tattoo",
      subtitle:
        "So yeah—this is my website. \n\nI tattoo dark, pretty-weird, sometimes-cute stuff. If you want something, cool. If you're just lurking, also cool. Half of this is for the bit anyway.",
      primaryCta: "Okay, contact me",
      secondaryCta: "Or peek the gallery",
    },
    process: {
      title: "How this usually goes",
      steps: [
        {
          number: "1",
          title: "You explain the thing",
          body: "Bring references, Pinterest boards, a vibe, a rant—whatever. I’ll nod a lot and ask annoying clarifying questions so we’re not guessing later.",
        },
        {
          number: "2",
          title: "We scheme",
          body: "Placement, size, how much your calf can take before it files a complaint. Sketches happen here so appointment day isn’t a group panic.",
        },
        {
          number: "3",
          title: "We actually tattoo",
          body: "Needles, snacks, bad jokes, the bit where your leg goes numb and we both pretend it’s fine. Afterward you’re wrapped up and I’m cleaning the station—normal end to a normal day.",
        },
      ],
    },
    interstitials: [
      {
        image: "/assets/gallery/image7.jpeg",
        alt: "Tattoo workstation with inks and supplies",
        caption: "Organized for the thumbnail. The real table has opinions.",
      },
      {
        image: "/assets/gallery/image9.jpeg",
        alt: "Crowded tattoo convention floor",
        caption: "Sometimes I leave the house on purpose. Wild concept.",
      },
    ],
    beforeTestimonialsVisual: {
      image: "/assets/gallery/image11.jpeg",
      alt: "Healed linework tattoo detail",
      caption: "Healed, not just fresh for the ’gram",
    },
    featuredWork: {
      title: "Some of my pieces",
      subtitle:
        "So these are things I’ve put on actual humans. There’s more in the gallery if you’re trying to procrastinate at work.",
      leadBlurb:
        "Here’s one big so you can actually see the lines and detail. Below that: a grid of recent chaos—flash, customs, whatever I remembered to photograph.",
      lead: {
        image: "/assets/gallery/image50.jpeg",
        alt: "Gothic ornamental tattoo piece",
        label: "One I’m still proud of",
      },
      supporting: [
        { image: "/assets/gallery/image51.jpeg", label: "Moody florals era" },
        { image: "/assets/gallery/image46.jpeg", label: "Ornamental nonsense" },
        { image: "/assets/gallery/image0.jpeg", label: "Flash I’d do again" },
        { image: "/assets/gallery/image2.jpeg", label: "Lines survived" },
      ],
      lifestyleHeading: "Where the mess happens",
      lifestyleSubtitle:
        "Shop days, booth weekends, the rare time I remember to take a photo outside. It’s half documentation, half proof I touched grass.",
      lifestyle: [
        {
          image: "/assets/gallery/image3.jpeg",
          alt: "Tattoo session in progress",
          caption: "Chair hours (send snacks)",
        },
        {
          image: "/assets/gallery/image4.jpeg",
          alt: "Tattoo shop interior with flash on the walls",
          caption: "The walls judge you too",
        },
        {
          image: "/assets/gallery/image5.jpeg",
          alt: "Reference art and supplies on a work surface",
          caption: "Prep table, organized chaos",
        },
      ],
      galleryCta: "More art, more scrolling",
      eventsCta: "Where I’ll be (maybe)",
      eventsPath: "/events",
    },
  },

  /**
   * Events / appearances — all fields optional except slug, categoryId, title, startDate
   * unless you use dateDisplay instead of startDate for sorting (startDate still used for sort).
   */
  eventsPage: {
    heroTitle: "Where I might actually show up",
    heroSubtitle:
      "Conventions, guest spots, shop chaos, and stuff I’m not hosting but still care about. Use the filters if you’re picky; otherwise scroll and pretend it’s a calendar.",
    filterLegend: "Narrow it down",
    filterLegendSub:
      "Tap a category or hit “everything” and scroll like a normal person.",
    filterAllId: "all",
    categories: [
      {
        id: "all",
        label: "Everything",
        description: "Upcoming + past, no gatekeeping.",
      },
      {
        id: "convention",
        label: "Conventions",
        description: "Big rooms, bad coffee, good people-watching.",
      },
      {
        id: "shop",
        label: "Shop & guest spots",
        description: "Me in a chair that isn’t my usual one.",
      },
      {
        id: "shop_special",
        label: "Shop specials",
        description: "Flash days, promos, collective panic.",
      },
      {
        id: "community",
        label: "Friends & other artists",
        description: "Not my circus—still worth your time.",
      },
    ],
    sectionUpcoming: "Still in the future",
    sectionPast: "Already happened",
    emptyFiltered:
      "Nothing here for that filter. Pick another one or touch grass and try later.",
    readDetails: "More than this blurb",
    viewEventSite: "Their site (opens new tab, don’t panic)",
    backToEvents: "← Back to the list",
    detailFallbackTitle: "Details",
    notFoundTitle: "That event ghosted us",
    notFoundBody:
      "Link’s wrong, event got yeeted, or I typo’d something. It happens. The list still loves you.",
    notFoundCta: "Fine, take me back",
    noDetailPageBody:
      "No essay for this one—what you see is what you get. The card said it all; I’m not writing a thesis.",
    linksHeading: "Extra links",
    items: [
      {
        slug: "example-tattoo-con-2026",
        categoryId: "convention",
        title: "Example Tattoo Convention",
        startDate: "2026-06-12",
        endDate: "2026-06-14",
        summary:
          "Three-day circus. I’ll have flash, tiny booking slots, and the energy of someone who packed too many stickers.",
        location: "Salt Lake City, UT",
        times: "Vendor floor Sat–Sun 10am–6pm; setup Friday",
        externalUrl: "https://example.com",
        detailIntro:
          "Split booth with a friend—my half is dark-pretty-weird, theirs is neotrad. Same-day tiny stuff is first-come cope; don’t roll up at 5pm expecting miracles.",
        detailSections: [
          {
            heading: "Booth & hours",
            body: "Booth 412, main hall. Sat–Sun I’m actually at the table; Friday is mostly me pretending I know where the extension cord went.",
          },
          {
            heading: "Art I’m bringing",
            body: "Fresh flash (moody florals, unhinged critters), a binder of “no we’re not copying that Pinterest pin exactly,” and stickers if you tip like a legend.",
          },
        ],
        artGallery: {
          caption: "Stuff that’s actually in the bag",
          items: [
            { src: "/assets/gallery/image0.jpeg", alt: "Flash sample" },
            { src: "/assets/gallery/image1.jpeg", alt: "Flash sample" },
          ],
        },
        extraLinks: [
          { label: "Floor map (PDF)", href: "https://example.com/map" },
        ],
      },
      {
        slug: "friday-the-13th-flash-2026",
        categoryId: "shop_special",
        title: "Friday the 13th flash day",
        startDate: "2026-11-13",
        summary:
          "Friday the 13th flash chaos—first come, limited sheet, zero drama (lol). I’ll post designs the week before so nobody’s surprised.",
        location: "At the shop (details when you book)",
        times: "All day by appointment + limited walk-in",
      },
      {
        slug: "guest-spot-november",
        categoryId: "shop",
        title: "Guest spot — sister shop weekend",
        startDate: "2026-10-03",
        endDate: "2026-10-05",
        dateDisplay: "Oct 3–5, 2026",
        summary: "",
        location: "Portland, OR",
        times: "",
        externalUrl: "",
      },
      {
        slug: "friend-pop-up",
        categoryId: "community",
        title: "Pop-up: friend’s art market (not my booth)",
        startDate: "2026-05-17",
        summary:
          "I’m not vending—just showing up for a friend with good taste. Prints, small originals, zero credit taken by me.",
        externalUrl: "https://example.com/friend-event",
      },
    ],
  },

  servicesSection: {
    title: "What I actually do",
    subtitle:
      "It’s all tattoo-adjacent. If you need a PowerPoint, you’re in the wrong place.",
    services: [
      {
        title: "Custom pieces",
        description:
          "You bring a half-baked idea; I bring reference hoarding and opinions. Together we make something that isn’t a Pinterest clone.",
      },
      {
        title: "Flash",
        description:
          "Pre-drawn designs for when you want cool art and zero emotional labor. Pick one, we schedule, we go.",
      },
      {
        title: "Cover-ups",
        description:
          "That ex’s name? That barbed wire from 2009? We can talk. No promises until I see it in person—I'm awkward, not a wizard.",
      },
      {
        title: "Consults & sketches",
        description:
          "Sit-downs, DMs, rough comps—whatever gets us to a stencil without surprises the day of. Communication: it’s hot.",
      },
    ],
  },

  requestQuoteSection: {
    title: "Pitch me your idea",
    intro:
      "Drop what you want, where it goes, and how patient you are. I’ll reply when I can—usually with follow-up questions because I’m like that. Ghosting is cringe; don’t do that to me either.",
    quote:
      "“If you wanted a silent transaction you’d be at a vending machine. Tattoos are a conversation with extra needles.”",
  },

  testimonials: {
    title: "Nice things people said",
    subtitle: "Unsolicited-ish. I didn’t pay them. Probably.",
    items: [
      {
        name: "Emma K.",
        title: "Rose girl",
        text: "She acted unbothered the whole time and then the line work was stupid clean. 10/10 would sit through my own anxiety again.",
      },
      {
        name: "Marcus",
        title: "Has too many tattoos already",
        text: "I’ve been tattooed everywhere; this was the first time someone explained aftercare without sounding like a brochure.",
      },
      {
        name: "Luna",
        title: "Wanted a demon, got a mood",
        text: "It’s cute, it’s cursed, it’s exactly the unhinged energy I asked for. My mom hates it. Success.",
      },
      {
        name: "Raven",
        title: "Cover-up survivor",
        text: "I walked in with regret and walked out with something I’d actually show strangers. Therapy could never.",
      },
      {
        name: "J.",
        title: "Custom sleeve in progress",
        text: "She sketches like she’s judging my life choices—in a supportive way. Sessions are long but the playlist slaps.",
      },
      {
        name: "Vi",
        title: "Chronic overthinker",
        text: "I changed my mind three times and she didn’t even sigh audibly. The tattoo looks better than my personality.",
      },
    ],
  },

  finalCta: {
    title: "Still here?",
    subtitle:
      "Cool. Weird. Anyway—if you want ink, say hi. If not, thanks for the traffic. Tell your friends. Or don’t. I’m not your supervisor.",
    primaryCta: "Fine, let’s talk",
    secondaryCta: "Just show me art",
  },

  about: {
    storyTitle: "So yeah—I’m Taylor",
    storyParagraphs: [
      "I like stuff that’s dark, pretty, a little weird, sometimes cute in a way that worries your relatives. If you want safe beige energy, I’m probably not your person—and that’s okay.",
      "I tattoo because I like lines that survive healing and ideas that don’t sound like everyone’s Pinterest board. We’ll talk a lot up front so appointment day isn’t a group meltdown. Bring references, bring chaos, bring snacks.",
    ],
    portraitAlt: "Taylor Jae, tattoo artist",
    whyTitle: "Why me (optional)",
    whyIntro:
      "You’ve got options. Here’s what you get if you pick the one who over-communicates and under-promises fairy tales.",
    pillars: [
      {
        emoji: "🎨",
        title: "A real style",
        body: "Ornamental, moody, occasionally unhinged—and yes, hand-drawn: stylus on glass, layers, and me losing a fight to a Bézier curve at 1am. If it looks like a person drew it, that’s because one did—bad posture and all.",
      },
      {
        emoji: "🤝",
        title: "Actual collaboration",
        body: "You’re allowed to have opinions. I’m allowed to veto bad ideas. Friendship.",
      },
      {
        emoji: "✨",
        title: "Lines that behave",
        body: "I care how it heals, not just how it photographs at 9pm with a ring light.",
      },
      {
        emoji: "💖",
        title: "Human in the chair",
        body: "Consent, breaks, dumb jokes—tattooing is already enough of a vibe check.",
      },
    ],
    ctaTitle: "Still curious?",
    ctaSubtitle:
      "Cool. Weird. Send a message or stare at the gallery until you’re emotionally ready.",
    getInTouch: "Okay, message me",
    viewGallery: "Or just look at art",
  },

  contact: {
    heroTitle: "Say hi (for real)",
    heroSubtitle:
      "Forms are boring but useful. Drop what you’re thinking—I’ll reply when I’m not elbow-deep in ink or pretending I have a life.",
    connectTitle: "The practical stuff",
    blocks: [
      {
        icon: "📍",
        title: "Where",
        body: "I work from a booth at a local shop. Exact address shows up when we actually book—internet strangers don’t get a map pin. Sorry/not sorry.",
      },
      {
        icon: "🕐",
        title: "When",
        body: "Default mode is appointments—pretend we’re adults with calendars. Every so often I’ll do walk-ins, but only when I feel like it; I’ll yell about it on social first.",
      },
      {
        icon: "📱",
        title: "Stalking (professional)",
        body: "Socials for fresh work, shop chaos, and the occasional proof I left the house.",
      },
      {
        icon: "💬",
        title: "What happens next",
        body: "You ramble, I ask annoying questions, we sketch/plan so the needle day isn’t improv comedy. Custom means we talk first.",
      },
    ],
    formColumnTitle: "The form nobody loves filling out",
  },

  faq: {
    heroTitle: "Questions I get a lot",
    introBefore:
      "Short answers so you don’t have to DM “quick question” at 11pm. Still lost? ",
    contactLinkText: "hit the contact page",
    introAfter: " and I’ll pretend my inbox is under control.",
    questions: [
      {
        question: "What’s your style, actually?",
        answer:
          "Dark, ornamental, sometimes cute in a concerning way—moody lines, weird pretty. Default taste, not a veto: bring your idea and we’ll shape it together. I draw on a tablet—still all hand-built by me—and I don’t pass off generic AI slop as my work. Short version: you’re getting my lines, not a prompt dump.",
      },
      {
        question: "How do I book?",
        answer:
          "Contact form is the move. Ramble about your idea; I’ll reply with follow-ups like the organized gremlin I am. If you hate forms, we’ll figure it out—just don’t expect psychic booking.",
      },
      {
        question: "What should I bring?",
        answer:
          "ID (non-negotiable), references if you have them, clothes that expose the spot without a contortion act. I’ve got the rest—needles, ink, awkward silence.",
      },
      {
        question: "How long will we be in the chair?",
        answer:
          "Depends how big and how fussy the piece is. Tiny stuff: a couple hours. Big stuff: multiple sessions so we don’t hate each other. I’ll ballpark it when we plan.",
      },
      {
        question: "Cover-ups?",
        answer:
          "Yep. Bring the old tattoo in good lighting; I’ll tell you what’s realistic. Magic has limits; lasers exist for a reason.",
      },
      {
        question: "What’s it cost?",
        answer:
          "Size, detail, how many times I have to redraw your ex’s name out of the concept—it all matters. I’ll quote after we talk; no random numbers in DMs that age poorly.",
      },
    ],
  },

  gallery: {
    heroTitle: "Things I’ve put on skin (and paper)",
    heroSubtitle:
      "A wall of proof I do more than scroll. Filter if you want; otherwise enjoy the chaos grid.",
    categories: [
      { id: "all", name: "Everything" },
      { id: "tattoos", name: "Tattoos" },
      { id: "drawings", name: "Drawings" },
      { id: "flash", name: "Flash" },
      { id: "custom", name: "Custom" },
    ],
    items: [
      {
        id: 1,
        title: "Dark Rose",
        category: "tattoos",
        image: "/assets/gallery/image0.jpeg",
        description: "Gothic rose design with dark shading",
      },
      {
        id: 2,
        title: "Cute Demon",
        category: "drawings",
        image: "/assets/gallery/image1.jpeg",
        description: "Adorable demon character with edgy style",
      },
      {
        id: 3,
        title: "Moon & Stars",
        category: "flash",
        image: "/assets/gallery/image2.jpeg",
        description: "Celestial flash art design",
      },
      {
        id: 4,
        title: "Skull & Flowers",
        category: "custom",
        image: "/assets/gallery/image3.jpeg",
        description: "Custom skull design with floral elements",
      },
      {
        id: 5,
        title: "Gothic Cross",
        category: "tattoos",
        image: "/assets/gallery/image4.jpeg",
        description: "Dark gothic cross with intricate details",
      },
      {
        id: 6,
        title: "Cute Witch",
        category: "drawings",
        image: "/assets/gallery/image5.jpeg",
        description: "Adorable witch character with dark aesthetic",
      },
    ],
  },

  notFound: {
    code: "404",
    message:
      "This page doesn’t exist. Neither does my patience for broken links—let’s start over.",
    goHome: "Take me home",
  },

  forms: {
    contact: {
      labels: {
        name: "Name *",
        email: "Email *",
        phone: "Phone",
        preferredDate: "Preferred Date",
        tattooType: "Tattoo Type *",
        bodyLocation: "Body Location",
        size: "Size",
        budget: "Budget Range",
        description: "Tattoo Description *",
        message: "Additional Message",
      },
      placeholders: {
        name: "Name your human",
        email: "email you actually check",
        phone: "optional but helpful",
        description:
          "The idea, vibe, placement thoughts, references—ramble welcome.",
        message: "Allergies, anxiety level, favorite snack—whatever helps.",
      },
      selectPlaceholder: {
        tattooType: "Pick one",
        bodyLocation: "Where on the meat suit",
        size: "Rough size",
        budget: "Ballpark (no judgment)",
      },
      tattooTypeOptions: [
        { value: "custom", label: "Custom Design" },
        { value: "flash", label: "Flash Art" },
        { value: "coverup", label: "Cover-up" },
        { value: "touchup", label: "Touch-up" },
      ],
      bodyLocationOptions: [
        { value: "arm", label: "Arm" },
        { value: "leg", label: "Leg" },
        { value: "back", label: "Back" },
        { value: "chest", label: "Chest" },
        { value: "shoulder", label: "Shoulder" },
        { value: "ankle", label: "Ankle" },
        { value: "wrist", label: "Wrist" },
        { value: "other", label: "Other" },
      ],
      sizeOptions: [
        { value: "small", label: "Small (1-3 inches)" },
        { value: "medium", label: "Medium (3-6 inches)" },
        { value: "large", label: "Large (6+ inches)" },
        { value: "sleeve", label: "Sleeve" },
        { value: "full-back", label: "Full Back" },
      ],
      budgetOptions: [
        { value: "100-300", label: "$100 - $300" },
        { value: "300-500", label: "$300 - $500" },
        { value: "500-800", label: "$500 - $800" },
        { value: "800-1200", label: "$800 - $1,200" },
        { value: "1200+", label: "$1,200+" },
      ],
      submit: "Send it",
      success:
        "Got it. I’ll dig out of my inbox soon—expect questions, not a novel.",
      footerNote:
        "* Required bits only. I’ll reply when I can; spam the form and we’re not friends.",
    },
    quote: {
      title: "Project details",
      subtitle:
        "The usual fields. Fill what you know—I’ll ask annoying follow-ups later.",
      success:
        "Sent. I’ll dig through my inbox when I’m allowed to touch grass again.",
      fields: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        phone: "Phone Number",
        tattooType: "Tattoo Type",
        placement: "Placement",
        size: "Size",
        style: "Preferred Style",
        message: "Tell me about your vision",
      },
      placeholders: {
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email",
        phone: "Phone Number",
        message:
          "Describe your tattoo idea, any specific elements you want, colors, or inspiration...",
      },
      chooseOne: "Choose one...",
      terms: "I’ve skimmed the terms and I’m not trying to cause problems",
      submit: "Send it",
      tattooTypeOptions: [
        { value: "custom", label: "Custom Design" },
        { value: "flash", label: "Flash Art" },
        { value: "coverup", label: "Cover-up" },
        { value: "touchup", label: "Touch-up" },
        { value: "other", label: "Other" },
      ],
      placementOptions: [
        { value: "arm", label: "Arm" },
        { value: "leg", label: "Leg" },
        { value: "back", label: "Back" },
        { value: "chest", label: "Chest" },
        { value: "shoulder", label: "Shoulder" },
        { value: "ankle", label: "Ankle" },
        { value: "wrist", label: "Wrist" },
        { value: "other", label: "Other" },
      ],
      sizeOptions: [
        { value: "small", label: "Small (1-3 inches)" },
        { value: "medium", label: "Medium (3-6 inches)" },
        { value: "large", label: "Large (6+ inches)" },
        { value: "sleeve", label: "Sleeve" },
        { value: "backpiece", label: "Back Piece" },
      ],
      styleOptions: [
        { value: "gothic", label: "Gothic" },
        { value: "dark-cute", label: "Dark & Cute" },
        { value: "victorian", label: "Victorian" },
        { value: "traditional", label: "Traditional" },
        { value: "realistic", label: "Realistic" },
        { value: "other", label: "Other" },
      ],
    },
  },
};
