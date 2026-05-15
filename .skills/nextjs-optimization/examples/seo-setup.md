### Example 1: SEO Setup
**User Input**:
> "Make sure my blog posts are SEO friendly."

**Reasoning**:
Dynamic blog posts need dynamic metadata based on the post content.

**Action/Output**:
```typescript
import { Metadata } from 'next';

type Props = {
  params: { slug: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);
  
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      images: [post.coverImage],
    },
  };
}

export default function BlogPost({ params }: Props) {
  // ... render ...
}
```
