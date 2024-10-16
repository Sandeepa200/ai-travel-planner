import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AI_PROMPT,
  SelectBudgetList,
  SelectTravelsList,
} from "@/constants/options";
import { chatSession } from "@/service/AIModel";

import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast } from "sonner";

function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };



  const OnGenerateTrip = async() => {
    if (formData?.days > 10) {
      toast.warning("Please enter trip dates less than 10");
      return;
    }

    if (
      !formData?.location ||
      !formData?.budget ||
      !formData?.travelers ||
      !formData?.days
    ) {
      toast.warning("Please fill all the fields");
      return;
    }

    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      formData?.location?.label
    )
      .replace("{totalDays}", formData?.days)
      .replace("{traveler}", formData?.travelers)
      .replace("{budget}", formData?.budget)
      .replace("{totalDays}", formData?.days);
    console.log(FINAL_PROMPT);
    
    const result = await chatSession.sendMessage(FINAL_PROMPT);
    console.log(result?.response?.text());
  }
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10 mb-10">
      <h2 className="font-bold text-3xl">
        Tell us your travel preferences 🏕️🌴
      </h2>

      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a customized itinerary based on your preferences.
      </p>
      <div className="mt-20 flex flex-col gap-9">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is destination of choice?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACES_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("location", v);
              },
            }}
          />
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days are you planning your trip?
          </h2>
          <Input
            placeholder={"Ex.3"}
            type="number"
            onChange={(e) => handleInputChange("days", e.target.value)}
          />
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
            {SelectBudgetList.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("budget", item.title)}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${
                  formData?.budget === item.title
                    ? "shadow-xl border-black"
                    : ""
                }`}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="text-lg font-bold">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">
            Who do you plan on traveling with on your next adventure?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
            {SelectTravelsList.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("travelers", item.people)}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${
                  formData?.travelers === item.people
                    ? "shadow-xl border-black"
                    : ""
                }`}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="text-lg font-bold">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-10 justify-end flex">
        <Button onClick={OnGenerateTrip}>Generate Trip</Button>
      </div>
    </div>
  );
}

export default CreateTrip;
