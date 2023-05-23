import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { postData, putData } from "../utils/fetch";
import { setNotif } from "../redux/notif/actions";
import ProfileInput from "../components/ProfileInput";
import Navbar from "../components/Navbar";
import SidebarNew from "../components/SidebarNew";

const ProfilePage = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    avatar: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    message: "",
    type: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);

    const payload = {
      image: form.file,
      role: form.name,
    };

    const res = await putData(`/profile/${userId}`, payload);
    if (res?.data?.data) {
      dispatch(
        setNotif(true, "success", `berhasil ubah profile ${res.data.data.name}`)
      );
      navigate("/");
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setAlert({
        ...alert,
        status: true,
        type: "danger",
        message: res.response.data.msg,
      });
    }
  };

  return (
    <div
      className="overflow-auto h-screen"
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <SidebarNew />
      <div className="w-full">
        <Navbar />
        <div>
          <h2 className="text-center p-5">Profile Setting</h2>
          <ProfileInput />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
