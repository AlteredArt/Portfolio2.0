import emailIcon from '../assets/social/email_icon.png'
import linkedinIcon from '../assets/social/linkedin_icon.png'
import githubIcon from '../assets/social/github_icon.png'
import resumeIcon from '../assets/social/resume_icon.png'


const SOCIALS = [
    {
        id: 1,
        link: "mailto: cherokeedreemer@gmail.com",
        image: emailIcon,
        title: 'EMAIL'
    },
    {
        id: 2,
        link: "https://www.linkedin.com/in/jared-matta/",
        image: linkedinIcon,
        title: 'LinkedIn'
    },
    {
        id: 3,
        link: "https://github.com/AlteredArt",
        image: githubIcon,
        title: 'GitHub'
    },
    {
        id: 4,
        link: "https://jared-mattas-portfolio.s3-us-west-1.amazonaws.com/Personal/Jared+Mattas+Resume.pdf",
        image: resumeIcon,
        title: 'Resume'
    }
]

export default SOCIALS;