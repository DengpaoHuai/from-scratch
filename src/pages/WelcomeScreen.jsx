import { Link } from "react-router-dom";

const WelcomeScreen = () => {
  return (
    <>
      <div className="bg-gray-800 text-white flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to our site</h1>
          <p className="text-lg">We are happy to see you here</p>
          <Link
            to="/dashboard"
            className="p-button p-button-raised p-button-rounded p-button-text p-button-lg"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    </>
  );
};

export default WelcomeScreen;
