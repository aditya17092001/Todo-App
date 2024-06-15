import { SButton } from "./SButton";

export const Profile = ({ toggleProfile }) => {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-start justify-end h-screen" onClick={toggleProfile}>
          <div className="bg-gray-200 p-8 shadow-lg w-1/4 h-screen">
            <h2 className="text-xl font-bold mb-4 flex items-end justify-end">Profile</h2>
                <div className="w-full flex items-start justify-end">
                    <div className="text-xl mt-2 mr-5">{"Udata Aditya"}</div>
                    <div className="flex items-center justify-center bg-purple-500 rounded-full w-12 h-12 text-white text-xl hover:cursor-pointer">{"A"}</div>
                </div>
                <div className="flex justify-end">
                    <div className="flex justify-center mx-2 mt-3 h-10 w-full border-solid border-2 border-white bg-slate-400 text-center pt-1 hover:bg-slate-500 hover:cursor-pointer hover:text-white rounded-lg text-base">
                            {"Starred"} 
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" /> </svg>
                            </div>
                    </div>
                </div>
                <div className="flex justify-end">
                    <div className="flex justify-center mx-2 mt-3 h-10 w-full border-solid border-2 border-white bg-slate-400 text-center pt-1 hover:bg-slate-500 hover:cursor-pointer hover:text-white rounded-lg text-base">
                    {"Logout"} 
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" /></svg>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      );
}