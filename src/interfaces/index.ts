import { HTMLAttributes, HTMLInputTypeAttribute, InputHTMLAttributes, ReactNode } from "react";
import Input from "../components/Input";
export interface IFood{
    id: number,
    name: string,
    description: string,
    price: number,
    available: boolean,
    image: string
  }
  
export interface IFoodProps{
    food: IFood
    handleDelete: (id: number)=> void
    handleEditFood: (food:IFood)=> void
  }
export interface IHeader{
  openModal: () => void
} 
export interface IAddFood{
  isOpen: boolean
  setIsOpen: ()=> void
  handleAddFood: (food:IFood)=>void
  children?: ReactNode
}
export interface IModal{
  isOpen: boolean
  setIsOpen: ()=> void
  children: ReactNode
}
export interface IInput extends InputHTMLAttributes<HTMLInputElement>{
  name: string
}

export interface IModalEdit{
  isOpen: boolean 
  setIsOpen: () => void
  editingFood: IFood
  handleUpdateFood: (food:IFood) => void
}