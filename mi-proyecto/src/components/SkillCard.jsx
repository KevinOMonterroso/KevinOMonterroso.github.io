const SkillCard = ({ icon, name }) => {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 flex flex-col items-center gap-4">
      <div className="w-16 h-16 bg-lime-300 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <span className="text-lg font-medium text-zinc-700 dark:text-zinc-300">
        {name}
      </span>
    </div>
  );
};

export default SkillCard;
