import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ButtonOutline from "@/components/ButtonOutline";
import ButtonFill from "@/components/ButtonFill";

function TokenCreatePage() {
  // Values
  const [formData, setFormData] = useState({
    userId: "",
    phoneNumber: "",
    subject: "",
    service: "",
    priority: "",
    message: "",
  });

  // Handle input changes for all form fields
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle select field changes for service and priority
  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Log form data
    console.log(formData);

    // Clear form
    setFormData({
      userId: "",
      phoneNumber: "",
      subject: "",
      service: "",
      priority: "",
      message: "",
    });
  };

  return (
    <div className="w-4/5">
      <h1 className="font-bold text-lg my-8">Open Ticket</h1>
      <form onSubmit={handleSubmit}>
        {/* User ID and Phone Number */}
        <div className="grid grid-cols-2 gap-10">
          <span>
            <Label htmlFor="user_id">User ID</Label>
            <Input
              className="my-2"
              placeholder="User ID"
              name="userId"
              id="user_id"
              value={formData.userId}
              onChange={handleChange}
            />
          </span>
          <span>
            <Label htmlFor="phone_number">Phone Number</Label>
            <Input
              className="my-2"
              placeholder="Phone Number"
              name="phoneNumber"
              id="phone_number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </span>
        </div>

        {/* Subject */}
        <div className="mt-8">
          <Label htmlFor="subject">Subject</Label>
          <Input
            placeholder="Subject"
            className="my-2"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        {/* Related Services & Priority */}
        <div className="grid grid-cols-2 gap-10 mt-8">
          <span>
            <Label htmlFor="service">Related Service</Label>
            <Select
              onValueChange={(value) => handleSelectChange("service", value)}
            >
              <SelectTrigger className="my-2">
                <SelectValue placeholder="Select Service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </span>

          <span>
            <Label htmlFor="priority">Priority</Label>
            <Select
              onValueChange={(value) => handleSelectChange("priority", value)}
            >
              <SelectTrigger className="my-2">
                <SelectValue placeholder="Select Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </span>
        </div>

        {/* Message */}
        <div className="mt-8">
          <Label htmlFor="message">Message</Label>
          <Textarea
            placeholder="Message"
            name="message"
            id="message"
            className="my-2"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <div className="mt-8 text-right flex justify-end gap-4">
          <Button
            variant="outline"
            className="text-[#139FAD] border-[#139FAD] hover:text-[#139FAD]"
          >
            Cancel
          </Button>
          <ButtonFill label="Submit Ticket" type="submit" />
        </div>
      </form>
    </div>
  );
}

export default TokenCreatePage;
