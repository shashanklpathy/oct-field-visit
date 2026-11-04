/* =========================================================================
   INSIGHTS LIBRARY CONTENT
   Drawn from the field-visit synthesis and field notes.
   Every card has the same anatomy: tags, an insight (the title), a short
   plain-language summary, and "Read more" with the detail behind it.
   No organisation names, partner names, people or programme figures are in
   this file, because this repository is public. Evidence tags: observed,
   said, reported, interpretation. Centres: namakkal, chennai, other (the
   Chennai field technician centre), across (more than one centre).
   ========================================================================= */
window.FV_LIB = (function () {
  "use strict";

  /* card(id, short, title, tags, centres, summary, points, opts) */
  function card(id, short, title, tags, centres, summary, points, o) {
    o = o || {};
    return { id: id, short: short, title: title, tags: tags, centres: centres, summary: summary, points: points || [], reading: o.reading || "", extra: o.extra || null, welcomed: !!o.welcomed };
  }

  var pages = {};

  /* ---------------------------------------------------------------- LEARNERS */
  pages.learners = {
    key: "learners", title: "Learners",
    intro: "Who our learners are, what drives them, and how they learn best.",
    glance: {
      title: "A typical learner",
      note: "A composite, drawn from what we saw and heard across programmes.",
      faces: [
        { skin: "#9C6644", hair: "#241915", shirt: "#2F5F8F", label: "Illustration of a typical learner" },
        { skin: "#B07A55", hair: "#1B1412", shirt: "#B5546B", female: true, label: "Illustration of a typical learner" }
      ],
      tiles: [
        { icon: "user", k: "Age", v: "Mostly 21 to 24, some up to 29" },
        { icon: "cap", k: "Education", v: "A bachelor\u2019s degree, mostly fresh graduates" },
        { icon: "speech", k: "Language", v: "Learn best in Tamil, want fluent English for work" },
        { icon: "phone", k: "Devices", v: "An Android phone and mobile data" },
        { icon: "spark", k: "AI", v: "Comfortable with ChatGPT, Gemini and Claude" },
        { icon: "target", k: "Motivation", v: "Placement first, skills second" },
        { icon: "tap", k: "Learns by", v: "Doing: practice, role play, hands-on tasks" },
        { icon: "people", k: "With others", v: "Value their instructors, reserved with peers" },
        { icon: "book", k: "In class", v: "Long, text-heavy materials lose them" },
        { icon: "home", k: "Beyond class", v: "Worries about jobs, pay and moving away from family" }
      ],
      fullTitle: "Read the full profile",
      facets: [
        { k: "Age", v: "Mostly 21 to 24, with some up to 29." },
        { k: "Gender", v: "Junior Software Developer and Retail Sales Associate batches had a fairly balanced mix of women and men. The Field Technician (hardware and networking) batch was all men. Sewing machine operator batches are mostly women." },
        { k: "Education and work experience", v: "Most have a bachelor\u2019s degree. In technical programmes they mostly come from engineering and STEM backgrounds. In non-technical programmes they come from diverse backgrounds, including STEM, arts, commerce and social science. Most are fresh graduates, though some have limited work experience." },
        { k: "Language and literacy", v: "Learn and interact best in Tamil, and many speak Tanglish (a mix of Tamil and English) rather than formal written Tamil. Many find reading and speaking English hard, even with a college background, but want fluent English for work." },
        { k: "Digital access", v: "An Android phone and mobile data. In technical programmes most have one device each. Connectivity varies, with centre Wi-Fi not guaranteed and data packs hard to afford for some." },
        { k: "Digital and AI use", v: "Comfortable with WhatsApp, Google Forms and AI tools such as ChatGPT, Gemini and Claude. They use AI to clarify doubts, debug, understand assignments, practise English and rehearse interviews, and some use it to answer quizzes. They also talk to AI the way they would to a friend. They use language apps such as Duolingo." },
        { k: "What motivates them", v: "Placement first, with skills and structured guidance second. Some learners from vulnerable families also receive a skill incentive." },
        { k: "What holds their attention", v: "Doing something: live problem-solving, lab practice, role play and hands-on tasks. Long explanations and text-heavy materials lose them." },
        { k: "In content, activities and tools", v: "They remember the technical sessions best and barely recall what they call soft skills. Starting levels vary, with some finding the course easy and others coding for the first time. Attendance and engagement stay high through long days and commutes." },
        { k: "With peers and instructors", v: "They value their instructors and have a strong rapport with them, and feel comfortable asking questions. They tend to be reserved with peers and in class, and peer practice is limited by small rooms." },
        { k: "Challenges in class", v: "Long, text-heavy, English-medium materials and explanations, dense sessions, very different starting levels in the room, and assessments that feel harder than the content." },
        { k: "Worries beyond class", v: "Job and career placement, including low starting salaries, expensive cities and moving away from family. Family pressure, especially for women learners moving for work." }
      ]
    },
    groups: [
      { key: "why", title: "Why they join and stay", cards: [
        card("who_learner", "Why they enrol", "Placement is the main reason learners enrol",
          ["said", "reported"], ["across"],
          "Most learners graduated without a job and joined for a placement guarantee. Skills and structured guidance come second, and they also value learning from their instructors.",
          [
            "Many graduated without getting placed and joined for a placement guarantee. Skills came second, because college did not give them practice or structured guidance.",
            "They also find extra value in learning from their instructors.",
            "Learners found the programme through pamphlets, Instagram and LinkedIn posts (some shared by instructors), the state portal and friends.",
            "Some learners are sourced through line departments and special schemes, such as women\u2019s empowerment initiatives, fisheries, and programmes for differently abled candidates, while others register themselves.",
            "Candidates can register for up to three courses but train in only one, and some technical learners compare programmes and move between them."
          ]),
        card("bonus_seats", "Dropout", "Dropout is the programme\u2019s biggest challenge, and learners leave for reasons beyond the curriculum",
          ["reported", "said"], ["across"],
          "Learners who drop out, and placed learners who leave their jobs, give the same reasons: low pay, homesickness and family pressure.",
          [
            "Learners who drop out and placed learners who leave give the same reasons: low salary, homesickness and family pressure.",
            "Families may not support women learners moving for work, and young learners of any gender struggle to adjust without family support.",
            "Some STEM graduates complete a few payment cycles and then switch to a programme closer to home.",
            "The operations team said, about other centres, that some women say they want placement but are mainly after certification, and drop out when families object.",
            "Among those who stay, attendance is high and learners stay engaged despite long commutes and long days."
          ]),
        card("levels", "Different levels", "Learners start at very different levels, while getting a job calls for advanced skills and a wide scope",
          ["said", "observed"], ["namakkal", "other"],
          "In one room, some learners find the course easy while others are coding for the first time. Many want more rigour, current technologies and more hands-on practice.",
          [
            "Junior Software Developer learners come from varied technical backgrounds: computer science (BCA, MCA, BTech), biotech and civil engineering.",
            "Some found the course easy, while others are coding for the first time because college gave them only theory. Some found the assessments harder than what was taught.",
            "They valued the course moving from basic to advanced skills, and some wanted more rigour and more content so they could learn and do more.",
            "They said they want to learn the most current technologies. For example, they would prefer Python over Java as the coding language, which they see as more in demand. They also wanted the course shorter, more focused and more hands-on.",
            "Junior Software Developer instructors expressed confidence about placements when learners were exposed to multiple technical areas.",
            "At a Chennai centre running the Field Technician (hardware and networking) programme, learners said the basics do not help them stand out or get work opportunities. They wanted advanced mastery, specialisation, and more networking and industry-relevant topics. Some know only the theory of practical skills such as network fixing and cabling."
          ])
      ] },
      { key: "learn", title: "How they learn", cards: [
        card("tamil_english", "Language", "Learners are not comfortable learning in English but want fluent English for employment",
          ["said", "observed"], ["across"],
          "Learners understand and learn best in Tamil, but they need English for work. Instructors switch to Tamil for complex ideas, while materials and labs stay in English.",
          [
            "Learners understand and interact better in Tamil, and many find reading and speaking English hard, even with a college background.",
            "Learners want to communicate confidently in English because they move straight into employment, but classes are generally conducted in Tamil.",
            "Many speak Tanglish (a mix of Tamil and English) and are not fluent in formal written Tamil. Instructors switch to Tamil for complex ideas and use their own examples, while materials and labs stay in English.",
            "At a Chennai centre, learners asked for English and grammar support during class, and instructors adapted on the spot.",
            "English-language media, such as videos and podcasts, can be hard for learners to follow, especially when the accent or pace is unfamiliar.",
            "Learners use AI tools such as ChatGPT to practise spoken English and rehearse interviews, though live practice with people can feel harder.",
            "English instruction in class had only recently begun at one site, so what we saw may not reflect everyday practice."
          ]),
        card("attention", "Staying focused", "Learners lose focus with long explanations and text-heavy formats, and prefer learning by doing",
          ["said", "observed"], ["across"],
          "Long explanations and text-heavy materials lose learners. They stay engaged when they can do something: solve a problem, practise, role-play.",
          [
            "Long explanations and text-heavy materials lose learners, whether in handouts, review guides, chatbots or feedback forms.",
            "Passive audio and video that learners cannot interact with also lose their attention, while shorter, more focused content works better.",
            "Learners engage most when they can do something: live problem-solving, lab practice, role play, hands-on tasks and challenges.",
            "Learners take pride in solving things themselves, even when it is frustrating at first.",
            "Peer practice such as role plays is attempted, but small rooms leave little space for it."
          ]),
        card("bonus_memory", "What sticks", "Learners remember the technical sessions best and lump everything else into \u201csoft skills\u201d, which they barely recall",
          ["said"], ["across"],
          "Learners recall the technical sessions and put everything else in one bucket they call soft skills. What does stick tends to be practice-based.",
          [
            "Learners mainly recall the technical, core sessions and activities.",
            "Everything else sits in one bucket they call \u201csoft skills\u201d, and little of it sticks. Terms the programme uses for it, such as mindset, persistence and resilience, are unfamiliar to some learners.",
            "Some prioritise technical sessions because they want more time for technical learning.",
            "What does stick from the \u201csoft skills\u201d bucket is practice-based: role play, practice components, and mentoring sessions led by external facilitators.",
            "Learners strongly appreciated the external speaker or webinar."
          ]),
        card("bonus_seating", "Rapport and reserve", "Learners value their instructors and have a strong rapport with them, but are reserved with their peers",
          ["observed", "said"], ["across"],
          "Learners are comfortable with their instructors and ask them questions, but most are reserved with peers and in class.",
          [
            "Learners speak highly of their instructors\u2019 experience and technical knowledge, and feel comfortable around them and approach them with questions.",
            "Live help with problem-solving is something learners find useful, and synchronous classes make it possible.",
            "Learners and instructors are close in age, and instructors are open to learning from learners.",
            "Learners are comfortable with instructors, but most are reserved and not very outspoken with peers and in class, and seating can split along gender lines."
          ])
      ] },
      { key: "tech", title: "Phones and AI", cards: [
        card("phones", "Phones and data", "Learners have phones and are comfortable with digital tools, but devices and connectivity vary",
          ["said", "observed"], ["across"],
          "Almost all learners have an Android phone and mobile data. Laptops and connection quality vary by centre and programme, and data packs can be hard to afford.",
          [
            "Almost all learners have an Android phone and mobile data, and want to use their phones and technology for learning.",
            "They are comfortable with everyday digital tools such as WhatsApp, Google Forms and YouTube-style video. In technical programmes they are also comfortable using laptops for coursework.",
            "Device access varies. In technical programmes learners mostly have one device each, either their own laptop or one provided by the centre, but shared computers are the norm across state-run programmes.",
            "Connectivity is a constraint. Mobile data works fairly well for some learners, while others may not be able to afford data packs at home, and centre Wi-Fi speed is not guaranteed.",
            "The digital confidence seen in technical cohorts may not hold for learners in non-technical programmes."
          ]),
        card("ai_support", "AI as a companion", "Learners already use AI as a learning companion",
          ["said", "observed"], ["across"],
          "Learners use AI tools to clear doubts, understand assignments and practise English. Most use is conversational, and some use it to answer quizzes.",
          [
            "Learners across programmes, technical and non-technical, use AI tools such as ChatGPT, Gemini and Claude, and are comfortable with them.",
            "They use AI to clarify doubts, debug, understand assignments, explore topics beyond the curriculum, practise English and rehearse interviews. Some also use it out of curiosity or when bored or lonely.",
            "Learners prompt mostly in English and switch to Tamil.",
            "Some use AI to answer quizzes, and when asked how they check their own understanding, they had no answer. This raises a question about how much submitted work reflects their own understanding.",
            "Guardrails are limited and mostly informal. Instructors discourage AI during class activities and assessments but allow it for extra learning, and how effective this is remains unclear.",
            "Use is mostly conversational, for answers and explanations. There was limited evidence of learners building with AI, even in technical programmes.",
            "Fewer learners in non-technical programmes know tools beyond the basic chat apps, such as NotebookLM."
          ])
      ] }
    ]
  };

  /* ------------------------------------------------------------- INSTRUCTORS */
  pages.instructors = {
    key: "instructors", title: "Instructors",
    intro: "Who teaches, what they bring, and what their week asks of them.",
    glance: {
      title: "A typical instructor",
      note: "A composite, drawn from what we saw and heard across programmes.",
      faces: [
        { skin: "#B07A55", hair: "#1B1412", shirt: "#4A5568", moustache: true, label: "Illustration of a typical instructor" },
        { skin: "#9C6644", hair: "#241915", shirt: "#3E7C74", female: true, label: "Illustration of a typical instructor" }
      ],
      tiles: [
        { icon: "user", k: "Age", v: "Around 25 to 26, some up to 30" },
        { icon: "briefcase", k: "Background", v: "Industry experience, mostly engineering degrees" },
        { icon: "calendar", k: "Experience", v: "Many are teaching their first batch with the programme" },
        { icon: "target", k: "Motivation", v: "Career continuity, and wanting learners placed" },
        { icon: "spark", k: "AI", v: "Use it informally to unpack session plans" },
        { icon: "book", k: "Materials", v: "Dense plans; many teach key ideas their own way" },
        { icon: "people", k: "With learners", v: "Strong rapport, but lecture mode, one concept at a time" },
        { icon: "phone", k: "Digital", v: "WhatsApp groups; slow connections limit tools" },
        { icon: "clock", k: "Time", v: "A packed schedule, with admin on top" },
        { icon: "warning", k: "Challenge", v: "Getting comfortable with the curriculum and facilitating" }
      ],
      fullTitle: "Read the full profile",
      facets: [
        { k: "Age", v: "Around 25 to 26, with some up to 30." },
        { k: "Gender", v: "Most instructors in technical programmes are men. Some non-technical programmes, such as sewing machine operator, have more women instructors." },
        { k: "Education and professional background", v: "Domain instructors teach the technical sessions and have industry experience, in areas such as software testing and development, mostly with engineering degrees. Assistant instructors work at half capacity and cover behavioural skills and mindset (BSM), employment essentials and community sessions. Many are delivering their first batch with the programme." },
        { k: "Digital access", v: "They share materials and stay in touch with learners over WhatsApp groups, and use Canvas (the online learning platform) and Salesforce (which records learner data) for assessments and data. Slow connections, low storage and older systems limit some digital tools." },
        { k: "Digital and AI use", v: "They use AI tools such as ChatGPT informally to break down session plans, work out how to teach concepts and generate teaching ideas. Some use it heavily and others sparingly. They also use YouTube videos and tools such as Packet Tracer (a network simulation tool)." },
        { k: "What motivates them", v: "Career continuity, since some took the role to avoid a gap in their careers and gain experience to take back to industry. They share their learners\u2019 concerns about the job market, and want their learners to be placed." },
        { k: "With curricular resources", v: "Session plans, manuals and handouts are dense, though instructors find having the materials helpful. Many teach the key concepts in their own way. They sometimes deprioritise BSM, social support and mentorship, and community sessions in favour of technical sessions and assignments, and adapt in the moment with Tamil and their own examples." },
        { k: "With learners and others", v: "Strong rapport with learners, who value their technical credibility. They tend to default to lecture mode, one concept at a time, and get hands-on support from senior instructional coaches in the first few weeks. They are drawn to hands-on practice, simulations and gamification." },
        { k: "Key challenges", v: "Taking a long time to get comfortable with the curriculum, while some training partners run only one batch. Building facilitation practice, including transitions, instructions for activities and setting norms. A packed schedule, with a long commute and preparation, grading and admin on top. This work being additional to their other work, and completing data on time." }
      ]
    },
    groups: [
      { key: "who", title: "Who they are", cards: [
        card("young_new", "Young and new", "Instructors are young and mostly new to the programme",
          ["observed", "reported"], ["across"],
          "Instructors are early-career, around 25 to 26, with about two years of industry experience. Many are teaching their first batch with the programme.",
          [
            "Instructors are early-career professionals, around 25 to 26.",
            "Domain instructors teach the technical sessions and have about two years of industry experience, in areas such as software testing and development, mostly with engineering degrees.",
            "Assistant instructors work at half capacity and cover behavioural skills and mindset (BSM), employment essentials and community sessions.",
            "Many are delivering their first batch with the programme, and some training partners (the organisations that run the centres) run only one batch.",
            "Backgrounds differ within the team. Some are experienced in their domain and self-taught, while others are confident but new to teaching the programme."
          ]),
        card("job_market", "Career and the job market", "Instructors share their learners\u2019 concerns about the job market, and some took the role for career continuity",
          ["said"], ["across"],
          "Instructors share their learners\u2019 worries about the job market. Some took the role to avoid a gap in their careers.",
          [
            "Instructors share the same concern about the job market that learners have, including for their own careers.",
            "Some have taken up the role to ensure career continuity, avoiding a gap in their careers while doing something meaningful, and see it as experience they can take back to industry.",
            "They want their learners to be placed and want to support them in getting there."
          ]),
        card("strengths", "Strengths", "Instructors\u2019 strengths are rapport with learners and technical credibility",
          ["observed", "said"], ["across"],
          "Instructors build strong rapport, know each learner by name, and are respected for their technical knowledge and industry experience.",
          [
            "Instructors build a strong rapport with learners, who feel comfortable around them and ask questions when they need clarification.",
            "Instructors know each learner by name and can talk about each one\u2019s strengths and what they are working on.",
            "Learners speak highly of instructors\u2019 technical knowledge and industry experience.",
            "Instructors give live help with problem-solving, which learners find useful.",
            "Instructors are open about learning alongside learners and acknowledge that some learners know a lot."
          ])
      ] },
      { key: "teach", title: "How they teach", cards: [
        card("who_instructor", "Getting comfortable", "Instructors take a long time to get comfortable with the curriculum",
          ["reported", "observed"], ["across"],
          "Instructors feel overwhelmed in the first week and become comfortable only after a few batches, but some training partners run only one batch.",
          [
            "Instructors take a lot of time to get used to the curriculum. They feel overwhelmed in the first week and become comfortable only after running a few batches.",
            "But some training partners run only one batch, so instructors may not get the repeat batches they need to become comfortable.",
            "Senior instructional coaches (who support instructors) give a lot of hands-on help in the first few weeks, and this becomes harder to provide as the number of training partners grows.",
            "Instructors default to lecture mode, covering one concept at a time, and need a lot of support to build their facilitation practice. Skills in engagement strategies, checks for understanding and appreciating learners are still emerging.",
            "Transitions, instructions for role plays and activities, and setting norms at the start are common struggles, and need to be built into the curriculum."
          ]),
        card("role_plays_scaffolded", "Role plays", "Role plays need clear, built-in support, even for experienced instructors",
          ["observed", "said", "interpretation"], ["chennai"],
          "Role plays can feel rehearsed and out of step with the session, and learners are not sure how to do them. Clear steps need to be built into the materials.",
          [
            "At a Chennai Retail Sales Associate centre, the first role plays seemed scripted. The role play did not match the session: the session was on managing customer feedback, while the role play was on general customer interaction.",
            "Later, the instructor said her learners are not sure how to do role plays.",
            "Instructors struggle with transitions and with giving instructions to learners, especially for role plays and activities, even when they know the programme well.",
            "Norm and expectation setting at the start of a programme has to be done right, and many instructors struggle with it."
          ], { reading: "Role plays and their instructions need to be built into the materials, not learned by instructors over several batches." }),
        card("hands_on", "Hands-on practice", "Instructors value simulations, hands-on practice and gamification",
          ["said", "observed"], ["across"],
          "Instructors lean towards hands-on practice and simulations, and want learners to solve problems themselves, even when it takes longer.",
          [
            "Instructors lean toward hands-on practice and want learners to practise and solve problems themselves, even when it takes longer and is frustrating at first.",
            "They see learners take pride in solving a task on their own, and they enjoy challenges themselves.",
            "Instructors who tried interactive lab simulations liked them, felt low-bandwidth and offline options can build learners\u2019 confidence and keep them engaged, and asked for more laptop-based troubleshooting labs.",
            "They are interested in tools such as Packet Tracer (a network simulation tool) and in access on mobile, but are not always sure how to use them with learners.",
            "Practical constraints include slow connections, low storage, older systems and lengthy lab guidelines."
          ]),
        card("pc_rebuild", "Rebuilding a PC", "Letting learners take apart and rebuild a PC themselves builds problem-solving and pride",
          ["said"], ["other"],
          "At a Chennai centre teaching hardware and networking, learners rebuild a PC in small groups without the instructor stepping in. It takes longer and frustrates them at first, but they finish proud.",
          [
            "At a Chennai centre running the Field Technician (hardware and networking) programme, the instructor has small groups take apart and rebuild a PC without stepping in. It takes longer and learners get frustrated, but they are proud at the end. He is keen to build problem-solving skills.",
            "He is new to the programme, experienced in the domain and self-taught.",
            "He uses YouTube videos and Packet Tracer (a network simulation tool), and tries to get learners to practise troubleshooting hands-on with materials he brings in.",
            "He shared that he played a YouTube video he found useful, and at least three learners fell asleep because they could not follow the English. He hopes to find materials learners can engage with without losing interest.",
            "He carries the printed book to every session. It is bulky, but he does refer to the session plans, and explains in Tamil or with his own examples if learners are not getting it."
          ])
      ] },
      { key: "load", title: "What supports and stretches them", cards: [
        card("ai_unofficial", "AI as support", "AI is an unofficial support layer for instructors",
          ["said", "observed"], ["across"],
          "Dense session plans send instructors to AI tools to break plans down, find teaching ideas and generate extra slides and questions.",
          [
            "Session plans, manuals and handouts are dense, and instructors need a lot of hand-holding to understand them. They also say having the curriculum materials is helpful.",
            "Instructors use AI tools such as ChatGPT informally to break down session plans, work out how to teach the concepts and generate teaching ideas, which fills a gap in the support they get.",
            "Some use AI heavily, feeding in session plans to get extra slides, questions to ask and questions learners might ask. Others use it sparingly and do not want learners to rely on AI early in the course.",
            "Many instructors take the key concepts and teach them in their own way, and may not follow the session plan as designed. Others follow the curriculum closely, concept by concept.",
            "They sometimes deprioritise behavioural skills and mindset, social support and mentorship, and community sessions in favour of technical sessions and assignments.",
            "Printed materials are bulky, sometimes several volumes of hundreds of pages, and instructors are unsure how often learners use their copies.",
            "Instructors adapt in the moment, explaining in Tamil or with their own examples when learners are not following."
          ]),
        card("instructor_week", "Their week", "Instructors have little time to spare, and this work is additional to their other work",
          ["said", "reported"], ["across"],
          "Instructors teach all day, Monday to Saturday, travel a long way, and do preparation, grading and data entry on top. They have little time to spare.",
          [
            "Instructors teach all day, Monday to Saturday, and travel a long way each day.",
            "On top of teaching, preparation, grading and other admin take many more hours across the week. They work every day of the week, though they say it does not feel like too much.",
            "They have little time to prepare, especially in their first few batches.",
            "Some instructors see this work as additional to the other work they do, though they find the curriculum and support helpful.",
            "Completing and updating data on time is a challenge, and understanding the systems takes instructors time.",
            "Sometimes instructors also go out to hand out pamphlets to bring in more learners.",
            "General feedback shared was to be mindful of this workload when introducing new expectations, such as instructional-quality rubrics and tools, which instructors need more familiarity with."
          ])
      ] }
    ]
  };

  /* --------------------------------------------------------------- PROGRAMME */
  pages.programme = {
    key: "programme", title: "Programme",
    intro: "What is working, and where the programme needs close attention.",
    board: {
      title: "The programme at a glance",
      working: ["support", "journey", "structured_support"],
      attention: ["opening_days", "manual_handout", "customisation", "tools_data", "podcast", "data_weak_read", "hiring"],
      ideasLabel: "Ideas to build on",
      ideasNote: "The ideas we tested, and how they were received."
    },
    groups: [
      { key: "working", title: "What is working well", cards: [
        card("support", "Strong support", "Instructors give learners strong support",
          ["observed", "said"], ["across"],
          "Learners say the guidance instructors give is helpful. Live problem-solving help is a clear benefit of in-person, synchronous delivery.",
          [
            "Learners say the guidance instructors provide is helpful in their learning journey.",
            "Instructors build a strong rapport with learners, who feel comfortable approaching them with questions.",
            "Live problem-solving help is a clear benefit of synchronous, in-person delivery.",
            "Learners speak highly of instructors\u2019 technical knowledge and industry experience.",
            "Learners also find value in mentoring."
          ]),
        card("journey", "A clear journey", "Learners and instructors value a clear, structured learning journey through the programme",
          ["said"], ["across"],
          "Learners and instructors value a clear structure: a week-by-week schedule, a path from basic to advanced skills, and content in the first half of the day with lab practice in the second.",
          [
            "Learners find a structured learning journey useful, and say structured guidance fills a gap that college left, where they got mostly theory.",
            "They value clarity in the path, with a clear week-by-week schedule to follow.",
            "Learners find the course moving from basic to advanced skills meaningful, and the daily structure of content in the first half and lab practice in the second works well for them.",
            "Instructors find the curriculum and the support around it helpful, and say having the curriculum materials is helpful.",
            "Instructors can follow the curriculum closely, concept by concept, as it is laid out."
          ]),
        card("structured_support", "Support for instructors", "Instructors get structured support before and during a batch",
          ["reported"], ["across"],
          "Instructors get train-the-trainer sessions before a batch, weekly calls with the senior instructional coach, and regular check-ins.",
          [
            "Instructors get train-the-trainer (training for instructors before a batch begins), where the senior instructional coach models a class, introduces the rubrics, and walks through Salesforce (which records learner data) and expectations.",
            "The senior instructional coach holds weekly governance calls with training-partner instructors to learn about their challenges and solve problems together.",
            "The coach also runs regular check-ins with all instructors for a job role in her region, and supports new instructors extensively in their first few weeks.",
            "Instructors find the curriculum and the support around it helpful."
          ])
      ] },
      { key: "attention", title: "Where we need to pay close attention", cards: [
        card("opening_days", "The opening days", "The opening days of the programme are the pressure point",
          ["reported", "observed", "interpretation"], ["across"],
          "The start pulls two ways: STEM graduates want technical content early, while late joiners need the basics. Learners can still leave or join in the opening days, and late joiners have no catch-up.",
          [
            "Under the state programme, learners can still leave or join during a short cooling period at the start, so the start is a time of change, with some learners dropping out and being replaced.",
            "The start pulls two ways. If behavioural skills and mindset (BSM) sessions come first, STEM graduates get bored. If technical content starts in week one, late joiners miss the basics.",
            "Late joiners have no catch-up format yet, and the options raised so far, such as podcasts and video, have not landed.",
            "Support in week one is a big challenge for instructors, and attendance stabilises after it.",
            "Setting class culture and transition norms in the first week is crucial, and many instructors struggle with it.",
            "Some learners are unsure what BSM is for, and BSM sessions are often rushed."
          ], { reading: "There is a strong need to rethink the opening days of the programme: the order of sessions, support for late joiners, week-one support and norm-setting." }),
        card("manual_handout", "Dense materials", "Curricular materials are too dense and need to be leaner, simpler and more accessible",
          ["observed", "said"], ["across"],
          "Session plans, manuals and handouts hold more than instructors can take in. Learners rarely fill in or return to their handouts.",
          [
            "Learners, instructors and the senior instructional coach all said too much is packed into each session, with a lot of switching between topics.",
            "Session plans, manuals and handouts hold so much detail that instructors find them hard to take in and not intuitive, and need a lot of hand-holding to understand them.",
            "Learners lose focus with long text, and hardly fill out the handouts or return to them, even on the same day.",
            "Handouts mix learner and instructor material in no clear order, so learners cannot tell which handout belongs to which session.",
            "Instructors have little time to prepare, and learners prefer content that is shorter, more focused and more hands-on, so materials need to be leaner, simpler and more accessible.",
            "Printed materials are bulky and a burden to print, organise and hand out, and the printed book is part of enrolment, so it cannot be removed entirely. Many instructors do not read the manuals in full. They take the key concepts, search on AI for how to teach them, and teach based on the recommendations there, so some of what the curriculum was designed to deliver does not reach the classroom."
          ]),
        card("customisation", "Local customisation", "The global curriculum is not customised enough for local delivery",
          ["observed", "interpretation"], ["across"],
          "The global curriculum still refers to virtual breakout rooms and includes role plays in learner handbooks, even though delivery is in a physical classroom.",
          [
            "The curriculum materials provided did not reflect the change in the programme\u2019s format. They still refer to virtual breakout rooms, include role plays and scenarios in learner handbooks that learners do not need, and have no recap of the technical sessions, even though the programme is delivered synchronously in a physical classroom.",
            "These are small contextual adaptations that could have been identified before printing and distributing materials at scale. There were questions about whether enough local customisation happened before resources were printed.",
            "National standards allow only limited customisation of a course. Beyond that, it must launch as a new programme, so it is important to decide early what to customise and to review materials before printing."
          ]),
        card("tools_data", "Canvas", "Learners find Canvas, the online learning platform, hard to navigate and use",
          ["said"], ["namakkal"],
          "Learners struggle to find modules and assessments on Canvas, and class content is not there to refer back to. They preferred Google Forms for assessments.",
          [
            "Modules and assessments are hard to find, and assessments have no separate section.",
            "Content taught in class is not on Canvas for learners to refer back to.",
            "Learners said it would be easier if technical and behavioural skills and mindset sessions were separated and the course was organised week by week, aligned to their schedule.",
            "Modules can only be completed after going through the instructor-led sessions, which learners find inconvenient.",
            "Learners and instructors preferred Google Forms for assessments over Canvas."
          ]),
        card("podcast", "The AI podcast", "The AI podcast is the least-used resource",
          ["said"], ["namakkal"],
          "Learners find the AI podcast long, hard to follow because of the accent, and awkward to use in class. It is the least-used resource.",
          [
            "Context: it was the second week of the pilot and the fourth week of the cohort.",
            "Learners found the podcast long, with a strong American accent that is hard to follow.",
            "Listening in class needs earphones, which disturb the rest of the class, and learners said they listen without understanding. Instructors also doubt that audio can work in class, since many learners struggle to stay focused even on videos.",
            "Learners find it hard to navigate to the important sections when they need to revisit, with no progress meter and no easy way to tell where to pause or go back.",
            "Learners asked for shorter content, a neutral or Indian-accented voice, and video or animation. They also asked for examples, stories or analogies to simplify concepts.",
            "Learners are more used to YouTube tutorials and explainer videos and prefer them over podcasts."
          ]),
        card("data_weak_read", "Data and assessment", "Data and assessment practices give us a weak read on what learners are learning",
          ["observed", "interpretation"], ["across"],
          "Data update rates from instructors are low and some scores repeat across learners, so we get a weak read on what learners are learning.",
          [
            "Data update rates from instructors are low, and instructors are not using data to inform instruction and learner support.",
            "It takes instructors a few batches to become familiar with the data systems, which are more complex than those of the other programmes they run.",
            "Submission and grading on Canvas appeared incomplete in one class, and scores in Salesforce (which records learner data) repeated across learners in more than one centre. The reasons are not clear.",
            "Assessment reliability can be weak. Assessments may not match what is taught, whether unrelated, covering extra content, or harder than the content. Learners also use AI to understand and sometimes complete assignments and quizzes, so submissions may not reflect their own understanding.",
            "Learner feedback forms meet reading and typing fatigue, and some learners may use AI to answer them. Frequent focus groups with more probing may give better feedback.",
            "Rubrics and formats need to be simpler to understand and use. Instructors have packed schedules and little time to prepare, and need more familiarity with the rubrics, tools and data systems."
          ]),
        card("hiring", "Hiring and migration", "There is little to no hiring for entry-level jobs in the IT industry",
          ["reported"], ["across"],
          "Entry-level IT hiring has dropped sharply, and many learners will not move for work because wages are low, cities are expensive and family ties are strong.",
          [
            "Entry-level IT hiring has dropped sharply, which the Operations Lead linked to AI. There are too few IT cohorts now.",
            "Migration adds to the pressure. Many learners will not move because wages are low, cities are expensive, and they want to stay near family, and families may not support women learners moving for work."
          ])
      ] }
    ]
  };

  /* ------------------------------------------------------------- PARTNERSHIP */
  pages.partnership = {
    key: "partnership", title: "State partnership",
    intro: "How the state partnership is set up and how it runs.",
    glanceTitle: "How it fits together",
    roles: [
      { who: "The state partner", icon: "flag", does: ["The state\u2019s skill development body", "Its main measure is placement", "Tracks and licenses training partners", "Sets the standards courses follow"] },
      { who: "Training partners", icon: "building", does: ["The organisations that run the centres", "Mobilise learners", "Train them", "Place them"] },
      { who: "The programme team", icon: "people", does: ["A partner to the state partner", "Not a training partner"] }
    ],
    path: {
      title: "A learner\u2019s path",
      steps: [
        { t: "Mobilised", d: "Found through pamphlets, social posts, the state portal, friends and line departments" },
        { t: "Trained", d: "In a training partner\u2019s centre, following national standards" },
        { t: "Placed", d: "The training partner is responsible for placement" },
        { t: "Supported", d: "Mentors help during and after the programme, and a call centre tracks learners after placement" }
      ]
    },
    groups: [
      { key: "setup", title: "How it is set up", cards: [
        card("funding", "Funding", "Learners from vulnerable groups receive a skill incentive, and extras raise the cost per learner",
          ["reported"], ["across"],
          "A skill incentive is paid in stages tied to attendance, completion and placement. Extra materials, devices and instructors raise the cost per learner.",
          [
            "Learners from vulnerable groups receive a skill incentive, paid in tranches tied to attendance, completion and placement, with the final part released only after the learner stays employed for a period after placement.",
            "Attendance is tracked through an app.",
            "Materials, devices and instructors beyond the standard list, such as one computer per learner or more than one instructor per cohort, raise the cost per learner.",
            "The state partner is approved to run a number of programmes itself, many of them non-technical."
          ]),
        card("standards", "Standards", "Courses follow national standards and give national certification",
          ["reported"], ["across"],
          "Courses follow national standards, which allow only limited customisation. A course\u2019s level decides who can enrol.",
          [
            "Courses follow national standards, and learners receive national certification.",
            "National standards allow only limited customisation of a course. Beyond that, it must launch as a new programme.",
            "A course\u2019s qualification level sets who can enrol, and IT roles usually take STEM graduates.",
            "Skill gap studies exist but are not done regularly."
          ]),
        card("monitoring", "Monitoring", "Training partners are checked before they start and inspected by surprise, and learners are tracked after placement",
          ["reported"], ["across"],
          "The state partner confirms training partners are ready before they start and inspects them by surprise. A call centre tracks learners after placement.",
          [
            "A readiness check confirms the training partner is ready and licensed before it starts, followed by surprise inspections.",
            "A small team of officials in each district oversees many training partners.",
            "A call centre tracks learners after placement.",
            "Instructor feedback is collected, and learner feedback is becoming mandatory, possibly as a condition of payment."
          ])
      ] },
      { key: "delivers", title: "What it delivers", cards: [
        card("outcomes", "Outcomes", "Most learners are placed, and dropout is the state partner\u2019s biggest challenge",
          ["reported"], ["across"],
          "Most enrolled learners are placed and some drop out. The state partner plans a test to understand why learners leave.",
          [
            "Most enrolled learners are placed, and some drop out.",
            "Dropout is the state partner\u2019s biggest challenge. It peaks during the programme and close to the end.",
            "The state partner plans a psychometric test to understand why learners drop out."
          ]),
        card("learner_support", "Learner support", "Mentors support learners during the programme and after hiring",
          ["reported"], ["across"],
          "Mentors are assigned during the programme, meet learners a few times, and support them after hiring. The state partner does not run mentors.",
          [
            "Mentors are assigned during the programme, meet learners a few times, and support them after hiring.",
            "The state partner does not run mentors."
          ])
      ] }
    ]
  };

  /* ------------------------------------------------------------------- IDEAS */
  pages.ideas = {
    key: "ideas", title: "Ideas we tested",
    intro: "What we tested in the field and how it was received.",
    glanceTitle: "What we heard",
    summary: "Every idea we tested was welcomed, with a few conditions attached.",
    conditions: "These ideas need to work on low bandwidth, low storage, and older or shared devices. Gamification should not depend heavily on storage.",
    groups: [
      { key: "ideas", title: "Ideas we tested", cards: [
        card("idea_plans", "Leaner plans", "Leaner session plans with a clear unit overview and more visual slides", [], [],
          "Welcomed by the senior instructional coach, as long as slides are not passive and each one leads into a poll or discussion.", [], { welcomed: true }),
        card("idea_handouts", "Fewer handouts", "Far fewer printed handouts, with activities moved into the session", [], [],
          "Supported by learners, instructors and the Operations Lead. The enrolment book stays but can be much leaner. Activities move into the session: polls, breakout discussions and notes in learners\u2019 own notebooks.", [], { welcomed: true }),
        card("idea_guides", "Phone review guides", "Short review guides learners can open on a phone", [], [],
          "Should be brief, engaging, fit any screen, and open straight from WhatsApp with nothing to install. The senior instructional coach reviewed the Python learner guide and supported this format.", [], { welcomed: true }),
        card("idea_videos", "Follow-along videos", "Short follow-along videos that show the process while it is explained", [], [],
          "The Operations Lead wants follow-along and hands-on formats. Interactive video works; long passive video does not.", [], { welcomed: true }),
        card("idea_simulator", "Help desk simulator", "Help desk simulator and simulation-style labs", [], [],
          "The Operations Lead called it a good idea worth piloting. An instructor who tried a lab liked it and suggested more laptop-based troubleshooting labs.", [], { welcomed: true }),
        card("idea_challenges", "Cohort challenges", "Cohort-level challenges rather than individual rankings", [], [],
          "Matches what we heard: learners play games and enjoy challenges, and so does the technical instructor.", [], { welcomed: true }),
        card("idea_ai", "More AI practice", "More AI practice in the syllabus", [], [],
          "The Operations Lead said it is worth trying, and should be presented to employers as part of what learners bring.", [], { welcomed: true })
      ] },
      { key: "tests", title: "Tests we ran", cards: [
        card("test_chatbot", "Chatbot test", "A chatbot learning coach, tested with retail learners in Chennai", [], [],
          "Learners liked being understood and getting the reason behind a correction. They asked for shorter, simpler and faster replies, and for voice replies in Tamil and in a Tamil and English mix.", [], {
            extra: {
              type: "chatbot",
              context: "Retail Sales Associate learners in Chennai tested a chatbot learning coach. They started in English and many switched to Tamil or Tanglish (a mix of Tamil and English) during the session. Afterwards they filled in a feedback survey and shared open feedback under four headings.",
              columns: [
                { title: "Liked", items: [
                  "Being understood. They liked that the chatbot understood what they wanted to convey.",
                  "A clear prompt structure. They liked being taught what words to use when talking to AI. One learner liked that he had tasks to do and submit to the AI to get feedback.",
                  "Corrective feedback with the reason. When the bot told them why an answer was wrong, they could correct themselves.",
                  "Checks for understanding in Tamil or Tanglish, and tasks in English and Tamil.",
                  "Feedback for the situation, when they got a situational question."
                ] },
                { title: "Want more", items: [
                  "Make it attractive: \u201cIt shouldn\u2019t feel like a long text is thrown at me.\u201d Easy, clickable and accurate.",
                  "Make it simple. One learner did not even need Tanglish if the English words are simple enough: \u201cmake it simple in English, because we even want to learn in English.\u201d",
                  "Subtitles for the videos, which did not appear.",
                  "More checks for understanding and more corrective feedback.",
                  "Voice: better transcription of what they say, and the AI answering back in voice, including in Tamil and Tanglish."
                ] },
                { title: "Stop", items: [
                  "The videos, ideally. They are very long, and learners found them very hard to understand even with the phone held near the ear, because the English is fast.",
                  "Lag. Messages lagged, and learners want the AI to be faster."
                ] },
                { title: "Want less", items: [
                  "Long messages. Get to the point in three or four lines.",
                  "Hard single words. Highlight them and explain them simply, so learners do not need strong reading skills to follow.",
                  "Long videos. Shorter ones would be better."
                ] }
              ]
            } }),
        card("test_video", "Video test", "Recording classroom sessions on video is hard on low bandwidth", [], [],
          "Video files are large, uploads fail on weak connections, and a 40 to 50 minute recording cannot cover everything the rubric needs.", [], {
            extra: {
              type: "video",
              questions: [
                "Can a normal classroom session be recorded without disrupting delivery?",
                "Can the recording be uploaded using the connectivity and devices normally available at the centre?",
                "Does the recording provide enough evidence to assess instructional quality against the rubric?",
                "How do instructors and learners respond to being recorded?",
                "Could the process realistically be repeated under normal working conditions without additional support?",
                "What differs between a small-town and a big-city setting, and what does this mean for how the tool may need to be used?"
              ],
              findings: [
                "Classroom structure makes it hard to keep the camera in one corner and capture both the instructor and the learners. A moving camera disrupts delivery.",
                "Centre Wi-Fi was unstable at the Namakkal centre compared with Chennai, with speeds dropping to 2 to 3 Mbps at certain times.",
                "It is difficult to capture all the strands of the rubric within a 40 to 50 minute video.",
                "Devices were a limit: limited space on the instructor\u2019s phone, and limited space on the cloud drive used to upload the video.",
                "Instructors, especially in a mass programme, need support to compress large videos so they upload on low bandwidth.",
                "Support has to be tailored for new and experienced instructors."
              ],
              table: {
                cols: ["", "Namakkal", "Chennai"],
                rows: [
                  ["Connection", "Very unstable, dropping to 2 to 3 Mbps at moments", "Decent, about 33 Mbps"],
                  ["File size", "7 GB for a 41-minute video", "480 MB for a 20-minute video"],
                  ["Upload", "Failed. A cloud drive was tried too, but space was limited and the video too large", "Succeeded: about 4 minutes to upload, plus about 10 minutes of encoding"],
                  ["Other limit", "Limited space on the drive", "Limited space on the instructor\u2019s phone cut the recording short"],
                  ["Classroom", "Small. Fan noise", "Small. Traffic and fan noise"]
                ]
              },
              barriers: "Common to both: bandwidth, difficulty fitting two observations into each cohort with the existing workload, instructors not yet familiar with the tool or the rubric, and the support needed to compress, capture and upload video."
            } })
      ] }
    ]
  };

  return { pages: pages, order: ["learners", "instructors", "programme", "partnership", "ideas"] };
})();
