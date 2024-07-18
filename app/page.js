import "./ui/homepage.css";

const Home = () => {
  return (
    <>
      <div className=" h-screen w-screen items-center flex justify-center flex-col gap-10">
        <div className="container w-max h-max  flex flex-col items-center justify-center gap-5 p-10 rounded-lg ">
          <h1 className="text-4xl">Welcome to my Next.js App</h1>
          <p className="text-1xl mb-10">
            This is a simple example of a Next.js app.
          </p>
          <p className="flex flex-col">
            Get connected with me at:
            <a href="mailto:work.brajbhujel@gmail.com">
              <span className="text-4xl name"> Bishawa Raj Bhujel</span>
            </a>
          </p>
        </div>{" "}
        <div className="flex gap-10">
          <a className="button w-40 flex justify-center" href="/dashboard">
            Dashboard
          </a>
          <a className="button w-40 flex justify-center" href="/login">
            Login
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
