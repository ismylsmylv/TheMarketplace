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
    <div className="NewPoster rounded p-5 container">
      <h1>New poster</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        {headings.map((section) => {
          return fields.slice(section.start, section.end).map((item) => {
            return (
              <section>
                {headings.find((element) => element.title == item.title) ? (
                  <h1>{item.title}</h1>
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
                        value !== "" ? undefined : `${item.title} is required`,
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
                            onChange={(e) => field.handleChange(e.target.value)}
                          />
                          {!field.state.meta.isValid && (
                            <em>{field.state.meta.errors.join(", ")}</em>
                          )}
                        </div>
                      </>
                    )}
                  </form.Field>
                )}
              </section>
            );
          });
        })}

        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default NewPoster;
