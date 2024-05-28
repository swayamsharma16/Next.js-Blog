import { getPostContent } from '../../../../utils/getPostContent';
import Markdown from 'markdown-to-jsx';
import { notFound } from 'next/navigation';
import { getPostMetaData } from '../../../../utils/getPostMetaData';


export const generateStaticParams = async () => {
  const posts = getPostMetaData();
return  posts.map((post ) => ({
  slug: post.slug
}));

};

export default function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = getPostContent(slug);

  if (!post.content) {
    notFound();
  }

  return (
    <div>
      <h1>This is a post: {post.data.title}</h1>
      <article className="prose lg:prose-xl">
      <Markdown>
        {post.content}
      </Markdown>
      </article>
    </div>
  );
}
