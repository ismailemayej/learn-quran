import { SVGProps } from "react";
export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}
export interface UserInfo {
  courseName: string;
  currentStatus: string;
  education: string;
  email: string;
  fullName: string;
  gender: string;
  password: string;
  phone: string;
  qualification: string;
  role: string;
  year: string;
  batch?: string;
  approve?: boolean;
  studentId?: string;
  maritalstatus?: string;
  success?: boolean;

  message?: string;
}
export interface FormErrors {
  fullName?: string;
  education?: string;
  currentStatus?: string;
  courseName?: string;
  phone?: string;
  email?: string;
  password?: string;
  gender?: string;
  year?: string;
  batch?: string;
  qualification?: string;
  maritalstatus?: string;
}
