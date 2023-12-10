import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { editPostAPI, getPostDetailAPI } from "../api";
import Form from "../components/Form";
import { IPost } from "../types";

const EditPost = () => {
  const navigate = useNavigate();
  const [markdown, setMarkdown] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const params = useParams();
  const { isLoading, isError, data } = useQuery<IPost>(
    ["post", params.id],
    () => getPostDetailAPI(params.id as string),
  );

  const mutation = useMutation(editPostAPI, {
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
    const code = { title, description: markdown, categories: tags };
    const id = params.id as string;
    console.log(id);
    mutation.mutate({ id, code });
  };

  useEffect(() => {
    if (!isLoading && !isError) {
      console.log(data);
      setTags(data?.categories as string);
      setTitle(data?.title as string);
      setMarkdown(data?.description as string);
    }
  }, [data]);

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

export default EditPost;
