const positions = [
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
