import { Link, Form, useLoaderData, redirect, useActionData, useNavigation } from "react-router-dom";
import { loginUser } from "../api";


export function loader({ request }) {
  return new URL(request.url).searchParams.get("message")
}


export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get("email")
  const url = new URL(request.url)
  const params = url.searchParams
  console.log(params)
  const previousLocation = params.get("previousLocation")
  const password = formData.get("password")
  try {
    await loginUser({ email, password })
    localStorage.setItem("loggedIn", true)
    return redirect(previousLocation || "/host")
  } catch (error) {
    return error.message
  }
}

export default function Login() {
  const loaderMessage = useLoaderData()
  const actionMessage = useActionData()
  const { state } = useNavigation()
  const message = actionMessage || loaderMessage

  return (
    <div className="w-full bg-[#FFF7ED] flex justify-center items-center px-[26px]">
      <div className="w-full max-w-[494px]">
        <h1 className="font-bold text-[32px] leading-[24px] text-dark text-center">
          Sign in to your account
        </h1>
        {message && (
          <h2 className="text-red-700 text-lg text-center mt-5">{message}</h2>
        )}
        <Form
          replace
          method="post"
          className="flex flex-col mt-8"
        >
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="border indent-3 border-[#4D4D4D] h-14 rounded-t-[5px] border-opacity-5 bg-white"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border indent-3 border-[#4D4D4D] h-14 rounded-b-[5px] bg-white border-opacity-5"
          />
          <button
            disabled={state === "submitting"}
            className="bg-[#FF8C38] mt-5 py-4 rounded-md font-bold text-white w-full"
          >
            {state === "submitting" ? "submitting" : "Signin"}
          </button>
        </Form>
        <p className="font-medium text-2xl text-dark mt-12">
          Don't have an account?{" "}
          <Link to="signup" className="font-bold text-[#FF8C38]">
            Create one now
          </Link>
        </p>
      </div>
    </div>
  );
}
