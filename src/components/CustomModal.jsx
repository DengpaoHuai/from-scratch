/*
Component for displaying a custom modal, professionnal look and feel
*/

const CustomModal = ({ message, title, close }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center z-50 h-64">
      <div className="bg-gray-800 text-white p-4 rounded-lg mt-4">
        <h1>{title}</h1>
        <p>{message}</p>
        <button
          onClick={close}
          className="text-white bg-red-500 px-4 py-2 rounded-lg mt-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CustomModal;
