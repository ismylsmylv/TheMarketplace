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
      <section>category brand postername condition delivery</section>
      <section>city price barter</section> <section> description</section>
      <section>name email phone</section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <form.Field
          name="category"
          validators={{
            onChange: ({ value }) =>
              value > 13 ? undefined : "Must be 13 or older",
          }}
        >
          {(field) => (
            <>
              <input
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                type="number"
                onChange={(e) => field.handleChange(e.target.valueAsNumber)}
              />
              {!field.state.meta.isValid && (
                <em>{field.state.meta.errors.join(", ")}</em>
              )}
            </>
          )}
        </form.Field>
        <form.Field
          name="brand"
          validators={{
            onChange: ({ value }) =>
              value != "" ? undefined : "Must be 13 or older",
          }}
        >
          {(field) => (
            <>
              <input
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                type="number"
                onChange={(e) => field.handleChange(e.target.valueAsNumber)}
              />
              {!field.state.meta.isValid && (
                <em>{field.state.meta.errors.join(", ")}</em>
              )}
            </>
          )}
        </form.Field>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default NewPoster;
