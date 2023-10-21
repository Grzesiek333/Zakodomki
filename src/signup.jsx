import supabase from "./services/supabase";

export default function SignUp() {
  async function onSignUp(e) {
    e.preventDefault();

    const formElements = e.currentTarget.elements;
    console.log(formElements);

    let { data, error } = await supabase.auth.signUp({
      email: formElements[0].value,
      password: formElements[1].value,
    });

    if (!error) {
      console.log("user created successfully");
      console.log(data);
      return;
    }

    console.error("something went wrong", error);
  }

  return (
    <form onSubmit={onSignUp}>
      <input placeholder="email" />
      <input placeholder="password" type="password" />
      <button>Sign up</button>
    </form>
  );
}
