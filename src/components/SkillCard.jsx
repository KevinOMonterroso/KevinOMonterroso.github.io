const SkillCard = ({ icon, name }) => {
  return (
    <div className="flex min-w-0 flex-col items-center rounded-xl bg-gradient-to-tr from-emerald-500 to-neutral-50 p-1 shadow-lg hover:shadow-xl dark:to-neutral-800">
      <div className="flex w-full justify-end">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg opacity-75">
          {icon}
        </div>
      </div>
      <div className="ml-2 flex w-full justify-start">
        <span className="text-xl font-bold text-neutral-700 lg:text-lg dark:text-neutral-300">
          {name}
        </span>
      </div>
    </div>
  );
};

export default SkillCard;
