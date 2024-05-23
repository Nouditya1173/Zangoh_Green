import React from "react";

const AccountSetting = () => {
  return (
    <div className="px-[50px] flex flex-col gap-[30px]">
      <div>
        <h1 className="font-bold text-xl ">Account Setting</h1>
        <p>Manage your account’s details.</p>
      </div>
      <div className="mt-[10px]">
        <h1 className="font-bold text-xl ">Personal Details</h1>
        <div className="flex  gap-[10px] mt-[10px]">
          <div className="flex flex-col ">
            <label className="text-xl">First Name</label>
            <input
              className="p-[3px] w-[200px]   bg-[#F1F1F1] border rounded-md"
              placeholder="Enter firstname here"
              // value={firstname}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xl">LastName</label>
            <input
              className="p-[3px] w-[200px]  bg-[#F1F1F1] border rounded-md"
              placeholder="Enter lastname here"
              // value={lastname}
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-xl ">Address</h1>
        <div className="flex  gap-[10px] mt-[10px]">
          <div className="flex flex-col ">
            <label className="text-xl">Address Line1</label>
            <input
              className="p-[3px] w-[200px]   bg-[#F1F1F1] border rounded-md"
              placeholder="Enter address here"
              
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xl">Address Line2</label>
            <input
              className="p-[3px] w-[200px]  bg-[#F1F1F1] border rounded-md"
              placeholder="Enter address here"
              // value={lastname}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xl">city</label>
            <input
              className="p-[3px] w-[200px]  bg-[#F1F1F1] border rounded-md"
              placeholder="Enter city here"
              // value={lastname}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
