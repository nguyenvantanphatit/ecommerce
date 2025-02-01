"use client";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function UserDashboard() {

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <div className="p-4 bg-white flex flex-col items-start shadow-md w-64">
        <Link  href="/personal-info">
          <div className="mb-2">Personal Info</div>
        </Link>
        <Link href="/wishlist">
          <div className="mb-2">Favorite Products</div>
        </Link>
        <Link href="/order_history">
          <div className="mb-2">Order History</div>
        </Link>
      </div>
      <div className="flex-grow p-8">
        <PersonalInfo />
      </div>
    </div>
  );
}

const PersonalInfo = () => {
  const initialUserInfo = {
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    phone: "0123456789",
    address: "123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh",
  };

  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [isEditing, setIsEditing] = useState(false);
  const [tempUserInfo, setTempUserInfo] = useState(initialUserInfo);

  useEffect(() => {
    if (isEditing) {
      setTempUserInfo(userInfo);
    }
  }, [isEditing, userInfo]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTempUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserInfo(tempUserInfo);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempUserInfo(userInfo); 
    setIsEditing(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Thông tin cá nhân</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            {Object.entries(tempUserInfo).map(([key, value]) => (
              <div className="grid gap-2" key={key}>
                <Label htmlFor={key}>{key === 'name' ? 'Họ và tên' : key.charAt(0).toUpperCase() + key.slice(1)}</Label>
                <Input
                  id={key}
                  name={key}
                  value={value}
                  onChange={handleChange}
                  placeholder={value}
                  required
                  disabled={!isEditing}
                />
              </div>
            ))}
            {isEditing && (
              <div className="flex items-center gap-4">
                <Button className="w-full" onClick={handleCancel}>
                  Hủy
                </Button>
                <Button type="submit" className="w-full">
                  Lưu thông tin
                </Button>
              </div>
            )}
          </div>
        </form>
        <div className="w-full mt-8">
          {!isEditing && (
            <Button onClick={() => setIsEditing(true)}>
              Chỉnh sửa
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};