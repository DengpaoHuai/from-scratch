const Footer = () => {
  // to do : fixer le footer en bas de la page avec flex box
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto w-full">
      <div className="container mx-auto flex items-center justify-between">
        {/* formulaire de contact avec tailwind */}
        <div>
          <h2>Contact us</h2>
          <form className="space-y-2">
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-2 border border-gray-600 rounded"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 border border-gray-600 rounded"
            />
            <textarea
              placeholder="Your message"
              className="w-full p-2 border border-gray-600 rounded"
            ></textarea>
            <button className="p-button p-button-raised p-button-rounded p-button-text p-button-lg">
              Send
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
