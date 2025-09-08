export default function InduceScroll() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex flex-col gap-2">
        <div className="animate-motion">
          <span className="block w-3 h-3 border-r-2 border-b-2  rotate-45" />
        </div>
        <div className="animate-motion [animation-delay:1s] opacity-0">
          <span className="block w-3 h-3 border-r-2 border-b-2  rotate-45" />
        </div>
      </div>
    </div>
  );
}
