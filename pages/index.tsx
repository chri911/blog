import Layout from '../components/Layout';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts } from '../components/redux/actions';
import { RootState } from '../components/redux/store';
import Router from 'next/router';
import {
  Title,
  Cards,
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardText,
  CardLink,
  CardButton,
} from '../components/Styles';

export default function Home() {
  const dispatch = useDispatch();

  const state = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleClick = () => {
    Router.push('/posts/new');
  };

  return (
    <Layout home title="Blog">
      <section>
        <Title>Posts</Title>
        <Cards>
          {state.map((post) => (
            <CardWrapper key={post.id}>
              <CardHeader>
                <CardHeading>{post.title}</CardHeading>
              </CardHeader>
              <CardBody>
                <CardText>{post.body}</CardText>
                <Link href={`/posts/[postId]`} as={`/posts/${post.id}`}>
                  <CardLink>go to the Post page</CardLink>
                </Link>
              </CardBody>
            </CardWrapper>
          ))}
        </Cards>
        <CardButton onClick={handleClick}>Add new post</CardButton>
      </section>
    </Layout>
  );
}
