import type {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import FileUpload from "../../components/FileUpload";
import { fields, headings } from "./mockdata";
import "./style.scss";
import {
  FieldApi,
  useForm,
  type FieldAsyncValidateOrFn,
  type FieldValidateOrFn,
  type FormAsyncValidateOrFn,
  type FormValidateOrFn,
} from "@tanstack/react-form";

function NewPoster() {
  const form = useForm({
    defaultValues: {
      ownerInfo: {
        name: "",
        email: "",
        phone: "",
      },
      category: "",
      subcategory: "",
      title: "",
      brand: "",
      views: 0,
      condition: "",
      price: 0,
      features: "",
      description: "",
      city: "",
      delivery: false,
      barter: false,
      status: "active",
      media: [],
      createdAt: "",
      offers: [],
      __v: 0,
    },
    onSubmit: async ({ value }) => {
      // test post
      fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  });

  const renderField = (
    item:
      | {
          title: string;
          value?: undefined;
          type?: undefined;
          required?: undefined;
          options?: undefined;
          placeholder?: undefined;
          fullWidth?: undefined;
          rows?: undefined;
          min?: undefined;
          step?: undefined;
        }
      | {
          title: string;
          value: string;
          type: string;
          required: boolean;
          options: { value: string; label: string }[];
          placeholder?: undefined;
          fullWidth?: undefined;
          rows?: undefined;
          min?: undefined;
          step?: undefined;
        }
      | {
          title: string;
          value: string;
          type: string;
          placeholder: string;
          required: boolean;
          options?: undefined;
          fullWidth?: undefined;
          rows?: undefined;
          min?: undefined;
          step?: undefined;
        }
      | {
          title: string;
          value: string;
          type: string;
          placeholder: string;
          required: boolean;
          fullWidth: boolean;
          options?: undefined;
          rows?: undefined;
          min?: undefined;
          step?: undefined;
        }
      | {
          title: string;
          value: string;
          type: string;
          placeholder: string;
          required: boolean;
          fullWidth: boolean;
          rows: number;
          options?: undefined;
          min?: undefined;
          step?: undefined;
        }
      | {
          title: string;
          value: string;
          type: string;
          placeholder: string;
          required: boolean;
          min: number;
          step: number;
          options?: undefined;
          fullWidth?: undefined;
          rows?: undefined;
        }
      | {
          title: string;
          value: string;
          type: string;
          required: boolean;
          options?: undefined;
          placeholder?: undefined;
          fullWidth?: undefined;
          rows?: undefined;
          min?: undefined;
          step?: undefined;
        },
    field: FieldApi<
      {
        ownerInfo: { name: string; email: string; phone: string };
        category: string;
        subcategory: string;
        title: string;
        brand: string;
        views: number;
        condition: string;
        price: number;
        features: string;
        description: string;
        city: string;
        delivery: boolean;
        barter: boolean;
        status: boolean;
        media: never[];
        createdAt: string;
        offers: never[];
        __v: number;
      },
      any,
      any,
      | FieldValidateOrFn<
          {
            ownerInfo: { name: string; email: string; phone: string };
            category: string;
            subcategory: string;
            title: string;
            brand: string;
            views: number;
            condition: string;
            price: number;
            features: string;
            description: string;
            city: string;
            delivery: boolean;
            barter: boolean;
            status: boolean;
            media: never[];
            createdAt: string;
            offers: never[];
            __v: number;
          },
          any,
          any
        >
      | undefined,
      ({
        value,
      }: {
        value: any;
        fieldApi: FieldApi<
          {
            ownerInfo: { name: string; email: string; phone: string };
            category: string;
            subcategory: string;
            title: string;
            brand: string;
            views: number;
            condition: string;
            price: number;
            features: string;
            description: string;
            city: string;
            delivery: boolean;
            barter: boolean;
            status: boolean;
            media: never[];
            createdAt: string;
            offers: never[];
            __v: number;
          },
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any,
          any
        >;
      }) => string | undefined,
      | FieldAsyncValidateOrFn<
          {
            ownerInfo: { name: string; email: string; phone: string };
            category: string;
            subcategory: string;
            title: string;
            brand: string;
            views: number;
            condition: string;
            price: number;
            features: string;
            description: string;
            city: string;
            delivery: boolean;
            barter: boolean;
            status: boolean;
            media: never[];
            createdAt: string;
            offers: never[];
            __v: number;
          },
          any,
          any
        >
      | undefined,
      | FieldValidateOrFn<
          {
            ownerInfo: { name: string; email: string; phone: string };
            category: string;
            subcategory: string;
            title: string;
            brand: string;
            views: number;
            condition: string;
            price: number;
            features: string;
            description: string;
            city: string;
            delivery: boolean;
            barter: boolean;
            status: boolean;
            media: never[];
            createdAt: string;
            offers: never[];
            __v: number;
          },
          any,
          any
        >
      | undefined,
      | FieldAsyncValidateOrFn<
          {
            ownerInfo: { name: string; email: string; phone: string };
            category: string;
            subcategory: string;
            title: string;
            brand: string;
            views: number;
            condition: string;
            price: number;
            features: string;
            description: string;
            city: string;
            delivery: boolean;
            barter: boolean;
            status: boolean;
            media: never[];
            createdAt: string;
            offers: never[];
            __v: number;
          },
          any,
          any
        >
      | undefined,
      | FieldValidateOrFn<
          {
            ownerInfo: { name: string; email: string; phone: string };
            category: string;
            subcategory: string;
            title: string;
            brand: string;
            views: number;
            condition: string;
            price: number;
            features: string;
            description: string;
            city: string;
            delivery: boolean;
            barter: boolean;
            status: boolean;
            media: never[];
            createdAt: string;
            offers: never[];
            __v: number;
          },
          any,
          any
        >
      | undefined,
      | FieldAsyncValidateOrFn<
          {
            ownerInfo: { name: string; email: string; phone: string };
            category: string;
            subcategory: string;
            title: string;
            brand: string;
            views: number;
            condition: string;
            price: number;
            features: string;
            description: string;
            city: string;
            delivery: boolean;
            barter: boolean;
            status: boolean;
            media: never[];
            createdAt: string;
            offers: never[];
            __v: number;
          },
          any,
          any
        >
      | undefined,
      | FieldValidateOrFn<
          {
            ownerInfo: { name: string; email: string; phone: string };
            category: string;
            subcategory: string;
            title: string;
            brand: string;
            views: number;
            condition: string;
            price: number;
            features: string;
            description: string;
            city: string;
            delivery: boolean;
            barter: boolean;
            status: boolean;
            media: never[];
            createdAt: string;
            offers: never[];
            __v: number;
          },
          any,
          any
        >
      | undefined,
      | FieldAsyncValidateOrFn<
          {
            ownerInfo: { name: string; email: string; phone: string };
            category: string;
            subcategory: string;
            title: string;
            brand: string;
            views: number;
            condition: string;
            price: number;
            features: string;
            description: string;
            city: string;
            delivery: boolean;
            barter: boolean;
            status: boolean;
            media: never[];
            createdAt: string;
            offers: never[];
            __v: number;
          },
          any,
          any
        >
      | undefined,
      | FormValidateOrFn<{
          ownerInfo: { name: string; email: string; phone: string };
          category: string;
          subcategory: string;
          title: string;
          brand: string;
          views: number;
          condition: string;
          price: number;
          features: string;
          description: string;
          city: string;
          delivery: boolean;
          barter: boolean;
          status: boolean;
          media: never[];
          createdAt: string;
          offers: never[];
          __v: number;
        }>
      | undefined,
      | FormValidateOrFn<{
          ownerInfo: { name: string; email: string; phone: string };
          category: string;
          subcategory: string;
          title: string;
          brand: string;
          views: number;
          condition: string;
          price: number;
          features: string;
          description: string;
          city: string;
          delivery: boolean;
          barter: boolean;
          status: boolean;
          media: never[];
          createdAt: string;
          offers: never[];
          __v: number;
        }>
      | undefined,
      | FormAsyncValidateOrFn<{
          ownerInfo: { name: string; email: string; phone: string };
          category: string;
          subcategory: string;
          title: string;
          brand: string;
          views: number;
          condition: string;
          price: number;
          features: string;
          description: string;
          city: string;
          delivery: boolean;
          barter: boolean;
          status: boolean;
          media: never[];
          createdAt: string;
          offers: never[];
          __v: number;
        }>
      | undefined,
      | FormValidateOrFn<{
          ownerInfo: { name: string; email: string; phone: string };
          category: string;
          subcategory: string;
          title: string;
          brand: string;
          views: number;
          condition: string;
          price: number;
          features: string;
          description: string;
          city: string;
          delivery: boolean;
          barter: boolean;
          status: boolean;
          media: never[];
          createdAt: string;
          offers: never[];
          __v: number;
        }>
      | undefined,
      | FormAsyncValidateOrFn<{
          ownerInfo: { name: string; email: string; phone: string };
          category: string;
          subcategory: string;
          title: string;
          brand: string;
          views: number;
          condition: string;
          price: number;
          features: string;
          description: string;
          city: string;
          delivery: boolean;
          barter: boolean;
          status: boolean;
          media: never[];
          createdAt: string;
          offers: never[];
          __v: number;
        }>
      | undefined,
      | FormValidateOrFn<{
          ownerInfo: { name: string; email: string; phone: string };
          category: string;
          subcategory: string;
          title: string;
          brand: string;
          views: number;
          condition: string;
          price: number;
          features: string;
          description: string;
          city: string;
          delivery: boolean;
          barter: boolean;
          status: boolean;
          media: never[];
          createdAt: string;
          offers: never[];
          __v: number;
        }>
      | undefined,
      | FormAsyncValidateOrFn<{
          ownerInfo: { name: string; email: string; phone: string };
          category: string;
          subcategory: string;
          title: string;
          brand: string;
          views: number;
          condition: string;
          price: number;
          features: string;
          description: string;
          city: string;
          delivery: boolean;
          barter: boolean;
          status: boolean;
          media: never[];
          createdAt: string;
          offers: never[];
          __v: number;
        }>
      | undefined,
      | FormValidateOrFn<{
          ownerInfo: { name: string; email: string; phone: string };
          category: string;
          subcategory: string;
          title: string;
          brand: string;
          views: number;
          condition: string;
          price: number;
          features: string;
          description: string;
          city: string;
          delivery: boolean;
          barter: boolean;
          status: boolean;
          media: never[];
          createdAt: string;
          offers: never[];
          __v: number;
        }>
      | undefined,
      | FormAsyncValidateOrFn<{
          ownerInfo: { name: string; email: string; phone: string };
          category: string;
          subcategory: string;
          title: string;
          brand: string;
          views: number;
          condition: string;
          price: number;
          features: string;
          description: string;
          city: string;
          delivery: boolean;
          barter: boolean;
          status: boolean;
          media: never[];
          createdAt: string;
          offers: never[];
          __v: number;
        }>
      | undefined,
      | FormAsyncValidateOrFn<{
          ownerInfo: { name: string; email: string; phone: string };
          category: string;
          subcategory: string;
          title: string;
          brand: string;
          views: number;
          condition: string;
          price: number;
          features: string;
          description: string;
          city: string;
          delivery: boolean;
          barter: boolean;
          status: boolean;
          media: never[];
          createdAt: string;
          offers: never[];
          __v: number;
        }>
      | undefined,
      unknown
    >
  ) => {
    const commonInputClasses =
      "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200";
    const errorClasses = !field.state.meta.isValid
      ? "border-red-500 focus:ring-red-500"
      : "";

    switch (item.type) {
      case "checkbox":
        return (
          <div className="flex items-center space-x-3">
            <input
              id={field.name}
              name={field.name}
              type="checkbox"
              checked={field.state.value}
              onChange={(e) => field.handleChange(e.target.checked)}
              onBlur={field.handleBlur}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor={field.name}
              className="text-sm font-medium text-gray-700 capitalize cursor-pointer"
            >
              {item.title}
            </label>
          </div>
        );

      case "textarea":
        return (
          <textarea
            id={field.name}
            name={field.name}
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            onBlur={field.handleBlur}
            placeholder={
              item.placeholder || `Enter ${item.title.toLowerCase()}`
            }
            rows={item.rows || 4}
            className={`${commonInputClasses} ${errorClasses} resize-vertical`}
          />
        );

      case "select":
        return (
          <select
            id={field.name}
            name={field.name}
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            onBlur={field.handleBlur}
            className={`${commonInputClasses} ${errorClasses}`}
          >
            <option value="">Select {item.title.toLowerCase()}</option>
            {item.options?.map(
              (option: {
                value: Key | readonly string[] | null | undefined;
                label:
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | Promise<
                      | string
                      | number
                      | bigint
                      | boolean
                      | ReactPortal
                      | ReactElement<
                          unknown,
                          string | JSXElementConstructor<any>
                        >
                      | Iterable<ReactNode>
                      | null
                      | undefined
                    >
                  | null
                  | undefined;
              }) => (
                <option key={option.value as Key} value={option.value as any}>
                  {option.label}
                </option>
              )
            )}
          </select>
        );

      default:
        return (
          <input
            id={field.name}
            name={field.name}
            type={item.type}
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            onBlur={field.handleBlur}
            placeholder={
              item.placeholder || `Enter ${item.title.toLowerCase()}`
            }
            className={`${commonInputClasses} ${errorClasses}`}
            min={item.type === "number" ? item.min || 0 : undefined}
            // max={item.type === "number" ? item.max : undefined}
            step={item.type === "number" ? item.step || 1 : undefined}
          />
        );
    }
  };

  return (
    <div className="NewPoster min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Create New Listing
            </h1>
            <p className="text-gray-600">
              Fill in the details to share your item with the community
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
            className="space-y-8"
          >
            {headings.map((section) => (
              <section
                key={section.title}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-300 capitalize">
                  {section.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {fields.slice(section.start, section.end).map((item) => {
                    if (
                      headings.find((element) => element.title === item.title)
                    ) {
                      return null;
                    }

                    return (
                      <form.Field
                        key={item.value}
                        name={item.value as any}
                        validators={{
                          onChange: ({ value }) => {
                            if (
                              item.required !== false &&
                              (!value || value === "")
                            ) {
                              return `${item.title} is required`;
                            }
                            if (item.type === "email" && value) {
                              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                              if (!emailRegex.test(value as string)) {
                                return "Please enter a valid email address";
                              }
                            }
                            if (item.type === "number" && +value < 0) {
                              return `${item.title} cannot be negative`;
                            }
                            return undefined;
                          },
                        }}
                      >
                        {(field) => (
                          <div
                            className={`${
                              item.type === "checkbox" ? "md:col-span-2" : ""
                            } ${item.fullWidth ? "md:col-span-2" : ""}`}
                          >
                            {item.type !== "checkbox" && (
                              <label
                                htmlFor={field.name}
                                className="block text-sm font-medium text-gray-700 mb-2 capitalize"
                              >
                                {item.title}
                                {item.required !== false && (
                                  <span className="text-red-500 ml-1">*</span>
                                )}
                              </label>
                            )}

                            {renderField(item, field as any)}

                            {!field.state.meta.isValid && (
                              <p className="mt-2 text-sm text-red-600 flex items-center">
                                <svg
                                  className="w-4 h-4 mr-1"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                                {field.state.meta.errors.join(", ")}
                              </p>
                            )}
                          </div>
                        )}
                      </form.Field>
                    );
                  })}
                </div>
              </section>
            ))}

            {/* File Upload Section */}
            <section className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-300">
                Photos & Media
              </h2>
              <FileUpload />
              <p className="text-sm text-gray-500 mt-2">
                Add up to 10 photos to showcase your item. First photo will be
                the main image.
              </p>
            </section>

            {/* Terms and Submit */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-start space-x-3 mb-6">
                <svg
                  className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm text-blue-800">
                  By creating this listing, you confirm that you agree with
                  TheMarketplace's{" "}
                  <a href="#" className="underline hover:text-blue-900">
                    User Agreement
                  </a>{" "}
                  and{" "}
                  <a href="#" className="underline hover:text-blue-900">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md hover:shadow-lg"
                >
                  Create Listing
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPoster;
