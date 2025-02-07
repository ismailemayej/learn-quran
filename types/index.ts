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
