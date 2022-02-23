
import './App.css';
import { useFormik } from "formik";
export default function App() {
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required valid email";
    } else if (values.email.length < 4) {
      errors.email = "Must be 5 characters or more";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Must be 8 characters or more";
    } else if (values.password === "12345678") {
      errors.password = "Can not be 12345678";
    }

    if (!values.confirmpassword) {
      errors.confirmpassword = "Required";
    } else if (values.confirmpassword !== values.password) {
      errors.confirmpassword = "Password do not match";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmpassword: "",
    },
    validate,
    onSubmit: (datas) => {
      alert(JSON.stringify(datas, null, 2));
    },
  });

  return (
    <div className="App">
      <h2>Formik signup</h2>
      <form className="form" onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        <br />
        {formik.touched.email && formik.errors.email ? (
          <div className="err">{formik.errors.email}</div>
        ) : null}

        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        <br />
        {formik.touched.password && formik.errors.password ? (
          <div className="err">{formik.errors.password}</div>
        ) : null}

        <label htmlFor="confirmpassword">Confirm password:</label>
        <br />
        <input
          type="password"
          id="confirmpassword"
          name="confirmpassword"
          onChange={formik.handleChange}
          value={formik.values.confirmpassword}
          onBlur={formik.handleBlur}
        />
        <br />
        {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
          <div className="err">{formik.errors.confirmpassword}</div>
        ) : null}

        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}


