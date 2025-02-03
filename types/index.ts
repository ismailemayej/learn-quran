import { SVGProps } from "react";
export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface User {
  _id: string;
  name: string;
  email: string;
  isApproved: boolean;
}
export interface RegistrationFormData {
  fullName: string;
  education: string;
  currentStatus: string;
  qualification: string;
  year: string;
  courseName: string;
  gender: string;
  phone: string;
  email: string;
  password: string;
}
export interface FormErrors {
  fullName: string;
  education: string;
  currentStatus: string;
  qualification: string;
  year: string;
  courseName: string;
  gender: string;
  phone: string;
  email: string;
  password: string;
}
