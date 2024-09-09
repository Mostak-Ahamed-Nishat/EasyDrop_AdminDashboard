import ButtonFill from "@/components/ButtonFill";
import ButtonOutline from "@/components/ButtonOutline";
import { useState } from "react";

function CreateAnnouncementPage() {
  const [announcement, setAnnouncement] = useState("");
  console.log(announcement);

  return (
    <>
      <h1>Announcement Create</h1>
      <div className="p-4">
        <textarea
          name="query"
          className="w-full border-gray-300 border p-4 focus:border-gray-300 focus:outline-none"
          placeholder="Create Announcement"
          onChange={(e) => setAnnouncement(e.target.value)}
        />
        <div>
          <ButtonOutline label="Cancle" />
          <ButtonFill label="Create" />
          <ButtonFill label="Publish" color="bg-[#33CF3A] hover:bg-[#33CF3A]" />
        </div>
      </div>
    </>
  );
}

export default CreateAnnouncementPage;
