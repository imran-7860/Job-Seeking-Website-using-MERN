import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ModalSidePanel = ({ open, setOpen }) => {
  useEffect(() => {
    const body = document.body;
    if (open) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "visible";
    }

    return () => {
      body.style.overflow = "visible";
    };
  }, [open]);

  const handleOnClose = (e) => {
    if (e.target.id === "container") {
      setOpen(false);
    }
  };

  const tabs = [
    { name: "Home", path: "/" },
    { name: "Signin", path: "/signin" },
    { name: "Signup", path: "/signup" },
    
  ];

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className={`fixed lg:hidden ${
        !open
          ? "translate-x-[110%] duration-500 md:duration-1000"
          : "duration-500 md:duration-700"
      }   flex justify-end  top-0 right-0 h-full  w-full z-40 text-black`}
    >
      <div className="overflow-hidden bg-white shadow-2xl w-80">
        <div className="flex flex-col justify-between h-full gap-6 px-6 pt-20 pb-10">
          <div className="flex flex-col gap-2">
            {tabs.map((tab, index) => (
              <Link
                key={index}
                to={tab.path}
                onClick={() => setOpen(false)}
                className="pl-6 border-b py-2  cursor-pointer w-full hover:text-red-500"
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="absolute top-5 right-5">
          <button
            onClick={() => setOpen(false)}
            className="p-1 rounded-full select-none w-min bg-red-500  hover:scale-105 duration-200"
          >
            <IoClose className="text-2xl text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalSidePanel;
