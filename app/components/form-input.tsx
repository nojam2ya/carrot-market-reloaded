interface FormInputProps {
  type?: 'text' | 'password' | 'email' | 'submit' | 'reset';
  placeholder?: string;
  required?: boolean;
  errors?: string[];
}

export default function FormInput({
  type = 'text',
  placeholder,
  required,
  errors,
}: FormInputProps) {
  console.log(placeholder);
  return (
    <div className="flex flex-col gap-2">
      <input
        className="
        bg-transparent rounded-md w-full h-10
        focus:outline-none
        ring-1 focus:ring-4 ring-neutral-200 focus:ring-orange-500
        border-none placeholder:text-neutral-400
        transition
        "
        type={type}
        placeholder={placeholder}
        required={required}
      />
      {errors && <pre className="text-red-500 font-medium">{errors.join('\n')}</pre>}
    </div>
  );
}
