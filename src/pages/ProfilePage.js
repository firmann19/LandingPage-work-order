import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { postData, putData } from "../utils/fetch";
import { setNotif } from "../redux/notif/actions";
import ProfileInput from "../components/ProfileInput";
import Navbar from "../components/Navbar";

const ProfilePage = () => {
  const {userId} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    avatar: ""
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
      role: form.name
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
  }

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="judul-settings">
        <h1>Settings</h1>
      </div>
      <ProfileInput />
    </>
  );
};

export default ProfilePage;
