"use client";
import type React from "react";
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  BookOpen,
  Calendar,
  Award,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserDetailsPage = ({ userInfo }: { userInfo: any }) => {
  return (
    <div className=" bangla min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-8">
      <Card className="max-w-4xl mx-auto overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8">
          <div className="flex justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-24 w-24 border-4 lg:text-xl border-white shadow-lg">
                <AvatarImage src={userInfo.avatarUrl} alt={userInfo.fullName} />
                <AvatarFallback>{userInfo.fullName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-3xl font-bold">
                  {userInfo.fullName}
                </CardTitle>
                <p className="text-blue-100">{userInfo.email}</p>
              </div>
            </div>
            <div className="lg:text-xl text-sm">
              <p className=" lg:bg-slate-200 lg:text-blue-800 px-2 py-1 rounded-xl justify-center">
                ID:{userInfo?.studentId}
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-200 pb-2">
                Personal Details
              </h3>
              <div className="space-y-3">
                <InfoItem
                  icon={<User className="text-blue-500" />}
                  label="Full Name"
                  value={userInfo.fullName}
                />
                <InfoItem
                  icon={<Mail className="text-blue-500" />}
                  label="Email"
                  value={userInfo.email}
                />
                <InfoItem
                  icon={<Phone className="text-blue-500" />}
                  label="Phone"
                  value={userInfo.phone}
                />
                <InfoItem
                  icon={<User className="text-blue-500" />}
                  label="Gender"
                  value={userInfo.gender}
                />
                <InfoItem
                  icon={<User className="text-blue-500" />}
                  label="Marital Status"
                  value={userInfo?.maritalstatus}
                />

                <InfoItem
                  icon={<Calendar className="text-blue-500" />}
                  label="Age"
                  value={userInfo.year}
                />
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-indigo-200 pb-2">
                Education Details
              </h3>
              <div className="space-y-3">
                <InfoItem
                  icon={<GraduationCap className="text-indigo-500" />}
                  label="Education"
                  value={userInfo.education}
                />
                <InfoItem
                  icon={<Award className="text-indigo-500" />}
                  label="Qualification"
                  value={userInfo.qualification}
                />
                <InfoItem
                  icon={<BookOpen className="text-indigo-500" />}
                  label="Course Name"
                  value={userInfo.courseName}
                />
                <InfoItem
                  icon={<Calendar className="text-indigo-500" />}
                  label="Batch"
                  value={userInfo.batch}
                />
                <div className="flex items-center space-x-2">
                  <GraduationCap className="text-indigo-500" />
                  <span className="text-gray-700 font-medium">
                    Current Status:
                  </span>
                  <Badge
                    variant="secondary"
                    className="bg-indigo-100 text-indigo-800"
                  >
                    {userInfo.currentStatus}
                  </Badge>
                </div>
              </div>
            </section>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const InfoItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center space-x-2">
    {icon}
    <span className="text-gray-700 font-medium">{label}:</span>
    <span className="text-gray-600">{value}</span>
  </div>
);

export default UserDetailsPage;
