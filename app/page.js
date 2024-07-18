import "./ui/homepage.css";

const Home = () => {
  return (
    <>
      <div className=" h-screen w-screen items-center flex justify-center flex-col gap-10">
        <div className="container  rounded-lg text-white ">
          <h1 className="lh flex flex-col  welcome items-center mb-10  text-center">
            Welcome to my App
          </h1>{" "}
          <div className="flex gap-10 flex-col">
            <a className="button flex justify-center dashboard" href="/">
              Dashboard
            </a>
            <a className="button  flex justify-center" href="/login">
              Login
            </a>
          </div>
        </div>{" "}
        <div className="flex flex-col gap-2 text-center items-center">
          <p className="font-semibold text-white connect">Get connected:</p>
          <a href="mailto:work.brajbhujel@gmail.com" className="name">
            <span className=" ">
              <span class="name__horizontal"></span>
              <span class="name__vertical"></span>
              Bishawa Raj Bhujel
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
