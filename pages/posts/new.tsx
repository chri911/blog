import React, { useState, ChangeEvent, FormEvent } from 'react';
import Layout from '../../components/Layout';
import { useDispatch } from 'react-redux';
import { addPost } from '../../components/redux/actions';
import {
  CardButton,
  StyledInput,
  StyledTextarea,
  Title,
} from '../../components/Styles';

const New = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleBodyChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBody(event.target.value);
  };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    dispatch(addPost(title, body));
    setTitle('');
    setBody('');
    setIsAdded(true);
  };

  return (
    <Layout title="Adding new post">
      {!isAdded && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <StyledInput
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            required
          ></StyledInput>
          <label htmlFor="body">Body</label>
          <StyledTextarea
            id="body"
            name="body"
            value={body}
            onChange={handleBodyChange}
            rows="5"
            cols="33"
            required
          ></StyledTextarea>
          <CardButton type="submit">Save</CardButton>
        </form>
      )}
      {isAdded && <Title>Your post was successfully added</Title>}
    </Layout>
  );
};

export default New;
