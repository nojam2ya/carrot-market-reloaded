export default function Home() {
  return (
    <main
      className="
        w-screen h-screen
        flex justify-center items-center
        p-5
        tracking-tight
        bg-gray-100
      "
    >
      <div
        className="
          w-full max-w-screen-sm flex-shrink-0
          flex flex-col gap-2
          p-5 rounded-3xl
          bg-white shadow-lg
      "
      >
        <div className="group">
          <input type="text" className="bg-gray-100 w-full" placeholder="write your email" />
          <span className="group-focus-within:block hidden">Make sure it is a valid email...</span>
          <button>Submit</button>
        </div>
      </div>
    </main>
  );
}
