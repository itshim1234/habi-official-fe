import React, { useState } from "react";
import PieChart1 from "./PieChart1";
import PaymentSchedule from "./PaymentSchedule";

function DetailedReport({ sump, estimatedCost, floors, floorHeight }) {
  const [newField, setNewField] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [additionalCosts, setAdditionalCosts] = useState({});
  const [editField, setEditField] = useState(null);
  const [editAmount, setEditAmount] = useState("");

  // Calculating costs based on estimatedCost
  const designFees = 0.01 * estimatedCost;
  const excavation = 0.03 * estimatedCost;
  const sand = 0.04 * estimatedCost;
  const steelReinforcement = 0.14 * estimatedCost;
  const cement = 0.08 * estimatedCost;
  const solidBlocks = 0.09 * estimatedCost;
  const stones = 0.05 * estimatedCost;
  const rmc = 0.09 * estimatedCost;
  const formwork = 0.03 * estimatedCost;
  const painting = 0.06 * estimatedCost;
  const plumbing = 0.07 * estimatedCost;
  const electricalWork = 0.05 * estimatedCost;
  const exteriorFlooring = 0.05 * estimatedCost;
  const compoundWall = 0.04 * estimatedCost;
  const doorsWindows = 0.03 * estimatedCost;
  const miscellaneous = 0.07 * estimatedCost;
  const internalFlooring = 0.07 * estimatedCost;

  // Calculate Floor Height cost
  var x = 0;

  if (floorHeight == 10) {
    x = 0;
  } else if (floorHeight == 11) {
    x = 8000;
  } else if (floorHeight == 12) {
    x = 16000;
  } else if (floorHeight == 13) {
    x = 24000;
  } else if (floorHeight == 14) {
    x = 32000;
  } else if (floorHeight == 15) {
    x = 40000;
  }
  const floorHeightCost = floorHeight * x * floors;

  // Calculate Sump cost
  const sumpCost = sump * 17;

  // Total Estimated Cost
  const totalAdditionalCosts = Object.values(additionalCosts).reduce(
    (acc, cost) => acc + parseFloat(cost),
    0
  );
  const totalEstimatedCost =
    estimatedCost + floorHeightCost + sumpCost + totalAdditionalCosts;
  const costs = {
    designFees: 0.01 * estimatedCost,
    excavation: 0.03 * estimatedCost,
    sand: 0.04 * estimatedCost,
    steelReinforcement: 0.14 * estimatedCost,
    cement: 0.08 * estimatedCost,
    solidBlocks: 0.09 * estimatedCost,
    stones: 0.05 * estimatedCost,
    rmc: 0.09 * estimatedCost,
    formwork: 0.03 * estimatedCost,
    painting: 0.06 * estimatedCost,
    plumbing: 0.07 * estimatedCost,
    electricalWork: 0.05 * estimatedCost,
    exteriorFlooring: 0.05 * estimatedCost,
    compoundWall: 0.04 * estimatedCost,
    doorsWindows: 0.03 * estimatedCost,
    miscellaneous: 0.07 * estimatedCost,
    internalFlooring: 0.07 * estimatedCost,
    floorHeightCost: floorHeightCost,
    sumpCost: sumpCost,
    ...additionalCosts,
  };
  const scheduleData = [
    {
      title: "Design & Development",
      items: [
        "2D & 3D - Floor Plans",
        "Detailed presentation of the floor plan with holes in visualization.",
        "3D Elevation Design",
        "Standard 3D Walkthrough Video",
        "Architectural Services",
        "Soil Testing + Structure",
        "MEP Design",
      ],
      percentage: 1,
      price: 0.01 * totalEstimatedCost,
    },
    {
      title: "Civil Construction: (Upto Plinth Level)",
      items: [
        "Excavation",
        "Foundation",
        "Plinth Level",
        "Termite Treatment",
        "PCC",
      ],
      percentage: 20,
      price: 0.2 * totalEstimatedCost,
    },
    {
      title: "Civil Construction: (Upto Terrace Level)",
      items: ["Beams, Column & Slabs For All Floors"],
      percentage: 30,
      price: 0.3 * totalEstimatedCost,
    },
    {
      title: "Civil Construction: (Upto Plastering)",
      items: [
        "Walls",
        "Electrical Wiring",
        "Plumbing",
        "Plastering",
        "Tile Laying",
        "Door & Windows Installation",
        "Painting Work",
      ],
      percentage: 20,
      price: 0.2 * totalEstimatedCost,
    },
    {
      title: "Civil Construction: (Fixtures Installation)",
      items: ["Toilet Fixtures", "Electrical Fixtures"],
      percentage: 15,
      price: 0.15 * totalEstimatedCost,
    },
    {
      title: "Civil Construction: (Upto Metal Works)",
      items: ["Window Grills", "Railings", "Snag List Rectification"],
      percentage: 10,
      price: 0.1 * totalEstimatedCost,
    },
    {
      title: "Handover",
      items: ["Keys Handover", "Documents"],
      percentage: 4,
      price: 0.04 * totalEstimatedCost,
    },
  ];
  const handleAddField = (e) => {
    e.preventDefault();
    if (newField && newAmount) {
      setAdditionalCosts((prev) => ({
        ...prev,
        [newField]: parseFloat(newAmount),
      }));
      setNewField("");
      setNewAmount("");
    }
  };

  const handleEditField = (field) => {
    setEditField(field);
    setEditAmount(additionalCosts[field]);
  };

  const handleUpdateField = (e) => {
    e.preventDefault();
    if (editField && editAmount) {
      setAdditionalCosts((prev) => ({
        ...prev,
        [editField]: parseFloat(editAmount),
      }));
      setEditField(null);
      setEditAmount("");
    }
  };
  const handleDeleteField = (field) => {
    const updatedCosts = { ...additionalCosts };
    delete updatedCosts[field];
    setAdditionalCosts(updatedCosts);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background  w-full h-full font-giloryM">
      <div className={`items-center w-full bg-layoutColor md:p-2 h-auto my-10`}>
        <h2 className="text-white font-bold text-2xl mb-6 text-center">
          Cost Breakdown Details
        </h2>
        <div className="bg-layoutColor rounded-lg mt-4 md:pr-4 px-2">
          <div className="flex justify-between relative mb-1">
            <span className=" text-white">Design Fees</span>
            <span className="text-white absolute right-40 md:right-40 ">
              1%
            </span>
            <span className="text-white absolute right-[0%] md:right-0">
              ₹{designFees.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between relative mb-1">
            <span className=" text-white">Excavation</span>
            <span className="text-white absolute right-40 md:right-40 ">
              3%
            </span>
            <span className="text-white absolute right-[0%] md:right-0">
              ₹{excavation.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between relative mb-1">
            <span className=" text-white">Sand</span>
            <span className="text-white absolute right-40 md:right-40 ">
              4%
            </span>
            <span className="text-white absolute right-[0%] md:right-0">
              ₹{sand.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between relative mb-1">
            <span className=" text-white">Steel Reinforcement</span>
            <span className="text-white absolute right-40 md:right-40">
              14%
            </span>
            <span className="text-white absolute right-[0%] md:right-0">
              ₹{steelReinforcement.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between relative mb-1">
            <span className=" text-white">Cement</span>
            <span className="text-white absolute right-40 md:right-40 ">
              8%
            </span>
            <span className="text-white absolute right-[0%] md:right-0">
              ₹{cement.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between relative mb-1">
            <span className=" text-white">Solid Blocks</span>
            <span className="text-white absolute right-40 md:right-40 ">
              9%
            </span>
            <span className="text-white absolute right-[0%] md:right-0">
              ₹{solidBlocks.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between relative mb-1">
            <span className=" text-white">Stones</span>
            <span className="text-white absolute right-40 md:right-40 ">
              5%
            </span>
            <span className="text-white absolute right-[0%] md:right-0">
              ₹{stones.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between relative mb-1">
            <span className=" text-white">RMC</span>
            <span className="text-white absolute right-40 md:right-40 ">
              9%
            </span>
            <span className="text-white absolute right-[0%] md:right-0">
              ₹{rmc.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between relative mb-1">
            <span className=" text-white">Formwork</span>
            <span className="text-white absolute right-40 md:right-40 ">
              3%
            </span>
            <span className="text-white absolute right-[0%] md:right-0">
              ₹{formwork.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between relative mb-1">
            <span className=" text-white">Painting</span>
            <span className="text-white absolute right-40 md:right-40 ">
              6%
            </span>
            <span className="text-white absolute right-[0%] md:right-0">
              ₹{painting.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between relative mb-1">
            <span className=" text-white">Plumbing</span>
            <span className="text-white absolute right-40 md:right-40 ">
              7%
            </span>
            <span className="text-white absolute right-[0%] md:right-0">
              ₹{plumbing.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between relative mb-1">
            <span className=" text-white">Electrical Work</span>
            <span className="text-white absolute right-40 md:right-40 ">
              5%
            </span>
            <span className="text-white absolute right-[0%] md:right-0">
              ₹{electricalWork.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between relative mb-1">
            <span className=" text-white">Exterior Flooring</span>
            <span className="text-white absolute right-40 md:right-40 ">
              5%
            </span>
            <span className="text-white absolute right-[0%] md:right-0">
              ₹{exteriorFlooring.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between relative mb-1">
            <span className=" text-white">Compound Wall</span>
            <span className="text-white absolute right-40 md:right-40 ">
              4%
            </span>
            <span className="text-white absolute right-[0%] md:right-0">
              ₹{compoundWall.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between relative mb-1">
            <span className=" text-white">Doors & Windows</span>
            <span className="text-white absolute right-40 md:right-40 ">
              3%
            </span>
            <span className="text-white absolute right-[0%] md:right-0">
              ₹{doorsWindows.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between relative mb-1">
            <span className=" text-white">Miscellaneous</span>
            <span className="text-white absolute right-40 md:right-40 ">
              7%
            </span>
            <span className="text-white absolute right-[0%] md:right-0">
              ₹{miscellaneous.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between relative mb-1">
            <span className=" text-white">Internal Flooring</span>
            <span className="text-white absolute right-40 md:right-40 ">
              7%
            </span>
            <span className="text-white absolute right-[0%] md:right-0">
              ₹{internalFlooring.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between relative mb-1">
            <span className=" text-white">Floor Height Cost</span>
            <span className="text-white absolute right-[0%] md:right-0">
              ₹{floorHeightCost.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between relative mb-1">
            <span className=" text-white">Sump Cost</span>
            <span className="text-white absolute right-[0%] md:right-0">
              ₹{sumpCost.toFixed(2)}
            </span>
          </div>
          {Object.keys(additionalCosts).map((key) => (
            <div key={key} className="flex relative justify-between py-2">
              <span className="text-white">{key}</span>
              <span className="text-white absolute right-[0%] md:right-0">
                ₹{additionalCosts[key].toFixed(2)}
              </span>
              <div className="flex flex-row absolute right-36">
                <button
                  onClick={() => handleEditField(key)}
                  className="text-blue-500 mr-3"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteField(key)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          <form
            onSubmit={editField ? handleUpdateField : handleAddField}
            className="mt-4"
          >
            <p className="text-xs mb-2 text-left italic">
              (*add-ons like lift, garden etc...)
            </p>
            <div className="flex flex-col-1 justify-between mb-2 md:px-0 relative">
              <input
                type="text"
                placeholder="Name"
                value={editField || newField}
                onChange={(e) =>
                  editField
                    ? setEditField(e.target.value)
                    : setNewField(e.target.value)
                }
                className="px-3 pb-1 border border-gray-300 rounded-lg w-32 md:w-40 bg-inherit h-10 text-white"
                required
              />
              <input
                type="number"
                placeholder="Amount"
                value={editField ? editAmount : newAmount}
                onChange={(e) =>
                  editField
                    ? setEditAmount(e.target.value)
                    : setNewAmount(e.target.value)
                }
                className="absolute px-3 pb-1 border border-gray-300 rounded-lg w-32 md:w-40 bg-inherit h-10 text-white left-36 md:left-48"
                required
              />
              <button
                type="submit"
                className="px-4 md:px-8 bg-primary text-white rounded-lg w-auto h-10"
              >
                {editField ? "Update" : "Add"}
              </button>
            </div>
          </form>
          <hr className="border-1 border-[#7c7c7c] mt-6" />
          <div className="flex justify-between relative mb-1 m-1 py-4 font-giloryB">
            <span className="text-lg text-white">Total Estimated Cost</span>
            <span className="text-white text-lg absolute right-[0%] md:right-0">
              ₹{totalEstimatedCost.toFixed(2)}
            </span>
          </div>
          <hr className="border-1 border-[#7c7c7c]" />
        </div>
        <br />
        <div className="flex flex-col justify-center items-center my-10">
          <PieChart1 costs={costs} />
        </div>
        <PaymentSchedule scheduleData={scheduleData} />
      </div>
    </div>
  );
}

export default DetailedReport;
