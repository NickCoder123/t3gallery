import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/aaeadd19-ce7a-469c-8d6b-1365f94e9b4d-2dkq.png",
  "https://utfs.io/f/0d65e418-3aeb-4e55-b771-bf783c8d1978-tpk6wk.com_wallpaper.jpg",
  "https://utfs.io/f/48601eca-114f-434c-8d76-85748f7f2ee1-1txbs.jpg",
  "https://utfs.io/f/7e03e478-e527-417c-aa99-94a2419d66a1-1d.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.images.findMany();

  console.log(posts);

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
