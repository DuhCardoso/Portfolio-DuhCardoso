const Profile = () => {
  return (
    <div
      className="flex justify-center"
      data-aos="fade-up-right"
      data-aos-duration="800"
    >
      <div className="relative w-80 h-80 rounded-xl overflow-hidden border-5 border-cyan-400/30 bg-linear-to-br from-cyan-400/10 to-blue-500/10">
        <div className="absolute inset-0 bg-linear-to-br from-cyan-400 to-blue-500 opacity-6"></div>
        <img
          src="../../../../public/profile-placeholder.jpeg"
          alt="Profile"
          className="flex items-center justify-center text-6xl font-bold text-cyan-400"
        />
      </div>
    </div>
  );
};

export default Profile;
