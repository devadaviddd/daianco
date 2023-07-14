export const Loading = () => {
  return (
    <div
      className="flex justify-center items-center h-screen
  bg-white"
    >
      <div
        className="animate-spin rounded-full 
    h-32 w-32 border-t-2 border-b-2 border-[var(--main-red)]"
      ></div>
    </div>
  );
};
