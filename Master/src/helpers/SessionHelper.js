import toast from "react-hot-toast";

class SessionHelper {
  preToast() {
    const switchDark = () => {
      localStorage.setItem("switchDark", JSON.stringify("yes"));
      localStorage.setItem("theme", "dark");
      window.location.reload();
      toast.remove();
    };
    toast.custom((t) => (
      <div className="preTost fixed left-0 top-0 h-screen w-full b-opa">
        <div className="flex h-full w-full items-center justify-center ">
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            }  pointer-events-auto mx-4 flex w-full max-w-md rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5`}
          >
            <div className=" flex-1 p-4 w-full">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <img
                    className="h-auto w-10 rounded-full"
                    src="/assets/images/show/ProfileImage.png"
                    alt=""
                  />
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-[16px] font-semibold text-btn">
                    Hi, This is Alex Jhohan!
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    For the best view performance, we switch to the dark
                    version!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200 ">
              <button
                onClick={switchDark}
                className="flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-btn hover:text-btn focus:outline-none  "
              >
                Switch
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  }
}

export const { preToast } = new SessionHelper();
