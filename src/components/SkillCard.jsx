const SkillCard = ({ icon, name }) => {
  return (
    <div className="flex min-w-0 flex-col items-center rounded-xl bg-gradient-to-tr from-lime-400 to-zinc-100 p-1 shadow-lg hover:shadow-xl dark:to-zinc-800">
      <div className="flex w-full justify-end">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg opacity-75">
          {icon}
        </div>
      </div>
      <div className="ml-2 flex w-full justify-start">
        <span className="text-xl font-bold text-zinc-700 lg:text-lg dark:text-zinc-300">
          {name}
        </span>
      </div>
    </div>
  );
};

export default SkillCard;
