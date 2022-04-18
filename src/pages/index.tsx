import { ReactChild } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export async function getStaticProps(context) {
  const { locale } = context;

  const { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } = process.env;
  const url = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/environments/master/entries/1o0Vx4fDCtAs4MjRUCwJcL?access_token=${CONTENTFUL_ACCESS_TOKEN}&locale=${locale}`;
  const res = await fetch(url);
  const json = await res.json();

  const { content } = json.fields;

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      content,
    },
  };
}

export default function Home({ content }): ReactChild {
  if (content)
    return (
      <article className="prose">{documentToReactComponents(content)}</article>
    );

  return null;
}
