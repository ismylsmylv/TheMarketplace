import FileUpload from "../../components/FileUpload";
import { fields, headings } from "./mockdata";
import "./style.scss";
import { useForm } from "@tanstack/react-form";

function NewPoster() {
  const form = useForm({
    defaultValues: {
      category: "",
      brand: "",
      postername: "",
      condition: "",
      delivery: "",
      city: "",
      price: "",
      barter: "",
      description: "",
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: async ({ value }) => {
      alert(JSON.stringify(value, null, 2));
    },
  });

  return (
    <div className="NewPoster rounded p-5 container flex items-center justify-center flex-col ">
      <h1 className="text-2xl mb-5">Share new poster</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="flex item-center justify-center flex-col max-w-lg w-full"
      >
        {headings.map((section) => (
          <section className="rounded-lg p-5 mb-4 flex item-center justify-center flex-col w-full">
            {fields.slice(section.start, section.end).map((item) => {
              return (
                <>
                  {headings.find((element) => element.title == item.title) ? (
                    <h1 className="font-semibold text-xl capitalize text-center mb-4">
                      {item.title}
                    </h1>
                  ) : (
                    <form.Field
                      name={
                        item.value as
                          | "category"
                          | "brand"
                          | "postername"
                          | "condition"
                          | "delivery"
                          | "city"
                          | "price"
                          | "barter"
                          | "description"
                          | "name"
                          | "email"
                          | "phone"
                      }
                      validators={{
                        onChange: ({ value }) =>
                          value !== ""
                            ? undefined
                            : `${item.title} is required`,
                      }}
                    >
                      {(field) => (
                        <>
                          <div key={item.title}>
                            <input
                              name={field.name}
                              value={field.state.value}
                              onBlur={field.handleBlur}
                              type={item.type}
                              placeholder={item.title}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                            />
                            <br />
                            {!field.state.meta.isValid && (
                              <em>{field.state.meta.errors.join(", ")}</em>
                            )}
                          </div>
                        </>
                      )}
                    </form.Field>
                  )}
                </>
              );
            })}
          </section>
        ))}

        <FileUpload />

        <div className="warn font-light text-center mb-6 mt-6">
          By sharing a poster, you confirm that you agree with TheMarketplace's
          User Agreement & Privacy Policy.
        </div>
        <button className="py-3 px-6  w-fit self-center rounded" type="submit">
          Post
        </button>
      </form>
    </div>
  );
}

export default NewPoster;
