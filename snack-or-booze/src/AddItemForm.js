import React, { useState } from "react";
import "./AddItemForm.css";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import SnackOrBoozeApi from "./Api";
import { useHistory } from "react-router-dom";

/** Form to add a new snack or drink. */
function AddItemForm({ addSnack, addDrink }) {
  const [formData, setFormData] = useState({
    type: "snack",
    id: "",
    name: "",
    description: "",
    recipe: "",
    serve: ""
  });

  const history = useHistory();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const { type, ...data } = formData;
    const newItem = await SnackOrBoozeApi.addItem(type, data);
  
    if (type === "snack") {
      addSnack(s => [...s, newItem]);
    } else {
      addDrink(d => [...d, newItem]);
    }
  
    history.push(`/${type}s`);
  }
  

  return (
    <div className="col-md-6 offset-md-3">
      <h3 className="mt-4">Add a New Item</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="type">Type</Label>
          <Input
            type="select"
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="snack">Snack</option>
            <option value="drink">Drink</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="id">ID</Label>
          <Input
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="recipe">Recipe</Label>
          <Input
            name="recipe"
            value={formData.recipe}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="serve">Serve</Label>
          <Input
            name="serve"
            value={formData.serve}
            onChange={handleChange}
          />
        </FormGroup>
        <Button color="primary">Add Item</Button>
      </Form>
    </div>
  );
}

export default AddItemForm;
