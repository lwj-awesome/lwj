"use client";
import { ReactNode } from "react";
import styles from "./text.module.css";
import { CommonComponentsProps } from "@/types/types";

export type TextProps = {
  children: ReactNode;
  as?: "p" | "h1" | "h2" | "h3";
  size?: "sm" | "base" | "lg" | "xl" | "2xl";
  weight?: "light" | "medium" | "bold";
  type?: "title" | "description";
  className?: string;
};

export default function Text({
  children,
  as = "p",
  size = "base",
  weight = "medium",
  type = "title",
  className = "",
}: TextProps) {
  const Tag = as;
  return (
    <Tag
      className={`
        ${styles.text} 
        ${styles[size]} 
        ${styles[weight]} 
        ${styles[type]} 
        ${className}
      `}
    >
      {children}
    </Tag>
  );
}

function Title({ children }: CommonComponentsProps) {
  return (
    <Text as="h1" type="title" weight="bold" size="2xl">
      {children}
    </Text>
  );
}
function SubTitle({ children }: CommonComponentsProps) {
  return (
    <Text as="h2" type="title" weight="medium" size="xl">
      {children}
    </Text>
  );
}
function HeaderText({ children }: CommonComponentsProps) {
  return (
    <Text as="h3" type="title" weight="medium" size="base">
      {children}
    </Text>
  );
}
function Description({ children }: CommonComponentsProps) {
  return (
    <Text as="p" type="description" size="sm">
      {children}
    </Text>
  );
}

Text.title = Title;
Text.subTitle = SubTitle;
Text.Description = Description;
Text.Header = HeaderText;
