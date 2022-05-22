/**
 * type definitions
 */

import { ReactNode } from 'react';

export type AnchorButtonProps = {
  buttonText: string;
  className?: string;
  href?: string;
  onClick?: (e: any) => void;
  type: string;
};

export type StepProps = {
  stepNumber: string;
  stepHeading: string;
  children: string;
  type?: string;
  image: string;
  altText: string;
};

export type SectionHeadingProps = {
  heading: string;
  subheading: string;
};

export type CardProps = {
  id: number;
  image: string;
  coverage: string;
  title: string;
  attributes: string[];
  range: number[];
  risk: number;
};

export type Module = {
  id: number;
  title: string;
  selectedCoverage: number;
  price: number;
};

export type ContextObject = {
  isCartEmpty: boolean;
  modulesInCart: Module[];
  addToCart: (module: Module) => void;
  removeFromCart: (id: number) => void;
};

export type Option = {
  value: number;
  label: string;
};

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};
