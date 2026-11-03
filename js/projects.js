/**
 * RYVORA - Projects Data
 * Founder: Arif Mohamed
 * Tagline: "Your Vision. Our Website."
 *
 * Each project object supports:
 * - name (string, required): Title of the project
 * - description (string, required): Clear, concise summary of the project
 * - technologies (array of strings, required): Tech stack used
 * - liveUrl (string, required): Live deployed URL
 * - status (string, required): Current deployment status, e.g. "Live Project"
 * - githubUrl (string, optional): Public GitHub repository URL (null or omitted if none)
 */

export const PROJECTS_DATA = [
  {
    name: 'QR Studio',
    description: 'A simple QR code scanner and generator that lets users scan codes with the camera or upload an image.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://qr-scanner-beta-opal.vercel.app/',
    status: 'Live Project',
    githubUrl: null
  }

  /*
  // Template for adding new projects:
  ,
  {
    name: 'Project Name',
    description: 'A short description of what the project does and its core features.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://your-project-url.vercel.app/',
    status: 'Live Project',
    githubUrl: 'https://github.com/your-username/your-repo' // optional, set to null if not applicable
  }
  */
];

