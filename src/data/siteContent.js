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
          body: "Needles, snacks, bad jokes, occasional silence. You leave with art; I leave with another story for group chat. Everyone wins.",
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
    heroTitle: "Events & appearances",
    heroSubtitle:
      "Conventions, guest spots, shop happenings, and shout-outs to artists I love. Filter on the left, or scroll the timeline—each card is only as detailed as it needs to be.",
    filterLegend: "Key",
    filterLegendSub:
      "Pick a category to narrow the list. Choose “All” to see everything in date order.",
    filterAllId: "all",
    categories: [
      {
        id: "all",
        label: "All appearances",
        description: "Everything coming up and recent, in order.",
      },
      {
        id: "convention",
        label: "Conventions",
        description: "Weekend shows, expos, and travel ink.",
      },
      {
        id: "shop",
        label: "Shop & guest spots",
        description: "Days at the booth, guest spots, and shop-hosted events.",
      },
      {
        id: "shop_special",
        label: "Shop specials",
        description:
          "Flash days, promotions, or studio-specific announcements.",
      },
      {
        id: "community",
        label: "Friends & other artists",
        description: "Events I’m not running—but want you to know about.",
      },
    ],
    sectionUpcoming: "Coming up",
    sectionPast: "Earlier",
    emptyFiltered:
      "Nothing in this category yet. Try another filter or check back soon.",
    readDetails: "Read more",
    viewEventSite: "Official event link",
    backToEvents: "← All events",
    detailFallbackTitle: "Details",
    notFoundTitle: "Event not found",
    notFoundBody: "That event isn’t here anymore, or the link is wrong.",
    notFoundCta: "Back to events",
    noDetailPageBody:
      "There isn’t a long write-up for this one—everything we’re sharing is on the card. Head back to the list anytime.",
    linksHeading: "Links",
    items: [
      {
        slug: "example-tattoo-con-2026",
        categoryId: "convention",
        title: "Example Tattoo Convention",
        startDate: "2026-06-12",
        endDate: "2026-06-14",
        summary:
          "Three-day show—I'll have select flash sheets, booking slots for small pieces, and a few one-off designs.",
        location: "Salt Lake City, UT",
        times: "Vendor floor Sat–Sun 10am–6pm; setup Friday",
        externalUrl: "https://example.com",
        detailIntro:
          "I'm sharing a booth with a friend; half the table is my gothic-cute flash and half is their neotrad work. Stop by early if you want a same-day small piece—slots are limited.",
        detailSections: [
          {
            heading: "Booth & hours",
            body: "Booth 412, main hall. I'll be at the table most of Saturday and Sunday; Friday is mostly setup but say hi if you see me.",
          },
          {
            heading: "Art I’m bringing",
            body: "New flash sheets (dark florals + critters), a binder of customs for inspiration, and stickers for tips.",
          },
        ],
        artGallery: {
          caption: "Some of the sheets I’m packing",
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
          "Classic flash specials at the shop—first come, limited designs. I'll post the sheet the week before.",
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
          "I'm not vending—just want to support a talented friend. Amazing prints and small originals.",
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
    storyTitle: "My Story",
    storyParagraphs: [
      "I've always been drawn to the darker side of art—the mysterious, the edgy, the things that make people look twice. But I also have a soft spot for the cute and adorable, especially when it has a dark twist.",
      "My journey as a tattoo artist began with a passion for creating unique pieces that blend gothic aesthetics with elements that make people smile. I love working with clients to bring their vision to life, whether it's a dark rose with intricate shading or an adorable demon character.",
    ],
    portraitAlt: "Taylor Jae - Tattoo Artist",
    whyTitle: "Why Choose Me?",
    whyIntro:
      "I'm not just a tattoo artist—I'm a collaborator, a creative partner, and someone who genuinely cares about your experience.",
    pillars: [
      {
        emoji: "🎨",
        title: "Unique Style",
        body: "My dark, edgy, and cute aesthetic is unlike anything else you'll find.",
      },
      {
        emoji: "🤝",
        title: "Collaborative",
        body: "I work with you to create exactly what you envision, not just what I want to do.",
      },
      {
        emoji: "✨",
        title: "Quality Focus",
        body: "Every piece is created with attention to detail and a commitment to excellence.",
      },
      {
        emoji: "💖",
        title: "Client Care",
        body: "Your comfort, safety, and satisfaction are my top priorities throughout the process.",
      },
    ],
    ctaTitle: "Ready to Work Together?",
    ctaSubtitle: "Let's make your vision permanent.",
    getInTouch: "Get In Touch",
    viewGallery: "View Gallery",
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle:
      "Ready to start your tattoo journey? Let's discuss your ideas and create something beautiful together.",
    connectTitle: "Let's Connect",
    blocks: [
      {
        icon: "📍",
        title: "Location",
        body: "I rent a booth at a local tattoo shop. The exact location will be provided when you book your appointment.",
      },
      {
        icon: "🕐",
        title: "Hours",
        body: "By appointment only. I'm flexible with scheduling and can work around your availability.",
      },
      {
        icon: "📱",
        title: "Follow My Work",
        body: "Check out my latest artwork and behind-the-scenes content.",
      },
      {
        icon: "💬",
        title: "What to Expect",
        body: "We'll start with a consultation to discuss your ideas, placement, and style preferences. I'll create a custom design just for you.",
      },
    ],
    formColumnTitle: "Send Me a Message",
  },

  faq: {
    heroTitle: "Frequently Asked Questions",
    introBefore:
      "Here you'll find answers to our most frequently asked questions. If you still need help, ",
    contactLinkText: "contact us",
    introAfter: " — we're happy to help.",
    questions: [
      {
        question: "What is your tattoo style?",
        answer:
          "I specialize in gothic, dark, and adorable artwork. My style combines Victorian elegance with modern edge, creating unique pieces that are both beautiful and meaningful.",
      },
      {
        question: "How do I book a consultation?",
        answer:
          "You can book a consultation through our contact form or by calling the studio directly. We'll discuss your vision, placement, and design ideas to create the perfect piece for you.",
      },
      {
        question: "What should I bring to my appointment?",
        answer:
          "Please bring a valid ID, any reference images you have, and wear comfortable clothing that allows easy access to the tattoo area. We'll provide everything else you need.",
      },
      {
        question: "How long does a tattoo session take?",
        answer:
          "Session length varies depending on the size and complexity of your design. Small pieces might take 1-2 hours, while larger pieces can take multiple sessions. We'll give you a time estimate during consultation.",
      },
      {
        question: "Do you do cover-up tattoos?",
        answer:
          "Yes! I specialize in transforming old tattoos into beautiful new pieces. During consultation, we'll discuss your options and create a design that works with your existing ink.",
      },
      {
        question: "What are your rates?",
        answer:
          "Pricing varies based on size, complexity, and session time. I offer competitive rates and will provide a detailed quote during your consultation. No two pieces are exactly alike, so pricing is customized to your specific design.",
      },
    ],
  },

  gallery: {
    heroTitle: "Art Gallery",
    heroSubtitle:
      "Explore my dark, edgy, and cute artwork. From gothic tattoos to adorable demons.",
    categories: [
      { id: "all", name: "All Artwork" },
      { id: "tattoos", name: "Tattoos" },
      { id: "drawings", name: "Drawings" },
      { id: "flash", name: "Flash Art" },
      { id: "custom", name: "Custom Designs" },
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
    message: "Oops! The page you're looking for doesn't exist.",
    goHome: "Go Home",
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
        name: "Your full name",
        email: "your.email@example.com",
        phone: "(555) 123-4567",
        description:
          "Describe your tattoo idea, style preferences, colors, and any specific elements you'd like included...",
        message: "Any other details, questions, or special requests...",
      },
      selectPlaceholder: {
        tattooType: "Select tattoo type",
        bodyLocation: "Select location",
        size: "Select size",
        budget: "Select budget range",
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
      submit: "Send Message",
      success:
        "Thank you for your message! I'll get back to you within 24-48 hours to discuss your tattoo idea.",
      footerNote:
        "* Required fields. I'll respond within 24-48 hours to discuss your tattoo idea and schedule a consultation.",
    },
    quote: {
      title: "Project details",
      subtitle: "The usual fields. Fill what you know—I’ll ask annoying follow-ups later.",
      success: "Sent. I’ll dig through my inbox when I’m allowed to touch grass again.",
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
