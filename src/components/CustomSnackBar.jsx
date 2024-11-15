/*
Component for displaying a custom snackbar, professionnal look and feel
*/

const CustomSnackBar = ({ message, close }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center z-50">
      <div className="bg-gray-800 text-white p-4 rounded-lg mt-4">
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

export default CustomSnackBar;
