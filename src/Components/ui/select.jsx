import React, { forwardRef } from 'react'
import { Label } from './label'
import { Separator } from './separator'

export const Select = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div className={`relative ${className}`}>
      <select
        ref={ref}
        className="w-full h-10 pl-3 pr-10 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
        {...props}
      >
        {children}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
        </svg>
      </div>
    </div>
  )
})
Select.displayName = "Select"

export const SelectItem = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <option
      ref={ref}
      className={`block px-4 py-2 text-sm ${className}`}
      {...props}
    >
      {children}
    </option>
  )
})
SelectItem.displayName = "SelectItem"

export const SelectContent = ({ children }) => {
  return <>{children}</>
}

export const SelectTrigger = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div className={`relative ${className}`} ref={ref} {...props}>
      {children}
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
        </svg>
      </div>
    </div>
  )
})
SelectTrigger.displayName = "SelectTrigger"

export const SelectValue = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <span className={`block truncate ${className}`} ref={ref} {...props}>
      {children}
    </span>
  )
})
SelectValue.displayName = "SelectValue"

export default function Component() {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="example-select">Example Select</Label>
        <Select id="example-select">
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </Select>
      </div>
      <Separator />
    </div>
  )
}