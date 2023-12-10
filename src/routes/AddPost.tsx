import React, { useState } from "react";
import { addPostAPI } from "../api";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import Form from "../components/Form";

const AddPost = () => {
  const navigate = useNavigate();
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");

  const mutation = useMutation(addPostAPI, {
    onSuccess: () => {
      setMarkdown("");
      setTitle("");
      navigate("/");
    },
  });
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
  };
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeTags = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTags(e.target.value);
  };

  const onSubmit = async () => {
    mutation.mutate({ title, description: markdown, categories: tags });
  };

  return (
    <Form
      title={title}
      onChangeTitle={onChangeTitle}
      onChange={onChange}
      markdown={markdown}
      tags={tags}
      onChangeTags={onChangeTags}
      onSubmit={onSubmit}
    />
  );
};

export default AddPost;
