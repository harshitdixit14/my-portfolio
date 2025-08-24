import ProfileImage from "./ProfileImage";
import { Typewriter } from "react-simple-typewriter";
import ProfileCard from "./ProfileCard/ProfileCard";
import  profileImg  from '../assets/images.png'; // Adjust the path as necessary
import icon from '../assets/icon.jpg';
import BadgeIcon from '@mui/icons-material/Badge';

const TypingText = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-4 sm:px-8 w-full">
      
        <ProfileCard
  avatarUrl={profileImg} // your profile image import
  iconUrl={icon} // optional: path or URL to an icon/logo
  grainUrl="" // optional: path or URL to a grain/texture image
  behindGradient // optional: gradient background (if used in your component)
  innerGradient // optional: inner gradient (if used)
  showBehindGradient={true} // show/hide background gradient
  className="" // extra CSS classes if needed
  enableTilt={true} // enable/disable tilt effect
  enableMobileTilt={false} // enable/disable tilt on mobile
  mobileTiltSensitivity={5} // tilt sensitivity for mobile
  miniAvatarUrl="" // optional: small avatar image
  name="Harshit Dixit" // your name
  title="Software Engineer" // your title
  handle="harshitdixit" // your handle/username
  status="Online" // status text
  contactText="Contact me" // button text
  showUserInfo={true} // show/hide user info
  onContactClick={() => { /* handle contact click */ }} // function for contact button
/>
      {/* Right: Typewriter Text */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight" style={{color:"white", fontFamily:"monospace"}}>
          <Typewriter
            words={[
              "Web Developer 🚀",
              "Open to Collaborate 🤝",
              "Let's Build Something Great ✨",
              "Machine Learning Enthusiast 💻",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h1>
      </div>
    </div>
  );
};

export default TypingText;
