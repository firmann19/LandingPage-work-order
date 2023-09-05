/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getData, putData } from "../utils/fetch";
import ProfileInput from "../components/ProfileInput";
import Navbar from "../components/Navbar";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState({
    name: "",
  });

  const [alert] = useState({
    status: false,
    message: "",
    type: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const fetchOneUsers = async () => {
    const res = await getData(`/group/${id}`);

    setForm({
      ...form,
      nama: res.data.data.name,
    });
  };

  useEffect(() => {
    fetchOneUsers();
  }, []);

  const handleChange = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const payload = {
      name: form.name,
    };

    await putData(`/user/${id}`, payload)
      .then((res) => {
        if (res.data.status === true) {
          toast.success(`Berhasil update nama user`);
          navigate("/dashboard");
          setIsLoading(false);
        } else {
          setIsLoading(true);
          alert({
            status: false,
            type: "danger",
            message: "gagal",
          });
        }
      })
      .catch((err) => console.log("ini errror", err));
  };

  return (
    <div className="overflow-auto h-screen">
      <div className="w-full">
        <Navbar />
        <div>
          <h2 className="text-center p-5">Profile Setting</h2>
          <ProfileInput
            form={form}
            isLoading={isLoading}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
