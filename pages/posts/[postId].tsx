import axios from 'axios';
import Layout from '../../components/Layout';
import { GetServerSideProps, NextPage } from 'next';
import styled from 'styled-components';

interface Props {
  postData: {
    body: string;
    title: string;
    id: number;
  };
}

const Post: NextPage<Props> = ({ postData }) => {
  const Title = styled.h1`
    font-size: 2.5em;
    text-align: center;
    color: #0a0b0c;
  `;

  const Wrapper = styled.section`
    padding: 2em;
  `;

  const Content = styled.div`
    font-size: 1.5em;
    color: rgb(115, 138, 148);
    font-weight: 300;
    width: 100%;
    height: 100%;
    background: papayawhip;
    border-radius: 10px;
    padding: 20px 15px;
  `;

  return (
    <Layout title="Post">
      <Wrapper>
        <Title>{postData.title}</Title>
        <Content>{postData.body}</Content>
      </Wrapper>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get(
    `https://simple-blog-api.crew.red/posts/${context.query.postId}`,
  );
  const postData = response.data;

  return {
    props: {
      postData,
    },
  };
};

export default Post;
