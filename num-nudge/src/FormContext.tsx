import React, { createContext, useState, useContext, ReactNode } from 'react';

type FormData = {
  studentName: string;
  parentName: string;
  email: string;
  phoneNumber: string;
  age: string;
  experienceLevel: string;
  questionsFeedback: string;
  termsChecked: boolean;
};

type FormContextType = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    studentName: '',
    parentName: '',
    email: '',
    phoneNumber: '',
    age: '',
    experienceLevel: '',
    questionsFeedback: '',
    termsChecked: false,
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};