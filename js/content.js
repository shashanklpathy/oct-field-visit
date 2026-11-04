/* =========================================================================
   CONTENT FILE  -  every word the site shows lives here.
   Edit text here; nothing else in the site needs to change.
   Stage 1: Namakkal visit is complete. Chennai is a placeholder (Stage 2).
   All names are invented. Learner and instructor profiles are composites.
   ========================================================================= */
window.APP_CONTENT = {

  site: {
    title: "Inside the Classroom",
    subtitle: "A field visit to Tamil Nadu, India",
    shortTitle: "Inside the Classroom",
    footer: "Built from real field observations. Scenes are illustrations and all names are invented."
  },

  nav: {
    skip: "Skip to the visit",
    play: "Play",
    insights: "Insights Library",
    home: "Back to the visit"
  },

  home: {
    title: "Inside the Classroom",
    subtitle: "A field visit to Tamil Nadu, India",
    lede: "Spend seven minutes in a training centre and see what the day is really like for learners and instructors.",
    noscript: "This experience needs JavaScript. Please turn it on and reload the page."
  },

  setup: {
    chooseLabel: "Choose a centre to visit",
    start: "Visit"
  },

  lenses: {
    learner:    { label: "Learners",   short: "Learner" },
    instructor: { label: "Instructor", short: "Instructor" },
    programme:  { label: "Programme",  short: "Programme" }
  },

  tags: {
    observed: "Observed",
    said: "Shared by learners or instructors",
    reported: "Reported by programme staff",
    interpretation: "Our interpretation",
    composite: "Illustrative composite based on field observations",
    illustrative: "Illustrative screen based on field observations"
  },

  brief: {
    title: "Your mission",
    lead: "You are on a field visit to {place}.",
    goal: "Observe what you see. Infer what it means.",
    programme: "{programme}",
    lookTitle: "Look for",
    lensLines: {
      learner: "How they learn",
      instructor: "Their role and week",
      programme: "Our design in the room"
    },
    howTitle: "How it works",
    steps: [
      { t: "Observe", d: "Tap a ring. +10 points." },
      { t: "Infer", d: "Tap Infer and pick the best fit. +10 more." },
      { t: "Review", d: "See what you caught." }
    ],
    stuck: "A clue appears if you pause. Wrong answers cost nothing.",
    go: "Go to the centre"
  },

  arrival: {
    kicker: "Arriving",
    start: "Step inside and start the clock",
    note: "Seven minutes. The clock starts when you step in."
  },

  play: {
    timeLeft: "Time left",
    score: "Score",
    notebook: "Field notebook",
    notebookOpen: "Notebook",
    notebookClose: "Close notebook",
    notebookEmpty: "Your notes will appear here as you observe the room.",
    notes: "Notes",
    panHint: "Swipe sideways to look around the room.",
    clue: "Clue",
    closeCard: "Close",
    infer: "Infer",
    keepLooking: "Keep looking",
    seeInsight: "See the insight",
    notedCore: "Noted in your notebook: +10 points. Tap Infer for another +10.",
    notedBonus: "Noted in your notebook: +10 points.",
    notedAlready: "Already in your notebook.",
    nextInfer: "Next: tap this ring and choose Infer.",
    playHint: "Tap a ring to observe. Then tap Infer.",
    whatItTells: "What does this tell us?",
    chooseBest: "Choose the best fit.",
    correct: "Correct. +10 points",
    notQuite: "Not quite. No points this time.",
    badgeCorrect: "Correct answer",
    badgeYours: "Your answer",
    insight: "The insight",
    next: "Carry on observing",
    morePieces: "There is one more piece to find.",
    timeUpNote: "Time is up. Finish this one and we will show your results.",
    alreadyDone: "You have already captured this.",
    pointsPop: "+{n} points",
    revisitBanner: "No clock and no extra points now. Look again to capture what you missed.",
    revisitDone: "You have now seen everything in the room.",
    revisitFinish: "Back to results",
    capturedLater: "Captured after the visit. No points, but now you have seen it.",
    finish: "See your results"
  },

  reveal: {
    title: "Time is up. Here is what you captured.",
    titleEarly: "You covered the whole room.",
    introEarly: "{time} to spare.",
    intro: "",
    full: "Spotted and understood: 20 points",
    spotOnly: "Spotted: 10 points. The insight did not land this time.",
    bonusSpot: "Spotted: 10 points",
    missed: "Missed.",
    seenLater: "Seen after the visit. No extra points.",
    clueLead: "Clue:",
    readInsight: "Read the insight",
    lookAgain: "Look again",
    goBack: "Go back to the room",
    cont: "Continue",
    total: "Total score",
    allDone: "You have now seen everything. Continue when you are ready."
  },

  visuals: {
    manualCaption: "Five volumes, with Volume 3 pulled out",
    handoutCaption: "A learner’s handout, open. Every page is blank."
  },

  panel: {
    title: "The insight",
    close: "Close",
    learnMore: "Open the full insight in the Insights Library",
    newTab: "(opens in a new tab)",
    evidence: "Evidence"
  },

  consolidate: {
    title: "What the visit showed",
    intro: "",
    cont: "Continue"
  },

  reflect: {
    title: "One thing to take away",
    prompt: "What is one thing you are taking away from this visit?",
    note: "Your reflection stays on this screen. It is not saved or shared.",
    placeholder: "Write a sentence, or skip.",
    cont: "Continue",
    yours: "Your reflection"
  },

  end: {
    title: "{centre} visited",
    scoreLabel: "Total score",
    identified: "You identified {n} observations at {centre}.",
    identifiedOne: "You identified 1 observation at {centre}.",
    goDeeper: "The full findings are in the Insights Library.",
    explore: "Explore the Insights Library",
    other: "Visit {centre}",
    otherSoon: "{centre} opens in the next build",
    again: "Play {centre} again"
  },

  library: {
    title: "Insights Library",
    desc: "The visit is a taste. The full findings from the field are here, organised by what we are learning about learners, instructors, the programme, the state partnership and the ideas we tested.",
    sections: {
      learners:    { title: "Learners",           blurb: "What we are learning about learners", href: "library/learners.html" },
      instructors: { title: "Instructors",        blurb: "What we are learning about instructors", href: "library/instructors.html" },
      programme:   { title: "Programme",          blurb: "What we are learning about the programme", href: "library/programme.html" },
      partnership: { title: "State partnership",  blurb: "How the state partnership works", href: "library/partnership.html" },
      ideas:       { title: "Ideas we tested",    blurb: "Ideas we tested and how they were received", href: "library/ideas.html" }
    },
    ui: {
      crumb: "Insights Library",
      legendTitle: "How to read the tags",
      legend: {
        observed: "We saw it ourselves.",
        said: "Learners or instructors told us.",
        reported: "Programme staff told us.",
        interpretation: "Our reading of what we saw and heard."
      },
      centreLabel: "Centre",
      evidenceLabel: "Evidence",
      all: "All",
      centres: { namakkal: "Namakkal", chennai: "Chennai", other: "Chennai, field technician centre", across: "Across centres" },
      expandAll: "Read all",
      collapseAll: "Close all",
      readMore: "Read more",
      showLess: "Show less",
      showing: "Showing {n} of {m}",
      empty: "No insights match these filters.",
      reset: "Clear filters",
      reading: "Our reading",
      hideProfile: "Hide the full profile",
      insights: "insights",
      ideasCount: "{n} ideas and 2 tests",
      welcomed: "Welcomed",
      response: "How it was received",
      conditions: "Conditions to keep in mind",
      questionsTitle: "What the test set out to answer",
      findingsTitle: "What we found",
      compareTitle: "Namakkal and Chennai, side by side",
      barriersTitle: "Common to both",
      menuTitle: "The Insights Library",
      menuNote: "Five sections. Pick any to keep reading.",
      youAreHere: "You are here",
      backToVisit: "Back to the visit",
      play: "Play the visit",
      close: "Close",
      working: "Working well",
      attention: "Needs close attention"
    },
    stubTitle: "This section is being built",
    stubBody: "The full findings will appear here in the next stage, with an evidence tag on every insight. The visit on the home page is already playable.",
    previewNote: "The Insights Library pages are built in a later stage of the project.",
    backHome: "Back to the visit"
  },

  /* =======================================================================
     CENTRES
     ======================================================================= */
  centres: {

    namakkal: {
      name: "Namakkal",
      programme: "Junior Software Developer",
      kind: "Technical programme",
      place: "A small town about an hour from Salem",
      cardLine: "Junior Software Developer. A technical programme in a small town about an hour from Salem.",

      arrival: {
        title: "Arriving in Namakkal",
        lines: [
          "A muddy road leads to a single building that still looks unfinished.",
          "You leave your shoes at the door."
        ]
      },

      /* ---------- The ten scored items, in clue order ---------- */
      items: [
        {
          id: "tamil_english", lens: "learner", kind: "core",
          title: "Tamil or English",
          tags: ["observed", "said"],
          note: "Hard ideas explained in Tamil. Slide and lab sheet stay in English. Answers come back in a Tamil and English mix.",
          clue: "Listen to how the instructor explains a hard idea.",
          question: {
            prompt: "What does this tell us about language?",
            options: [
              { correct: true,  text: "Learners understand English but learn best in Tamil or a mix, and they want English for work." },
              { correct: false, text: "Learners struggle with English so much that every material needs a full Tamil translation.",
                why: "Learners understand English. What they prefer is Tamil or a Tamil and English mix, so the need is a bridge, not a full translation." },
              { correct: false, text: "Learners would rather learn in English, and the instructor uses Tamil only when someone visits.",
                why: "Learners learn best in Tamil. Classes here are generally in Tamil, with English used mainly for the materials and labs." }
            ]
          },
          insight: {
            title: "Learners learn best in Tamil but need English for work",
            body: "Learners prefer Tamil or Tanglish, a Tamil and English mix, and many find reading and speaking English hard. They want fluent English for jobs. Materials and labs stay in English, so instructors switch to Tamil for complex ideas and use their own examples."
          }
        },
        {
          id: "ai_support", lens: "learner", kind: "core",
          title: "Over the shoulder",
          tags: ["observed", "said"],
          note: "Phones and laptops at hand. AI used to clear doubts and go beyond the curriculum.",
          clue: "Where are the learners’ phones and laptops?",
          question: {
            prompt: "What does this tell us about AI?",
            options: [
              { correct: true,  text: "AI is an everyday support for learners and instructors, used in conversation to clear doubts." },
              { correct: false, text: "Learners are building their own apps with AI tools alongside the curriculum each week.",
                why: "There was limited evidence of learners building with AI, even in technical programmes. Use was mostly conversational." },
              { correct: false, text: "The centre bans AI, so learners only use it in secret, outside class and away from instructors.",
                why: "The centre has no formal rules on AI. Instructors discourage it during class activities and assessments, but allow it for extra learning." }
            ]
          },
          insight: {
            title: "AI is an everyday support for learners and instructors",
            body: "Learners and instructors use tools like ChatGPT, Gemini and Claude on their phones and laptops to clarify doubts, understand assignments and go beyond the curriculum. In what we saw, use was conversational and not about building. Guardrails are limited and mostly informal."
          }
        },
        {
          id: "who_learner", lens: "learner", kind: "core",
          title: "Who is this learner?",
          tags: ["said"],
          note: "Meena: civil engineering graduate, first time coding. Here for a job. Her instructor knows her strengths and what she is working on.",
          clue: "Talk to the instructor about one learner.",
          question: {
            prompt: "What was the main reason learners in this room gave for joining?",
            options: [
              { correct: true,  text: "Mostly to get placed in jobs, and they also find extra value in learning from the instructor." },
              { correct: false, text: "Mostly to earn a certificate, and they also find extra value in the friends they make in class.",
                why: "Some learners do come for a certificate, and the operations team has seen certificate-led joining at other centres. But in this room, placement was named almost unanimously." },
              { correct: false, text: "Mostly to change careers entirely, and they also find extra value in the equipment at the centre.",
                why: "Some learners do come to change field, but in this room placement was named almost unanimously." }
            ]
          },
          insight: {
            title: "Placement is the main reason learners enrol",
            body: "Learners are mostly here to get placed in jobs. Many graduated without one and joined for a placement guarantee. They also find extra value in learning from their instructors, and in the structured guidance that college did not give them. Some join for other reasons, such as a certificate or a change of field."
          }
        },
        {
          id: "who_instructor", lens: "instructor", kind: "core",
          title: "Who is the instructor?",
          tags: ["observed", "said"],
          note: "Arun: about two years in industry, first batch with the programme. Strong rapport. One concept after another, short answers.",
          clue: "What happens after a learner answers?",
          question: {
            prompt: "What does this tell us about instructors new to the programme?",
            options: [
              { correct: true,  text: "They bring credibility and rapport, but facilitation is still emerging, so they teach concept by concept." },
              { correct: false, text: "They are short on technical knowledge, so learners lean on videos and AI for the actual content itself.",
                why: "Learners speak highly of instructors’ technical knowledge and industry experience. The gap is in facilitation, not knowledge." },
              { correct: false, text: "They set the curriculum aside, so every class follows whatever the instructor prefers to teach on the day.",
                why: "Some instructors do teach key concepts their own way, but here the instructor follows the curriculum, one concept after another." }
            ]
          },
          insight: {
            title: "New instructors take a few batches to get comfortable",
            body: "Instructors are early in their careers and many are delivering their first batch with the programme. They take a few batches to get comfortable with the curriculum, and many default to covering one concept at a time. Their strengths are rapport with learners and technical credibility."
          }
        },
        {
          id: "instructor_week", lens: "instructor", kind: "core",
          title: "The instructor’s week",
          tags: ["said", "reported"],
          note: "Mon to Sat teaching, long travel, Sundays on prep, AI research and data. Pamphlets sometimes. Very little spare bandwidth.",
          clue: "Catch the instructor during the break.",
          question: {
            prompt: "What does this mean for how we design?",
            options: [
              { correct: true,  text: "Instructors have little spare bandwidth, so every new expectation carries a real cost for them." },
              { correct: false, text: "Instructors have spare hours in the week, so we can add tasks and tools without concern.",
                why: "The week is full: six days of teaching, long travel, and extra work on top." },
              { correct: false, text: "Instructors need more live training, so we should schedule extra sessions each week.",
                why: "More sessions would add to an already full week. The better move is to build support into the materials themselves." }
            ]
          },
          insight: {
            title: "Instructors are fully occupied and have little bandwidth",
            body: "Instructors teach all day, travel a long way, and take on preparation, grading, data updates and sometimes learner mobilisation on top. They get training before a batch, weekly calls and coach check-ins, but that support gets harder to provide as the number of centres grows. New expectations, such as rubrics and tools, need to be weighed against this load."
          }
        },
        {
          id: "manual_handout", lens: "programme", kind: "core",
          title: "Manual and empty handout",
          tags: ["observed"],
          note: "Volume 3, about 300 pages, one of five. Learners’ handouts are blank.",
          clue: "What sits beside the instructor? What is in a learner’s handout?",
          question: {
            prompt: "What can we infer?",
            options: [
              { correct: true,  text: "The materials are too dense, instructors lean on AI to unpack them, and handouts go unused." },
              { correct: false, text: "The handouts are well designed, but learners would use them more if they were printed in colour.",
                why: "Colour is not the issue the field notes point to. Learners lose focus with long text and prefer content that is shorter and more hands-on." },
              { correct: false, text: "The materials are the right size, but learners are not motivated enough to open the handouts.",
                why: "Learners are attentive and motivated by placement. The materials are the issue, not motivation." }
            ]
          },
          insight: {
            title: "Curricular materials are too dense and need to be leaner",
            body: "Session plans, manuals and handouts hold more than instructors can take in, and instructors have little time to prepare. Many use AI tools to unpack the plans before teaching. Learners rarely fill in their handouts or return to them, and the printed books are bulky to carry and hand out."
          }
        },
        {
          id: "tools_data", lens: "programme", kind: "core",
          title: "Tools and data",
          tags: ["observed", "said"],
          note: "Canvas: hard to find the assessment. Data is patchy and scores repeat. The reason is unclear.",
          clue: "What is on the instructor’s screen?",
          question: {
            prompt: "What is the best reading?",
            options: [
              { correct: true,  text: "Canvas is hard to navigate and the data is patchy, so we read learning weakly and the cause is unclear." },
              { correct: false, text: "Learners are refusing to submit their work, which is why the data looks so patchy in this new batch.",
                why: "We do not know why work is missing. It is a new batch, and time pressure or unfamiliarity with the systems may play a part. Nothing suggests refusal." },
              { correct: false, text: "The repeated scores show that all the learners are performing at the same level in this batch now.",
                why: "Repeated scores more likely point to how data is being recorded than to identical performance. The reason isn’t yet clear." }
            ]
          },
          insight: {
            title: "Canvas is hard to use and the data gives a weak read on learning",
            body: "Learners find Canvas hard to navigate: assessments have no separate section, class content is not on it, and modules complete only after the instructor-led session. Assessment data is patchy, with incomplete submissions and grading and repeated scores. The reasons are not clear, and it may be a new-batch effect."
          }
        },
        {
          id: "bonus_seats", lens: "learner", kind: "bonus",
          title: "Empty seats",
          tags: ["observed"],
          note: "21 of 25 present. Four empty seats.",
          clue: "Count the benches. Are they all full?",
          insight: {
            title: "Attendance holds for most learners, but not for everyone",
            body: "Among learners who stay, attendance and engagement stay high despite long days and long commutes. Dropout is still the programme’s biggest challenge."
          }
        },
        {
          id: "bonus_seating", lens: "learner", kind: "bonus",
          title: "Where people sit",
          tags: ["observed"],
          note: "Men on the right, women on the left. A quiet room.",
          clue: "Look at where people sit.",
          insight: {
            title: "Learners are comfortable with instructors, reserved with peers",
            body: "Learners are comfortable around their instructors and ask them questions, but most are reserved with peers and in class, and seating can split along gender lines. Peer practice is attempted, but small rooms leave little space for it."
          }
        },
        {
          id: "bonus_memory", lens: "learner", kind: "bonus",
          title: "What do learners remember?",
          tags: ["said"],
          note: "Technical sessions stick. Mindset and persistence were new words.",
          clue: "Ask a learner which sessions stood out.",
          insight: {
            title: "Learners remember the technical sessions best",
            body: "Learners mainly recall the technical sessions and lump everything else into one bucket they call soft skills, which little of it sticks from. Terms such as mindset and persistence were new to some. What does stick tends to be practice-based, such as role plays and mentoring."
          }
        }
      ],

      /* ---------- Cards opened by each hotspot ---------- */
      cards: {
        bubble: {
          item: "tamil_english", eyebrow: "Listening in",
          title: "The instructor explains a hard idea", visual: "language",
          language: [
            { k: "He explains the hard part in", v: "Tamil" },
            { k: "The slide and the lab sheet are in", v: "English" },
            { k: "A learner answers in", v: "Tamil and English" }
          ],
          paragraphs: [
            "He switches to Tamil for the tricky part. The slide on the board and the lab sheet stay in English.",
            "He asks a question. A learner answers in a few words, in a mix of Tamil and English."
          ]
        },
        laptop: {
          item: "ai_support", eyebrow: "Over a learner’s shoulder",
          title: "A doubt, checked with AI", visual: "chat", illustrative: true,
          paragraphs: [
            "A learner pauses to check something the instructor has not covered. Phones and laptops are always within reach.",
            "Learners and instructors tell us they use AI like this to clear doubts, to go beyond the curriculum and to practise."
          ],
          chat: {
            you: "I still don’t get this. Can you explain it simply? What edge cases should I test?",
            ai: "Sure. Let’s start with a simple example and then look at the tricky cases."
          }
        },
        meena: {
          item: "who_learner", eyebrow: "Who is this learner?",
          title: "Meena", visual: "portrait:meena", composite: true,
          bullets: [
            "Recently graduated in civil engineering.",
            "Has never coded before. This programme is the first time she is learning to code.",
            "Found the programme through social media posts or a friend.",
            "Travels a long way to the centre every day.",
            "Joined mainly to get a job.",
            "Gets a lot out of learning from her instructor."
          ],
          speakerLabel: "Her instructor says",
          speaks: [
            "Her strength: she practises eagerly and picks things up quickly when I help her live.",
            "What she is working on: speaking up in class, and speaking in English."
          ]
        },
        arun: {
          item: "who_instructor", eyebrow: "Who is the instructor?",
          title: "Arun", visual: "portrait:arun", composite: true,
          bullets: [
            "Early in his career, in his mid-20s.",
            "About two years of industry experience.",
            "This is his first batch with the programme.",
            "Learners are comfortable with him and ask him questions.",
            "He is close in age to his learners."
          ],
          observedLabel: "What you see",
          observed: "He explains a concept and asks a question. A learner gives a one-line answer. He moves straight on to the next concept."
        },
        door: {
          item: "instructor_week", eyebrow: "At the break",
          title: "A few minutes with Arun", visual: "portrait:arun", composite: true,
          paragraphs: ["During the break, Arun tells you about his week."],
          bullets: [
            "He teaches Monday to Saturday, and travels a long way each day.",
            "On Sundays he prepares the coming sessions, looks up how to teach them with AI tools, and updates data.",
            "Sometimes he also goes out to hand out pamphlets to bring in more learners.",
            "He had training before the batch began, joins weekly calls, and a coach checks in with him."
          ]
        },
        pair: {
          item: "manual_handout", eyebrow: "Two things to look at",
          title: "The manual and the handout", visual: "pair",
          incomplete: "Open both tabs to add this to your notebook.",
          nextTab: { handout: "Look at the handout", manual: "Look at the manual" },
          tabs: [
            { id: "manual", label: "The manual", where: "Beside the instructor",
              paragraphs: [
              "This is Volume 3, about 300 pages. It is one of five volumes that cover the whole programme.",
              "The instructor uses it to plan every session."
              ] },
            { id: "handout", label: "A learner’s handout", where: "On a learner’s desk",
              paragraphs: [
              "Learners get a smaller printed version of the same material. You flip through one.",
              "Page after page is blank."
              ] }
          ],
          compare: { a: "What the instructor has", b: "What the learner has" }
        },
        screen: {
          item: "tools_data", eyebrow: "On the instructor’s screen",
          title: "Canvas and the data", visual: "screen", illustrative: true,
          incomplete: "Look at both tabs to add this to your notebook.",
          nextTab: "Look at the Data tab",
          paragraphs: ["Look at both tabs."],
          screen: {
            tabCanvas: "Canvas",
            tabData: "Data",
            canvasTask: "Task: find the assessment.",
            canvasNote: "There is no separate Assessments section. Assessments sit inside units.",
            classContent: "Slides and notes from class",
            classContentState: "Not on Canvas",
            units: [
              { name: "Unit 1", rows: [{ t: "Instructor-led session", s: "Complete" }, { t: "Reading", s: "Open" }] },
              { name: "Unit 2", rows: [{ t: "Instructor-led session", s: "Complete" }] },
              { name: "Unit 3", rows: [{ t: "Instructor-led session", s: "Complete" }, { t: "Practice task", s: "Open" }] },
              { name: "Unit 4", rows: [{ t: "Instructor-led session", s: "In progress" }, { t: "Assessment", s: "Opens after the session is marked complete", found: true }] },
              { name: "Unit 5", rows: [{ t: "Locked", s: "Opens after Unit 4" }] }
            ],
            foundMsg: "Found it, inside Unit 4. Modules complete only after the instructor-led session.",
            dataTitleA: "Canvas: submissions and grading",
            dataTitleB: "Weekly score entered in Salesforce",
            colLearner: "Learner",
            colSubmitted: "Submitted",
            colGraded: "Graded",
            colScore: "Score",
            yes: "Yes",
            no: "Not yet",
            submitted: [1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            graded:    [1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
            score: 6,
            dataNote: "We do not know why. It is a new batch."
          }
        },
        seats: {
          item: "bonus_seats", eyebrow: "Counting the room",
          title: "Empty seats", visual: "none",
          paragraphs: [
            "You count the benches. There are 25 seats, and 21 learners are here. Four seats are empty.",
            "Among learners who stay, attendance holds up despite long days and long commutes. But not everyone is here today."
          ]
        },
        aisle: {
          item: "bonus_seating", eyebrow: "Reading the room",
          title: "Where people sit", visual: "none",
          paragraphs: [
            "The men sit on the right and the women on the left. The room is quiet.",
            "Learners are comfortable with the instructor, but most are reserved with each other."
          ]
        },
        memory: {
          item: "bonus_memory", eyebrow: "Ask a learner",
          title: "Which sessions stood out?", visual: "none", composite: true,
          paragraphs: ["You ask a learner what she remembers from the last few weeks."],
          bullets: [
            "She recalls the technical sessions.",
            "Words like mindset and persistence are new to her.",
            "The only other activity she remembers is a session led by an outside mentor."
          ]
        }
      },

      consolidate: {
        learner: "Learners are here for placement, and they are comfortable with phones and AI. They learn best in Tamil or a Tamil and English mix while needing English for work, and they remember the technical sessions best.",
        instructor: "Instructors know their learners and care about their placement. Many are new, teach one concept after another, and have very little spare bandwidth, with support that gets harder to give as centres grow.",
        programme: "Materials are dense and bulky, and handouts go unused. Canvas is hard to navigate, and patchy data gives us a weak read on what learners are learning."
      }
    },

    chennai: {
      name: "Chennai",
      programme: "Retail Sales Associate",
      kind: "Non-technical programme",
      place: "In the heart of a busy city",
      cardLine: "Retail Sales Associate. A non-technical programme in the heart of a busy city.",

      arrival: {
        title: "Arriving in Chennai",
        lines: [
          "A busy city. The centre is on the third floor, so you take the lift up.",
          "A small group of learners is already settled in the classroom."
        ]
      },

      items: [
        {
          id: "tamil_english", lens: "learner", kind: "core",
          title: "Tamil or English",
          tags: ["observed", "said"],
          note: "Tricky ideas explained in Tamil with her own examples. Slide and handout in English. A learner asked for English help and got it on the spot.",
          clue: "Listen to how the instructor explains a hard idea.",
          question: {
            prompt: "What does this tell us about language?",
            options: [
              { correct: true,  text: "Learners understand English but are most at ease in Tamil or a mix, and they want English for work." },
              { correct: false, text: "Learners need every explanation in English, since both the materials and the job use that language.",
                why: "Learners understand English, but they learn best in Tamil or a mix. Fluent English is a goal for work, not how they learn best today." },
              { correct: false, text: "Learners follow Tamil only, so the instructor has to translate each line of every slide for them all.",
                why: "Learners understand English. Instructors explain the hard parts in Tamil, but they do not need to translate everything." }
            ]
          },
          insight: {
            title: "Learners learn best in Tamil but need English for work",
            body: "Learners prefer Tamil or Tanglish, a Tamil and English mix, and many find reading and speaking English hard. They want fluent English for jobs. Materials and labs stay in English, so instructors switch to Tamil for complex ideas and use their own examples."
          }
        },
        {
          id: "ai_support", lens: "learner", kind: "core",
          title: "Over the shoulder",
          tags: ["observed", "said"],
          note: "Phones, no laptops. AI used to clear doubts. Her instructor used AI for more local examples. Few know tools beyond chat apps.",
          clue: "Where are the learners’ phones?",
          question: {
            prompt: "What does this tell us about AI?",
            options: [
              { correct: true,  text: "AI is an everyday support on phones, used to clear doubts, though few know tools beyond chat apps." },
              { correct: false, text: "AI is used only by the technical cohorts, while learners in retail rarely touch these tools at all.",
                why: "Learners across programmes, technical and non-technical, use AI tools to understand content." },
              { correct: false, text: "AI is used mainly to finish assessments, so learners seldom turn to it to clear their own doubts.",
                why: "Some learners do use AI to answer quizzes, but the uses described were mainly clearing doubts, understanding content and practising." }
            ]
          },
          insight: {
            title: "AI is an everyday support for learners and instructors",
            body: "Learners and instructors use tools like ChatGPT, Gemini and Claude on their phones and laptops to clarify doubts, understand content and go beyond the curriculum. In what we saw, use was conversational. Fewer learners in non-technical programmes know tools beyond the basic chat apps. Guardrails are limited and mostly informal."
          }
        },
        {
          id: "who_learner", lens: "learner", kind: "core",
          title: "Who is this learner?",
          tags: ["said"],
          note: "Vignesh: just finished a BA. Here for a job, and learns a lot from his instructor. She knows his strengths and what he is working on.",
          clue: "Talk to the instructor about one learner.",
          question: {
            prompt: "What was the main reason learners in this room gave for joining?",
            options: [
              { correct: true,  text: "Mostly to get placed in jobs, and they also find extra value in learning from their instructor." },
              { correct: false, text: "Mostly to gain a recognised certificate, and they also find extra value in the networking it brings.",
                why: "Some learners do come for a certificate, but in this room placement was named as the main reason." },
              { correct: false, text: "Mostly to switch into a new line of work, and they also find extra value in the study materials.",
                why: "Some learners do come to change field, but in this room placement was named as the main reason." }
            ]
          },
          insight: {
            title: "Placement is the main reason learners enrol",
            body: "Learners are mostly here to get placed in jobs. Many graduated without one and joined for a placement guarantee. They also find extra value in learning from their instructors, and in the structured guidance that college did not give them. Some join for other reasons, such as a certificate or a change of field."
          }
        },
        {
          id: "who_instructor", lens: "instructor", kind: "core", lib: "role_plays_scaffolded",
          title: "Who is the instructor?",
          tags: ["observed", "said"],
          note: "Kavitha: about two years in industry, taught 3 to 4 batches. The role play felt rehearsed and did not match the session. Later: learners are not sure how to do role plays.",
          clue: "What happens when the role play begins?",
          question: {
            prompt: "What does this role play tell us about our materials and support?",
            options: [
              { correct: true,  text: "Role plays need scaffolding built into the materials, with clear steps and learners prepared beforehand." },
              { correct: false, text: "Role plays should be dropped from the programme, because learners find them too hard to attempt at all.",
                why: "Learners enjoy role plays and practice. The issue is how they are set up, not the role plays themselves." },
              { correct: false, text: "Experienced instructors only need extra time to rehearse role plays, so the materials can stay as they are.",
                why: "Even instructors who know the programme struggle to give clear instructions for role plays. The materials need to carry that support." }
            ]
          },
          insight: {
            title: "Even experienced instructors need role plays scaffolded",
            body: "Instructors take a few batches to get comfortable with the curriculum, and this instructor has taught several. Even so, role plays can feel rehearsed and out of step with the session, and learners are not sure how to do them. Giving clear instructions for role plays and activities is a common struggle. It needs to be scaffolded in the materials, not learned over batches."
          }
        },
        {
          id: "instructor_week", lens: "instructor", kind: "core",
          title: "The instructor’s week",
          tags: ["said", "reported"],
          note: "Mon to Sat teaching, long travel, other programmes too. Sundays on prep, AI research and data. Pamphlets sometimes. Very little spare bandwidth.",
          clue: "Catch the instructor during the break.",
          question: {
            prompt: "What does this mean for how we design?",
            options: [
              { correct: true,  text: "Instructors have almost no spare bandwidth, so each new task, tool or portal takes a real toll on them." },
              { correct: false, text: "Instructors are comfortable with extra work, since they have taught several batches already.",
                why: "Experience helps with the curriculum, but the week is still full: six days of teaching, long travel, and work on top." },
              { correct: false, text: "Instructors need a lighter teaching load, so the programme should cut classroom hours each week.",
                why: "Cutting classroom hours is not what the field notes point to. The pressure comes from the work on top of teaching." }
            ]
          },
          insight: {
            title: "Instructors are fully occupied and have little bandwidth",
            body: "Instructors teach all day, travel a long way, and take on preparation, grading, data updates and sometimes learner mobilisation on top. They get training before a batch, weekly calls and coach check-ins, but that support gets harder to provide as the number of centres grows. New expectations, such as rubrics and tools, need to be weighed against this load."
          }
        },
        {
          id: "manual_handout", lens: "programme", kind: "core",
          title: "Manual and empty handout",
          tags: ["observed"],
          note: "Volume 3, about 300 pages, one of five. She finds the day’s session fast, but the handouts are blank.",
          clue: "What sits beside the instructor? What is in a learner’s handout?",
          question: {
            prompt: "What can we infer?",
            options: [
              { correct: true,  text: "The manual is bulky, instructors turn to AI to make sense of it, and the handouts sit unused." },
              { correct: false, text: "The manual is easy to use, so the blank handouts simply reflect a quiet week in the classroom.",
                why: "She can find her way around the schedule, but the manual holds more than instructors can take in, and the handouts are rarely used." },
              { correct: false, text: "The handouts are too short, so learners would fill them in if they held a lot more detail.",
                why: "Learners lose focus with long text and prefer content that is shorter and more hands-on." }
            ]
          },
          insight: {
            title: "Curricular materials are too dense and need to be leaner",
            body: "Session plans, manuals and handouts hold more than instructors can take in, and instructors have little time to prepare. Many use AI tools to unpack the plans before teaching. Learners rarely fill in their handouts or return to them, and the printed books are bulky to carry and hand out."
          }
        },
        {
          id: "tools_data", lens: "programme", kind: "core", lib: "data_weak_read",
          title: "Tools and data",
          tags: ["observed"],
          note: "Every learner has the same score. The reason is unclear.",
          clue: "What is on the instructor’s screen?",
          question: {
            prompt: "What is the best reading?",
            options: [
              { correct: true,  text: "The repeated scores say little about learning, so the data gives a weak read and the cause is unclear." },
              { correct: false, text: "The repeated scores show that the whole batch has mastered the same material equally well so far.",
                why: "Repeated scores more likely point to how data is being recorded than to identical results. The reason isn’t yet clear." },
              { correct: false, text: "The repeated scores show the instructor is careless, so every score should be entered again by her.",
                why: "We do not know why scores repeat. Instructors are stretched and data entry takes time. Nothing points to carelessness." }
            ]
          },
          insight: {
            title: "Data gives a weak read on what learners are learning",
            body: "Assessment data is patchy, and scores can repeat across learners. The reasons are not clear: instructors have little time for data entry, and the systems take a few batches to get used to. Update rates from instructors are low, so we cannot yet trust the data to tell us what learners understand."
          }
        },
        {
          id: "bonus_seats", lens: "learner", kind: "bonus",
          title: "Empty seats",
          tags: ["observed"],
          note: "12 present: 7 men, 5 women. Three or four empty seats.",
          clue: "Count the seats. Are they all full?",
          insight: {
            title: "Attendance holds for most learners, but not for everyone",
            body: "Among learners who stay, attendance and engagement stay high despite long days and long commutes. Dropout is still the programme’s biggest challenge."
          }
        },
        {
          id: "bonus_seating", lens: "learner", kind: "bonus",
          title: "Where people sit",
          tags: ["observed"],
          note: "Small clusters, men and women mixed. A small room. They answer one at a time.",
          clue: "Look at where people sit.",
          insight: {
            title: "Learners are comfortable with instructors, reserved with peers",
            body: "Learners are comfortable around their instructors and ask them questions, but most are reserved with peers and in class, and seating can split along gender lines. Peer practice is attempted, but small rooms leave little space for it."
          }
        },
        {
          id: "bonus_memory", lens: "learner", kind: "bonus",
          title: "What do learners remember?",
          tags: ["said"],
          note: "Retail skills and role plays stick. The rest is just soft skills. Mentoring is valued.",
          clue: "Ask a learner which sessions stood out.",
          insight: {
            title: "Learners remember the practical sessions best",
            body: "Learners mainly recall the core skills sessions and lump everything else into one bucket they call soft skills, from which little sticks. What does stick tends to be practice-based, such as role plays and mentoring."
          }
        }
      ],

      cards: {
        bubble: {
          item: "tamil_english", eyebrow: "Listening in",
          title: "The instructor explains a customer-service idea", visual: "language",
          language: [
            { k: "She explains the hard part in", v: "Tamil" },
            { k: "The slide and the handout are in", v: "English" },
            { k: "A learner answers in", v: "Tamil and English" }
          ],
          paragraphs: [
            "She explains the tricky part in Tamil, with an example of her own. The slide and the handout stay in English.",
            "A learner asks for help with English. She pauses and works through it with them."
          ]
        },
        phone: {
          item: "ai_support", eyebrow: "Over a learner’s shoulder",
          title: "A doubt, checked with AI", visual: "chat", illustrative: true,
          paragraphs: [
            "A learner pauses to check something the instructor has not covered. There are no laptops here, only phones, always within reach.",
            "Her instructor does something similar: she fed the session-plan slides into an AI tool to get more local examples. Very few learners here know tools beyond the familiar chat apps, such as NotebookLM."
          ],
          chat: {
            you: "I didn’t follow that. Can you explain it in simple words, with an example?",
            ai: "Sure. Let’s take a simple example first."
          }
        },
        vignesh: {
          item: "who_learner", eyebrow: "Who is this learner?",
          title: "Vignesh", visual: "portrait:vignesh", composite: true,
          bullets: [
            "Just finished a BA.",
            "Found the programme through social media posts or a friend.",
            "Travels a long way to the centre every day.",
            "Joined mainly to get a job.",
            "Gets a lot out of learning from his instructor."
          ],
          speakerLabel: "His instructor says",
          speaks: [
            "His strength: he throws himself into role plays and practice.",
            "What he is working on: his confidence speaking English."
          ]
        },
        kavitha: {
          item: "who_instructor", eyebrow: "Who is the instructor?",
          title: "Kavitha", visual: "portrait:kavitha", composite: true,
          bullets: [
            "In her mid-to-late 20s.",
            "About two years of industry experience.",
            "Has taught three or four batches before, and knows the programme.",
            "Finds her way around the weekly schedule easily.",
            "Learners are comfortable with her and ask her questions."
          ],
          observedLabel: "What you see",
          observed: "A role play begins. It feels rehearsed, and it does not match the session. The session is on handling customer feedback, but the role play is about general customer interaction.",
          saidLabel: "Later, she tells you",
          said: "Her learners are not sure how to do role plays."
        },
        door: {
          item: "instructor_week", eyebrow: "At the break",
          title: "A few minutes with Kavitha", visual: "portrait:kavitha", composite: true,
          paragraphs: ["During the break, Kavitha tells you about her week."],
          bullets: [
            "She teaches Monday to Saturday, and travels a long way each day.",
            "She teaches other programmes too, and extra portals and data entry for this programme sit on top.",
            "On Sundays she prepares the coming sessions, and looks up how to teach them with AI tools.",
            "Sometimes she also goes out to hand out pamphlets to bring in more learners.",
            "She had training before the batch began, joins weekly calls, and a coach checks in with her."
          ]
        },
        pair: {
          item: "manual_handout", eyebrow: "Two things to look at",
          title: "The manual and the handout", visual: "pair",
          incomplete: "Open both tabs to add this to your notebook.",
          nextTab: { handout: "Look at the handout", manual: "Look at the manual" },
          tabs: [
            { id: "manual", label: "The manual", where: "Beside the instructor",
              paragraphs: [
              "This is Volume 3, about 300 pages. It is one of five volumes that cover the whole programme.",
              "At the front is a weekly schedule. She finds today’s session code on it in seconds, then turns to the pages behind it."
              ] },
            { id: "handout", label: "A learner’s handout", where: "On a learner’s desk",
              paragraphs: [
              "Learners get a smaller printed version of the same material. You flip through one.",
              "Page after page is blank."
              ] }
          ],
          compare: { a: "What the instructor has", b: "What the learner has" }
        },
        screen: {
          item: "tools_data", eyebrow: "On the instructor’s screen",
          title: "The data", visual: "datasheet", illustrative: true,
          paragraphs: ["You look at the weekly scores entered for the batch. Every learner has the same score."],
          datasheet: {
            title: "Weekly score entered in Salesforce",
            colLearner: "Learner", colScore: "Score",
            count: 12, score: 6,
            note: "We do not know why."
          }
        },
        seats: {
          item: "bonus_seats", eyebrow: "Counting the room",
          title: "Empty seats", visual: "none",
          paragraphs: [
            "You count 12 learners: 7 men and 5 women. Three or four seats are empty.",
            "Among learners who stay, attendance holds up despite long days and long commutes. But not everyone is here today."
          ]
        },
        aisle: {
          item: "bonus_seating", eyebrow: "Reading the room",
          title: "Where people sit", visual: "none",
          paragraphs: [
            "Learners sit close together in small clusters, not split into a men’s side and a women’s side. The room is small.",
            "They are comfortable with the instructor, but they answer one at a time and are reserved with each other."
          ]
        },
        memory: {
          item: "bonus_memory", eyebrow: "Ask a learner",
          title: "Which sessions stood out?", visual: "none", composite: true,
          paragraphs: ["You ask a learner what she remembers from the last few weeks."],
          bullets: [
            "She recalls the retail skills sessions and the role plays.",
            "Everything else she lumps together as soft skills.",
            "She values the mentoring sessions."
          ]
        }
      },

      consolidate: {
        learner: "Learners are here for placement, and they use phones and AI as an everyday support. They learn best in Tamil or a Tamil and English mix while needing English for work, and they remember the practice more than the rest.",
        instructor: "Instructors know their learners and care about their placement. Experience makes the programme easier to follow, but role plays still need scaffolding, and the week leaves very little bandwidth.",
        programme: "Materials are dense and bulky, and handouts go unused. Data is patchy and scores repeat across learners, which gives us a weak read on what learners are learning."
      }
    }
  }
};
