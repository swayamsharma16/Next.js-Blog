import { getPostMetaData } from '../../utils/getPostMetaData';
import PostPreviews from '../../components/PostPreview';

const HomePage = () => {
  const postMetadata = getPostMetaData();
  const postPreviews = postMetadata.map((post) => (
    <PostPreviews key={post.slug} {...post} />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
      {postPreviews}</div>
  );
};

export default HomePage;



