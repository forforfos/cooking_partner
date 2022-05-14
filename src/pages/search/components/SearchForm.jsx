import { useState } from "react";
import MultipleValueTextInput from 'react-multivalue-text-input';
import styled from "@emotion/styled";

const Form = styled('form')`
  width: 50%;
  float: right;

  & .multiple-value-text-input label {
    display: flex;

    .multiple-value-text-input-item-container {
      height: 300px;
    }

    & input {
      height: 30px;
      border-radius: 30px;
      text-align: right;
    }
  }
`;

const SearchForm = () => {
  const [ingredients, setIngredients] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_COOKMEISTER_URL}/search`
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        ingredients: [ingredients],
      }),
    };

    fetch(url, options)
      .then(response => response.json())
      .then(data => console.log(data));

    // console.log(response.json());
  }

  const handleIngredientAddition = (item) => {
    setIngredients([ ...ingredients, item ])
  }

  const handleIngredientDeletion = (item) => {
    setIngredients(ingredients.filter(ingredient => ingredient !== item))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <MultipleValueTextInput onItemDeleted={handleIngredientDeletion} onItemAdded={handleIngredientAddition}></MultipleValueTextInput>
      <input type="submit"/>
    </Form>
  );
};

export default SearchForm;
