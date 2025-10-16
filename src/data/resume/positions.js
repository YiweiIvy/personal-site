const positions = [
  {
    company: 'Amazon',
    position: 'Software Engineer',
    link: '',
    daterange: 'July 2025 - Present',
    points: [
      'Worked on Annotation Management System and Policy Management System for Amazon Classification and Policy Platform (CPP) Team where we utilized AI/ML and Human in the loop tools to classify Amazon products into various categories and labels.',
    ],
  },
  {
    company: 'University of California, Berkeley – Haas Business School',
    position: 'Research Assistant',
    link: '',
    daterange: 'March 2024 – May 2025 ',
    points: [
      'Symbiosis Bias in A/B Testing: Working with Professor David Holtz and Google Researchers on Symbiosis Bias on A/B Testing. Co-devloped and A/B Testing simulation framework and mathematical models explaining how symbiosis bias emerges and could be mitigated in recommendation systems. Paper accepted at The Web Conference (WWW) 2025: https://dl.acm.org/doi/10.1145/3696410.3714738.',
      'The Engagement-Diveristy Connection: Designed and built simulation framework to study personalized recommendation impacts on content diversity and user engagement. Working paper: https://arxiv.org/abs/2003.08203.',
    ],
  },
  {
    company: 'Amazon',
    position: 'Software Engineer Intern',
    link: '',
    daterange: 'May 2024 – Aug 2024 ',
    points: [
      'Interned under Classification and Policy Platform (CPP) Team where we utilized AI/ML and Human in the loop tools to classify Amazon products into various categories and labels. ',
      'Developed an end-to-end experience of Progressive Listing Experience (PLE) label to reduce system fiction and enhance visibility of important ASINs in the classification list. ',
      'Worked with a Java backend and interacted with multiple AWS tools including SNS/SQS queues, AWS cloudwatch, S3 storage, and databases. Approximately achieved a 26% increase in visibility for previously suppressed items.',
    ],
  },
  {
    company: 'Smartprep (Now ThetaWave AI)',
    position: 'Co-founder',
    link: '',
    daterange: 'March 2023 – March 2024 ',
    points: [
      'Developed a Generative AI-powered web application that offers personalized teaching. Secured funding from MiraclePlus (former Y Combinator China) with valuation of 4 million USD. In charge of the interactive frontend application with voice recording, a dynamic chat interface and detailed AI-powered feedback using React, JavaScript, HTML5, CSS and Amazon Web Services. ',
      "Worked on a B2B comprehensive educational platform that offers a wide range of Gen-AI services and tools for students and educators, including QA bot, Worksheets & Assignment Tools, Class Planning Tools, AI Discussion Facilitators etc. Actively involved in shaping the product's vision, strategy, and hands-on technical development. Utilized full-stack tools such as React, AWS, MongoDB, Vector Database, and the ChatGPT API, ensuring a seamless and user-centric user-experience.",
    ],
  },
  {
    company: 'Pure Storage',
    position: 'Software Engineer Intern',
    link: 'https://www.purestorage.com/',
    daterange: 'May 2023 – Aug 2023 ',
    points: [
      'Ported and optimized the Operating System Software Purity (based on Linux Kernel and C++) from Intel x86 onto Ampere ARM64 processor.Purity serves as the software for FlashArray, a high-performance, low-latency, and highly available storage system.',
      'Spearheaded the development of the ARM development support for Purity, encompassing essential libraries for SSE to NEON intrinsics translation, implemented AES encryption module using ARM64 crypto instructions, and solved multi-threading issues due to incompatible memory coherency between x86 and ARM64.',
      'Conducted comprehensive performance per watt analysis, comparing Intel x86 and Ampere ARM64 single socket, 128-core CPU systems, the result shows the ARM has a 4x improvement in energy consumption with the same workload .',
    ],
  },
  {
    company: 'University of California, Berkeley – Lingua Franca',
    position: 'Research Intern',
    link: 'https://www.lf-lang.org/',
    daterange: 'May 2022 – May 2023 ',
    points: [
      'Contributed to Lingua Franca open source mentored by Professor Edward A. Lee ',
      'Led the modeling and simulation team; worked on the application of Lingua Franca in physical systems/embedded systems',
      'Refined the algorithm of a Furuta Pendulum project (implemented the ODE solver (RK4) and aligned simultaneous disturbance) implemented the Arduino support for Lingua Franca and utilized the support on Furuta Pendulum',
    ],
  },
  {
    company: 'Uiversity of California, San Francisco – Wang Lab',
    position: 'Research Assistant',
    daterange: 'Sep 2022 – Nov 2022',
    points: [
      'Processed images obtained from the custom-built two-photon microscope and performed 5D live imaging to uncover the molecular mechanisms and hemodynamic signal in development for mouse models after gene deletion/expression',
      'Employed micro program on ImageJ and PTGui Pro to simplify the image merging / stitching process for the lab',
      'Performed blood vessel quantification and analysis collaboratively to provide statistic insights to disease progression',
    ],
  },
  {
    company: 'Wuhan University of Technology',
    position: 'Research Assistant',
    daterange: 'Jun 2019 – Jul 2019',
    points: [
      'Researched on AI in Traffic Light Control at Intelligent Transportation Systems Research Center under Professor Duanfeng Chu',
      'Helped with Literature Review on SARSA, Q-learning, Deep Neural Network; helped with development of the Q-value computation for multi-traffic junctions and facilitated meetings and presentations for research groups on a biweekly manner',
    ],
  },
];

export default positions;
