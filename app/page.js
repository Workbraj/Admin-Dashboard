import "./ui/homepage.css";

const Home = () => {
  return (
    <>
      <div className=" h-screen w-screen items-center flex justify-center flex-col gap-10">
        <div className="container  rounded-lg text-white ">
          <h1 className="lh flex flex-col  welcome items-center mb-10  text-center">
            Welcome to my App
          </h1>
          <div className="flex flex-col gap-2 text-center">
            <p className="font-semibold text">Get connected:</p>

            <a href="mailto:work.brajbhujel@gmail.com" className="name">
              <span clsNameas="lh ">Bishawa Raj Bhujel</span>
            </a>
          </div>
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
