import profileImg from '../assets/profile.jpg';

const ProfileImage = () => {
  return (
    <div className="mt-28 ml-6 z-10">
      <div className="w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-105 transition-transform duration-300">
        <img
          src={profileImg}
          alt="Profile"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ProfileImage;
