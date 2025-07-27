import React from "react";

const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
  multiline = false,
  rows = 4,
  required = false,
}) => {
  const inputClasses = `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
    error && touched ? "border-red-500" : "border-gray-300"
  }`;

  const checkboxClasses = "h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500";

  return (
    <div className="mb-6">
      {type === "checkbox" ? (
        <label className="inline-flex items-center space-x-2">
          <input
            type="checkbox"
            id={name}
            name={name}
            checked={value}
            onChange={onChange}
            onBlur={onBlur}
            className={checkboxClasses}
          />
          <span className="text-sm font-medium text-gray-700">
            {label} {required && <span className="text-red-500">*</span>}
          </span>
        </label>
      ) : (
        <>
          <label htmlFor={name} className="block text-sm font-medium mb-2">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          {multiline ? (
            <textarea
              name={name}
              id={name}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              rows={rows}
              className={inputClasses}
            />
          ) : (
            <input
              type={type}
              id={name}
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              className={inputClasses}
            />
          )}
        </>
      )}

      {error && touched && (
        <p className="text-red-500 mt-1 text-sm">{error}</p>
      )}
    </div>
  );
};

export default Input;
