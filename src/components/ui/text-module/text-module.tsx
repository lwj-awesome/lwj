"use client";

import { ReactNode } from "react";
import styles from "./text.module.css";
import { CommonComponentsProps } from "@/types/types";

export type TextProps = {
  children: ReactNode;
  as?: "p" | "h1" | "h2" | "h3";
  size?: "sm" | "base" | "lg" | "xl" | "size_2xl";
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

function Title({
  children,
  className,
}: CommonComponentsProps & { className?: string }) {
  return (
    <Text
      as="h1"
      type="title"
      weight="bold"
      size="size_2xl"
      className={className}
    >
      {children}
    </Text>
  );
}
function SubTitle({
  children,
  className,
}: CommonComponentsProps & { className?: string }) {
  return (
    <Text as="h2" type="title" className={className} weight="bold" size="lg">
      {children}
    </Text>
  );
}
function HeaderText({
  children,
  className,
}: CommonComponentsProps & { className?: string }) {
  return (
    <Text
      as="h3"
      type="title"
      className={className}
      weight="medium"
      size="base"
    >
      {children}
    </Text>
  );
}
function Description({
  children,
  className,
}: CommonComponentsProps & { className?: string }) {
  return (
    <Text as="p" type="description" className={className} size="base">
      {children}
    </Text>
  );
}
function MarqueeText({
  children,
  className,
}: CommonComponentsProps & { className?: string }) {
  return (
    <Text as="h2" type="description" className={className} size="size_2xl">
      {children}
    </Text>
  );
}

Text.title = Title;
Text.subTitle = SubTitle;
Text.description = Description;
Text.header = HeaderText;
Text.marquee = MarqueeText;
