import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";




const Form = props => {
    return (
      <div className="form-list">
        {props.Form.map(member => (
          <div className="team-member" key={member.id}>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    );
  };

  export default Form;